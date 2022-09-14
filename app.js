const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const { PORT } = require("./config/env.config");

const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(bodyParser.json());
app.use(cors());

require("./routes/customer.route")(app);

app.listen(PORT, () => {
  console.log(`Service is running on port ${PORT}`);
});

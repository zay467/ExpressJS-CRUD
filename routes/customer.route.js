module.exports = (app) => {
  const Customer = require("../controllers/customer.controller");
  const morgan = require("morgan");
  var router = require("express").Router();

  router.post("/", morgan("tiny"), Customer.create);
  router.get("/", morgan("tiny"), Customer.readAll);
  router.get("/:id", morgan("tiny"), Customer.readOne);
  router.put("/:id", morgan("tiny"), Customer.update);
  router.delete("/:id", morgan("tiny"), Customer.delete);

  app.use("/api/customer", router);
};

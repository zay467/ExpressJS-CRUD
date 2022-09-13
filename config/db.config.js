require("dotenv").config();

module.exports = {
  HOST: process.env.HOST || "localhost",
  USER: process.env.USER || "postgres",
  PASSWORD: process.env.PASSWORD || "postgres",
  DB: process.env.DBNAME,
  dialect: "postgres",
};

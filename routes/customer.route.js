module.exports = (app) => {
  const Customer = require("../controllers/customer.controller");
  const morgan = require("morgan");
  const customerDataValidateSchema = require("../validations/customer.validation");
  var router = require("express").Router();

  router.post("/", morgan("tiny"), customerDataValidateSchema, Customer.create);
  router.get("/", morgan("tiny"), Customer.readAll);
  router.get("/:id", morgan("tiny"), Customer.readOne);
  router.put(
    "/:id",
    morgan("tiny"),
    customerDataValidateSchema,
    Customer.update
  );
  router.delete("/:id", morgan("tiny"), Customer.delete);

  app.use("/api/customer", router);
};

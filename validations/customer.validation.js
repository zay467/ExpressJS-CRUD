const { body } = require("express-validator");

module.exports = [
  body("name")
    .exists({ checkFalsy: true })
    .withMessage("User name is required.")
    .isString()
    .withMessage("User name should be string."),
  body("age").optional().isNumeric().withMessage("Age should be number."),
  body("email").optional().isEmail().withMessage("Provide valid email."),
  body("address").optional().isString(),
  body("phone")
    .exists({ checkFalsy: true })
    .isString()
    .withMessage("Phone number should be string.")
    .isMobilePhone(),
];

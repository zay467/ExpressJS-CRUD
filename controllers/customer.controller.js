const db = require("../models");
const { validationResult } = require("express-validator");
const Customer = db.customer;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  Customer.create(req.body)
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ message: err.message || "Something went wrong." })
    );
};

exports.readAll = (req, res) => {
  Customer.findAll()
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(500).json({ message: err.message || "Something went wrong." })
    );
};

exports.readOne = (req, res) => {
  const id = req.params.id;
  Customer.findByPk(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: "Not Found." });
      }
    })
    .catch((err) =>
      res.status(500).json({ message: err.message || "Something went wrong." })
    );
};

exports.update = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const id = req.params.id;
  Customer.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Customer update successful.",
        });
      } else {
        res.json({
          message: "Customer update failed.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message || "Something went wrong." });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Customer.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Customer delete successful.",
        });
      } else {
        res.json({
          message: "Customer delete failed.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message || "Something went wrong." });
    });
};

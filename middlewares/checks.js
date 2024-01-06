const { check } = require("express-validator");

const checks =
[
  check("marca")
    .notEmpty()
    .withMessage("el campo marca es requerido")
    .isString()
    .withMessage("el campo marca debe ser string"),
  check("modelo")
    .notEmpty()
    .withMessage("el campo modelo es requerido")
    .isString()
    .withMessage("el campo modelo debe ser string"),
  check("color")
    .notEmpty()
    .withMessage("el campo color es requerido")
    .isString()
    .withMessage("el campo color debe ser string"),
  check("cilindrada")
    .notEmpty()
    .withMessage("el campo cilindrada es requerido")
    .isNumeric()
    .withMessage("el campo cilindrada debe ser number"),
];

module.exports = { checks };
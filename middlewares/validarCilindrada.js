const { Bike } = require("../models/motocicletas");

const validarCilindrada = async (req, res, next) =>
{
  const cilindrada = req.body.edad;
  if (cilindrada > 20)
  {
    return res.status(400).json
    ({
      error: "Los centimetros cúbicos de la moto no pueden ser mayor a 1000 cc",
    });
  }
  next();
};

module.exports = validarCilindrada;
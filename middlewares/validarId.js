const { Bike } = require("../models/motocicletas");

const validarId = async (req, res, next) =>
{
  try 
  {
    const buscar = await Bike.findById(req.params.id);
    if (buscar !== null) 
    {
      next();
    }
    else
    {
      res.status(400).json
      ({
        msg: "el id" + req.params.id + "es inválido",
      });
    }
  }
  catch (error)
  {
    res.status(400).json(error);
  }
};

module.exports = { validarId };
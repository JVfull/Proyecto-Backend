const { Bike } = require("../models/motocicletas");

const apiController = 
{ 
  async apiGet(req, res)
  {
    const listadDeMotos = await Bike.find();
    res.status(200).json(listadDeMotos);
  },

  async buscarPorId(req, res) 
  {
    const buscar = await Bike.findById(req.params.id);
    res.status(200).json(buscar);
  },

  async apiPost(req, res)
  {
    try
    {
      const nuevaMotocicleta = new Bike(req.body);
      await nuevaMotocicleta.save();
      res.status(201).json(nuevaMotocicleta);
    }
    catch (error)
    {
      res.status(400).json(error);
    }
  },

  async apiPut(req, res) 
  {
    await Bike.findByIdAndUpdate(req.params.id, req.body);
    const buscar = await Bike.findById(req.params.id);
    res.status(200).json(buscar);
  },

  async apiDelete(req, res)
  {
    await Bike.findByIdAndDelete(req.params.id);
    res.status(204).json({msg: "La motocicleta con el" + req.params.id + " fue eliminada",});
  },
};

module.exports = apiController;
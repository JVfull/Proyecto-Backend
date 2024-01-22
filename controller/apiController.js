const { Bike }  = require("../models/motocicletas");
const   fetch   = require("node-fetch");

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
      const prueba1 = new Bike({ marca: "MarcaPrueba1", modelo: "ModeloPrueba1", color: "Rojo", cilindrada: 800   });
      const prueba2 = new Bike({ marca: "MarcaPrueba2", modelo: "ModeloPrueba2", color: "Azul", cilindrada: 1200  });
      await prueba1.save();
      await prueba2.save();
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
    res.status(204).json({ msg: "La motocicleta con el " + req.params.id + " fue eliminada" });
  },

  async apiExternal(req, res)
  {
    try
    {
      const response = await fetch("https://jsonplaceholder.typicode.com/externalApi");
      const data = await response.json();
      res.status(200).json(data);
    }
    catch (error)
    {
      res.status(500).json({ error: "Error al obtener datos de la API externa" });
    }
  },
};

module.exports = apiController;
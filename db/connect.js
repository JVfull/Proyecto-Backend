const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const connect = async () =>
{
  try 
  {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Base de datos conectada");
  }

  catch (error)
  {
    console.log("Error al conectar base de datos");
  }
};

module.exports = { connect };
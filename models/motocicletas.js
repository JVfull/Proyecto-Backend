const { Schema, model } = require("mongoose");

const schema = new Schema(
{
  marca:
  {
    type:     String,
    required: true,
  },
  modelo:
  {
    type:     String,
    required: true,
  },
  color:
  {
    type:     String,
    required: true,
  },
  img:
  {
    type:     String,
  },
  cilindrada:
  {
    type:     Number,
    required: true,
  },
});

const Bike      = model("Bike", schema);
module.exports  = { Bike };
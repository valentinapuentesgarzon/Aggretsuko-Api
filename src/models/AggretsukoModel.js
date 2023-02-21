const mongoose = require ( 'mongoose');

//Body model collection

const characterSchema = new mongoose.Schema({
  Name: String,
  Type: String,
  Age: Number,
  gender: String,
  Occupation: String,
  Hobbie: String,
  img_url: String
});

//export mongose colelction to use in routes
module.exports=mongoose.model("Characters", characterSchema)

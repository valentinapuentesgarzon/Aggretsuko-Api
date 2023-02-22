const Character = require("../models/AggretsukoModel")


exports.getCharacters = async (req, res) => {
  try {
    const result = await Character.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
}};

exports.getCharacter = async (req, res) => {
  try {
    const result = await Character.findById(req.params.id); //va un id guardado como parametro
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'No existe este personaje' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.postNewCharacter = async (req, res) => {
  try {
    const result = await Character.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.editCharacter = async (req, res) => {
  try{
    const result = await Character.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'No existe este personaje' });

    }
  }catch (err){
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

exports.deleteCharacter = async (req, res) => {
  try{
    const result = await Character.findOneAndDelete({_id: req.params.id});
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'No existe este personaje ' });
    }
  }catch (err){
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

exports.postNewCharacter = async (req, res) => {
  try {
    const result = await Character.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};




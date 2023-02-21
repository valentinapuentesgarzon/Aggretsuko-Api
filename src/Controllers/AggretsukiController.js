const Character = require("../models/AggretsukoModel")


exports.getCharacter = ((req, res) => { //asign function
  Character.find((err, result) => {    // Consulting data base
      if(err) throw new Error(err);
      res.json(result);  // Define & return the result in json
  });
});

exports.postNewCharacter = ((req, res) => {
  Character.create(
    req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

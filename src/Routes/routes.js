const express = require("express");
const router = express.Router();
const RetsiController = require("../Controllers/AggretsukiController")

router
  .get("/Characters", RetsiController.getCharacters) //bien
  .get("/Character/:id", RetsiController.getCharacter) //bien
  .post("/newCharacter", RetsiController.postNewCharacter) //bien
  .put("/CharacterEdit/:id", RetsiController.editCharacter)
  .delete("/RemoveCharacter/:id", RetsiController.deleteCharacter) //bien

module.exports = router;

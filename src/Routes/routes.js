const express = require("express");
const router = express.Router();
const RetsiController = require("../Controllers/AggretsukiController")

router
  .get("/", RetsiController.getCharacter)
  .post("/newCharacter", RetsiController.postNewCharacter)
  .put("/Character/:id")
  .delete("/RemoveCharacter")

module.exports = router;

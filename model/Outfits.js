const mongoose = require("mongoose");

const OutfitSchema = new mongoose.Schema({
  top: String,
  pants: String,
  season: String,
  style: String,
});

module.exports = mongoose.model("Outfit", OutfitSchema);

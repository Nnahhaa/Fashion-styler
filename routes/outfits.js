const express = require("express");
const router = express.Router();
const Outfit = require("../models/Outfit");

// GET all saved outfits
router.get("/", async (req, res) => {
  const outfits = await Outfit.find();
  res.json(outfits);
});

// POST save outfit
router.post("/", async (req, res) => {
  const outfit = await Outfit.create(req.body);
  res.json(outfit);
});

module.exports = router;

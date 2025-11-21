const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// connect MongoDB
mongoose.connect("mongodb://localhost:27017/fashionAI");

// routes
app.use("/outfits", require("./routes/outfits"));

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

const startServer = () => {
  app.listen(8000, () => {
    console.log("server running on port no: 8000...");
  });
};

startServer();

mongoose.connect("mongodb://localhost:27017/hotelManagement", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const User = mongoose.model("user-login", {});
const Room = mongoose.model("rooms", {});

app.get("/", async (req, res) => {
  const username = await User.findOne();
  res.send(username);
});

app.get("/rooms", async (req, res) => {
  const roomDetails = await Room.find();
  res.status(200).send(roomDetails);
});

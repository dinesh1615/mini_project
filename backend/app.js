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

const dbURI = "mongodb://localhost:27017/hotelManagement";

mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

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

app.post("/rooms/booking/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { name, fromDate, toDate } = req.body;
  await Room.updateOne({ _id: `${id}` }, { $set: { price: "Booked" } })
    .then((result) => {
      console.log(`Modified documents`);
    })
    .catch((error) => {
      console.error("Error updating documents:", error);
    });
  res.status(200).send("Booked SuccesFully");
});

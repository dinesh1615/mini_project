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

const roomSchema = new mongoose.Schema({
  price: String,
  name: String,
  rating: String,
  description: String,
  status: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  bookedBy: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: Number, required: true },
});

const User = mongoose.model("user-login", {});
const Room = mongoose.model("rooms", roomSchema);

app.get("/", async (req, res) => {
  const username = await User.findOne();
  res.send(username);
});

app.get("/rooms", async (req, res) => {
  const roomDetails = await Room.find();
  res.status(200).send(roomDetails);
});

app.post("/rooms", async (req, res) => {
  const { fromDate, toDate } = req.body;
  const roomDetails = await Room.find({
    toDate: { $lt: fromDate },
  });
  console.log(roomDetails);
  if (roomDetails.length === 0) return res.status(400).send("ndf");
  else return res.status(200).send("kdf");
});

app.post("/rooms/booking/:id", async (req, res) => {
  const { id } = req.params;
  const { name, fromDate, toDate, email, contact } = req.body;
  await Room.updateOne(
    { $and: [{ _id: `${id}` }, { status: "Book Now" }] },
    {
      $set: {
        status: "Booked",
        fromDate: fromDate,
        toDate: toDate,
        bookedBy: name,
        email: email,
        contact: contact,
      },
    }
  )
    .then((result) => {
      console.log(`Modified documents`);
      res.status(200).send("Booked SuccesFully");
    })
    .catch((error) => {
      console.error("Error updating documents:", error);
      res.status(400).send("Failed To Book");
    });
});

const updateRooms = async () => {
  try {
    const presentDate = new Date();

    const result = await Room.updateMany(
      {
        status: "Booked",
        fromDate: { $ne: "" },
        toDate: { $lte: presentDate },
      },
      {
        $set: { fromDate: "", toDate: "", status: "Book Now" },
      }
    );

    console.log(`Modified ${result.nModified} documents.`);
  } catch (error) {
    console.error("Error updating rooms:", error);
  }
};

updateRooms();

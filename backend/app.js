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

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  status: String,
});

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

const querySchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  status: String,
});

const User = mongoose.model("user-login", userSchema);
const Room = mongoose.model("rooms", roomSchema);
const Queries = mongoose.model("queries", querySchema);

//Employee Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      res.status(400).send("Login Failure");
      return;
    }
    const payload = {
      username: username,
    };
    const jwtToken = jwt.sign(payload, "Nithin");
    console.log(jwtToken);
    res.status(201).send({ jwtToken });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Internal Server Error");
  }
});

//Display Employees
app.get("/", async (req, res) => {
  const username = await User.findOne();
  res.send(username);
});

//Display Rooms
app.get("/rooms", async (req, res) => {
  const roomDetails = await Room.find();
  res.status(200).send(roomDetails);
});

//Is Rooms Available or Not
app.post("/rooms", async (req, res) => {
  const { fromDate, toDate } = req.body;
  const roomDetails = await Room.find({
    status: "Booked",
  });
  console.log(roomDetails);
  if (roomDetails.length === 0) return res.status(400).send("Not Available");
  else return res.status(200).send("Available");
});

//Room Booking API
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

//Updating rooms after timeout
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

//post queries
app.post("/queries", async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const newQuery = new Queries({
      name: name,
      email: email,
      subject: subject,
      message: message,
      status: "pending",
    });
    await newQuery.save();
    return res.status(200).send("Inserted Successfully");
  } catch (error) {
    console.error("Error while inserting:", error);
    return res.status(500).send("Error while inserting.");
  }
});

//Display Queries
app.get("/queries", async (req, res) => {
  try {
    const result = await Queries.find();
    res.status(200).send(result);
  } catch {
    res.status(400).send("Error");
  }
});

import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./index.css";

const RoomBooking = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState(0);
  const { id } = useParams();
  const location = useLocation();
  const roomRate = location.state.price
    ? parseFloat(location.state.price.replace(/[^0-9.-]+/g, ""))
    : 100; // Extract numeric value

  const calculatePrice = () => {
    if (fromDate && toDate) {
      const from = new Date(fromDate);
      const to = new Date(toDate);
      const timeDiff = to - from;
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setPrice((daysDiff + 1) * roomRate);
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [fromDate, toDate]);

  const changeFromDate = (event) => {
    setFromDate(event.target.value);
  };

  const changeToDate = (event) => {
    setToDate(event.target.value);
  };

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeContact = (event) => {
    setContact(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const BookNowBtn = async () => {
    if (!name || !fromDate || !toDate || !contact || !email) {
      alert("Please fill in all fields.");
      return;
    }

    const userDetails = {
      name,
      fromDate,
      toDate,
      contact,
      email,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(
        `http://localhost:8000/rooms/booking/${id}`,
        options
      );

      if (response.ok) {
        alert("Room Booked Successfully Check your mail for Confirmation!");
      } else {
        const errorData = await response.json();
        alert(`Room didn't book. Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Already Booked");
    }
  };

  return (
    <div className="room-booking-page">
      <div className="room-booking-page-form-container">
        <input
          type="text"
          onChange={changeName}
          placeholder="Name"
          value={name}
        />
        <input
          type="number"
          placeholder="Contact"
          onChange={changeContact}
          value={contact}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={changeEmail}
          value={email}
        />
        <input type="date" onChange={changeFromDate} value={fromDate} />
        <input type="date" onChange={changeToDate} value={toDate} />
        <div>Total Price: ${price}</div>
        <button type="btn btn-dark" onClick={BookNowBtn}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default RoomBooking;

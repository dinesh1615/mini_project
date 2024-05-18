import React, { useState } from "react";
import { useParams } from "react-router-dom";

const RoomBooking = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [name, setName] = useState("");
  const { id } = useParams();

  const changeFromDate = (event) => {
    setFromDate(event.target.value);
  };

  const changeToDate = (event) => {
    setToDate(event.target.value);
  };

  const changeName = (event) => {
    setName(event.target.value);
  };

  const BookNowBtn = async () => {
    if (!name || !fromDate || !toDate) {
      alert("Please fill in all fields.");
      return;
    }
    const userDetails = {
      name,
      fromDate,
      toDate,
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
      ); // Replace with the actual endpoint

      if (response.ok) {
        alert("Room Booked Successfully");
      } else {
        const errorData = await response.json();
        alert(`Room didn't book. Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while booking the room.");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <input
        type="text"
        onChange={changeName}
        placeholder="Name"
        value={name}
      />
      <input type="date" onChange={changeFromDate} value={fromDate} />
      <input type="date" onChange={changeToDate} value={toDate} />
      <button type="button" onClick={BookNowBtn}>
        Submit
      </button>
    </div>
  );
};

export default RoomBooking;

import React, { useState } from "react";

export default function Book() {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const updateInDate = (event) => setCheckInDate(event.target.value);
  const updateOutDate = (event) => setCheckOutDate(event.target.value);

  const isAvailable = async () => {
    const data = {
      fromDate: checkInDate,
      toDate: checkOutDate,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch("http://localhost:8000/rooms/", options);
    if (response.ok) {
      alert("Available");
    } else alert("NOT Available");
  };

  return (
    <>
      <div
        className="container-fluid booking pb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="bg-white shadow" style={{ padding: "35px" }}>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-3">
                    <div
                      className="date"
                      id="date1"
                      data-target-input="nearest"
                    >
                      <input
                        type="date"
                        className="form-control datetimepicker-input"
                        placeholder="Check in"
                        data-target="#date1"
                        data-toggle="datetimepicker"
                        onChange={updateInDate}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="date"
                      id="date2"
                      data-target-input="nearest"
                    >
                      <input
                        type="date"
                        className="form-control datetimepicker-input"
                        placeholder="Check out"
                        data-target="#date2"
                        data-toggle="datetimepicker"
                        onChange={updateOutDate}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option selected>Adult</option>
                      <option value="1">Adult 1</option>
                      <option value="2">Adult 2</option>
                      <option value="3">Adult 3</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option selected>Child</option>
                      <option value="1">Child 1</option>
                      <option value="2">Child 2</option>
                      <option value="3">Child 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100" onClick={isAvailable}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

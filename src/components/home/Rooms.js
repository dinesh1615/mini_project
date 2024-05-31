import React, { useEffect, useState } from "react";
import CommonHeading from "../common/CommonHeading";

export default function Rooms() {
  const [roomItems, setRoomItems] = useState([]);

  useEffect(() => {
    getRoomItems();
  }, []);

  const getRoomItems = async () => {
    try {
      const response = await fetch("http://localhost:8000/rooms/");
      if (response.ok) {
        const data = await response.json();
        setRoomItems(data);
      } else {
        console.error("Failed to fetch room items:", response.status);
      }
    } catch (error) {
      console.error("Error fetching room items:", error);
    }
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Rooms"
            title="Rooms"
            subtitle="Explore Our"
          />
          <div className="row g-4">
            {roomItems.map((item) => (
              <div
                key={item._id}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    {item.price === "10,000/night" && (
                      <img
                        className="img-fluid"
                        src="../assets/img/room-1.jpg"
                        alt="img"
                      />
                    )}
                    {item.price === "15,000/night" && (
                      <img
                        className="img-fluid"
                        src="../assets/img/room-2.jpg"
                        alt="img"
                      />
                    )}
                    {item.price === "20,000/night" && (
                      <img
                        className="img-fluid"
                        src="../assets/img/room-3.jpg"
                        alt="img"
                      />
                    )}
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {item.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{item.name}</h5>
                      <div className="ps-2">{item.star}</div>
                    </div>
                    {/* <div className="d-flex mb-3">
                      {item.facility.map((facilityItem, index) => (
                        <small key={index} className="border-end me-3 pe-3">
                          {facilityItem.icon}
                          {facilityItem.quantity} {facilityItem.facility}
                        </small>
                      ))}
                    </div> */}
                    <p className="text-body mb-3">{item.description}</p>
                    <div className="d-flex justify-content-between">
                      {/* <a
                        className="btn btn-sm btn-primary rounded py-2 px-4"
                        href=""
                      >
                        Know More..
                      </a> */}

                      {item.status === "Book Now" && (
                        <a
                          className="btn btn-sm btn-dark rounded py-2 px-4"
                          href={`/rooms/booking/${item._id}`}
                        >
                          {item.status}
                        </a>
                      )}
                      {item.status === "Booked" && (
                        <button
                          className="btn btn-sm btn-secondary rounded py-2 px-4"
                          href=""
                        >
                          {item.status}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

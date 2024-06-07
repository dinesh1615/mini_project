import React, { useEffect, useState } from "react";
import CommonHeading from "../common/CommonHeading";
import { useNavigate } from "react-router-dom";

export default function Rooms() {
  const [roomItems, setRoomItems] = useState([]);
  const navigate = useNavigate();

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

  const handleBooking = (id, price) => {
    navigate(`/rooms/booking/${id}`, { state: { price } });
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
                    {item.price === "900/night" && (
                      <img
                        className="img-fluid"
                        src="../assets/img/room-1.jpg"
                        alt="img"
                      />
                    )}
                    {item.price === "1,500/night" && (
                      <img
                        className="img-fluid"
                        src="../assets/img/room-2.jpg"
                        alt="img"
                      />
                    )}
                    {item.price === "1,000/night" && (
                      <img
                        className="img-fluid"
                        src="../assets/img/room-3.jpg"
                        alt="img"
                      />
                    )}
                    {item.price === "800/night" && (
                      <img
                        className="img-fluid"
                        src="../assets/img/room-8.jpg"
                        alt="img"
                      />
                    )}
                    {item.price === "1,200/night" && (
                      <img
                        className="img-fluid"
                        src="../assets/img/room-4.jpg"
                        alt="img"
                      />
                    )}
                    {item.price === "1,300/night" && (
                      <img
                        className="img-fluid"
                        src="../assets/img/room-5.jpg"
                        alt="img"
                      />
                    )}
                    {item.price === "1,100/night" && (
                      <img
                        className="img-fluid"
                        src="../assets/img/room-11.jpg"
                        alt="img"
                      />
                    )}
                    {item.price === "1,400/night" && (
                      <img
                        className="img-fluid"
                        src="../assets/img/room-10.jpg"
                        alt="img"
                      />
                    )}
                    {item.price === "2,000/night" && (
                      <img
                        className="img-fluid"
                        src="../assets/img/room-9.jpg"
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
                    <p className="text-body mb-3">{item.description}</p>
                    <p>Rating:{item.rating}</p>
                    <div className="d-flex justify-content-between">
                      {item.status === "Book Now" && (
                        <div>
                          <button
                            className="btn btn-sm btn-dark rounded py-2 px-4"
                            onClick={() => handleBooking(item._id, item.price)}
                          >
                            {item.status}
                          </button>
                        </div>
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

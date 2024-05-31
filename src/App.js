import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Header from "./components/common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
} from "./pages/index";
import Footer from "./components/common/Footer";
import RoomBooking from "./pages/RoomBookingPage";
import Food from "./food";
import ExploreAbout from "./components/home/ExploreAbout";
import Login from "./components/home/Login";
import Queries from "./pages/Queries";
export default function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/services" element={<Services />} />
            <Route path="/rooms/booking/:id" element={<RoomBooking />} />
            <Route path="/food" element={<Food />} />
            <Route path="/about/explore-more" element={<ExploreAbout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/queries" element={<Queries />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

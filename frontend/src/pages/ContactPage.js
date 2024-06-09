import React, { useState } from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";
import { contact } from "../components/data/Data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, SetMessage] = useState("");

  const updateName = (event) => setName(event.target.value);

  const updateEmail = (event) => setEmail(event.target.value);

  const updateSubject = (event) => setSubject(event.target.value);

  const updateMessage = (event) => SetMessage(event.target.value);

  const submitBtn = async (event) => {
    event.preventDefault();
    const url = "https://backend-deploy-api.vercel.app/queries";
    const userDetails = {
      name,
      email,
      subject,
      message,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    if (response.ok) {
      console.log("sucess");
      setName("");
      setEmail("");
      setSubject("");
      SetMessage("");
    } else console.log("NOT");
  };

  return (
    <>
      <Heading heading="Contact" title="Home" subtitle="Contact" />

      <div class="container-xxl py-5">
        <div class="container">
          <CommonHeading
            heading="Contact Us"
            subtitle="Contact "
            title="For Any Query"
          />
          <div class="row g-4">
            <div class="col-12">
              <div class="row gy-4">
                {contact.map((item, index) => (
                  <div class="col-md-4">
                    <h6 class="section-title text-start text-primary text-uppercase">
                      {item.title}
                    </h6>
                    <p>
                      {item.icon}
                      {item.email}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                title="Map"
                class="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.1244965248397!2d77.9191961743126!3d18.881557358049786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcde18c82d2cdb1%3A0x469505d0e802dd0c!2sBasara%20IIIT%20Campus!5e0!3m2!1sen!2sin!4v1714851026171!5m2!1sen!2sin"
                frameborder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div class="col-md-6">
              <div class="wow fadeInUp" data-wow-delay="0.2s">
                <form onSubmit={submitBtn}>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={name}
                          onChange={updateName}
                        />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={updateEmail}
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Subject"
                          value={subject}
                          onChange={updateSubject}
                        />
                        <label for="subject">Subject</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                          value={message}
                          onChange={updateMessage}
                        ></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100 py-3" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

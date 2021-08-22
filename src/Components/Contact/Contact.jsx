import React from "react";
import Navbar from "../Navbar/Navbar";
import HomeAbout from "../Home/Home-About-us/HomeAbout";

import "./Contact.css";

const Contact = () => {
  const contactData = [
    {
      uniAddress: "WXV road, ALM Building",
      uniName: "Oxford OX1 2JD, United Kingdom",
    },

    {
      uniNum: "+21 7121 127182",
      uniTiming: "Monday to Saturday, 7am to 8pm",
    },

    {
      uniMail: "info@gmail.com",
      mailQuery: "Email us for your query",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="contact-us-content">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="fas fa-home"></i>
              <span>
                <h5>{contactData[0].uniAddress}</h5>
                <p>{contactData[0].uniName}</p>
              </span>
            </div>
            <div>
              <i className="fas fa-phone"></i>
              <span>
                <h5>{contactData[1].uniNum}</h5>
                <p>{contactData[1].uniTiming}</p>
              </span>
            </div>
            <div>
              <i className="fas fa-envelope"></i>
              <span>
                <h5>{contactData[2].uniMail}</h5>
                <p>{contactData[2].mailQuery}</p>
              </span>
            </div>
          </div>
          <div className="contact-col">
            <form accept="form-handler.php" method="POST">
              <input
                type="text"
                name="name"
                placeholder="Enter Your name"
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                autoComplete="off"
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter Your Subject"
                autoComplete="off"
              />
              <textarea
                cols="30"
                name="message"
                rows="10"
                placeholder="Message"
                autoComplete="off"
              ></textarea>
              <button type="submit" className="header-btn btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <HomeAbout />
    </>
  );
};

export default Contact;

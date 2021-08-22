import React from "react";
import "./HomeContactForm.css";
import { Link } from "react-router-dom";

const HomeContactForm = () => {
  return (
    <section className="call-section">
      <div className="section-title">
        {/* <img src="../img/banner2.jpg" /> */}
        <h1>
          Enroll For Our Various Online Courses
          <br />
          Anywhere From The World
        </h1>
        <Link href="/" className="header-btn">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default HomeContactForm;

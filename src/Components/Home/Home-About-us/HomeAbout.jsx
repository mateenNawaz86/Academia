import React from "react";
import { Link } from "react-router-dom";
import Title from "../../UI/Title";

import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <section className="section-container">
      <Title title="About Us" />
      <div className="footer-icons">
        <Link to="/">
          <i className="fab fa-facebook-f" />
        </Link>
        <Link to="/">
          <i className="fab fa-twitter" />
        </Link>
        <Link to="/">
          <i className="fab fa-instagram" />
        </Link>
        <Link to="/">
          <i className="fab fa-linkedin-in" />
        </Link>
      </div>
      <p className="about-footer">
        Copyright &#169; 2021 Academia. All rights reserved. Privacy Policy
      </p>
    </section>
  );
};

export default HomeAbout;

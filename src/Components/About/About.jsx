import React from "react";
import { Link } from "react-router-dom";

import "./About.css";

const About = () => {
  const aboutTitle = `We are the world's largest University`;
  const aboutPara = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
    dolores magni recusandae laboriosam vitae inventore illum,
    tempore, esse delectus sapiente, doloribus quo necessitatibus
    similique nostrum amet ea autem voluptatem sunt tenetur expedita
    atque assumenda? Dolor quas consequuntur deleniti optio ex?`;
  return (
    <React.Fragment>
      <section className="about-container">
        <div className="row">
          <div className="about-col">
            <h1>{aboutTitle}</h1>
            <p>{aboutPara}</p>
            <Link to="/" className="header-btn btn">
              Explore Now
            </Link>
          </div>

          <div className="about-col">
            <img src="../img/about.jpg" alt="About" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;

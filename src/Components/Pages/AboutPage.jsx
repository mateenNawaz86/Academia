import React from "react";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import HomeAbout from "../Home/Home-About-us/HomeAbout";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <About />
      <HomeAbout />
    </React.Fragment>
  );
};

export default AboutPage;

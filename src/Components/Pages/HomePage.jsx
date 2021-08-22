import React from "react";
import Navbar from "../Navbar/Navbar";
import Courses from "../Home/Courses/HomeCourses";
import Compus from "../Home/Compus/Compus";
import Facilites from "../Home/Facilities/Facilites";
import Testimonial from "../Home/Testimonial/Testimonial";
import HomeContactForm from "../Home/Home-Contact/HomeContactForm";
import HomeAbout from "../Home/Home-About-us/HomeAbout";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Courses />
      <Compus />
      <Facilites />
      <Testimonial />
      <HomeContactForm />
      <HomeAbout />
    </React.Fragment>
  );
};

export default Home;

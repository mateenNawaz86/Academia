import React from "react";
import Navbar from "../Navbar/Navbar";
import HomeCourse from "../Home/Courses/HomeCourses";
import Facilites from "../Home/Facilities/Facilites";
import HomeAbout from "../Home/Home-About-us/HomeAbout";

const CoursePage = () => {
  return (
    <>
      <Navbar />
      <HomeCourse />
      <Facilites />
      <HomeAbout />
    </>
  );
};

export default CoursePage;

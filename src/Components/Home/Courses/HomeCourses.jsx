import React from "react";
import Title from "../../UI/Title";

import "./Courses.css";

const Courses = () => {
  const courseName = ["Matric", "Interemediate", "UnderGraduate"];

  const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Consequuntur numquam inventore, ad minus quod aliquam saepe
  necessitatibus molestiae vero, provident magnam consequatur atque
  similique officia excepturi pariatur, aspernatur quis ipsam.`;

  return (
    <section className="section-container">
      <Title title="Courses We Offer" />

      <div className="row">
        <div className="course-col">
          <h3>{courseName[0]}</h3>
          <p>{text}</p>
        </div>
        <div className="course-col">
          <h3>{courseName[1]}</h3>
          <p>{text}</p>
        </div>
        <div className="course-col">
          <h3>{courseName[2]}</h3>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default Courses;

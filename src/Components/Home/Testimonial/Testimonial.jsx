import React from "react";
import Title from "../../UI/Title";

import "./Testimonial.css";

const Testimonial = () => {
  const n = 5;
  const starIcons = [...Array(n)].map(() => <i className="fas fa-star" />);
  const para = `Lorem ipsum dolor sit amet consectetur adipisicing elit
  Asperiores dolor cumque rem excepturi dolorum ducimus odit
  exercitationem distinctio iusto dicta`;
  const userName = ["Marry", "John Smith"];

  return (
    <section className="section-container">
      <Title title="What Our Students Says" />

      <div className="row">
        <div className="testimonial-col">
          <img src="../img/user1.jpg" alt="User" />
          <div>
            <p>{para}</p>
            <h3>{userName[0]}</h3>
            {starIcons}
            <i className="fas fa-star-half-alt"></i>
          </div>
        </div>

        <div className="testimonial-col">
          <img src="../img/user2.jpg" alt="User" />
          <div>
            <p>{para}</p>
            <h3>{userName[1]}</h3>
            {starIcons}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

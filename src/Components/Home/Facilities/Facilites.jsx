import React from "react";
import Title from "../../UI/Title";

import "./Facilities.css";

const Facilites = () => {
  const facName = [
    "World Class Library",
    "Largest Play Ground",
    "Tasty & Healthy Food",
  ];

  const facText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
  beatae.`;

  return (
    <section className="section-container">
      <Title title="Our Faclities" />

      <div className="row">
        <div className="faclities-col">
          <figure>
            <img src="../img/library.png" alt="Library" />
          </figure>
          <h3>{facName[0]}</h3>
          <p>{facText}</p>
        </div>
        <div className="faclities-col">
          <figure>
            <img src="../img/basketball.png" alt="Basketball" />
          </figure>
          <h3>{facName[1]}</h3>
          <p>{facText}</p>
        </div>
        <div className="faclities-col">
          <figure>
            <img src="../img/cafeteria.png" alt="Library" />
          </figure>
          <h3>{facName[2]}</h3>
          <p>{facText}</p>
        </div>
      </div>
    </section>
  );
};

export default Facilites;

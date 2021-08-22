import React from "react";
import Title from "../../UI/Title";

import "./Compus.css";

const Compus = () => {
  return (
    <section className="section-container">
      <Title title="Our Global Compus" />

      <div className="row">
        <div className="compus-col">
          <img src="../img/london.png" alt="London Compus" />
          <div className="layer">
            <h3>LONDON</h3>
          </div>
        </div>
        <div className="compus-col">
          <img src="../img/newyork.png" alt="New York Compus" />
          <div className="layer">
            <h3>NEW YORK</h3>
          </div>
        </div>
        <div className="compus-col">
          <img src="../img/washington.png" alt="Turkey Compus" />
          <div className="layer">
            <h3>TURKEY</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compus;

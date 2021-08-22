import React from "react";

import "./Title.css";

const Title = (props) => {
  return (
    <div className="section-title">
      <h1>{props.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut error qui
        illo neque minima autem.
      </p>
    </div>
  );
};

export default Title;

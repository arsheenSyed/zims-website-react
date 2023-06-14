import React from "react";
import "./mediumText.css";

const MediumText = (props) => {
  return (
    <h3
      className={`mediumText ${props.className} ${props.color} ${props.weight} ${props.size}`}
    >
      {props.children}
    </h3>
  );
};

export default MediumText;

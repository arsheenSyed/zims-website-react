import React from "react";
import "./heading.css";

const Heading = (props) => {
  return (
    <h1
      className={
        props.className +
        " " +
        "myHeading" +
        " " +
        props.size +
        " " +
        props.color +
        " " +
        props.weight
      }
    >
      {props.children}
    </h1>
  );
};

export default Heading;

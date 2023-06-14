import React from "react";
import "./miniheading.css";

const MiniHeading = (props) => {
  return (
    <h3
      className={
        "miniHeading" +
        " " +
        props.color +
        " " +
        props.weight +
        " " +
        props.size
      }
    >
      {props.children}
    </h3>
  );
};

export default MiniHeading;

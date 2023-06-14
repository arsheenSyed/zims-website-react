import React from "react";
import "./para.css";

const Para = (props) => {
  return (
    <p
      className={
        props.className +
        " " +
        "para" +
        " " +
        props.weight +
        " " +
        props.color +
        " " +
        props.size
      }
    >
      {" "}
      {props.children}
    </p>
  );
};

export default Para;

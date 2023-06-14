import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./buttonround.css";

const ButtonRound = (props) => {
  return (
    <button
      className={
        `btn btn-lg round-btn` +
        " " +
        props.color +
        " " +
        props.fontColor +
        " " +
        props.size
      }
    >
      Learn More{" "}
      <span>
        <AiOutlinePlus />
      </span>
    </button>
  );
};

export default ButtonRound;

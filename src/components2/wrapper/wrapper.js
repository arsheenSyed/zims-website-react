import React from "react";
import "./wrapper.css";
const Wrapper = (props) => {
  return (
    <div className={`Wrapper ${props.className} ${props.color}`}>
      <div
        className={`container ${
          props.padding == "yes"
            ? "pb-5 pt-5"
            : `pt-${props.paddingTop} pb-${props.paddingBottom}`
        } `}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Wrapper;

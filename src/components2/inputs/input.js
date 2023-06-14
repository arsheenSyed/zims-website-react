import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <>
      {props.type == "input" ? (
        <input
          name={`${props.name}`}
          type={`${props.inputType}`}
          className={`form-control mt-3 ${props.className}`}
          id="exampleFormControlInput1 input"
          placeholder={`${props.placeholder}`}
          value={props.valueName}
          ref={props.refName}
          onChange={props.onChangeFunc}
          required
        />
      ) : (
        <textarea
          name={`${props.name}`}
          placeholder={`${props.placeholder}`}
          className={`form-control mt-3 ${props.className}`}
          id="exampleFormControlTextarea1 textarea"
          rows={`${props.rows}`}
          ref={props.refName}
          value={props.valueName}
          onChange={props.onChangeFunc}
        ></textarea>
      )}
    </>
  );
};

export default Input;

import React from "react";

const Button = (props) => {
  return <button className={`btn ${props.color}`}>{props.text}</button>;
};

export default Button;

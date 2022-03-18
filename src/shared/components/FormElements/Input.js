import React from "react";

const Input = (props) => {
  const element =
    props.type === "input" ? (
      <input id={props.id} onChange={inputHandler}></input>
    ) : (
      <textarea id={props.id} onChange={inputHandler}></textarea>
    );

  return (
    <div>
      <label>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;

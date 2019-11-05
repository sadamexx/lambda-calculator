import React from "react";

const OperatorButton = (props) => {
  console.log(props);
  return (
    <button className="ops">
      {props.operators.char}
    </button>
  );
};

export default OperatorButton;
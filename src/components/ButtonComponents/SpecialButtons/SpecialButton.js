import React from "react";


const SpecialButton = (props) => {
  return (
    <button className="unique">
      {props.specials}
    </button>
  );
};

export default SpecialButton;
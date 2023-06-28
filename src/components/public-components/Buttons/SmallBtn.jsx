import React from "react";

const SmallBtn = ({ handleClick, text, color, className }) => {
  return (
    <>
      <button
        className={`btn btn-${color} m-1 ${className}`}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default SmallBtn;

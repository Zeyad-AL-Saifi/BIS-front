import React from "react";

const PrimaryBtn = ({ handleClick, text ,type }) => {
  return (
    <div>
      <button
        className="btn btn-dark w-100 mb-2 p-3"
        onClick={handleClick}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryBtn;

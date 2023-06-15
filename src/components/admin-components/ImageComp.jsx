import React from "react";

const ImageComp = () => {
  return (
    <div className="m-4">
      <div className="container  w-100">
        <h3> Home Images Slider</h3>
        <p>
          You can change images on the home page in here but it must be included
          three images only ℹ️
        </p>
        <div className="row">
          <div className="col p-2 m-2">
            <img src="https://picsum.photos/350/200" alt="NoImage" />
          </div>
          <div className="col p-2 m-2">
            <img src="https://picsum.photos/350/200" alt="NoImage" />
          </div>
          <div className=" col p-2 m-2">
            <img src="https://picsum.photos/350/200" alt="NoImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComp;

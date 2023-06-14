import React from 'react';

const ImageComp = () => {
    return (
        <div>
              <div className="container  w-100">
          <h3> Home Images Slider</h3>
              <div className="row">
              <div className="col p-2 m-2">
                <img
                  src="https://picsum.photos/350/200"
                  alt="NoImage"
                />
              </div>
              <div className="col p-2 m-2">
                <img
                  src="https://picsum.photos/350/200"
                  alt="NoImage"
                />
              </div>
              <div className=" col p-2 m-2">
                <img
                  src="https://picsum.photos/350/200"
                  alt="NoImage"
                />
                </div>
                </div>
            </div>
        </div>
    );
}

export default ImageComp;

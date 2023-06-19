import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="sr-only"></span>
        </Spinner>
      </div>
    </div>
  );
};

export default Loading;

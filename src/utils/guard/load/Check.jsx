import ErrorModal from "../../../components/modals/ErrorModal";
import Loading from "./loading";
import React, { useState } from "react";
const Check = ({ loading, error, children }) => {
  const ifButton = children.type;

  const [errorHand, setErrorHand] = useState(error);


  const handleCloseError = () => {
    // Clear the error state
    setErrorHand("");
  };

  const handelRender = () => {
    if (ifButton === "button") {
      const cloneButton = React.cloneElement(
        children,
        { disabled: true },
        "Loading..."
      );
      return (
        <>
          {loading ? (
            cloneButton
          ) : error ? (
            <>
              {children}
              <p>{error}</p>
            </>
          ) : (
            children
          )}
        </>
      );
    } else {
      return (
        <>
          {loading ? (
            <Loading />
          ) : error ? (
            <ErrorModal error={errorHand} onClose={handleCloseError} />
          ) : (
            // <h1>Somthing Error in server ..</h1>
            children
          )}
        </>
      );
    }
  };

  return handelRender();
};

export default Check;

import Loading from "./loading";
import React from "react";
const Check = ({ loading, error, children }) => {
  const ifButton = children.type;
  console.log(children);
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
            <h1>Somthing Error in server ..</h1>
          ) : (
            children
          )}
        </>
      );
    }
  };

  return handelRender();
};

export default Check;

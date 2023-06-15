import React from "react";

const TextComp = () => {
  return (
    <div>
      <div className="textarea">
        <h3 className="p-3">Main Text in home page</h3>
        <p>
          You have one main text in home page you can update the text here ℹ️
        </p>
        <form>
          <textarea
            className="w-100"
            placeholder="Enter the text here and click submit to update the text in home page :"
          ></textarea>
          <br />
          <button className="btn btn-dark w-100 p-3">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TextComp;

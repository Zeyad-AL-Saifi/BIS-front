import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMainText } from "../../store/Home/main-text/mainTextSlice";

import "../../utils/css/homeContent.css";
const TextArea = () => {
  const { error, loading, records } = useSelector((state) => state.maintext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMainText());
  }, [dispatch]);

  const data = records?.map((ele, index) => {
    return (
      <p className="container" key={ele.text_id}>
        {ele.main_text}
      </p>
    );
  });
  return (
    <div>
      {" "}
      <div>
        <div className="container  p-4">
          <h2>Welcome to our school</h2>
          <div> {data}</div>
        </div>
      </div>
    </div>
  );
};

export default TextArea;

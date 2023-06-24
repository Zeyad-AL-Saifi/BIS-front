import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Check from "../../../utils/guard/load/Check";
import {
  getMainText,
  updateMainText,
} from "../../../store/Home/main-text/mainTextSlice";

const TextComp = () => {
  const { record, loading, error } = useSelector((state) => state.maintext);

  const [text, setText] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    if (record) {
      setText(record?.main_text);
    }
  }, [record, text]);

  useEffect(() => {
    dispatch({ type: "maintext/cleanRecord" });
  }, [dispatch]);

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMainText({ main_text: text }))
      .unwrap()
      .then(() => {
        dispatch(getMainText());
      });
  };
  return (
    <div>
      <div className="textarea">
        <h3 className="p-3">Main Text in home page</h3>
        <p>
          You have one main text in home page you can update the text here ℹ️
        </p>
        <form onSubmit={handelSubmit}>
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="w-100"
            placeholder="Enter the text here and click submit to update the text in home page :"
          ></textarea>
          <br />
          <Check loading={loading} error={error}>
            <button type="submit" className="btn btn-dark w-100 p-3">
              Submit
            </button>
          </Check>
        </form>
      </div>
    </div>
  );
};

export default TextComp;

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainText());
  }, [dispatch]);
  const [text, setText] = useState(record?.main_text);

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
    //TODO:fix this
    if (text === "" || text === undefined) {
      return (
        <div class="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>
      );
    }
    dispatch(updateMainText({ main_text: text })).then(() => {
      dispatch(getMainText());
      setText("");
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

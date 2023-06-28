import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Check from "../../../utils/guard/load/Check";
import {
  getMainText,
  updateMainText,
} from "../../../store/Home/main-text/mainTextSlice";
import TitleSections from "../../public-components/TitleSections";
import PrimaryBtn from "../../public-components/Buttons/PrimaryBtn";

const TextComp = () => {
  const { record, loading, error } = useSelector((state) => state.maintext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainText());
  }, [dispatch]);

  const [text, setText] = useState(record?.main_text);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (record) {
      setText(record?.main_text);
    }
  }, [record]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "" || text === undefined) {
      setIsError(true);
      return;
    }

    dispatch(updateMainText({ main_text: text })).then(() => {
      dispatch(getMainText());
      setText("");
    });
  };

  return (
    <div>
      <div className="textarea by-3">
        <TitleSections
          title={"Main Text in home page 💬"}
          content={
            " You have one main text on the home page, and you can update the texthere ℹ️"
          }
        />
        <form onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setIsError(false); // Clear the error when the user starts typing
            }}
            className="w-100"
            placeholder="Enter the text here and click submit to update the text on the home page:"
          ></textarea>
          {isError && (
            <div className="alert alert-danger mt-3" role="alert">
              Please enter some text.
            </div>
          )}
          <br />
          <Check loading={loading} error={error}>
            <PrimaryBtn type={"submit"} text={"Submit"} />
          </Check>
        </form>
      </div>
    </div>
  );
};

export default TextComp;

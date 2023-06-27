import { useDispatch } from "react-redux";
import Check from "../../utils/guard/load/Check";

import { useState } from "react";
import getFormattedDateTime from "../../hooks/getDate";
import { addTeacherNote } from "../../store/notes/teacherNotes/teacherNotesSlice";
import { addStudentNote } from "../../store/notes/studentNotes/studentNotesSlice";
import CustomDropTeacher from "../public-components/CustomDropdown/CustomDropTeacher";
import CustomDropStudent from "../public-components/CustomDropdown/CustomDropStudent";
import { Alert } from "react-bootstrap";
const FormSendNotes = ({ userInfo, isStudent }) => {
  const [forHow, setForHow] = useState("");
  const [note, setNote] = useState("");
  const [inputError, setInputError] = useState(false);

  const dispatch = useDispatch();
  const handleSelect = (value) => {
    setForHow(value);
  };

  const date = getFormattedDateTime();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!note) {
      setInputError(true);
    } else {
      isStudent
        ? dispatch(
            addStudentNote({
              student_id_from: userInfo.id_student,
              student_name_from: userInfo.full_name,
              teacher_name_to: forHow,
              note_status_code: 0,
              note: note,
              time: date,
            })
          ).then(() => {
            alert("Send Note Successfully 👌😁");
            setInputError(false);
            setNote("");
          })
        : dispatch(
            addTeacherNote({
              teacher_id_from: userInfo.teacher_id,
              teacher_name_from: userInfo.full_name,
              student_name_to: forHow,
              note_status_code: 0,
              note: note,
              time: date,
            })
          ).then(() => {
            alert("Send Note Successfully 👌😁");
            setInputError(false);
            setNote("");
          });
    }
  };
  return (
    <div className="px-5 ">
      <div className="row">
        <h3 className=" m-4">Do you want to send a note ?</h3>
        <div className="add-new-note ">
          <form onSubmit={handelSubmit}>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                value={userInfo.full_name}
                className="form-control"
                id="nameInput"
                disabled={true}
                placeholder="Enter your name"
              />
            </div>
            {isStudent ? (
              <CustomDropTeacher handleSelect={handleSelect}  />
            ) : (
                <CustomDropStudent handleSelect={handleSelect}  />
            )}
            <div className="mb-3">
              <label htmlFor="messageInput" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="messageInput"
                rows={3}
                placeholder="Enter your message"
                defaultValue={""}
                value={note}
                onChange={(event) => {
                  setNote(event.target.value);
                }}
              />
            </div>
            {inputError && (
              <Alert variant="danger">Please Enter The Note.</Alert>
            )}
            <Check>
              <button type="submit" className="btn btn-dark w-100">
                Submit
              </button>
            </Check>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSendNotes;

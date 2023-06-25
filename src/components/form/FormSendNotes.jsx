import { useDispatch } from "react-redux";
import Check from "../../utils/guard/load/Check";
import { useState } from "react";
import getFormattedDateTime from "../../hooks/getDate";
import { addTeacherNote } from "../../store/notes/teacherNotes/teacherNotesSlice";
import { addStudentNote } from "../../store/notes/studentNotes/studentNotesSlice";
import CustomDropTeacher from "../public-components/CustomDropdown/CustomDropTeacher";
import CustomDropStudent from "../public-components/CustomDropdown/CustomDropStudent";
import CustomAlter from "../../hooks/Alter";
const FormSendNotes = ({ userInfo, isStudent }) => {
  const [forHow, setForHow] = useState("");
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setForHow(selectedValue);
  };

  const date = getFormattedDateTime();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!forHow || !note) {
      alert(
        "You cannot send without specifying how you want to send it and please write your note"
      );
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
            <CustomAlter error={"Send Note Successfully"} />;
            // alert("Send Note Successfully 👌😁");
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
            <CustomAlter error={"Send Note Successfully"} />;
            // alert("Send Note Successfully 👌😁");
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
              <CustomDropTeacher handleSelect={handleSelect} />
            ) : (
              <CustomDropStudent handleSelect={handleSelect} />
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

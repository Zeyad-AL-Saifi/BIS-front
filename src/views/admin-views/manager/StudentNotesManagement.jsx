import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteStudentNote,
  getAllStudentNote,
  updateStudentNote,
} from "../../../store/notes/studentNotes/studentNotesSlice";
import NoteManageBody from "../../../components/admin-components/note-component/NoteManageBody";
const StudentNotesManagement = () => {
  const { records } = useSelector((state) => state.studentnote);

  const [filterNote, setfilterNote] = useState([]);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStudentNote());
  }, [dispatch]);

  useEffect(() => {
    setfilterNote(records);
  }, [records]);

  useEffect(() => {
    const filter = records.filter((element) => {
      return element?.student_name_from?.toLowerCase().includes(value);
    });
    setfilterNote(filter);
  }, [value, records]);

  const handelInput = (event) => {
    setValue(event.target.value);
  };

  const handelDelete = useCallback(
    (id) => {
      dispatch(deleteStudentNote(id)).then(() => {
        dispatch(getAllStudentNote());
      });
    },
    [dispatch]
  );
  const handelUpdateStatusCode = (item) => {
    dispatch(updateStudentNote(item)).then(() => {
      dispatch(getAllStudentNote());
    });
  };

  return (
    <div>
      <NoteManageBody
        handelInput={handelInput}
        handelDelete={handelDelete}
        handelUpdateStatusCode={handelUpdateStatusCode}
        title={"Students Notes Table 📝"}
        filterNote={filterNote}
      />
    </div>
  );
};

export default StudentNotesManagement;

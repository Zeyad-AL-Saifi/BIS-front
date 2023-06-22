import React, { useCallback, useState } from "react";
import NoteManageBody from "../../components/admin-components/NoteManageBody";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteStudentNote,
  getAllStudentNote,
  updateStudentNote,
} from "../../store/notes/studentNotes/studentNotesSlice";
import Check from "../../utils/guard/load/Check";
const StudentNotesManagement = () => {
  const { records, loading, error } = useSelector((state) => state.studentnote);

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
      dispatch(deleteStudentNote(id)).then(dispatch(getAllStudentNote()));
    },
    [dispatch]
  );
  const handelUpdateStatusCode = (item) => {
    dispatch(updateStudentNote(item)).then(dispatch(getAllStudentNote()));
  };
  return (
    <Check loading={loading} error={error}>
      <NoteManageBody
        handelInput={handelInput}
        handelDelete={handelDelete}
        handelUpdateStatusCode={handelUpdateStatusCode}
        title={"Students Notes Table 🙌"}
        filterNote={filterNote}
      />
    </Check>
  );
};

export default StudentNotesManagement;

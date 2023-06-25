import React from "react";
import "./ProfileInfo.css";
import NoteCard from "../public-components/NoteCard/NoteCard";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  deleteStudentNote,
  getAllStudentNote,
} from "../../store/notes/studentNotes/studentNotesSlice";
import {
  deleteTeacherNote,
  getAllTeacherNote,
} from "../../store/notes/teacherNotes/teacherNotesSlice";
const NotesCome = ({ filteredData, isStd }) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(
    (id) => {
      if (!isStd) {
        dispatch(deleteStudentNote(id)).then(dispatch(getAllStudentNote()));
      } else {
        dispatch(deleteTeacherNote(id)).then(dispatch(getAllTeacherNote()));
      }
    },
    [dispatch, isStd]
  );

  const data = filteredData.map((ele) => {
    return <NoteCard ele={ele} key={ele.note_id} handleDelete={handleDelete} />;
  });
  return (
    <>
      <div className="col notes  ">
        <h3 className="row ">Notes come For you : ℹ️</h3>
        <div className="row" style={{ justifyContent: "space-around" }}>
          {data}
        </div>
      </div>
    </>
  );
};

export default NotesCome;

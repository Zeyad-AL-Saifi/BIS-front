import React, { useEffect } from "react";
import ProfileInfo from "../../profile-components/ProfileInfo";
import NotesCome from "../../profile-components/NotesCome";
import FormSendNotes from "../../form/FormSendNotes";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteStudentNote,
  getAllStudentNote,
} from "../../../store/notes/studentNotes/studentNotesSlice";
import Check from "../../../utils/guard/load/Check";
const TeacherBody = ({ userInfo }) => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.studentnote);
  useEffect(() => {
    dispatch(getAllStudentNote());
  }, [dispatch]);
  
  const handleDelete = (id) => {
    dispatch(
      deleteStudentNote(id).then(() => {
        dispatch(getAllStudentNote());
      })
    );
  };

  const filteredData = records.filter(
    (ele) =>
      ele.note_status_code === 1 && ele.teacher_name_to === userInfo.full_name
  );
  return (
    <Check loading={loading} error={error}>
      <div className="col">
        <ProfileInfo userInfo={userInfo} />
        <NotesCome
          filteredData={filteredData}
          userInfo={userInfo}
          handleDelete={handleDelete}
        />
        <FormSendNotes userInfo={userInfo} isStudent={false} />
      </div>
    </Check>
  );
};

export default TeacherBody;

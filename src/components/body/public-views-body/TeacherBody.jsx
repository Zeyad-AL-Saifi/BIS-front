import React, { useEffect } from "react";
import ProfileInfo from "../../profile-components/ProfileInfo";
import NotesCome from "../../profile-components/NotesCome";
import FormSendNotes from "../../form/FormSendNotes";
import { useSelector, useDispatch } from "react-redux";
import { getAllStudentNote } from "../../../store/notes/studentNotes/studentNotesSlice";
const TeacherBody = ({ userInfo }) => {
  const dispatch = useDispatch();
  const { records } = useSelector((state) => state.studentnote);

  useEffect(() => {
    dispatch(getAllStudentNote());
  }, [dispatch]);

  const filteredData = records.filter(
    (ele) =>
      ele.note_status_code === 1 && ele.teacher_name_to === userInfo.full_name
  );
  console.log(filteredData);
  return (
    <div>
      <div className="col">
        <ProfileInfo userInfo={userInfo} />
        <NotesCome filteredData={filteredData} userInfo={userInfo} />
        <FormSendNotes userInfo={userInfo} />
      </div>
    </div>
  );
};

export default TeacherBody;

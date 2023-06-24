import React from "react";
import ProfileInfo from "../../profile-components/ProfileInfo";
import NotesCome from "../../profile-components/NotesCome";
import FormSendNotes from "../../form/FormSendNotes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTeacherNote } from "../../../store/notes/teacherNotes/teacherNotesSlice.js";

const StudentBody = ({ userInfo }) => {
  const dispatch = useDispatch();
  const { records } = useSelector((state) => state.teachernote);

  useEffect(() => {
    dispatch(getAllTeacherNote());
  }, [dispatch]);

  const filteredData = records.filter(
    (ele) =>
      ele.note_status_code === 1 && ele.student_name_to === userInfo.full_name
  );
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

export default StudentBody;

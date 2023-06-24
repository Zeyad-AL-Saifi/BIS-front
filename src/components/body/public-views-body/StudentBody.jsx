import React from "react";
import ProfileInfo from "../../profile-components/ProfileInfo";
import NotesCome from "../../profile-components/NotesCome";
import FormSendNotes from "../../form/FormSendNotes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllTeacherNote } from "../../../store/notes/teacherNotes/teacherNotesSlice.js";
import Check from "../../../utils/guard/load/Check";

const StudentBody = ({ userInfo }) => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.teachernote);

  useEffect(() => {
    dispatch(getAllTeacherNote());
  }, [dispatch]);

  const filteredData = records.filter(
    (ele) =>
      ele.note_status_code === 1 && ele.student_name_to === userInfo.full_name
  );
  return (
    <Check loading={loading} error={error}>
      <div className="col">
        <ProfileInfo userInfo={userInfo} />
        <NotesCome filteredData={filteredData} userInfo={userInfo} />
        <FormSendNotes userInfo={userInfo} isStudent={true} />
      </div>
    </Check>
  );
};

export default StudentBody;

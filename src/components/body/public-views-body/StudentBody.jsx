import React from "react";
import ProfileInfo from "../../profile-components/ProfileInfo";
import NotesCome from "../../profile-components/NotesCome";
import FormSendNotes from "../../form/FormSendNotes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllStudentNote } from "../../../store/notes/studentNotes/studentNotesSlice";

const StudentBody = ({ userInfo }) => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state.studentnote);

  useEffect(() => {
    dispatch(getAllStudentNote());
  }, [dispatch]);
  return (
    <div>
      <div className="col">
        <ProfileInfo userInfo={userInfo} />
        <NotesCome records={records} userInfo={userInfo} />
        <FormSendNotes userInfo={userInfo} />
      </div>
    </div>
  );
};

export default StudentBody;

import React from "react";
import ProfileInfo from "../../profile-components/ProfileInfo";
import NotesCome from "../../profile-components/NotesCome";
import FormSendNotes from "../../form/FormSendNotes";
import { useSelector } from "react-redux";

const TeacherBody = ({ userInfo }) => {
  const { loading, error } = useSelector((state) => state.studentnote);

  return (
    <div>
      <div className="col">
        <ProfileInfo userInfo={userInfo } />
        <NotesCome  />
        <FormSendNotes userInfo={userInfo }/>
      </div>
    </div>
  );
};

export default TeacherBody;

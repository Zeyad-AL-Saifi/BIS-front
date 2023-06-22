import React from "react";
import ProfileInfo from "../../profile-components/ProfileInfo";
import NotesCome from "../../profile-components/NotesCome";
import FormSendNotes from "../../form/FormSendNotes";

const TeacherBody = ({userInfo}) => {
  return (
    <div>
      <div className="col">
        <ProfileInfo userInfo={userInfo } />
        <NotesCome userInfo={userInfo} />
        <FormSendNotes userInfo={userInfo }/>
      </div>
    </div>
  );
};

export default TeacherBody;

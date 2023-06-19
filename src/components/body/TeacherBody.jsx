import React from "react";
import ProfileInfo from "../profile-components/ProfileInfo";
import NotesCome from "../profile-components/NotesCome";
import FormSendNotes from "../form/FormSendNotes";

const TeacherBody = () => {
  return (
    <div>
      <div className="col">
        <ProfileInfo />
        <NotesCome />
        <FormSendNotes />
      </div>
    </div>
  );
};

export default TeacherBody;

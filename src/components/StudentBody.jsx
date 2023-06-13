import React from "react";
import NotesCome from "../components/profile/NotesCome";
import FormSendNotes from "../components/profile/FormSendNotes";
import ProfileInfo from "../components/profile/ProfileInfo";

const StudentBody = () => {
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

export default StudentBody;

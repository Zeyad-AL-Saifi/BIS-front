import React from "react";
import NotesCome from "../profile-components/NotesCome";
import FormSendNotes from "../form/FormSendNotes";
import ProfileInfo from "../profile-components/ProfileInfo";

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

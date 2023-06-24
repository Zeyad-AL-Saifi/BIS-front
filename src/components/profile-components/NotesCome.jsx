import React from "react";

import NoteCard from "../public-components/NoteCard";
const NotesCome = ({ records, userInfo }) => {
  const filteredData = records.filter(
    (ele) => ele.note_status_code === 1 && ele.full_name === userInfo.full_name
  );
  console.log(filteredData);
  return (
    <div>
      {" "}
      <div className="row notes ">
        <h3>Notes come For you : {userInfo.full_name}</h3>
        <div className="col ">
          <div className="row-auto ">
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesCome;

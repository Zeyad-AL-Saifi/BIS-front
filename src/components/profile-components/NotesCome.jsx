import React from "react";

import NoteCard from "../public-components/NoteCard";
const NotesCome = ({ filteredData, userInfo }) => {


  const data = filteredData.map((ele) => {
    return <NoteCard ele={ele} key={ele.note_id} />;
  });
  return (
    <div>
      <div className="row notes ">
        <h3>Notes come For you : {userInfo.full_name}</h3>
        <div className="col ">
          <div className="row-auto ">{data}</div>
        </div>
      </div>
    </div>
  );
};

export default NotesCome;

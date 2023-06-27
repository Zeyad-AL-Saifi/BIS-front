import React from "react";
import "./ProfileInfo.css";
import NoteCard from "../public-components/NoteCard/NoteCard";

const NotesCome = ({ filteredData, handleDelete }) => {
  const data = filteredData.map((ele) => {
    return <NoteCard ele={ele} key={ele.note_id} handleDelete={handleDelete} />;
  });
  return (
    <>
      <div className="col notes  ">
        <h3 className="row ">Notes come for you : ℹ️</h3>
        <div className="row" style={{ justifyContent: "space-around" }}>
          {data}
        </div>
      </div>
    </>
  );
};

export default NotesCome;

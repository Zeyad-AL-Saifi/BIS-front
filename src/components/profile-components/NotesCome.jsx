import React from "react";
import "./ProfileInfo.css";
import NoteCard from "../public-components/NoteCard";
const NotesCome = ({ filteredData, userInfo }) => {
  const data = filteredData.map((ele) => {
    return <NoteCard ele={ele} key={ele.note_id} />;
  });
  return (
    <>
      <div className="col notes  ">
        <h3 className="row ">Notes come For you : ℹ️</h3>
        <div className="row row-cols-md-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 ">
 
    {data}

</div>
      </div>

     
    </>
  );
};

export default NotesCome;

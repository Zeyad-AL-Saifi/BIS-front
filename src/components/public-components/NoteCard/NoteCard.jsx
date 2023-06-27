import React from "react";
import "./NoteCard.css";
const NoteCard = ({ ele, handleDelete }) => {


  // const handleSure = (id) => {
  //   if (window.confirm("Did you want delete this image ?")) {
  //     handleDelete(id);
  //   }
  // };
  return (
    <>
      <div className="card custom-note-card m-5">
        <div className="card-header bg-dark text-white">
          <h5>From : {ele.student_name_from || ele.teacher_name_from}</h5>
          <h5>Date : {ele.time}</h5>
          <button className="btn close-btn" onClick={()=>handleDelete(ele.note_id)}>
            ❌
          </button>
        </div>
        <div className="card-body">{ele.note}</div>
      </div>
    </>
  );
};

export default NoteCard;

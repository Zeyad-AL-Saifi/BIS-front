import React from "react";

const NoteCard = ({ ele }) => {
  return (
    <div>
      <div className="card custom-card">
        <div className="card-header bg-dark text-white">
          <h5>From : {ele.student_name_from || ele.teacher_name_from}</h5>
          <h5>Date : {ele.time}</h5>
        </div>
        <div className="card-body">{ele.note}</div>
      </div>
    </div>
  );
};

export default NoteCard;

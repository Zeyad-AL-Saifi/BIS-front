import React from "react";
import NoteCard from "../public-components/NoteCard";

const NotesCome = () => {
  return (
    <div>
      <div className="row notes ">
        <h3>Notes come For you :</h3>
        <div className="col">
          <div className="row row-cols-1 row-cols-xxl-3 row-cols-lg-3 g-1 g-lg-2 ">
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

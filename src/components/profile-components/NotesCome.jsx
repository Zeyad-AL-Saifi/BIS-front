import React from "react";
import { useSelector } from "react-redux";
import Check from "../../utils/guard/load/Check";
import NoteCard from "../public-components/NoteCard";
const NotesCome = ({ userInfo }) => {
  const { loading, error } = useSelector((state) => state.studentnote);

  return (
    <Check loading={loading} error={error}>
      <div className="row notes ">
        <h3>Notes come For you :</h3>
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
    </Check>
  );
};

export default NotesCome;

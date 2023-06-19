import NoteShowModal from "../modals/NoteShowModal";
import FilterForm from "./filterForm";
import NoteInTable from "./NoteInTable";
import React, { useState } from "react";
const NoteManageBody = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div style={{ minHeight: "670px" }}>
      <FilterForm />
      <table className=" table">
        <thead>
          <tr>
            <th>
              <h2>{props.title}</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <NoteInTable handleShowModal={handleShowModal} />
          <NoteInTable handleShowModal={handleShowModal} />
          <NoteInTable handleShowModal={handleShowModal} />
          <NoteInTable handleShowModal={handleShowModal} />
          <NoteInTable handleShowModal={handleShowModal} />
          <NoteInTable handleShowModal={handleShowModal} />
        </tbody>
      </table>
      <div className="text-center">
        <NoteShowModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default NoteManageBody;

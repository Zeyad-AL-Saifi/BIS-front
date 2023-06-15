import FilterForm from "./filterForm";
import NoteInTable from "./NoteInTable";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
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
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>The Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>This is the content of the modal.</p>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-secondary" onClick={handleCloseModal}>
                Close
              </button>
            </Modal.Footer>
          </Modal>
        </div>
    </div>
  );
};

export default NoteManageBody;

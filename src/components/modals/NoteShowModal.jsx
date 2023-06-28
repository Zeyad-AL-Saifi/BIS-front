import React from "react";
import { Modal } from "react-bootstrap";
import SmallBtn from "../public-components/Buttons/SmallBtn";

const NoteShowModal = ({ item, showModal, handleCloseModal }) => {
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>The Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{item.note}</p>
        </Modal.Body>
        <Modal.Footer>
          <SmallBtn
            handleClick={handleCloseModal}
            color={"secondary"}
            text={"Close"}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NoteShowModal;

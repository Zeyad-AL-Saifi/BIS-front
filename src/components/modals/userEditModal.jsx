import React from "react";
import { Button, Modal } from "react-bootstrap";
import EditTeacherForm from "../form/EditTeacherForm";
import EditStudentForm from "../form/EditStudentForm";

const UserEditModal = ({ user, handleCloseModal, showModal, item }) => {
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {user === "std" ? (
            <EditStudentForm item={item} handleCloseModal={handleCloseModal} />
          ) : (
            <EditTeacherForm item={item} handleCloseModal={handleCloseModal} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserEditModal;

import React from "react";
import { Button, Modal } from "react-bootstrap";
import StudentForm from "../form/StudentForm";
import TeacherForm from "../form/TeacherForm";

const UserEditModal = ({ user, handleCloseModal, showModal }) => {
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {user === "std" ? <StudentForm /> : <TeacherForm />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserEditModal;

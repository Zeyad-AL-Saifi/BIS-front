import React from "react";
import { Modal } from "react-bootstrap";
import EditTeacherForm from "../form/EditTeacherForm";
import EditStudentForm from "../form/EditStudentForm";
import SmallBtn from "../public-components/Buttons/SmallBtn";

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

export default UserEditModal;

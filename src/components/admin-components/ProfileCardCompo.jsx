import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { Button, Modal } from "react-bootstrap";
import TeacherForm from "../form/TeacherForm";
import StudentForm from "../form/StudentForm";

const ProfileCardCompo = ({ user }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div>
      <div className="row p-2 ">
        <ProfileCard handleShowModal={handleShowModal} />
        <ProfileCard handleShowModal={handleShowModal} />
        <ProfileCard handleShowModal={handleShowModal} />
        <ProfileCard handleShowModal={handleShowModal} />
        <ProfileCard handleShowModal={handleShowModal} />
        <ProfileCard handleShowModal={handleShowModal} />
      </div>
      <div className="text-center">
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Update user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {user ==='std' ?<StudentForm /> : <TeacherForm />}
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
    </div>
  );
};

export default ProfileCardCompo;

import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { Button, Modal } from "react-bootstrap";
import TeacherForm from "../form/TeacherForm";
import StudentForm from "../form/StudentForm";
import UserEditModal from "../modals/userEditModal";

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
        <UserEditModal
          user={user}
          handleCloseModal={handleCloseModal}
          showModal={showModal}
        />
      </div>
    </div>
  );
};

export default ProfileCardCompo;

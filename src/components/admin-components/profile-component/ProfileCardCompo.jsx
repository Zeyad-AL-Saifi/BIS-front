import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import UserEditModal from '../../modals/userEditModal'
const ProfileCardCompo = ({ user, records, handelDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [item, setItem] = useState({});
  const handleShowModal = (item) => {
    setItem(item);
    setShowModal(true);
  };

  const deletehadeler = (item) => {
    if (window.confirm(`Do you really want to delete ${item.full_name}`)) {
      if (user === "std") {
        handelDelete(item.id_student);
      } else {
        handelDelete(item.teacher_id);
      }
    }
  };



  
  const data = records.map((ele,index) => {
    return (
      <ProfileCard
        index={index}
        ele={ele}
        handelDelete={() => {
          deletehadeler(ele);
        }}
        handleShowModal={handleShowModal}
      />
    );
  });

  return (
    <>
      <div className="row p-2 ">{data}</div>
      <div className="text-center">
        <UserEditModal
          item={item}
          user={user}
          handleCloseModal={handleCloseModal}
          showModal={showModal}
        />
      </div>
    </>
  );
};

export default ProfileCardCompo;

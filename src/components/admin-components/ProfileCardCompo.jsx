import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import UserEditModal from "../modals/userEditModal";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteteachers,
  getAllteachers,
} from "../../store/profile/teachers/teachersSlice";
import Check from "../../utils/guard/load/Check";
import { useCallback } from "react";
const ProfileCardCompo = ({ user }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [item, setItem] = useState({});
  const handleShowModal = (item) => {
    setItem(item);
    setShowModal(true);
  };
  const { loading, error, records } = useSelector((state) => state.teachers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllteachers());
  }, [dispatch]);

  const handelDelete = useCallback(
    (id) => {
      dispatch(deleteteachers(id));
    },
    [dispatch]
  );
  const deletehadeler = (item) => {
    if (window.confirm(`Do you really want to delete ${item.full_name}`)) {
      handelDelete(item.teacher_id);
    }
  };
  const data = records.map((ele) => {
    return (
      <ProfileCard
        ele={ele}
        handelDelete={() => { deletehadeler(ele) }}
        handleShowModal={handleShowModal}
      />
    );
  });

  return (
    <Check loading={loading} error={error}>
      <div className="row p-2 ">{data}</div>
      <div className="text-center">
        <UserEditModal
          item={item}
          user={user}
          handleCloseModal={handleCloseModal}
          showModal={showModal}
        />
      </div>
    </Check>
  );
};

export default ProfileCardCompo;

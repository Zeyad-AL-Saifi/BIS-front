import React from "react";
import { memo } from "react";

const ProfileCard = ({ handleShowModal, ele, handelDelete }) => {
  return (
    <div className="card col-md-auto col-sm-2  m-2" style={{ width: "18rem" }}>
      <img
        src="https://picsum.photos/200/300"
        className="card-img-top"
        alt="Your"
      />
      <div className="card-body">
        <h6 className="card-title">Name : {ele.full_name}</h6>
        <h6 className="card-title">Address : {ele.address}</h6>
        <h6 className="card-title">Mobile number: {ele.mobile_number}</h6>
        <h6 className="card-title">Major: {ele.major}</h6>
        <h6 className="card-title">Email : {ele.email}</h6>
        <button
          className="btn btn-danger w-50 "
          onClick={() => handelDelete(ele.teacher_id)}
        >
          Delete
        </button>
        <button
          className="btn btn-success w-50"
          onClick={() => handleShowModal(ele)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default memo(ProfileCard);

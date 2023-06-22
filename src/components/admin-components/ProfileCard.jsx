import React from "react";
import { memo } from "react";

const ProfileCard = ({ handleShowModal, ele, handelDelete, index }) => {
  

  return (
    <div
      id="customCardtwo"
      className="card col-md-auto col-sm-2  m-2 "
      style={{ width: "18rem" }}
    >
      
      <img
        src={`https://picsum.photos/id/${index+411}/200/250`}
        className="card-img-top"
        alt="Your"
      />
      <div className={`card-body ${ele.is_admin ? "bg-warning text-white" : "bg-light"}`}>
        <h6 className="card-title">Name : {ele.full_name}</h6>
        <h6 className="card-title">class_number : {ele.class_number}</h6>
        <h6 className="card-title">data_of_birth : {ele.data_of_birth}</h6>
        <h6 className="card-title">Address : {ele.address}</h6>
        <h6 className="card-title">Mobile number: {ele.mobile_number}</h6>
        <h6 className="card-title">Major: {ele.major}</h6>
        <h6 className="card-title">Email : {ele.email}</h6>
        <button className="btn btn-danger w-50 " onClick={() => handelDelete()}>
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

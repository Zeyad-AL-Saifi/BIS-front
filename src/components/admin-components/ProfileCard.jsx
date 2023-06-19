import React from "react";

const ProfileCard = ({ handleShowModal }) => {
  return (
    <div className="card col-md-auto col-sm-2  m-2" style={{ width: "18rem" }}>
      <img
        src="https://picsum.photos/200/300"
        className="card-img-top"
        alt="Your"
      />
      <div className="card-body">
        <h6 className="card-title">Name :</h6>
        <h6 className="card-title">Address :</h6>
        <h6 className="card-title">Mobile number:</h6>
        <h6 className="card-title">Major:</h6>
        <h6 className="card-title">Email :</h6>
        <button className="btn btn-danger w-50 ">Delete</button>
        <button className="btn btn-success w-50" onClick={handleShowModal}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;

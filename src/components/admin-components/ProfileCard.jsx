import React from "react";

const ProfileCard = () => {
  return (
    <div>
      <div className="row p-2 ">
        <div
          className="card col-md-auto col-sm-2  m-3"
          style={{ width: "18rem" }}
        >
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
            <button className="btn btn-success w-50">Edit</button>
          </div>
        </div>
        <div className="card col-md-4 col-sm-1  m-3" style={{ width: "18rem" }}>
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
            <button className="btn btn-danger w-50">Delete</button>
            <button className="btn btn-success w-50">Edit</button>
          </div>
        </div>
        <div className="card col-md-4 col-sm-1  m-3" style={{ width: "18rem" }}>
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
            <button className="btn btn-danger w-50">Delete</button>
            <button className="btn btn-success w-50">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

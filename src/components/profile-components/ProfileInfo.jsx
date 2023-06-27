import React from "react";

const ProfileInfo = ({ userInfo }) => {
  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body m-3">
              <h1 className="card-title">{userInfo.full_name.toUpperCase()}</h1>
              <hr /> <p className="card-text">Address: {userInfo.address}</p>
              <p className="card-text">
                Mobile Number: {userInfo.mobile_number}
              </p>
              <p className="card-text">Gender: {userInfo.gender}</p>
              {userInfo.major ? (
                <p className="card-text">Majoring: {userInfo.major}</p>
              ) : (
                <p className="card-text">
                  Class Number: {userInfo.class_number}
                </p>
              )}
              {userInfo.date_of_birth ? (
                <p className="card-text">
                  Date of Birth: {userInfo.date_of_birth}
                </p>
              ) : (
                <p
                  className={`card-text ${
                    userInfo.is_admin ? "bg-success" : "bg-danger"
                  } text-white`}
                >
                  Is Admin: {userInfo.is_admin.toString()}
                </p>
              )}
              <p className="card-text">Email: {userInfo.email}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 ">
          <div className="rounded-circle bg-light border img-container">
            <img
              src={
                userInfo.student_image
                  ? userInfo.student_image
                  : userInfo.teacher_image
              }
              className="card-img-top rounded-circle img-fluid"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

import React from "react";

const ProfileInfo = ({ userInfo }) => {
  return (
    // <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 p-5">
    //   <div className="data">
    //     <h2>Name :{userInfo.full_name.toUpperCase()}</h2>
    //     <h5>Address : {userInfo.address}</h5>
    //     <h5>Mobile Number: {userInfo.mobile_number}</h5>
    //     <h5>Gender : {userInfo.gender}</h5>
    //     {userInfo.major ? (
    //       <h5>Majoring: {userInfo.major}</h5>
    //     ) : (
    //       <h5>Class Number: {userInfo.class_number}</h5>
    //     )}
    //     {userInfo.data_of_birth ? (
    //       <h5>Date of Birth: {userInfo.data_of_birth}</h5>
    //     ) : (
    //       <h5>is Admin : {userInfo.is_admin}</h5>
    //     )}
    //     <h5>Email : {userInfo.email}</h5>
    //   </div>
    //   <div className="image">
    //     <img src="https://picsum.photos/200/300" alt="d" />
    //   </div>
    // </div>
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{userInfo.full_name.toUpperCase()}</h2>
              <p className="card-text">Address: {userInfo.address}</p>
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
                <p className="card-text">Is Admin: {userInfo.is_admin}</p>
              )}
              <p className="card-text">Email: {userInfo.email}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div style={{ maxWidth: "200px", margin: "0 auto" }}>
            <img
              src="https://picsum.photos/200/200"
              className="card-img-top rounded-circle img-fluid"
              alt="Profile"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

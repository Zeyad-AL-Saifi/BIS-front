import React from "react";

const ProfileInfo = () => {
  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      <div className="data">
        <h1>Name :</h1>
        <h5>Address :</h5>
        <h5>Mobile Number:</h5>
        <h5>Gender :</h5>
        <h5>Data Of Birth :</h5>
        <h5>Email :</h5>
        <h5>Class Number :</h5>
        <h5>Email</h5>
      </div>
      <div className="image">
        <img src="https://picsum.photos/200/300" alt="d" />
      </div>
    </div>
  );
};

export default ProfileInfo;

import React from "react";

const ProfileInfo = ({ userInfo }) => {
  return (
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 p-5">
      <div className="data">
        <h1>Name :{userInfo.full_name}</h1>
        <h5>Address : {userInfo.address}</h5>
        <h5>Mobile Number: {userInfo.mobile_number}</h5>
        <h5>Gender : {userInfo.gender}</h5>
        <h5>Majoring: {userInfo.major}</h5>
        <h5>Email : {userInfo.email}</h5>
      </div>
      <div className="image">
        <img src="https://picsum.photos/200/300" alt="d" />
      </div>
    </div>
  );
};

export default ProfileInfo;

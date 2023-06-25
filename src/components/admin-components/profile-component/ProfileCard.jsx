import { memo } from "react";
import logo from "../../../assets/images/admin-icon.jpg";
const ProfileCard = ({ handleShowModal, ele, handelDelete, index }) => {
  return (
    <div
      id="customCardtwo"
      className="card col-md-auto col-sm-2  m-2 "
      style={{ width: "24rem" }}
    >
      <img
        style={{ width: "357px", height: "350px" }}
        src={`https://picsum.photos/250/350`}
        className="card-img-top"
        alt="Your"
      />
      <div>
        <hr />
        <h5 className="card-title p-y-2">
          {ele.full_name.toUpperCase().slice(0, 25)}
          <span>
            {ele.is_admin ? (
              <img
                alt=""
                src={logo}
                style={{ position: "absolute", top: 0, right: 0  ,width:'50px' ,margin:'10px'}}
              />
            ) : (
              ""
            )}
          </span>
        </h5>
        <hr />
        <h6 className="card-title p-y-2">
          {ele.class_number
            ? `Class Number : ${ele.class_number}`
            : `Majoring :${ele.major}`}
        </h6>

        <h6 className="card-title p-y-2">
          {ele.date_of_birth ? `Date of birth : ${ele.date_of_birth}` : ``}
        </h6>
        <h6 className="card-title p-y-2">Address : {ele.address}</h6>
        <h6 className="card-title p-y-2">Mobile number: {ele.mobile_number}</h6>
        <h6 className="card-title p-y-2">Email : {ele.email}</h6>
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

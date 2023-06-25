import { memo } from "react";

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
      <div
        className={`card-body ${
          ele.is_admin ? "bg-primary text-white" : "bg-light"
        }`}
      >
        <hr />
        <h5 className="card-title">{ele.full_name.toUpperCase().slice(0,25)} </h5>
        <hr />
        <h6 className="card-title">
          {ele.class_number
            ? `Class Number : ${ele.class_number}`
            : `Majoring :${ele.major}`}
        </h6>
        
        <h6 className="card-title">
          {ele.date_of_birth ? `Date of birth : ${ele.date_of_birth}` : ``}
        </h6>
        <h6 className="card-title">Address : {ele.address}</h6>
        <h6 className="card-title">Mobile number: {ele.mobile_number}</h6>
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

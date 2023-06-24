import React from "react";
import Login from "../../components/body/public-views-body/login";
import { loginStudent } from "../../store/auth/auth";
import { useDispatch } from "react-redux";

const StudentLoginView = () => {
  const dispatch = useDispatch();

  const handleSubmit = (item) => {
    dispatch(loginStudent(item));
  };
  return (
    <div>
      <Login handleSubmit={handleSubmit} color={"#FFAE42"} />
    </div>
  );
};

export default StudentLoginView;

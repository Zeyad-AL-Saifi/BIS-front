import React from "react";
import Login from "../../components/body/public-views-body/login";
import { loginStudent } from "../../store/auth/auth";
import { useDispatch, useSelector } from "react-redux";

const StudentLoginView = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = (item) => {
    dispatch(loginStudent(item))
      .then((action) => {
        const message = action.payload.message;
        alert(message);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <Login handleSubmit={handleSubmit} color={"#FFAE42"} loading={loading} />
    </>
  );
};

export default StudentLoginView;

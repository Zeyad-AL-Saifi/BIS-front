import React from "react";
import Login from "../../components/body/public-views-body/login";
import { loginStudent } from "../../store/auth/auth";
import { useDispatch, useSelector } from "react-redux";
import Check from "../../utils/guard/load/Check";

const StudentLoginView = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = (item) => {
    dispatch(loginStudent(item));
  };
  return (
    <Check loading={loading}>
      <Login handleSubmit={handleSubmit} color={"#FFAE42"} />
    </Check>
  );
};

export default StudentLoginView;

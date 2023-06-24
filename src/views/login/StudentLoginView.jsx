import React from "react";
import Login from "../../components/body/public-views-body/login";
import { loginStudent } from "../../store/auth/auth";
import { useDispatch, useSelector } from "react-redux";

const StudentLoginView = () => {
  const { isStudent, userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (item) => {
    dispatch(loginStudent(item)).then(() => {
      if (!isStudent && userInfo.error) {
        alert(userInfo.error);
      } else {
        return;
      }
    });
  };
  return (
    <div>
      <Login handleSubmit={handleSubmit} color={"#FFAE42"} />
    </div>
  );
};

export default StudentLoginView;

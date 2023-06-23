import React from "react";
import Login from "../../components/body/public-views-body/login";
import Check from "../../utils/guard/load/Check";
import { loginStudent } from "../../store/auth/auth";
import { useDispatch, useSelector } from "react-redux";

const StudentLoginView = () => {
  const { loading, error, isStudent, userInfo } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

 

  const handleSubmit = (item) => {
    dispatch(loginStudent(item)).then(() => {
      if (!isStudent && !userInfo) {
        alert(userInfo.error);
      } else {
        return;
      }
    });
  };
  return (
    <div>
      <Check loading={loading} error={error}>
        <Login handleSubmit={handleSubmit} color={"#FFAE42"} />
      </Check>
    </div>
  );
};

export default StudentLoginView;

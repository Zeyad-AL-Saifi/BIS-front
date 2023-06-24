import React from "react";
import TeacherBody from "../../components/body/public-views-body/TeacherBody";
import { withGuardTeacher } from "../../utils/guard/auth/WithGuard";
import { useSelector } from "react-redux";

import "../../utils/css/profile.css";

const TeacherView = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <TeacherBody userInfo={userData || userInfo} />
    </div>
  );
};

export default withGuardTeacher(TeacherView);

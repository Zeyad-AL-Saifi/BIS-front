import React, { useState } from "react";
import TeacherBody from "../../components/body/public-views-body/TeacherBody";
import { withGuardTeacher } from "../../utils/guard/auth/WithGuard";
import { useSelector } from "react-redux";
import Check from "../../utils/guard/load/Check";
import "../../utils/css/profile.css";

const TeacherView = () => {
  const { loading, error, userInfo } = useSelector((state) => state.auth);

  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <Check loading={loading} error={error}>
      <TeacherBody userInfo={userData || userInfo} />
    </Check>
  );
};

export default withGuardTeacher(TeacherView);

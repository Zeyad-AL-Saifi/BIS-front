import React from "react";
import TeacherBody from "../../components/body/public-views-body/TeacherBody";
import { withGuardTeacher } from "../../utils/guard/auth/WithGuard";
import { useSelector } from "react-redux";
import Check from "../../utils/guard/load/Check";
import "../../utils/css/profile.css";

const TeacherView = () => {
  const { loading, error, userInfo } = useSelector((state) => state.auth);

  return (
    <Check loading={loading} error={error}>
      <TeacherBody userInfo={userInfo} />
    </Check>
  );
};

export default withGuardTeacher(TeacherView);

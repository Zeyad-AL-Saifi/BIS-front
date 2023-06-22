import React from "react";
import "../../utils/css/profile.css";
import StudentBody from "../../components/body/public-views-body/StudentBody";
import { withGuardStudent } from "../../utils/guard/auth/WithGuard";
import Check from "../../utils/guard/load/Check";
import { useSelector } from "react-redux";

const StudentView = () => {
  const { loading, error, userInfo } = useSelector((state) => state.auth);

  return (
    <Check loading={loading} error={error}>
      <StudentBody userInfo={userInfo} />
    </Check>
  );
};

export default withGuardStudent(StudentView);

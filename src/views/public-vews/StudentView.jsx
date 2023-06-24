import React from "react";
import "../../utils/css/profile.css";
import StudentBody from "../../components/body/public-views-body/StudentBody";
import { withGuardStudent } from "../../utils/guard/auth/WithGuard";

import { useSelector } from "react-redux";

const StudentView = () => {
  const { loading, error, userInfo } = useSelector((state) => state.auth);

  const userData = JSON.parse(localStorage.getItem("user"));

  return (
<div>      <StudentBody userInfo={userData || userInfo} />
    </div>
  );
};

export default withGuardStudent(StudentView);

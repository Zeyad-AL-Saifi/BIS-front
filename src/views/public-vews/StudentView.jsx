import React from "react";
import "../../utils/css/profile.css";
import StudentBody from "../../components/body/public-views-body/StudentBody";
import { withGuardStudent } from "../../utils/guard/auth/WithGuard";

const StudentView = () => {
  return (
    <div>
      <StudentBody />
    </div>
  );
};

export default withGuardStudent(StudentView);

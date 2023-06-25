import { useSelector } from "react-redux";
import TeacherLoginView from "../../../views/login/TeacherLoginView";
import StudentLoginView from "../../../views/login/StudentLoginView";

const withGuardTeacher = (Component) => {
  const Guard = (props) => {
    const { isTeacher } = useSelector((state) => state.auth);

    const islogin = localStorage.getItem("isTeacher");

    return islogin || isTeacher ? (
      <Component {...props} />
    ) : (
      <>
        <TeacherLoginView />
      </>
    );
  };
  return Guard;
};

const withGuardStudent = (Component) => {
  const Guard = (props) => {
    const { isStudent } = useSelector((state) => state.auth);

    const islogin = localStorage.getItem("isStudent");

    return islogin || isStudent ? (
      <Component {...props} />
    ) : (
      <>
        <StudentLoginView />
      </>
    );
  };
  return Guard;
};

const withGuardAdmin = (Component) => {
  const Guard = (props) => {
    const isAdminStorge = localStorage.getItem("isAdmin");
    const islogin = localStorage.getItem("isTeacher");

    const { isTeacher, isAdmin } = useSelector((state) => state.auth);
    return (isTeacher || islogin) && (isAdmin || isAdminStorge) ? (
      <Component {...props} />
    ) : (
      <>
        <TeacherLoginView />
      </>
    );
  };
  return Guard;
};
export { withGuardTeacher, withGuardStudent, withGuardAdmin };

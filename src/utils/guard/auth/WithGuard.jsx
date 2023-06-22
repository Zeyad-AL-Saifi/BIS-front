import { useSelector } from "react-redux";
import TeacherLoginView from "../../../views/login/TeacherLoginView";
import StudentLoginView from "../../../views/login/StudentLoginView";

const withGuardTeacher = (Component) => {
  const Guard = (props) => {
    const { isTecher } = useSelector((state) => state.auth);
    return isTecher ? (
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
    return isStudent ? (
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
    const { isTecher, isAdmin } = useSelector((state) => state.auth);
    return isTecher && isAdmin ? (
      <Component {...props} />
    ) : (
      <>
        <TeacherLoginView />
      </>
    );
  };
  return Guard;
};
export { withGuardTeacher, withGuardStudent ,withGuardAdmin};

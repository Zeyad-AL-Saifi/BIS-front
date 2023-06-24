import { useDispatch } from "react-redux";

import Login from "../../components/body/public-views-body/login";
import { loginTeacher } from "../../store/auth/auth";
const TeacherLoginView = () => {
  const dispatch = useDispatch();

  const handleSubmit = (item) => {
    dispatch(loginTeacher(item));
  };
  return (
    <div>
      <Login handleSubmit={handleSubmit} color={"#92D053"} />;
    </div>
  );
};

export default TeacherLoginView;

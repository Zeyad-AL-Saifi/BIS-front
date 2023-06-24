import { useDispatch, useSelector } from "react-redux";

import Login from "../../components/body/public-views-body/login";
import { loginTeacher } from "../../store/auth/auth";
const TeacherLoginView = () => {
  const { isTeacher, userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = async (item) => {
    await dispatch(loginTeacher(item));
  };
  return (
    <div>
      <Login handleSubmit={handleSubmit} color={"#92D053"} />;
    </div>
  );
};

export default TeacherLoginView;

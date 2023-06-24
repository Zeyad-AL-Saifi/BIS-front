import { useDispatch, useSelector } from "react-redux";

import Login from "../../components/body/public-views-body/login";
import { loginTeacher } from "../../store/auth/auth";
import Check from "../../utils/guard/load/Check";
const TeacherLoginView = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (item) => {
    dispatch(loginTeacher(item));
  };
  return (
    <Check loading={loading}>
      <Login handleSubmit={handleSubmit} color={"#92D053"} />;
    </Check>
  );
};

export default TeacherLoginView;

import { useDispatch, useSelector } from "react-redux";
import Check from "../../utils/guard/load/Check";
import Login from "../../components/body/public-views-body/login";
import { loginTeacher }from '../../store/auth/auth'
const TeacherLoginView = () => {
  const { loading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (item) => {
    dispatch(loginTeacher(item));
  };
  return (
    <Check loading={loading} error={error}>
      <Login handleSubmit={handleSubmit} />
    </Check>
  );
};

export default TeacherLoginView;

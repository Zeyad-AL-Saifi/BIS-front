import { useDispatch, useSelector } from "react-redux";

import Login from "../../components/body/public-views-body/login";
import { loginTeacher } from "../../store/auth/auth";
const TeacherLoginView = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (item) => {
    dispatch(loginTeacher(item))
      .then((action) => {
        const message = action.payload.message;
        alert(message);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
    
      <Login handleSubmit={handleSubmit} color={"#92D053"} loading={loading} />;
    </>
  );
};

export default TeacherLoginView;

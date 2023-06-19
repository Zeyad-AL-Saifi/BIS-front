import { useSelector } from "react-redux";

const withGuard = (Component) => {
  const Guard = (props) => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    return isLoggedIn ? (
      <Component {...props} />
    ) : (
      <>
        <h1>please login </h1>
      </>
    );
  };
  return Guard;
};

export default withGuard;

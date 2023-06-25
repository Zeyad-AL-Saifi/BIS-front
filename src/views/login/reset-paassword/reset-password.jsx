import { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotThePassword } from "../../../store/password/passwordSlice";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotThePassword(email));
    setEmail("");
    alert("Check your email ℹ️");
  };
  return (
    <section className="vh-100 gradient-custom ">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card  text-white bg-primary"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">
                    Reset Password
                  </h2>
                  <p className="text-white-50 mb-5">
                    Enter your Email and get the link to reset your paasswrd
                  </p>
                  <form onSubmit={handelSubmit}>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        value={email}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typeEmailX">
                        Email
                      </label>
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Send the Code
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchemaPasswordReset } from "../../../utils/validation/validationSchema";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../store/password/passwordSlice";
import { useNavigate } from "react-router-dom";

const AfterSendCode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log(values.password);
    dispatch(resetPassword(values.password)).then(() => {
      navigate("/");
    });
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card text-white bg-primary"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">
                    Reset Password
                  </h2>
                  <p className="text-white-50 mb-5">Enter the new password</p>
                  <Formik
                    initialValues={{ password: "", passwordConf: "" }}
                    validationSchema={validationSchemaPasswordReset}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <div className="form-outline form-white mb-4">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            className="form-control form-control-lg"
                            placeholder="password"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-warning"
                          />
                        </div>
                        <div className="form-outline form-white mb-4">
                          <label className="form-label" htmlFor="passwordConf">
                            Confirm password
                          </label>
                          <Field
                            type="password"
                            id="passwordConf"
                            name="passwordConf"
                            className="form-control form-control-lg"
                            placeholder="confirm password"
                          />
                          <ErrorMessage
                            name="passwordConf"
                            component="div"
                            className="text-warning"
                          />
                        </div>
                        <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                          //disabled={isSubmitting}
                        >
                          Submit
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterSendCode;

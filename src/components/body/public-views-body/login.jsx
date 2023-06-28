import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { validationSchemaLogin } from "../../../utils/validation/validationSchema";
import { FormGroup, Form } from "react-bootstrap";
import Check from "../../../utils/guard/load/Check";
const Login = ({ handleSubmit, color, loading }) => {
  const formik = useFormik({
    initialValues: {
      email: null,
      password: null,
    },
    validationSchema: validationSchemaLogin,
    onSubmit: (values) => {
      localStorage.clear();
      handleSubmit({ email: values.email, password: values.password });
    },
  });

  return (
    <Check loading={loading}>
      <section className="vh-100 gradient-custom ">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card  text-white"
                style={{ borderRadius: "1rem", backgroundColor: color }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>
                    <Form onSubmit={formik.handleSubmit}>
                      <div className="form-outline form-white mb-4">
                        <FormGroup>
                          <Form.Label htmlFor="email">Email :</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            isInvalid={!!formik.errors.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.email}
                          </Form.Control.Feedback>
                        </FormGroup>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <FormGroup>
                          <Form.Label htmlFor="password">Password :</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            isInvalid={!!formik.errors.password}
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.password}
                          </Form.Control.Feedback>
                        </FormGroup>
                      </div>

                      <p className="small mb-5 pb-lg-2">
                        <p className="text-white" href="#!">
                          Forgot password?{" "}
                          <Link to="/resetpassword" className="text-white">
                            reset your password
                          </Link>
                        </p>
                      </p>
                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                    </Form>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?
                      <p className="text-white-50 fw-bold">
                        Go to the admin to create one
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Check>
  );
};

export default Login;

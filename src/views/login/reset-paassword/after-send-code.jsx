// const AfterSendCode = () => {
//   return (
//     <section className="vh-100 gradient-custom ">
//       <div className="container py-5 h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//             <div
//               className="card  text-white bg-primary"
//               style={{ borderRadius: "1rem" }}
//             >
//               <div className="card-body p-5 text-center">
//                 <div className="mb-md-5 mt-md-4 pb-5">
//                   <h2 className="fw-bold mb-2 text-uppercase">
//                     Reset Password
//                   </h2>
//                   <p className="text-white-50 mb-5">Enter the new password</p>
//                   <form onSubmit={{}}>
//                     <div className="form-outline form-white mb-4">
//                       <input
//                         placeholder="password"
//                         type="password"
//                         id="password"
//                         className="form-control form-control-lg"
//                       />
//                       <label className="form-label" for="password">
//                       Password
//                       </label>
//                     </div>
//                     <div className="form-outline form-white mb-4">
//                       <input
//                         type="password-conf"
//                         id="password-conf"
//                         placeholder="confirm password"
//                         className="form-control form-control-lg"
//                       />
//                       <label className="form-label" for="password-conf">
//                       Confirm password
//                       </label>
//                     </div>

//                     <button
//                       className="btn btn-outline-light btn-lg px-5"
//                       type="submit"
//                     >
//                       Submit
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AfterSendCode;
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchemaPasswordReset } from "../../../utils/validation/validationSchema";

const AfterSendCode = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
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
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            className="form-control form-control-lg"
                            placeholder="password"
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        <div className="form-outline form-white mb-4">
                          <Field
                            type="password"
                            id="passwordConf"
                            name="passwordConf"
                            className="form-control form-control-lg"
                            placeholder="confirm password"
                          />
                          <label className="form-label" htmlFor="passwordConf">
                            Confirm password
                          </label>
                          <ErrorMessage
                            name="passwordConf"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                          disabled={isSubmitting}
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

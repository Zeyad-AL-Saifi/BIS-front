import * as yup from "yup";
const loginSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const registerSchemaTeacher = yup.object({
  full_name: yup.string().trim().required("Name is required").min(8, "Enter your full name!").max(50, "Too Log"),
  address: yup.string().trim().min(2).max(25).required("Address is required"),
  mobile_number: yup.string().min(8).max(15).required("MobileNumber is required"),
  major: yup.string().trim().min(1).required("Majoring is required"),
  password: yup.string().trim().min(8).max(50).required("Password is required"),
  email: yup.string().trim().email().min(7).max(25).required("Email is required"),
  is_admin: yup.boolean(),
  gender: yup.string().required("Gender is required"),
  teacher_image: yup.string()

});

const registerSchemaStudents = yup.object({
  full_name: yup.string().trim().required("Name is required").min(8, "Enter your full name!").max(50, "Too Log"),
  address: yup.string().trim().min(2).max(25).required("Address is required"),
  mobile_number: yup.string().min(8).max(15).required("MobileNumber is required"),
  gender: yup.string().required("Gender is required"),
  date_of_birth: yup.string().trim().min(1).required("Date of birth is required"),
  class_number: yup.number(),
  password: yup.string().trim().min(8).max(50).required("Password is required"),
  email: yup.string().trim().email().min(7).max(25).required("Email is required"),
  student_image: yup.string()

});

const updateTeacherSchema = yup.object({
  full_name: yup.string().trim().required("Name is required").min(8, "Enter your full name!").max(50, "Too Log"),
  address: yup.string().trim().min(2).max(25).required("Address is required"),
  mobile_number: yup.string().min(8).max(15).required("MobileNumber is required"),
  major: yup.string().trim().min(1).required("Majoring is required"),
  email: yup.string().trim().email().min(7).max(25).required("Email is required"),
  is_admin: yup.boolean(),
});


const updateStudentsSchema = yup.object({
  full_name: yup.string().trim().required("Name is required").min(8, "Enter your full name!").max(50, "Too Log"),
  address: yup.string().trim().min(2).max(25).required("Address is required"),
  mobile_number: yup.string().min(8).max(15).required("MobileNumber is required"),
  date_of_birth: yup.string().trim().min(1).required("Data of birth is required"),
  email: yup.string().trim().email().min(7).max(25).required("Email is required"),
  class_number: yup.number()
});

const validationSchema = yup.object().shape({
  note: yup.string().required("note is required"),
  forHow: yup.string().required("for How is required"),
});


const validationSchemaLogin = yup.object().shape({
  email: yup.string().email().trim().required("email is required"),
  password: yup.string().trim().min(8).required("password is required"),
});

const validationSchemaPasswordReset = yup.object().shape({
  password: yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  passwordConf: yup.string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export { loginSchema, validationSchemaLogin, registerSchemaStudents, registerSchemaTeacher, updateTeacherSchema, updateStudentsSchema, validationSchema, validationSchemaPasswordReset };

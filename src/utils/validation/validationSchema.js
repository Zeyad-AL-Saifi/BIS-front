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

const registerSchemaTecher = yup.object({
  full_name: yup.string().trim().required("Name is required").min(8,"Enter your full name!").max(50,"Too Log"),
  address: yup.string().trim().min(2).max(25).required("Address is required"),
  mobile_number: yup.string().min(8).max(15).required("MobileNumber is required"),
  major: yup.string().trim().min(1).required("Majoring is required"),
  password: yup.string().trim().min(8).max(50).required("Password is required"),
  email: yup.string().trim().email().min(7).max(25).required("Email is required"),
  is_admin: yup.boolean(),
  gender:yup.string().required("Gender is required"),
  teacher_image:yup.string()
 
});

const updateTecherSchema = yup.object({
  full_name: yup.string().trim().required("Name is required").min(8,"Enter your full name!").max(50,"Too Log"),
  address: yup.string().trim().min(2).max(25).required("Address is required"),
  mobile_number: yup.string().min(8).max(15).required("MobileNumber is required"),
  major: yup.string().trim().min(1).required("Majoring is required"),
  email: yup.string().trim().email().min(7).max(25).required("Email is required"),
  is_admin: yup.boolean(),
});

export { loginSchema, registerSchemaTecher, updateTecherSchema };

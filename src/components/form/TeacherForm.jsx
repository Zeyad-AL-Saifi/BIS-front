import FormGroup from "./FormGroup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { registerSchemaTeacher } from "../../utils/validation/validationSchema";
import { registrationTeacher } from "../../store/profile/teachers/teachersSlice";
import { Cloud_Name, Upload_Preset } from "../../Api/cloudinaryConfig";
import { useState } from "react";

const TeacherForm = () => {
  const dispatch = useDispatch();
  const [image, setimage] = useState();

  const formik = useFormik({
    initialValues: {
      full_name: "",
      address: "",
      mobile_number: "",
      major: "",
      gender: "",
      password: "",
      email: "",
      is_admin: false,
      teacher_image: "",
    },
    validationSchema: registerSchemaTeacher,
    onSubmit: (values, { resetForm }) => {
      values.teacher_image = image;
      dispatch(registrationTeacher(values))
        .then((action) => {
          const message = action.payload.message;
          alert(message);
          resetForm();
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Form.Label htmlFor="name">Teacher Full Name :</Form.Label>
        <Form.Control
          type="text"
          name="full_name"
          className="form-control"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.full_name}
          isInvalid={!!formik.errors.full_name}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.full_name}
        </Form.Control.Feedback>
      </FormGroup>
      <FormGroup>
        <Form.Label htmlFor="address">Address :</Form.Label>
        <Form.Control
          type="text"
          name="address"
          className="form-control"
          id="address"
          onChange={formik.handleChange}
          value={formik.values.address}
          isInvalid={!!formik.errors.address}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.address}
        </Form.Control.Feedback>
      </FormGroup>
      <FormGroup>
        <Form.Label htmlFor="number">Mobile Number :</Form.Label>
        <Form.Control
          type="text"
          name="mobile_number"
          className="form-control"
          id="number"
          onChange={formik.handleChange}
          value={formik.values.mobile_number}
          isInvalid={!!formik.errors.mobile_number}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.mobile_number}
        </Form.Control.Feedback>
      </FormGroup>
      <FormGroup>
        <Form.Label htmlFor="magor">Majoring</Form.Label>
        <Form.Control
          type="text"
          name="major"
          className="form-control"
          id="magor"
          onChange={formik.handleChange}
          value={formik.values.major}
          isInvalid={!!formik.errors.major}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.major}
        </Form.Control.Feedback>
      </FormGroup>

      <FormGroup>
        <Form.Label>
          Gender :
          <Form.Check
            className="m-1"
            type="radio"
            name="gender"
            value="male"
            onChange={formik.handleChange}
          />
          Male
        </Form.Label>
        <Form.Label>
          <Form.Check
            className="m-1"
            type="radio"
            name="gender"
            value="female"
            onChange={formik.handleChange}
          />
          Female
        </Form.Label>
      </FormGroup>

      <FormGroup>
        <Form.Label htmlFor="email">Email :</Form.Label>
        <Form.Control
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          isInvalid={!!formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </FormGroup>

      <FormGroup>
        <Form.Label htmlFor="password">Password :</Form.Label>

        <Form.Control
          type="password"
          className="form-control"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          isInvalid={!!formik.errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.password}
        </Form.Control.Feedback>
      </FormGroup>

      <FormGroup>
        <Form.Label>
          Is Admin ?
          <Form.Check
            className="m-2"
            type="checkbox"
            name="is_admin"
            onChange={formik.handleChange}
            value={formik.values.is_admin}
            isInvalid={!!formik.errors.is_admin}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.is_admin}
          </Form.Control.Feedback>
        </Form.Label>
      </FormGroup>

      <FormGroup>
        <Button
          id="password"
          name="password"
          onClick={() => {
            // Open Cloudinary Upload Widget
            window.cloudinary.openUploadWidget(
              {
                cloudName: Cloud_Name,
                uploadPreset: Upload_Preset,
                maxFiles: 1,
                resourceType: "image",
              },
              (error, result) => {
                if (!error && result && result.event === "success") {
                  const imagePath = result.info.secure_url;
                  setimage(imagePath);
                }
              }
            );
          }}
          value={formik.values.password}
        >
          Upload image
        </Button>
      </FormGroup>
      <Button className="w-100" variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};

export default TeacherForm;

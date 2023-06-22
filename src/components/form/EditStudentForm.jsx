import { useDispatch } from "react-redux";
import FormGroup from "../../components/form/FormGroup";
import { useFormik } from "formik";

import { updateStudentsSchema } from "../../utils/validation/validationSchema";
import { Button, Form } from "react-bootstrap";
import { getAllStudents, updateStudents } from "../../store/profile/students/studentsSlice";

const EditStudentForm = ({ item, handleCloseModal }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: item,
    validationSchema: updateStudentsSchema,
    onSubmit: (values) => {
      dispatch(updateStudents(values))
        .then((action) => {
          const message = action.payload.message;
          alert(message);
        })
        .then(() => {
          dispatch(getAllStudents());
        })
        .then(handleCloseModal)
        .catch((error) => {
          alert(error.message);
        });
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Form.Label htmlFor="name">Student Full Name :</Form.Label>
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
        <Form.Label htmlFor="data_of_birth">Data of birth</Form.Label>
        <Form.Control
          type="text"
          name="major"
          className="form-control"
          id="data_of_birth"
          onChange={formik.handleChange}
          value={formik.values.data_of_birth}
          isInvalid={!!formik.errors.data_of_birth}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.data_of_birth}
        </Form.Control.Feedback>
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
        <Form.Label htmlFor="file"> Upload Image :</Form.Label>
        <Form.Control type="file" className="form-control-file" id="file" />
      </FormGroup>
      <Button className="w-100" variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};

export default EditStudentForm;

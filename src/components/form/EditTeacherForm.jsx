import React from "react";
import FormGroup from "../../components/form/FormGroup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  getAllteachers,
  updateteachers,
} from "../../store/profile/teachers/teachersSlice";
import { Button, Form } from "react-bootstrap";
import { updateTecherSchema } from "../../utils/validation/validationSchema";

const EditTeacherForm = ({ item, handleCloseModal }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: item,
    validationSchema: updateTecherSchema,
    onSubmit: (values) => {
      dispatch(updateteachers(values))
        .then((action) => {
          const message = action.payload.message;
          alert(message);
        })
        .then(() => {
          dispatch(getAllteachers());
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
        <Form.Label htmlFor="file">Upload Image :</Form.Label>
        <Form.Control type="file" className="form-control-file" id="file" />
      </FormGroup>
      <Button className="w-100" variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};

export default EditTeacherForm;

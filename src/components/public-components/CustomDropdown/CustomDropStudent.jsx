import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomDropdown from "./CustomDropdown";
import { getAllStudents } from "../../../store/profile/students/studentsSlice";

const CustomDropStudent = ({ handleSelect }) => {
  const dispatch = useDispatch();
  const { records } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);
  return <CustomDropdown records={records} handleSelect={handleSelect} />;
};

export default CustomDropStudent;

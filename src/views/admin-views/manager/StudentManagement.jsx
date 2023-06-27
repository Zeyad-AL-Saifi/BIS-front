import React from "react";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudents,
  getAllStudents,
} from "../../../store/profile/students/studentsSlice";

import FilterForm from "../../../components/admin-components/public/filterForm";
import ProfileCardCompo from "../../../components/admin-components/profile-component/ProfileCardCompo";
import TitleSections from "../../../components/public-components/TitleSections";
const StudentManagement = () => {
  const { records } = useSelector((state) => state.students);
  const [filterUsers, setFilterUsers] = useState([]);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  useEffect(() => {
    setFilterUsers(records);
  }, [records]);

  useEffect(() => {
    const filter = records.filter((element) => {
      return element?.full_name?.toLowerCase().includes(value);
    });
    setFilterUsers(filter);
  }, [value, records]);

  const handelInput = (event) => {
    setValue(event.target.value);
  };
  const handelDelete = useCallback(
    (id) => {
      dispatch(deleteStudents(id));
    },
    [dispatch]
  );

  return (
    <div>
      {" "}
      <div>
        <FilterForm handelInput={handelInput} />
        <div>
          <TitleSections
            title={"You can manage the student informaions from here ℹ️"}
            content={
              " You can modify the students' information or cancel one of them's account  "
            }
          />
        </div>
        <ProfileCardCompo
          user={"std"}
          records={filterUsers}
          handelDelete={handelDelete}
        />
      </div>
    </div>
  );
};

export default StudentManagement;

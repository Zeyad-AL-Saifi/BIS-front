import React from "react";
import FilterForm from "../../components/admin-components/filterForm";
import ProfileCardCompo from "../../components/admin-components/ProfileCardCompo";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Check from "../../utils/guard/load/Check";
import { deleteStudents, getAllStudents } from "../../store/profile/students/studentsSlice";
import { useCallback } from "react";
const StudentManagement = () => {
  const { loading, error, records } = useSelector((state) => state.students);
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
    <Check loading={loading} error={error}>
      <div>
        <FilterForm handelInput={handelInput} />
        <div>
          <h3>You can manage the student from here </h3>
          <p>
            You can modify the students' information or cancel one of them's
            account ℹ
          </p>
          
        </div>
        <ProfileCardCompo user={"std"} records={filterUsers} handelDelete={handelDelete } />
      </div>
    </Check>
  );
};

export default StudentManagement;

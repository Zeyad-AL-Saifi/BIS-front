import React from "react";
import FilterForm from "../../../components/admin-components/public/filterForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState } from "react";
import {
  deleteteachers,
  getAllteachers,
} from "../../../store/profile/teachers/teachersSlice";
import Check from "../../../utils/guard/load/Check";
import ProfileCardCompo from "../../../components/admin-components/profile-component/ProfileCardCompo";

const TeacherManagement = () => {
  const { loading, error, records } = useSelector((state) => state.teachers);
  const [filterUsers, setFilterUsers] = useState([]);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllteachers());
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
      dispatch(deleteteachers(id));
    },
    [dispatch]
  );

  return (
    <Check loading={loading} error={error}>
      <FilterForm handelInput={handelInput} />
      <div>
        <h3>You can manage the teacher from here </h3>
        <p>
          You can modify the teachers' information or cancel one of them's
          account ℹ
        </p>
        <p>Remember the yellow card is Admin Account 👌</p>
      </div>
      <ProfileCardCompo records={filterUsers} handelDelete={handelDelete} />
    </Check>
  );
};

export default TeacherManagement;

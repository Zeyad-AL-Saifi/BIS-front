import React from "react";
import FilterForm from "../../../components/admin-components/public/filterForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState } from "react";
import {
  deleteteachers,
  getAllteachers,
} from "../../../store/profile/teachers/teachersSlice";

import ProfileCardCompo from "../../../components/admin-components/profile-component/ProfileCardCompo";
import TitleSections from "../../../components/public-components/TitleSections";

const TeacherManagement = () => {
  const { records } = useSelector((state) => state.teachers);
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
    <div>
      {" "}
      <FilterForm handelInput={handelInput} />
      <div>
        <TitleSections
          title={"You can manage the teacher informaions from here ℹ️"}
          content={
            " You can modify the teachers' information or cancel one of them's account "
          }
        />
      </div>
      <ProfileCardCompo records={filterUsers} handelDelete={handelDelete} />
    </div>
  );
};

export default TeacherManagement;

import React from "react";
import FilterForm from "../../components/admin-components/filterForm";
import ProfileCardCompo from "../../components/admin-components/ProfileCardCompo";

const TeacherManagement = () => {
  return (
    <div>
      <FilterForm />
      <div>
        <h3>You can manage the teacher from here </h3>
        <p>
          You can modify the teachers' information or cancel one of them's
          account ℹ
        </p>
      </div>
      <ProfileCardCompo />
    </div>
  );
};

export default TeacherManagement;

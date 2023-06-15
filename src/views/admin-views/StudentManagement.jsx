import React from "react";
import FilterForm from "../../components/admin-components/filterForm";
import ProfileCard from "../../components/admin-components/ProfileCard";
import ProfileCardCompo from "../../components/admin-components/ProfileCardCompo";
const StudentManagement = () => {
  return (
    <div>
      <FilterForm />
      <div>
        <h3>You can manage the student from here </h3>
        <p>
          You can modify the students' information or cancel one of them's
          account ℹ
        </p>
      </div>
      <ProfileCardCompo user={'std'} />
    </div>
  );
};

export default StudentManagement;

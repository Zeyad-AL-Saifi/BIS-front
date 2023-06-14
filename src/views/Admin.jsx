import React from "react";
import SideNav from "../components/admin-components/SideNav";
import HomeManagement from "./admin-views/HomeManagement";
import TeacherManagement from "./admin-views/TeacherManagement";

const Admin = () => {
  return (
    <div className="row">
      <div className="col-auto">
        <SideNav />
      </div>
      <div className="col col-md-7 col-lg-8  col-xl-9 col-sm-9 ">
        {/* <HomeManagement /> */}
        <TeacherManagement />
      </div>
    </div>
  );
};

export default Admin;

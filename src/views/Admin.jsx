import React from "react";
import SideNav from "../components/admin-components/SideNav";
import HomeManagement from "./admin-views/HomeManagement";
import TeacherManagement from "./admin-views/TeacherManagement";
import { Route ,BrowserRouter as Router,Routes } from "react-router-dom";
import StudentManagement from "./admin-views/StudentManagement";

const Admin = () => {
  return (
         <div className="row">
        <div className="col-auto">
          <SideNav />
        </div>
        <div className="col col-md-7 col-lg-8  col-xl-9 col-sm-9 ">
          <Route path="/teachermanagement" component={<TeacherManagement />} />
          <Route path="/homecontentmanagment" component={<HomeManagement/>} />
          <Route path="/studentmanagement" component={<StudentManagement/>} />

        </div>
      </div>
     

    

  );
};

export default Admin;

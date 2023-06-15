import React from "react";
import SideNav from "./admin-components/SideNav";
import { Outlet } from "react-router-dom";

const AdminBody = () => {
  return (
    <div className="row">
      <div className="col-auto">
        <SideNav />
      </div>
      <div className="col col-md-7 col-lg-8  col-xl-9 col-sm-9 ">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminBody;

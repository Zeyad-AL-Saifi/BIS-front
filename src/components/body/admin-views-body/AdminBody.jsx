import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../admin-components/public/SideNav"
const AdminBody = () => {
  return (
    <div className="row">
      <div className="col col-sm-auto">
        <SideNav />
      </div>
      <div className="col col-md-7 col-lg-8  col-xl-9 col-sm-9 ">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminBody;

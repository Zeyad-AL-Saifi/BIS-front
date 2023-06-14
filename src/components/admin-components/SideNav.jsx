import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
const SideNav = () => {
  return (
    <div
      style={{ display: "flex", height: "100%", overflow: "scroll initial" }}
    >
      <CDBSidebar className="text-white bg-dark">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <h4 style={{ color: "inherit" }}>Admin</h4>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="homecontentmanagement"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="columns">
                Home Managment
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="teachermanagement"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">
                Teachers Profiles Manage
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="homecontentmanagement"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="table">
                Teachers Notes
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="studentmanagement"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">
                Students Profiles Manage
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="homecontentmanagement"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="table">
                Student Notes
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Managment Side
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideNav;

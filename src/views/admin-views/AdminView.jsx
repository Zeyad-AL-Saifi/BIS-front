import React from "react";
import AdminBody from "../../components/body/admin-views-body/AdminBody";
import { withGuardAdmin } from "../../utils/guard/auth/WithGuard";

const AdminView = () => {
  return <AdminBody />;
};

export default withGuardAdmin(AdminView);


import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Error from '../utils/guard/load/Error';
import App from '../App';
// import Loading from '../utils/guard/load/loading';
import AdminView from "../views/admin-views/AdminView";
import TeacherView from "../views/public-vews/TeacherView";
import HelpView from "../views/public-vews/HelpView";
import HomeManagement from "../views/admin-views/manager/HomeManagement";
import Registration from "../views/admin-views/manager/Registration";
import StudentManagement from "../views/admin-views/manager/StudentManagement";
import StudentNotesManagement from "../views/admin-views/manager/StudentNotesManagement";
import TeacherManagement from "../views/admin-views/manager/TeacherManagement";
import TeacherNotesManagement from "../views/admin-views/manager/TeacherNotesManagement";
import HomeView from "../views/public-vews/HomeView";
import StudentLoginView from "../views/login/StudentLoginView";
import TeacherLoginView from "../views/login/TeacherLoginView";
import ResetPassword from "../views/login/reset-paassword/reset-password";
import AfterSendCode from "../views/login/reset-paassword/after-send-code";
import StudentView from "../views/public-vews/StudentView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomeView /> },

      {
        path: "/studentlogin",
        element: <StudentLoginView />
      },
      {
        path: "/teacherlogin",
        element: <TeacherLoginView />
      },
      {
        path: "/student",
        element: <StudentView />
        // , loader: postParamHandler
      },
      {
        path: "/teacher",
        element: <TeacherView />
        // loader: postParamHandler
      },
      {
        path: "help",
        element: <HelpView />
      },
      {
        path: "resetpassword",
        element: <ResetPassword />
      },
      {
        path: "after-code/:email/:token",
        element: <AfterSendCode />
      },
      {
        path: "/admin",
        errorElement: <Error />,
        element: <AdminView />,
        children: [
          { index: true, element: <HomeManagement /> },
          { path: "homecontentmanagement", element: <HomeManagement /> },
          { path: "teachermanagement", element: <TeacherManagement /> },
          { path: "studentmanagement", element: <StudentManagement /> },
          { path: "studentnotemanage", element: <StudentNotesManagement /> },
          { path: "teachernotemanage", element: <TeacherNotesManagement /> },
          { path: "registration", element: <Registration /> },
        ],
      },
    ],
  },
]);

export default router;

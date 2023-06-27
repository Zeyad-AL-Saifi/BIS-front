
import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import Error from '../utils/guard/load/Error'
import App from '../App';
import Loading from '../utils/guard/load/loading';





const AdminView = React.lazy(() => import("../views/admin-views/AdminView"));
const TeacherView = React.lazy(() => import("../views/public-vews/TeacherView"));
const HelpView = React.lazy(() => import("../views/public-vews/HelpView"));
const HomeManagement = React.lazy(() => import("../views/admin-views/manager/HomeManagement"));
const Registration = React.lazy(() => import("../views/admin-views/manager/Registration"));
const StudentManagement = React.lazy(() => import("../views/admin-views/manager/StudentManagement"));
const StudentNotesManagement = React.lazy(() => import("../views/admin-views/manager/StudentNotesManagement"));
const TeacherManagement = React.lazy(() => import("../views/admin-views/manager/TeacherManagement"));
const TeacherNotesManagement = React.lazy(() => import("../views/admin-views/manager/TeacherNotesManagement"));
const HomeView = React.lazy(() => import("../views/public-vews/HomeView"));
const StudentLoginView = React.lazy(() => import("../views/login/StudentLoginView"));
const TeacherLoginView = React.lazy(() => import("../views/login/TeacherLoginView"));
const ResetPassword = React.lazy(() => import("../views/login/reset-paassword/reset-password"));
const AfterSendCode = React.lazy(() => import("../views/login/reset-paassword/after-send-code"));
const StudentView = React.lazy(() => import("../views/public-vews/StudentView"));




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            { index: true, element: <HomeView /> },
            // { path: "posts", element: <HomeView /> },
            {
                path: "/studentlogin", element:
                    <Suspense
                        fallback={<Loading />}>
                        <StudentLoginView />
                    </Suspense>
            },
            {
                path: "/teacherlogin", element:
                    <Suspense
                        fallback={<Loading />}>
                        <TeacherLoginView />
                    </Suspense>
            },
            {
                path: "/student",
                element: <Suspense
                    fallback={<Loading />}>
                    <StudentView />
                </Suspense>
                // , loader: postParamHandler
            },
            {
                path: "/teacher",
                element: <Suspense
                    fallback={<Loading />}>
                    <TeacherView />
                </Suspense>,
                // loader: postParamHandler
            },
            {
                path: "help",
                element: <Suspense
                    fallback={<Loading />}>
                    <HelpView />
                </Suspense>,
            },
            {
                path: "resetpassword",
                element: <Suspense
                    fallback={<Loading />}>
                    <ResetPassword />
                </Suspense>,
            },
            {
                path: "after-code/:email/:token",
                element: <Suspense
                    fallback={<Loading />}>
                    <AfterSendCode />
                </Suspense>,
            },

            {
                path: "/admin",
                errorElement: <Error />,
                element: <Suspense
                    fallback={<Loading />}>
                    <AdminView />
                </Suspense>,
                children: [
                    { index: true, element: <HomeManagement /> },
                    {
                        path: "homecontentmanagement",
                        element: <Suspense
                            fallback={<Loading />}>
                            <HomeManagement />
                        </Suspense>,
                    },
                    {
                        path: "teachermanagement",
                        element: <Suspense
                            fallback={<Loading />}>
                            <TeacherManagement />
                        </Suspense>,
                    },
                    {
                        path: "studentmanagement",
                        element: <Suspense
                            fallback={<Loading />}>
                            <StudentManagement />
                        </Suspense>,
                    },
                    {
                        path: "studentnotemanage",
                        element: <Suspense
                            fallback={<Loading />}>
                            <StudentNotesManagement />
                        </Suspense>,
                    },
                    {
                        path: "teachernotemanage",
                        element: <Suspense
                            fallback={<Loading />}>
                            <TeacherNotesManagement />
                        </Suspense>,
                    },
                    {
                        path: "registration",
                        element: <Suspense
                            fallback={<Loading />}>
                            <Registration />
                        </Suspense>,
                    },

                ]
                // loader: postParamHandler
            }
        ]
    }


]
)

export default router;
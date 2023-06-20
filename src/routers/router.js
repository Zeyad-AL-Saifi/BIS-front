
import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import Error from '../utils/guard/load/Error'
// import {AdminView,TeacherView,
//     HelpView, HomeManagement, Registration,
//     StudentManagement, StudentNotesManagement,
//     TeacherManagement, TeacherNotesManagement, HomeView, LoginView, StudentView
//  from '../views/Export';
import App from '../App';
import Loading from '../utils/guard/load/loading';

// const {AdminView,TeacherView,
//     HelpView, HomeManagement, Registration,
//     StudentManagement, StudentNotesManagement,
//     TeacherManagement, TeacherNotesManagement, HomeView, LoginView, StudentView} = React.lazy(() => import("../views/Export"));


const  AdminView  = React.lazy(() => import("../views/AdminView"));
const  TeacherView  = React.lazy(() => import("../views/TeacherView"));
const  HelpView  = React.lazy(() => import("../views/HelpView"));
const  HomeManagement  = React.lazy(() => import("../views/admin-views/HomeManagement"));
const  Registration  = React.lazy(() => import("../views/admin-views/Registration"));
const  StudentManagement  = React.lazy(() => import("../views/admin-views/StudentManagement"));
const  StudentNotesManagement = React.lazy(() => import("../views/admin-views/StudentNotesManagement"));
const  TeacherManagement  = React.lazy(() => import("../views/admin-views/TeacherManagement.jsx"));
const  TeacherNotesManagement  = React.lazy(() => import("../views/admin-views/TeacherNotesManagement"));
const  HomeView  = React.lazy(() => import("../views/HomeView"));
const  LoginView  = React.lazy(() => import("../views/LoginView"));
const StudentView = React.lazy(() => import("../views/StudentView"));



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            { index: true, element: <HomeView /> },
            // { path: "posts", element: <HomeView /> },
            {
                path: "/login", element:
                    <Suspense
                        fallback={<Loading />}>
                        <LoginView />
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
                path: "/admin",

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
                    {
                        path: "help",
                        element: <Suspense
                            fallback={<Loading />}>
                            <HelpView />
                        </Suspense>,
                    }
                ]
                // loader: postParamHandler
            }
        ]
    }


]
)

export default router;
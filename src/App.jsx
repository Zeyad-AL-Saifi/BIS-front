import React from "react";
import HomeView from "./views/HomeView";
import Header from "./components/public-components/Header";
import Footer from "./components/public-components/Footer";
import LoginView from "./views/LoginView";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import StudentView from "./views/StudentView";
import TeacherView from "./views/TeacherView";
import Admin from "./views/Admin";
import HomeManagement from "./views/admin-views/HomeManagement";
import Help from "./views/Help";
import TeacherManagement from "./views/admin-views/TeacherManagement";
import StudentManagement from "./views/admin-views/StudentManagement";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/student" element={<StudentView />} />
        <Route path="/teacher" element={<TeacherView />} />
        <Route path="/admin" element={<Admin />}>
        <Route index element={<HomeManagement />} />
          <Route
            path="teachermanagement"
            element={<TeacherManagement />}
          />
          <Route
            path="homecontentmanagement"
            element={<HomeManagement />}
          />
          <Route
            path="studentmanagement"
            element={<StudentManagement />}
          />
        </Route>
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React from "react";
import Header from "./components/public-components/Header";
import Footer from "./components/public-components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  AdminView,
  HelpView,
  HomeManagement,
  HomeView,
  LoginView,
  Registration,
  StudentManagement,
  StudentNotesManagement,
  StudentView,
  TeacherManagement,
  TeacherNotesManagement,
  TeacherView,
} from "./views/Export";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/student" element={<StudentView />} />
        <Route path="/teacher" element={<TeacherView />} />
        <Route path="/admin" element={<AdminView />}>
          <Route index element={<HomeManagement />} />
          <Route path="teachermanagement" element={<TeacherManagement />} />
          <Route path="homecontentmanagement" element={<HomeManagement />} />
          <Route path="studentmanagement" element={<StudentManagement />} />
          <Route
            path="studentnotemanage"
            element={<StudentNotesManagement />}
          />
          <Route
            path="teachernotemanage"
            element={<TeacherNotesManagement />}
          />
          <Route path="registration" element={<Registration />} />
        </Route>
        <Route path="/help" element={<HelpView />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

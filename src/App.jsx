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

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/student" element={<StudentView />} />
        <Route path="/teacher" element={<TeacherView />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/homecontentmanagment" element={<HomeManagement />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

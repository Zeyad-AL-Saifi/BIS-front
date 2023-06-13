import React from "react";
import HomeView from "./views/HomeView";
import Header from "./components/public/Header";
import Footer from "./components/public/Footer";
import LoginView from "./views/LoginView";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import StudentView from "./views/StudentView";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/student" element={<StudentView />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

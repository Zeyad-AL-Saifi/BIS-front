import React from "react";
import Header from "./components/public-components/Header";
import Footer from "./components/public-components/Footer";
import { Outlet } from "react-router-dom";


const App = (props) => {
  return (
    <>
      <Header />
      <body>
        <Outlet />
      </body>
      <Footer />
    </>
  );
};

export default App;



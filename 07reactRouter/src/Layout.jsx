import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      {/* Outlet is what renderds all the child elements- about,contact,use, github */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import AuthProvider from "../provider/AuthProvider";

const Layout = () => {
  return (
    <>
    <AuthProvider> 
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      </AuthProvider>
    </>
  );
};

export default Layout;

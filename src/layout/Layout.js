import React from "react";
import { Outlet } from "react-router-dom";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./header/Header";

function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default Layout;

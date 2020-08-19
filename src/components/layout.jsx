import React from "react";
import NavBar from "./common/navBar";
import SideBar from "./common/sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavBar />
        <SideBar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

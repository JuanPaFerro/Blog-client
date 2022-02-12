import React from "react";
import { Link } from "react-router-dom";
import { NavBar, MenuItem, Menu } from "./Layout";
import { Logo } from "../Logo/";
const Layout = () => {
  return (
    <NavBar>
      <Logo />
      <Menu>
        <MenuItem to="/about">About Me</MenuItem>
        <MenuItem to="/portfolio">Portfolio</MenuItem>
      </Menu>
    </NavBar>
  );
};

export default Layout;

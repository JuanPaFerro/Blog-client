import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavBar, MenuItem, Menu, ToggleDarkModeButton } from "./Layout";
import { Logo } from "../Logo/";
import { Context } from "../../Context";

const Layout = () => {
  const { isDarkMode, toggleDarkMode } = useContext(Context);
  return (
    <NavBar>
      <h1>
        <Link to="/">Logo</Link>
      </h1>
      <Menu>
        <MenuItem to="/about">About Me</MenuItem>
        <MenuItem to="/portfolio">Portfolio</MenuItem>
        <ToggleDarkModeButton onClick={() => toggleDarkMode()}>
          {isDarkMode ? "Ligth" : "Dark"}
        </ToggleDarkModeButton>
      </Menu>
    </NavBar>
  );
};

export default Layout;

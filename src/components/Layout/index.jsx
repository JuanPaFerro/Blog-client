import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  NavBar,
  NavBarDark,
  MenuItem,
  Menu,
  MenuItemDark,
  TextLogo,
  TextLogoDark,
} from "./Layout";
import Toggle from "../Toggler/Toggler";
import { Context } from "../../Context";

const Layout = () => {
  const { themeToggler, theme } = useContext(Context);

  const lightTheme = (
    <NavBar>
      <h1>
        <TextLogo to="/">Blog</TextLogo>
      </h1>
      <Menu>
        <MenuItem to="/about">About Me</MenuItem>
        <MenuItem to="/portfolio">Portfolio</MenuItem>
        <MenuItem to="/user">User</MenuItem>
        <Toggle theme={theme} toggleTheme={themeToggler} />
      </Menu>
    </NavBar>
  );
  const darkTheme = (
    <NavBarDark>
      <h1>
        <TextLogoDark to="/">Blog</TextLogoDark>
      </h1>
      <Menu>
        <MenuItemDark to="/about">About Me</MenuItemDark>
        <MenuItemDark to="/portfolio">Portfolio</MenuItemDark>
        <MenuItemDark to="/user">User</MenuItemDark>
        <Toggle theme={theme} toggleTheme={themeToggler} />
      </Menu>
    </NavBarDark>
  );

  return theme === "light" ? lightTheme : darkTheme;
};

export default Layout;

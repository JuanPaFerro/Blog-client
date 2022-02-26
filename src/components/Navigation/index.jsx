import React, { useContext } from "react";
import { NavBar, MenuItem, Menu, TextLogo } from "./Navigation";
import Toggle from "../Toggler/Toggler";
import { Context } from "../../Context";

const Navigation= () => {
  const { themeToggler, themeMode } = useContext(Context);

  return (
    <NavBar theme={themeMode}>
      <h1>
        <TextLogo theme={themeMode} to="/">jf3rr0</TextLogo>
      </h1>
      <Menu>
        <MenuItem theme={themeMode} to="/blog">Blog</MenuItem>
        <MenuItem theme={themeMode} to="/">About Me</MenuItem>
        <MenuItem theme={themeMode} to="/portfolio">Portfolio</MenuItem>
        <MenuItem theme={themeMode} to="/user">User</MenuItem>
        <Toggle theme={themeMode} toggleTheme={themeToggler} />
      </Menu>
    </NavBar>
  );
};

export default Navigation;

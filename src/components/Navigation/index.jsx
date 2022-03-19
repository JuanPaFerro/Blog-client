import React, { useContext, useState } from "react";
import { NavBar, MenuItem, Menu, TextLogo, Button } from "./Navigation";
import Toggle from "../Toggler/Toggler";
import { Context } from "../../Context";
import { BsX } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  const { themeToggler, themeMode } = useContext(Context);
  const [menuDisplay, setMenuDisplay] = useState(true);

  return (
    <NavBar theme={themeMode}>
      <h1>
        <TextLogo theme={themeMode} to="/">
          Juan P. Ferro
        </TextLogo>
      </h1>
      <Button onClick={() => setMenuDisplay((prevState) => !prevState)}>
        {menuDisplay ? <BsX /> : <GiHamburgerMenu />}
      </Button>
      <Menu menuDisplay={menuDisplay}>
        <MenuItem theme={themeMode} to="/blog">
          Blog
        </MenuItem>
        <MenuItem theme={themeMode} to="/">
          About Me
        </MenuItem>
        <MenuItem theme={themeMode} to="/portfolio">
          Portfolio
        </MenuItem>
        <MenuItem theme={themeMode} to="/user">
          User
        </MenuItem>
        <Toggle theme={themeMode} toggleTheme={themeToggler} />
      </Menu>
    </NavBar>
  );
};

export default Navigation;

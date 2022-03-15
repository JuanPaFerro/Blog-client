import React, { useState, createContext } from "react";
import { darkTheme, lightTheme } from "./components/Theme/Theme";
import { useDarkMode } from "./hooks/useDarkMode";
export const Context = createContext();

export const Provider = ({ children }) => {
  const [theme, themeToggler] = useDarkMode();

  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const value = {
    themeMode,
    themeToggler,
    isAuth,
    activateAuth: (data) => {
      setIsAuth(true);
      window.sessionStorage.setItem("id", data._id);
      window.sessionStorage.setItem("username", data.username);
      window.sessionStorage.setItem("email", data.email);
      window.sessionStorage.setItem("image", data.profilePic);
      window.sessionStorage.setItem("role", data.role);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.clear();
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

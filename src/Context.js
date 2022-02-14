import React, { useState, createContext } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
export const Context = createContext();

export const Provider = ({ children }) => {
  const [theme, themeToggler] = useDarkMode();

  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const value = {
    theme,
    themeToggler,
    isAuth,
    activateAuth: (data) => {
      setIsAuth(true);
      window.sessionStorage.setItem("id", data._id);
      window.sessionStorage.setItem("username", data.username);
      window.sessionStorage.setItem("email", data.email);
      window.sessionStorage.setItem("image", data.profilePic);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.clear();
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

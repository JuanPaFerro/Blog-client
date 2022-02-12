import React, { useState, createContext } from "react";
export const Context = createContext();

export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const value = {
    isDarkMode,
    toggleDarkMode: () => setIsDarkMode((prevState) => !prevState),
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      window.sessionStorage.setItem("token", token);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem("token");
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

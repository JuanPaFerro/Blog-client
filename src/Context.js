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

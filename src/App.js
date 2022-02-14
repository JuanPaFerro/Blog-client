import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth";
import User from "./components/User";
import Home from "./components/Home/";
import Layout from "./components/Layout";
import PostDetail from "./components/PostDetail/";
import { Context } from "./Context";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme/Theme";

import { GlobalStyles } from "./globalStyles";

function App() {
  const { isAuth, theme } = useContext(Context);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Layout/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post/:id" element={<PostDetail />} />
          <Route
            exact
            path="/user"
            element={isAuth ? <User /> : <Navigate replace to="/auth" />}
          />
          <Route
            exact
            path="/auth"
            element={!isAuth ? <Auth /> : <Navigate replace to="/user" />}
          />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;

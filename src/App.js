import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth";
import User from "./components/User";
import Home from "./components/Home/";
import Blog from "./components/Blog";
import PostDetail from "./components/PostDetail/";
import { Context } from "./Context";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./globalStyles";
import Layout from "./components/Layout";
import { AdminAbout } from "./components/AdminAbout";
import AdminProject from "./components/AdminProject";
import AdminPost from "./components/AdminPost";

function App() {
  const { isAuth, themeMode } = useContext(Context);

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            exact
            path="/post/:id"
            element={
              <Layout>
                <PostDetail />
              </Layout>
            }
          />

          <Route
            exact
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />

          <Route
            exact
            path="/admin/about"
            element={
              (window.sessionStorage.getItem("role") === "1" && (
                <Layout>
                  <AdminAbout />
                </Layout>
              )) || <Navigate replace to="/auth" />
            }
          />

          <Route
            exact
            path="/admin/project/:id"
            element={
              (window.sessionStorage.getItem("role") === "1" && (
                <Layout>
                  <AdminProject />
                </Layout>
              )) || <Navigate replace to="/auth" />
            }
          />
          <Route
            exact
            path="/admin/post/:id"
            element={
              (window.sessionStorage.getItem("role") === "1" && (
                <Layout>
                  <AdminPost />
                </Layout>
              )) || <Navigate replace to="/auth" />
            }
          />

          <Route
            exact
            path="/user"
            element={
              isAuth ? (
                <Layout>
                  <User />
                </Layout>
              ) : (
                <Navigate replace to="/auth" />
              )
            }
          />

          <Route
            exact
            path="/auth"
            element={
              !isAuth ? (
                <Layout>
                  <Auth />
                </Layout>
              ) : (
                <Navigate replace to="/user" />
              )
            }
          />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;

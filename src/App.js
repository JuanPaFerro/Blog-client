import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth";
import User from "./components/User";
import Home from "./components/Home/";
import Layout from "./components/Layout";
import PostDetail from "./components/PostDetail/";
import { Context } from "./Context";

function App() {
  const { isAuth } = useContext(Context);
  return (
    <>
      <Layout />
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
  );
}

export default App;

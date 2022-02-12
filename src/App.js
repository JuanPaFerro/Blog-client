import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
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
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import About from "../About";
import { Hero } from "../Hero/";
import Layout from "../Layout";

const Home = () => {
  return (
    <>
      <Hero/> 
      <Layout>
        <About />
      </Layout>
    </>
  );
};

export default Home;

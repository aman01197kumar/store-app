import React from "react";
import NavBar from "../components/NavBar";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Books from "../components/Books";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Body />
      <Books/>
      <Footer />
    </div>
  );
};

export default Home;

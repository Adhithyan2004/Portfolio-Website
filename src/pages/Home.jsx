import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Bento from "../components/Bento";
import Work from "../components/Work";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Bento />
      <Work />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;

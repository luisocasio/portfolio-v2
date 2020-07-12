import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import IntroContent from "../components/IntroContent";
import About from "../components/About";
import IntroTitle from "../components/IntroTitle";
import Projects from "../components/Projects";

const Landing = () => {
  return (
    <div>
      <Nav />
      <IntroContent />
      <IntroTitle />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default Landing;

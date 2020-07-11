import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IntroContent from "../components/IntroContent";
import About from "../components/About";
import IntroTitle from "../components/IntroTitle";
import Projects from "../components/Projects";

const Landing = () => {
  return (
    <div>
      <Header />
      <IntroContent />
      <IntroTitle />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default Landing;

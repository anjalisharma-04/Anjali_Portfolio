import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Education from "../components/Education";
import LatestProjects from "../components/LatestProjects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Education />
      <LatestProjects />
      <Contact />
    </>
  );
};

export default Home;
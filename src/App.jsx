import React from "react";

import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function webContent() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default webContent;

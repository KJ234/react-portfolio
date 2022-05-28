import React from "react";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import Projects2 from "./components/projects2/projects2";

function WebContent() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Projects />
      <Projects2 />
      <Contact />
    </>
  );
}
export default WebContent;

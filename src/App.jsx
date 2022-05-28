import React from "react";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";

function WebContent() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
export default WebContent;

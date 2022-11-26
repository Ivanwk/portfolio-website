import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Nav />

      <main className="main">
        <Home />
        <About />
        <Experience />
        {/* <Portfolio /> */}
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App;

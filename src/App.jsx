import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Hobbies from "./components/hobbies/hobbies";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";




// TODOS

// 1. Highlight live demo button with a red dot
// 2. Tinder based cards for college skills like os, dbms, cn etc horizontal to hobbies
// 3. Add certifications
// 4. Add glassmorphism


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* Phase 1 done till here  */}
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

// import logo from './logo.svg';
// import "./App.css";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Brief from "./components/Brief";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <About />
      <Brief />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

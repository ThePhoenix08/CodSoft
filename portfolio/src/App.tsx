import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./pages/Hero.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Skills from "./pages/Skills.tsx";
import Contact from "./pages/Contact.tsx";
import Navbar from "./components/Navbar.tsx";

const App: React.FC = () => {
  return (
    <div className="app w-screen h-screen flex flex-col font-[Inter]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
};

export default App;














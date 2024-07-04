import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
// import Navbar from "./components/Navbar.js";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    {/* <Navbar /> */}
  </>
);

export default App;


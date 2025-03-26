import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home"
import About from "./components/About";
import Bookchapters from "./components/Bookchapters";
import Conferencepublications from "./components/Conferencepublications";
import ReasearchPublication from "./components/ReasearchPublication";
import Acm from "./components/Acm";
import Patents from "./components/Patents";
import Sessions from "./components/Session";
import Contact from "./components/Contact";
import '@fontsource/montserrat'; // Defaults to 400 weight
import '@fontsource/montserrat/700.css'; // Bold weight


function App() {
  return (
    <div className="bg-black">
      <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Bookchapters" element={<Bookchapters />} />
        <Route path="/Conferencepublications" element={<Conferencepublications />} />
        <Route path="/ReasearchPublications" element= {<ReasearchPublication />} />
        <Route path="/acm" element={<Acm />} />
        <Route path="/patents" element={<Patents />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;

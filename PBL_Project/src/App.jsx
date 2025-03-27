import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home"
import About from "./components/About";
import Gallery from "./components/Gallery";
import Awards from "./components/Awards";
import Research from "./components/Research";
import Position from "./components/Position";
import Project from "./components/Project";
import Resources from "./components/Resources";
import Academic from "./components/Academic";
import Publications from "./components/Publications";
import Talks from "./components/Talks";
import Patents from "./components/Patents";
// import Bookchapters from "./components/Bookchapters";
// import Conferencepublications from "./components/Conferencepublications";
// import ReasearchPublication from "./components/ReasearchPublication";
// import Acm from "./components/Acm";
// import Sessions from "./components/Session";
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
        {/* <Route path="/Bookchapters" element={<Bookchapters />} />
        <Route path="/Conferencepublications" element={<Conferencepublications />} />
        <Route path="/ReasearchPublications" element= {<ReasearchPublication />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/research" element={<Research />} />
        <Route path="/positions" element={<Position />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/patents" element={<Patents />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;

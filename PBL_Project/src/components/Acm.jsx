import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pictlogo from "../assets/pictlogo.jpg";
import bg from "../assets/bg.jpg";
import { FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const Acm = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      {/* Navbar */}
            <nav className="w-5/6 mx-auto flex justify-between items-center py-4 relative">
              {/* Logo */}
              <img src={Pictlogo} alt="Logo" className="w-16 md:w-20 cursor-pointer" />
      
              {/* Desktop Menu */}
              <ul className="hidden md:flex space-x-4 lg:space-x-8 text-lg pr-6">
                <li><Link to="/about" className="hover:text-gray-400">ABOUT</Link></li>
                <li className="relative group">
                  <button className="hover:text-gray-400">PUBLICATIONS ▾</button>
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <li><Link to="/ReasearchPublications" className="block px-2 py-2 hover:bg-gray-200">Reaserach Publications</Link></li>
                          <li><Link to="/Conferencepublications" className="block px-2 py-2 hover:bg-gray-200">Conference Publications</Link></li>
                          <li><Link to="/Bookchapters" className="block px-2 py-2 hover:bg-gray-200">Book Publications</Link></li>
                  </ul>
                </li>
                <li><Link to="/acm" className="hover:text-gray-400">ACM ACTIVITY</Link></li>
                <li><Link to="/patents" className="hover:text-gray-400">PATENTS</Link></li>
                <li><Link to="/sessions" className="hover:text-gray-400">SESSIONS</Link></li>
              </ul>
      
              {/* Mobile Menu Button */}
              <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden text-3xl">
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </nav>
            <div className="pl-9">
                    <button className="flex items-center space-x-2 p-2 text-lg font-bold text-black rounded-lg">
                      <Link to="/" className="hover:text-gray-400"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
                    </button>
                  </div>
      
            {/* Mobile Menu (Hidden by default) */}
            {isOpen && (
              <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 z-10">
                <ul className="text-center space-y-4 text-lg">
                  <li><Link to="/about" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
                  <li className="relative group">
                  <button className="hover:text-gray-400">PUBLICATIONS ▾</button>
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <li><Link to="/ReasearchPublications" className="block px-2 py-2 hover:bg-gray-200">Reaserach Publications</Link></li>
                          <li><Link to="/Conferencepublications" className="block px-2 py-2 hover:bg-gray-200">Conference Publications</Link></li>
                          <li><Link to="/Bookchapters" className="block px-2 py-2 hover:bg-gray-200">Book Publications</Link></li>
                  </ul>
                </li>
                  <li><Link to="/acm" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>ACM ACTIVITY</Link></li>
                  <li><Link to="/patents" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>PATENTS</Link></li>
                  <li><Link to="/sessions" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>SESSIONS</Link></li>
                </ul>
              </div>
            )}
    </div>
  );
};
export default Acm;
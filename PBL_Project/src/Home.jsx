import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pictlogo from "./assets/pictlogo.jpg";
import bg from "./assets/bg.jpg";
import AdminIMg from "./assets/adminimg.jpg";
import { FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
  className="w-full h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${bg})` }}
>

      {/* Navbar */}
      <nav className="w-5/6 mx-auto flex justify-between items-center py-4 relative">
        

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

      {/* Hero Section */}
      <div className="px-6 md:ml-28 mt-6 md:mt-16 md:pt-12 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl text-gray-800 ">
          <span className="text-orange-500">Dr</span>. <span className="text-orange-500">G</span>eetanjali <span className="text-orange-500">K</span>ale
        </h1>
        <h3 className="text-sm md:text-lg leading-6 pt-4 md:pt-6 text-gray-700">
          Head & Associate Professor, Dept. of Computer Engineering, PICT, <br className="hidden md:block" />
          Secretary, ACM India Woman, Senior Member ACM, Senior Member <br className="hidden md:block" />
          IEEE, Chair ACMW Pune Professional Chap., Former BoS CE SPPU,<br className="hidden md:block" />
          Core member of AnitaB.org
        </h3>
      </div>

      {/* Profile Image */}
      <div className="w-full flex justify-center md:absolute md:right-24 md:bottom-28 md:w-96 md:mr-40 mt-6 ">
        <img src={AdminIMg} alt="Admin" className="w-40 md:w-full rounded-full" />
      </div>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start space-x-4 md:space-x-6 px-6 md:ml-28 mt-8 pt-5">
        <a href="#" className="text-2xl md:text-4xl text-black hover:text-blue-500" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="#" className="text-2xl md:text-4xl text-black hover:text-blue-500" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/dr-geetanjali-kale-17148922/" className="text-2xl md:text-4xl text-black hover:text-blue-500" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="#" className="text-2xl md:text-4xl text-black hover:text-blue-500" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>

      {/* Contact Button */}
      <div className="flex justify-center md:justify-start px-6 md:ml-28 mt-6">
        <button className="bg-slate-900 text-white px-4 py-2 md:p-3 rounded-2xl">
          <Link to="/contact" className="hover:text-gray-400">CONTACT</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
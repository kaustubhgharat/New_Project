import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pictlogo from "../assets/pictlogo.jpg";
import bg from "../assets/bg.jpg";
import { FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const publications = [
  {
    title: "Research Methodology: A Practical and Scientific Approach.",
    authors: "Geetanjali V. Kale and J. Jayanath",
    chapter: "Title of the chapter: Introduction to research (Chapter No. 1 )",
    links: { pdf: "#" },
    bgColor: "bg-white-100",
  },
  {
    title:
      "Artificial Intelligence for Internet of Things: Design Principle,Modernization, and Techniques.",
    authors: "Geetanjali V. Kale, Kalyani Waghmare",
    chapter:
      "Title of the chapter: Heterogeneous data management in IoT-based health care systems",
    links: { pdf: "#" },
    bgColor: "bg-white-100",
  },
  {
    title:
      "XAI Based Intelligent Systems for Society 5.0.",
    authors: "Geetanjali V. Kale, Priyanka Chaudhari",
    chapter:
      "XAI in human motion recognition and analysis for envisioning society: A systematic review",
    links: { pdf: "#" },
    bgColor: "bg-white-100",
  },
];

const Bookchapters = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
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
      <div className="max-w-4xl mx-auto space-y-4 p-6 bg-white rounded-lg shadow-md">
        {publications.map((pub, index) => (
          <div key={index} className={`p-4 shadow-md rounded ${pub.bgColor}`}>
            <h2 className="text-lg font-semibold">{pub.title}</h2>
            <p className="text-gray-700 italic">{pub.authors}</p>
            <span className="inline-block mt-2 px-3 py-1 text-sm bg-gray-200 rounded">
              {pub.chapter}
            </span>
            <div className="mt-2 space-x-2">
              {Object.entries(pub.links).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  className="text-blue-600 hover:underline text-sm"
                >
                  {key.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookchapters;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaHome, FaUser, FaImages, FaAward, FaSearch, FaBriefcase,
  FaProjectDiagram, FaBook, FaFileAlt, FaChalkboardTeacher,
  FaUsers, FaEnvelope
} from "react-icons/fa";
import AdminImg from "../assets/adminimg.jpg";

const Publications = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-green-600 p-2 rounded-lg text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 p-6 border-r border-gray-300 transform ${menuOpen ? "translate-x-0" : "-translate-x-64"
          } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 text-green-600 font-bold">
            <FaHome />
            <Link to="/" className="hover:text-gray-500">Home</Link>
          </li>
          <hr />
          <li className="flex items-center space-x-3">
            <FaUser />
            <Link to="/about" className="hover:text-gray-500">About</Link>
          </li>
          <hr />
          <li className="flex items-center space-x-3">
            <FaImages />
            <Link to="/gallery" className="hover:text-gray-500">Gallery</Link>
          </li>
          <hr />
          <li className="flex items-center space-x-3">
            <FaAward />
            <Link to="/awards" className="hover:text-gray-500">Awards</Link>
          </li>
          <hr />
          <li className="flex items-center space-x-3">
            <FaSearch />
            <Link to="/research" className="hover:text-gray-500">Research</Link>
          </li>
          <hr />
          <li className="flex items-center space-x-3">
            <FaBriefcase />
            <Link to="/positions" className="hover:text-gray-500">Positions</Link>
          </li>
          <hr />
          <li className="flex items-center space-x-3">
            <FaProjectDiagram />
            <Link to="/projects" className="hover:text-gray-500">Projects</Link>
          </li>
          <hr />
          <li className="flex items-center space-x-3">
            <FaBook />
            <Link to="/resources" className="hover:text-gray-500">Resources</Link>
          </li>
          <hr />
          <li className="flex items-center space-x-3">
            <FaFileAlt />
            <Link to="/publications" className="hover:text-gray-500">Publications</Link>
          </li>
          <hr />
          <li className="flex items-center space-x-3">
            <FaChalkboardTeacher />
            <Link to="/talks" className="hover:text-gray-500">Invited Talks</Link>
          </li>
          <hr />
          <li className="flex items-center space-x-3">
                            <FaUsers />
                            <Link to="/patents" className="hover:text-gray-500">Patents</Link>
                          </li>
          <hr />
          <li className="flex items-center space-x-3">
            <FaEnvelope />
            <Link to="/contact" className="hover:text-gray-500">Contact</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full min-h-screen px-4 md:px-10 flex flex-col-reverse md:flex-row items-center bg-gray-50 justify-center text-center md:text-left">
        {/* Text Section */}
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">Dr. Geetanjali Kale</h1>
          <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
            Head & Associate Professor, Dept. of Computer Engineering, PICT,
            Secretary, ACM India Woman, Senior Member ACM, Senior Member IEEE,
            Chair ACMW Pune Professional Chap., Former BoS CE SPPU,
            Core member of AnitaB.org
          </p>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
            Contact Me
          </button>
        </div>

        {/* Profile Image */}
        <div className="w-40 h-40 md:w-64 md:h-64 mb-6 md:mb-0">
          <img src={AdminImg} alt="Profile" className="rounded-full shadow-lg border-4 border-green-500" />
        </div>
      </main>

    </div>
  );
};

export default Publications;

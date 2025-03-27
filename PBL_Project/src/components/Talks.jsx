import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaHome, FaUser, FaImages, FaAward, FaSearch, FaBriefcase,
  FaProjectDiagram, FaBook, FaFileAlt, FaChalkboardTeacher,
  FaUsers, FaEnvelope
} from "react-icons/fa";
import AdminImg from "../assets/adminimg.jpg";

const Talks = () => {
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
      <main className="w-full min-h-screen px-4 md:px-10 lg:pl-64 flex flex-col items-start bg-gray-50 justify-start text-left">
        <div className="max-w-4xl rounded-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">INVITED TALKS / SESSIONS</h2>
          <ul className="text-gray-700 space-y-3">
          <li><span className="text-blue-500">★</span>Worked as TPC Chair and organizing Chair for ICEI-2022 International Conference </li>
          <li><span className="text-blue-500">★</span>Worked as Organising Co-chair for CTiS 2022, CTiS 2023, and CTiS 2024</li>
          <li><span className="text-blue-500">★</span>Delivered an expert talk on “Visualising Data Science: Exploring the synergy with Computer Vision" in 5 days FDP on Data Science Applications in Real-World using Python at Indira College of Engineering, Pune (21 Mar.  2024) </li>
          <li><span className="text-blue-500">★</span>Delivered an expert talk on “Data Analytics in Computer Vision" AICTE-ISTE sponsored refresher course on Research Methodology and Data Analysis at JSPM, RSCOE, Pune (16th Dec. 2020) </li>
          <li><span className="text-blue-500">★</span>Delivered Talk as a Chief Guest at One Week Online FDP on Research Trends In Computer Engineering and Information Technology at STES's, Smt. Kashibai Navale College of Engineering, Pune (4th Jan. 2021) </li>
          <li><span className="text-blue-500">★</span>Resource person for Faculty development program on “Computer Graphics and Gaming” conducted for SPPU faculty at AIT, Pune.</li>
          <li><span className="text-blue-500">★</span>Resource person for Faculty development program on “Computer Graphics” (Theory and Lab) conducted for SPPU faculty at SIT, Pune. </li>
          <li><span className="text-blue-500">★</span>Moderator for Panel discussion on “Curriculum design and content Delivery” at D. Y Patil College of Engineering, Akurdi. </li>
          <li><span className="text-blue-500">★</span>Chief guest for “Cyber Security” workshop at Manjari College of Engineering </li>
          <li><span className="text-blue-500">★</span>Organized and guided session on “Android Application Development” at vmware for women from industry</li>
          <li><span className="text-blue-500">★</span>Volunteered for CSPathshala workshop at Gurukul School “Bringing computational thinking at school. </li>
          <li><span className="text-blue-500">★</span>"Computer Graphics", one day University level workshop for Computer Engineering faculty members.</li>
          <li><span className="text-blue-500">★</span>"Computer Graphics and Gaming Using QT", one day University level Workshop for Computer Engineering faculty members.</li>
          <li><span className="text-blue-500">★</span>"Transformations, animation and Gaming", Expert lecture at APCOE, Pune.</li>
          <li><span className="text-blue-500">★</span>Mission 10X learning approach (Bloom's Taxonomy, Gardnar’s Theory and sharing of experience) at Computer Department PICT, Pune (2009).</li>
          
          </ul>
        </div>
      </main>

    </div>
  );
};

export default Talks;

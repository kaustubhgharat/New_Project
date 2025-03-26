import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pictlogo from "../assets/pictlogo.jpg";
import bg from "../assets/bg.jpg";
import { FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const About = () => {
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
      <div className="w-full min-h-screen p-8 bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-orange-600">Dr. Geetanjali V. Kale</h1>
          <h2 className="text-xl text-center mt-2">Head and Associate Professor, Dept. of Computer Engineering, PICT, Pune</h2>
          <p className="text-center text-gray-700 mt-2">📞 +91 98 22 477645 | ✉️ <a href="mailto:gvkale@pict.edu" className="text-blue-600">gvkale@pict.edu</a>, <a href="mailto:gilkale@gmail.com" className="text-blue-600">gilkale@gmail.com</a></p>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Qualification</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Ph.D., Computer Engineering, 2017, Savitribai Phule Pune University</li>
              <li>M.E., Computer Engineering, 2004, PICT, Pune</li>
              <li>B.E., Computer Science and Engineering, 2001, PES College of Engineering, Aurangabad</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Associate Professor, PICT (2021 - Present)</li>
              <li>Assistant Professor, PICT (2009 - 2021)</li>
              <li>Lecturer, PICT (2002 - 2009)</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Areas of Interest</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Artificial Intelligence</li>
              <li>Machine Learning</li>
              <li>Computer Vision</li>
              <li>Data Science</li>
              <li>Education</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Funded Research Work</h2>
            <p className="mt-2">Completed Project titled, “Vision Based Human Motion Recognition and Analysis in Indoor Scene for Activity Monitoring using Distributed Data Capture” as principal Investigator funded by SPPU BCUD for Amount: Rs1.9 lacks, Grant No. 14ENG002310, Duration: 2014-16.</p>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Consultancy Project</h2>
            <p className="mt-2">Project Title “Measurement of human emotional stimulus based on Biometric Measurement”, Rs 3,00,000 by FriCorp AS, Norway.</p>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Honors and Awards</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Council Member ACM India Internal Engagement Committee (2020 - till date)</li>
              <li>Secretary/Treasurer ACM India Women Committee (2023-2027)</li>
              <li>Secretary ACM Pune Professional Chapter (2019 - till date)</li>
              <li>Chair ACM-W Pune Professional chapter (2022 - Till date)</li>
              <li>Received a certificate from ACM for recognition of 8 years of service.</li>
              <li>Former Member, BoS, Computer Engineering, SPPU, Pune. (2017 to 2022)</li>
              <li>Former Member, BoS, B. Voc., SPPU, Pune (2019-2021)</li>
              <li>PICT ACM Student Chapter (PASC) Counselor Since March 2012 PICT Received ACM India Best Student Chapter Award Four Times in a Row  2017 to 2020</li>
              <li>Completed “Cambridge international certification in teaching and training” with Distinction.</li>
              <li>Classroom innovations selected for demonstration and nominated as West Zone representative in Experience Zone 2010 at Bangalore. Demonstrations were visited by Honorable Education Minister Mr. Kapil Sibal, Chairman Wipro Mr. Azim Premji, and many academicians from India and abroad.</li>
              <li>Wipro’s Mission 10X Certificate in “Teaching Learning", with best assignment done remark and invited for sharing the experience in First Mission 10xian Maharashtra Meet attended by V.C. University of Pune, Principals of different colleges and Mission10xians.</li>
              <li>Completed NITTTR’s staff development program on, “Developing Teaching Competencies” (Credits Awarded - 2).</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaHome, FaUser, FaImages, FaAward, FaSearch, FaBriefcase,
  FaProjectDiagram, FaBook, FaFileAlt, FaChalkboardTeacher,
  FaUsers, FaEnvelope
} from "react-icons/fa";
import AdminImg from "../assets/adminimg.jpg";

const About = () => {
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
          <h2 className="text-2xl font-bold text-gray-800 mt-7 mb-4">About</h2>
          <ul className="text-gray-700 space-y-3">
            <li><span className="text-blue-500">★</span> I received the M.E. and Ph.D. degrees in Computer Engineering from Pune Institute of Computer Technology (PICT), Savitribai Phule Pune University, Pune, India, in 2004 and 2017, respectively.</li>
            <li><span className="text-blue-500">★</span> I am currently the Head and an Associate Professor in the Department of Computer Engineering at Pune Institute of Computer Technology, Pune, India.</li>
            <li><span className="text-blue-500">★</span> I have completed a funded research project titled “Vision-Based Human Motion Recognition and Analysis in Indoor Scene for Activity Monitoring using Distributed Data Capture”, supported by SPPU BCUD with a grant of ₹1.9 lakh (2014-2016).</li>
            <li><span className="text-blue-500">★</span> I have provided consultancy for the project “Measurement of Human Emotional Stimulus based on Biometric Measurement”, funded by FriCorp AS, Norway, with a grant of ₹3,00,000.</li>
            <li><span className="text-blue-500">★</span> My current research interests include Artificial Intelligence, Machine Learning, Computer Vision, Data Science, and Education.</li>
            <li><span className="text-blue-500">★</span> I am an elected Fellow of IETE (Institution of Electronics & Telecommunication Engineers) and a Fellow of the Institute of Engineering and Technology (IET), UK.</li>
            <li><span className="text-blue-500">★</span> I have been recognized for my contributions to AI research and education, receiving the Nasscom AI Gamechangers Award (2024) in the AI Research Category for my work on Sarcasm Detection.</li>
            <li><span className="text-blue-500">★</span> I have served as an Area Editor for Pattern Recognition Letters and an Associate Editor for IEEE Transactions on Artificial Intelligence and IEEE Transactions on Computational Social Systems. I was also a recipient of the Pattern Recognition Letters Editor Award (2023).</li>
            <li><span className="text-blue-500">★</span> I have received multiple awards, including the INSA Young Associate Award (2024), the Young Achievers' Award (2024) from COMSYS Educational Trust, and the Best Paper Award at ICONIP 2023 for my work on Few-Shot Anomaly Detection in Text.</li>
            <li><span className="text-blue-500">★</span> I have also been recognized as an ACM Distinguished Speaker.</li>
            <li><span className="text-blue-500">★</span> I was honored with the Area Chair Award (Information Extraction Track) at IJCNLP-AACL 2023 for my work “Reimagining Complaint Analysis: Adopting Seq2Path for a Generative Text-to-Text Framework”.</li>
            <li><span className="text-blue-500">★</span> My research article, "Prediction of Protein-Protein Interaction using Graph Neural Networks", published in Nature Scientific Reports, was among the top 100 downloaded Cell and Molecular Biology papers in 2022, ranking 9th globally.</li>
            <li><span className="text-blue-500">★</span> With over two decades of academic experience, I continue to contribute to cutting-edge research, education, and industry collaborations in AI and machine learning.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default About;

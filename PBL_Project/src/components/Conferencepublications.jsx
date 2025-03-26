import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pictlogo from "../assets/pictlogo.jpg";
import bg from "../assets/bg.jpg";
import { FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Conferencepublications = () => {
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
      {/* Session Information */}
      <div className="w-5/6 mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg h-4/6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">CONFERENCE PUBLICATION</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Kale, Geetanjali, and Varsha Patil, Bharatnatyam Adavu Recognition from Depth Data, Third International Conference on Image Information Processing (ICIIP). ieee, 2015.</li>
          <li>Kale, Geetanjali, and Varsha Patil. "Motion Correction in Physical Action of Human Body Applied to Yogasana." Advances in Computing and Information Technology. Springer, Berlin, Heidelberg, 2013. 675-680. </li>
          <li>Ashutosh Kanitkar, Rutwik Kulkarni, Varun Joshi, Yash Karwa, Sanjyot Gindi and Geetanjali Kale, Automatic Detection of Cervical Region from VIA and VILI Images using Machine Learning, 22nd IEEE International Conference on Computational Science and Engineering, New York. </li>
          <li>Kanitkar, A., Joshi, V., Karwa, Y., Gindi, S., & Kale, G. V., Comparison of Machine Learning Algorithms for Cervical Abnormality Detection, 12th International Conference on Contemporary Computing, 8-10 August, Noida, India </li>
          <li>Khairnar, D. P., Karad, R. B., Kapse, A., Kale, G., & Jadhav, P. (2020, April). PARTHA: A Visually Impaired Assistance System. In 2020 3rd International Conference on Communication System, Computing and IT Applications (CSCITA) (pp. 32-37). IEEE. </li>
          <li>V. Wagh, S. Khandve, I. Joshi, A. Wani, G. Kale and R. Joshi, "Comparative Study of Long Document Classification," TENCON 2021 - 2021 IEEE Region 10 Conference (TENCON), 2021, pp. 732-737, doi: 10.1109/TENCON54134.2021.9707465.</li>
          <li>Rutuja Taware, Shraddha Varat, Gaurav Salunke, Chaitanya Gawande, Geetanjali Kale, Rahul Khengare, Raviraj Joshi,  ShufText: A Simple Black Box Approach to Evaluate the Fragility of Text Classification Models, Machine Learning, Optimization, and Data Science. LOD 2021. Lecture Notes in Computer Science(), vol 13163. Springer, Cham. https://doi.org/10.1007/978-3-030-95467-3_18 .</li>
          <li>Kale, G., Patil, A., Jain, P., Memon, S., Kulkarni, A., & Marathe, A. (2022, April). Mars Imagery Classification: A Galactic Battle between Knowledge Transfer Networks and their Dual-Attention Armed Adversaries. In 2022 IEEE 7th International conference for Convergence in Technology (I2CT) (pp. 1-8). IEEE</li>
        </ul>
      </div>

    </div>
  );
};
export default Conferencepublications;
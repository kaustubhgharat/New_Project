import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pictlogo from "../assets/pictlogo.jpg";
import bg from "../assets/bg.jpg";
import { FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ReasearchPublication = () => {
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
        <h2 className="text-2xl font-bold mb-4">RESEARCH PUBLICATION</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>A Survey of Motion Prediction for Autonomous Vehicles Using the Lyft Dataset, Medhe, A., Sewatkar, M., Hendre, S., Kale, G., Lecture Notes in Networks and SystemsThis link is disabled., 2024, 819, pp. 429–441 </li>
          <li>Evaluating Performances of Attention-Based Merge Architecture Models for Image Captioning in Indian Languages, Tangsali, R., Chhatre, S., Naik, S., Bhagwat, P., Kale, G., Journal of Image and Graphics(United Kingdom)This link is disabled., 2023, 11(3), pp. 294–301 </li>
          <li>XAI in human motion recognition and analysis for envisioning society: A systematic review, Chaudhari, P., Kale, G., XAI Based Intelligent Systems for Society 5.0, 2023, pp. 203–222</li>
          <li>Comparative Analysis of Weighted Ensemble and Majority Voting Algorithms for Intrusion Detection in OpenStack Cloud Environments, Patil, P., Kale, G., Bivalkar, N., Kolhatkar, A., International Journal of Advanced Computer Science and ApplicationsThis link is disabled., 2023, 14(12), pp. 741–747. </li>
          <li>Kiran N. Girase, Dr. Geetanjali V. Kale, Kimaya R. Urane” Domain Classification for Marathi blog articles using Deep learning” International Journal on Recent and Innovation Trends in Computing and Communication ISSN: 2321-8169 Volume: 11 Issue: 10, pp 1-8,2023.    </li>
          <li>Hiwarkhedkar, S. et al. (2024). TextGram: Towards a Better Domain-Adaptive Pretraining. In: Chakravarthi, B.R., et al. Speech and Language Technologies for Low-Resource Languages. SPELL 2023. Communications in Computer and Information Science, vol 2046. Springer, Cham. https://doi.org/10.1007/978-3-031-58495-4_12</li>
          <li>Geetanjali Kale, Varsha Patil, Mousami Munot, “A novel and intelligent vision-based tutor for Yogāsana: e-YogaGuru” Machine Vision and Applications ( MVPA), Vol.  32, Issue1, 2020, pp. 1-17</li>
          <li>Kale, Geetanjali Vinayak, and Varsha Hemant Patil, A study of vision based human motion recognition and analysis, International Journal of Ambient Computing and Intelligence (IJACI) 7.2 (2016): 75-92. (Scopus, UGC approved)</li>
          <li>Khankari, Nilesh, and Geetanjali Kale. "Survey on one time password." International Journal of Computer Engineering and Applications 9.3 (2015). (UGC Approved, Thomson Reuters) </li>
          <li>Shreyas R Chim, Geetanjali V Kale, A Survey of Methods for Automatic Question Paper Generation System, The International journal of analytical and experimental modal analysis Volume XI, Issue VII, pp 9-12, July/2019 ISSN NO: 0886-9367 (Scopus UGC Care list) </li>
          <li>Priyanka Kukade, Geetanjali Kale, Survey of Load Balancing and Scaling approaches in cloud, International Journal of Emerging Trends & Technology in Computer Science (IJETTCS), January – February 2015 (Scopus, UGC approved) </li>
          <li>Deshmukh Puja, Kale Geetanjali Vinayak, A survey of music recommendation system, Int. J. Sci. Res. Comput. Sci. Eng. Inf. Technol 3.3 (2018): 1721-1729. (Impact Factor: 4.7 SCOPUS) </li>
          <li>Chim, Mr Shreyas R., and Geetanjali V. Kale. Automatic Question Paper Generation using Parametric Randomization, Journal of the Gujarat Research Society 21, no. 2 (2019): 444-451. (UGC-CARE List Group: Group D, Impact Factor: 4.3) </li>
          <li>Shete, Ruchika, and Geetanjali Kale. "Smart Evaluation System." Journal of the Gujarat Research Society 21, no. 1 (2019): 148-150. (UGC-CARE List Group: Group D, Impact Factor: 4.3)</li>
          <li>Ruchika Shete, Geetanjali Kale, Study of Document Segmentation and English Character Recognition techniques, Journal of Emerging Technologies and Innovative Research (JETIR), Volume 6, Issue 3, March 2019, pp 143-148. ISSN-2349-5162 (UGC Approved & 5.87 Impact Factor) </li>
          <li>Gupta, Yash, Akanksha Joshi, and Geetanjali Kale, Healthcare Analytics Systems: An Overview, International Journal of Engineering Science 18898 (2018). </li>
          <li>Geetanjali V. Kale and Varsha H. Patil, Real Time Human Action Recognition using Kinematic State Model. Advances in Image and Video Processing, Volume 2 No 6, Dec (2014); pp: 17-22 (Open Access) </li>
          <li>Khankari Nilesh B., and G. V. Kale, One Time Password Generation for Multi Factor Authentication using Graphical Password, International Journal of Engineering Research and General Science Volume 3, Issue 5, September-October 2015, ISSN 2091-2730</li>
          <li>Patil Snehal, and Geetanjali Kale, Survey on GPU based Linear Solver, IJSTE - International Journal of Science Technology & Engineering, Volume 2, Issue 11, May 2016 ISSN (online): 2349-784X (peer-reviewed) </li>
          <li>Priyanka Kukade, Geetanjali Kale, Auto-Scaling of Micro-Services Using Containerization, International Journal of Science and Research (IJSR), 9, September 2015. </li>
          <li>Y. Thakur & G.V. Kale, IOT based health alliance help desk, International Journal of Engineering Technology Science and Research IJETSR, Academic Science, pp 2394-3386, 2017. </li>
          <li>V. H. Patil and G. V. Kale, Vision Based Monitoring System for Old Age Homes, IJCTA, 10(9), 2017, pp. 687-691, International Science Press, 2017. </li>
          <li>Kale Geetanjali Vinayak, Human Activity Recognition on Real Time and Offline Dataset, International Journal of Intelligent Systems and Applications in Engineering 7.1 (2019): 60-65. (Web of Science, Peer reviewed open source with no publishing fee) </li>
        </ul>
      </div>

    </div>
  );
};
export default ReasearchPublication ;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pictlogo from "../assets/pictlogo.jpg";
import bg from "../assets/bg.jpg";
import { FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  // ✅ State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  // ✅ State for form submission status
  const [status, setStatus] = useState("");

  // ✅ Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page refresh
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("All fields are required!");
      return;
    }
    console.log("Form Submitted:", formData);
    setStatus("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className=" h-svh text-black" style={{ backgroundImage: `url(${bg})` }} id="contact">
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

      <div className="container mx-auto  px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Let's Talk</h3>
            <p>I'm open to discuss.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-600 mr-2" />
              <a href="mailto:pritam071104@gmail.com" className="hover:underline">pritam071104@gmail.com</a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-600 mr-2" />
              <span>+91-7066121972</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-600 mr-2" />
              <span>Survey No. 27, Near Trimurti Chowk, Dhankawadi,<br /> Pune-411043, Maharashtra (India).</span>
            </div>
          </div>

          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-200 border border-gray-400 focus:outline-none focus:border-green-600"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-200 border border-gray-400 focus:outline-none focus:border-green-600"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-200 border border-gray-400 focus:outline-none focus:border-green-600"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <div className="flex justify-center bottom-3 items-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
                >
                  Send
                </button>
              </div>

              {status && <p className="text-center mt-4 text-red-600">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

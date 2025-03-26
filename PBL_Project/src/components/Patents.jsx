import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pictlogo from "../assets/pictlogo.jpg";
import bg from "../assets/bg.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const Patents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newPatent, setNewPatent] = useState("");

  // Retrieve patents from localStorage on component mount
  const getStoredPatents = () => {
    const storedPatents = localStorage.getItem("patents");
    return storedPatents ? JSON.parse(storedPatents) : [
      { id: 1, text: "Granted Patent on 'System and Method for Motion Analysis and Feedback for Amendment of Human Action.' (Patent No.: 201621029482, Registered on: 30/08/2016)" },
      { id: 2, text: "Granted Patent 'System and method for automated evaluation of multimodal content.' (Patent No.: 202221060608, Registered on: 11/11/2022 Granted)" },
      { id: 3, text: "Granted Patent on 'System and method for analysis of human movement and suggestions of amendment if any.' (Patent No.: 2023/05683)" },
      { id: 4, text: "'Personalized physical activity recommendations system using federated learning (FL) and a method.' (Patent No.: 202321029305, Published on: 15/09/2023)" },
      { id: 5, text: "'Hydroponic Nutrient Prediction Device using IoT.' (Patent No.: 202321039419, Published on: 18/08/2023)" },
    ];
  };

  const [patents, setPatents] = useState(getStoredPatents);

  // Save patents to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("patents", JSON.stringify(patents));
  }, [patents]);

  const addPatent = () => {
    if (newPatent.trim() !== "") {
      const newEntry = { id: Date.now(), text: newPatent };
      setPatents([...patents, newEntry]);
      setNewPatent("");
    }
  };

  const deletePatent = (id) => {
    setPatents(patents.filter((patent) => patent.id !== id));
  };

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

      <div className="w-5/6 mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg h-4/6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">PATENTS AND COPYRIGHT</h2>
        <ul className="list-disc pl-5 space-y-3 text-lg">
          {patents.map((patent) => (
            <li key={patent.id} className="flex justify-between items-center">
              {patent.text}
              {isEditing && (
                <button className="ml-4 text-red-600" onClick={() => deletePatent(patent.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              )}
            </li>
          ))}
        </ul>

        {isEditing && (
          <div className="mt-4">
            <input
              type="text"
              value={newPatent}
              onChange={(e) => setNewPatent(e.target.value)}
              placeholder="Enter new patent..."
              className="border p-2 w-full rounded-lg"
            />
            <button
              onClick={addPatent}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              <FontAwesomeIcon icon={faPlus} /> Add Patent
            </button>
          </div>
        )}

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center"
        >
          <FontAwesomeIcon icon={faEdit} className="mr-2" /> {isEditing ? "Done" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Patents;

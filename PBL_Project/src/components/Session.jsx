import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pictlogo from "../assets/pictlogo.jpg";
import bg from "../assets/bg.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const Session = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newSession, setNewSession] = useState("");

  // Retrieve stored sessions from localStorage
  const getStoredSessions = () => {
    const storedSessions = localStorage.getItem("sessions");
    return storedSessions ? JSON.parse(storedSessions) : [
      { id: 1, text: "Worked as TPC Chair and Organizing Chair for ICEI-2022 International Conference" },
      { id: 2, text: "Worked as Organizing Co-chair for CTiS 2022, CTiS 2023, and CTiS 2024" },
      { id: 3, text: "Delivered an expert talk on 'Visualising Data Science: Exploring the synergy with Computer Vision' at Indira College of Engineering, Pune (21 Mar. 2024)" },
      { id: 4, text: "Delivered an expert talk on 'Data Analytics in Computer Vision' at JSPM, RSCOE, Pune (16th Dec. 2020)" },
      { id: 5, text: "Delivered Talk as a Chief Guest at One Week Online FDP on Research Trends In Computer Engineering and Information Technology (4th Jan. 2021)" },
      { id: 6, text: "Resource person for Faculty Development Program on “Computer Graphics and Gaming” conducted for SPPU faculty at AIT, Pune." },
      { id: 7, text: "Resource person for Faculty Development Program on “Computer Graphics” (Theory and Lab) conducted for SPPU faculty at SIT, Pune." },
      { id: 8, text: "Moderator for Panel discussion on “Curriculum design and content Delivery” at D. Y Patil College of Engineering, Akurdi." },
      { id: 9, text: "Chief guest for “Cyber Security” workshop at Manjari College of Engineering." },
      { id: 10, text: "Organized and guided session on “Android Application Development” at VMware for women from industry." },
      { id: 11, text: "Volunteered for CSPathshala workshop at Gurukul School “Bringing computational thinking at school." },
      { id: 12, text: "Computer Graphics, one-day University-level workshop for Computer Engineering faculty members." },
      { id: 13, text: "Computer Graphics and Gaming Using QT, one-day University-level Workshop for Computer Engineering faculty members." },
      { id: 14, text: "Transformations, Animation, and Gaming, Expert lecture at APCOE, Pune." },
      { id: 15, text: "Mission 10X learning approach (Bloom's Taxonomy, Gardner’s Theory, and sharing of experience) at Computer Department PICT, Pune (2009)." },
    ];
  };

  const [sessions, setSessions] = useState(getStoredSessions);

  // Save sessions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [sessions]);

  const addSession = () => {
    if (newSession.trim() !== "") {
      const newEntry = { id: Date.now(), text: newSession };
      setSessions([...sessions, newEntry]);
      setNewSession(""); // Clear input field after adding
    }
  };

  const deleteSession = (id) => {
    setSessions(sessions.filter((session) => session.id !== id));
  };

  return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      {/* Navbar */}
      <nav className="w-5/6 mx-auto flex justify-between items-center py-4 relative">
        <img src={Pictlogo} alt="Logo" className="w-16 md:w-20 cursor-pointer" />

        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-lg pr-6">
          <li><Link to="/about" className="hover:text-gray-400">ABOUT</Link></li>
          <li><Link to="/acm" className="hover:text-gray-400">ACM ACTIVITY</Link></li>
          <li><Link to="/patents" className="hover:text-gray-400">PATENTS</Link></li>
          <li><Link to="/sessions" className="hover:text-gray-400">SESSIONS</Link></li>
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <div className="pl-9">
        <button className="flex items-center space-x-2 p-2 text-lg font-bold text-black rounded-lg">
          <Link to="/" className="hover:text-gray-400"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
        </button>
      </div>

      {/* Session Information */}
      <div className="w-5/6 mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg h-4/6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">INVITED TALKS / SESSIONS</h2>
        <ul className="list-disc pl-5 space-y-3 text-lg">
          {sessions.map((session) => (
            <li key={session.id} className="flex justify-between items-center">
              {session.text}
              {isEditing && (
                <button className="ml-4 text-red-600" onClick={() => deleteSession(session.id)}>
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
              value={newSession}
              onChange={(e) => setNewSession(e.target.value)}
              placeholder="Enter new session..."
              className="border p-2 w-full rounded-lg"
            />
            <button
              onClick={addSession}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              <FontAwesomeIcon icon={faPlus} /> Add Session
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

export default Session;

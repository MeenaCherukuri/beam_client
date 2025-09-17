import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger & close icons
import logo2 from "../assets/logo2.png";
import "../style.css";

export default function BEAM_Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    localStorage.setItem("isAuthenticatedUser_login", "false");
    localStorage.setItem("isAuthenticatedSignUp", "flase");
  };

  const userLogOut = () => {
    localStorage.setItem("isAuthenticatedUser_login", "false");
    localStorage.setItem("isAuthenticatedSignUp", "flase");
  }

  // Close sidebar automatically if window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar fixed-top custom-navbar">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Left: Logo clickable */}
          <Link to="Content" className="navbar-brand ms-2">
            <img src={logo2} alt="BEAM Logo" className="nav-img" />
          </Link>

          {/* Right: Hamburger Icon (mobile only) */}
          <button className="hamburger-btn d-md-none" onClick={toggleSidebar}>
            {isOpen ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
          </button>

          {/* Middle: Nav items (desktop only) */}
          <ul className="nav d-none d-md-flex middle" style={{ fontSize: "1.1rem", gap: "1rem" }}>
            <li className="nav-item shade"><Link className="nav-link" to="Available">Available</Link></li>
            <li className="nav-item shade"><Link className="nav-link" to="Achieved">Achieved</Link></li>
            <li className="nav-item shade"><Link className="nav-link" to="Feedbacks">Feedbacks</Link></li>
          </ul>

          {/* Right: Login (desktop only) */}
          <ul className="nav justify-content-end d-none d-md-flex  nav-right">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/Login" onClick={userLogOut}>Log Out</Link>
            </li> */}
            {user ? (
              <>
                <li>{user.userName}</li>
                <li
                  className="user_initial"
                  style={{ color: "black", cursor: "pointer", position: "relative" }}
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  {user.userName[0]}

                  {dropdownOpen && (
                    <ul className="BeamNavbar-dropdown">
                      <li style={{ padding: "0.5rem 0", cursor: "pointer" }}>
                        <Link to="profile" style={{ textDecoration: "none", color: "inherit" }}>Profile</Link>
                        </li>
                      <li style={{ padding: "0.5rem 0", cursor: "pointer" }}>
                        <Link to="dashboard" style={{ textDecoration: "none", color: "inherit" }}>Dashboard</Link>
                        </li>
                      <li style={{ padding: "0.5rem 0" }}>
                        <Link to="/Login" onClick={userLogOut} style={{ textDecoration: "none", color: "inherit" }}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </>
            ) : (
              <li>Guest</li>
            )}
        </ul>
        </div>
      </nav>

      {/* Sidebar (mobile only) */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Sidebar Header: Logo + Close button in one row */}
        <div className="sidebar-header">
          <img src={logo2} alt="BEAM Logo" className="sidebar-logo" />
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes size={24} color="#fff" />
          </button>
        </div>

        {/* Nav Items */}
        <ul className="list-unstyled text-start mt-3 px-3">
          <li className="sidebar-item"><Link to="/Available" onClick={toggleSidebar}>Available</Link></li>
          <li className="sidebar-item"><Link to="/Achieved" onClick={toggleSidebar}>Ahieved</Link></li>
          <li className="sidebar-item"><Link to="/Feedbacks" onClick={toggleSidebar}>Feedbacks</Link></li>
        </ul>

        {/* Login at bottom */}
        <Link to="/Login" onClick={toggleSidebar} className="login-link">
          Log Out
        </Link>
      </div>
    </>
  );
}

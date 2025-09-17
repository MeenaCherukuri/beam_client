import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger & close icons
import logo2 from "../assets/logo2.png";
import "../style.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
          <Link to="/" className="navbar-brand ms-2">
            <img src={logo2} alt="BEAM Logo" className="nav-img" />
          </Link>

          {/* Right: Hamburger Icon (mobile only) */}
          <button className="hamburger-btn d-md-none" onClick={toggleSidebar}>
            {isOpen ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
          </button>

          {/* Middle: Nav items (desktop only) */}
          <ul className="nav d-none d-md-flex middle" style={{ fontSize: "1.1rem", gap: "1rem" }}>
            <li className="nav-item shade"><Link className="nav-link" to="/Firm">Firm</Link></li>
            <li className="nav-item shade"><Link className="nav-link" to="/About">About</Link></li>
            <li className="nav-item shade"><Link className="nav-link" to="/Terms&Conditions">Terms & Conditions</Link></li>
          </ul>

          {/* Right: Login (desktop only) */}
          <ul className="nav justify-content-end nav-sign d-none d-md-flex">
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Log In</Link>
            </li>
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
    <li className="sidebar-item"><Link to="/Firm" onClick={toggleSidebar}>Firm</Link></li>
    <li className="sidebar-item"><Link to="/About" onClick={toggleSidebar}>About</Link></li>
    <li className="sidebar-item"><Link to="/Terms&Conditions" onClick={toggleSidebar}>Terms & Conditions</Link></li>
  </ul>

  {/* Login at bottom */}
  <Link to="/Login" onClick={toggleSidebar} className="login-link">
    Log In
  </Link>
</div>
    </>
  );
}

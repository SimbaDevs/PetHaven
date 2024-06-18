// src/components/Navbar.js
import React from "react";
import "./styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollToFooter }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="logo" className="logo-img" />
        <h1>Pet Haven</h1>
      </div>
      <ul className="nav-links">
        <li onClick={scrollToFooter}>About us</li>
        <li onClick={scrollToFooter}>Adopt</li>
        <li onClick={scrollToFooter}>Contact us</li>
        <li>
          <button onClick={() => navigate("/signin")} className="signin-btn">
            Sign in
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// src/components/Navbar.js
import React from "react";
import "./styles/Navbar.css";

const Navbar = ({ scrollToFooter }) => {
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
          <button className="signin-btn">Sign in</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

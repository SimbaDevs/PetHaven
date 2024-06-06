// src/components/Navbar.js
import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src='logo.png' alt='logo' className='logo-img' />
                <h1>Pet Haven</h1>
            </div>
            <ul className="nav-links">
                <li><a href="">About us</a></li>
                <li><a href="">Adopt</a></li>
                <li><a href="">Contact us</a></li>
                <li><button className="signin-btn">Sign in</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;

// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="socials">
          <h3>Pet Haven</h3>
          <div className="images">
            <img src="facebook.png" alt="facebook" />
            <img src="gmail.png" alt="twitter" />
            <img src="phone.png" alt="instagram" />
          </div>
        </div>
        <div className="about">
          <h3>About us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="contact">
          <h3>Contact us</h3>
          <p>Email</p>
          <p>pethaven@gmail.com</p>
          <p>Phone</p>
          <p>+254 712 456 789</p>
        </div>
        <div className="location">
          <h3>Location</h3>
          <p>Biashara street</p>
          <p>Halison Plaza - second floor</p>
          <p>PA 12345</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

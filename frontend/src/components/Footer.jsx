// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about">
          <h3>About us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="socials">
            <image src="facebook.png" alt="facebook" />
            <image src="gmail.png" alt="twitter" />
            <image src="telephone.png" alt="instagram" />
          </div>
        </div>
        <div className="contact">
          <h3>Contact us</h3>
          <p>Email: pethaven@gmail.com</p>
          <p>Phone: +254 712 456 789</p>
        </div>
        <div className="location">
          <h3>Location</h3>
          <p>123 Pet Street, Pet City, PA 12345</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

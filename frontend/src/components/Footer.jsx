import React from "react";
import "./styles/Footer.css";

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="footer">
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
          <p>
            Welcome to Pet Haven, your trusted partner in finding the perfect
            companion. Our mission is to connect loving families with pets in
            need of a home. Join us in creating happy homes for our furry
            friends!
          </p>
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
});

export default Footer;

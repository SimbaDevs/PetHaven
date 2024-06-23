import React from "react";
import "./styles/SignUp.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="form-image">
        <div className="logo">
          <img src="logo.png" alt="logo" />
          <p>Pethaven</p>
        </div>
      </div>
      <div className="form-container">
        <form action="">
          <h1 className="main">Sign In</h1>
          <p className="welcome-text">
            Welcome to Pet Haven, your trusted partner in finding the perfect
            companion
          </p>
          <div className="form-input">
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-input">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              id="password2"
              name="password2"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit">Continue</button>
          <div className="divider-container">
            <div className="divider-line"></div>
            <span className="divider-text">or continue with</span>
            <div className="divider-line"></div>
          </div>
          <div className="google-login">
            <img src="google-icon.png" alt="google icon" />
            <span>Continue with Google</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

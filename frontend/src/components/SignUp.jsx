import React from "react";
import "./styles/SignIn.css";
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
          <p className="welcome-text">Welcome back to PetHaven</p>
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
          <a href={navigate()} className="forgot-pwd">
            Forgot password?
          </a>
          <button type="submit">Continue</button>
          <div className="divider-container">
            <div className="divider-line"></div>
            <span className="divider-text">or continue with</span>
            <div className="divider-line"></div>
          </div>
          <div className="google-login">
            <img src="google-icon.png" alt="google icon" />
            <span>Sign in with Google</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

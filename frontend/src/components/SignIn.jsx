import React from "react";
import "./styles/SignIn.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
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
          <div className="sign-up-link">
            <p>Don't have an account? </p>
            <a onClick={() => navigate("/signup")} className="signup-link">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

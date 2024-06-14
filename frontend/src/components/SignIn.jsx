import React from "react";
import "./styles/SignIn.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="form-image">
        <img src="auth-page-photo.png" alt="dog with owner" />
      </div>
      <div className="form-container">
        <div className="headers">
          <p className="main">Sign In</p>
          <p className="sub">Sign Up</p>
        </div>
        <form action="">
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
          <button type="submit">Sign in</button>
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

export default SignIn;

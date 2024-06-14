import React from "react";

function SignIn() {
  return (
    <div className="auth-container">
      <div className="form-image">
        <img src="auth-page-photo.png" alt="dog with owner" />
      </div>
      <div className="form-container">
        <h1>Sign in</h1>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <a href="#" className="forgot-pws">
            Forgot password?
          </a>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

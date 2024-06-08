import React from "react";

function AdoptForm() {
  return (
    <div className="form-img-container">
      <div className="form-container">
        <form action="">
          <h2>Adopt Jane</h2>
          <p className="form-about-text">
            Fill out this form to adopt Jane. We will contact you as soon as
            possible.
          </p>
          <div className="names">
            <div className="input-container">
              <label htmlFor="name">First Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="input-container">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="input-container">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" />
          </div>
          <div className="input-container">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" />
          </div>
          <div className="input-container">
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" />
          </div>
          <div className="form-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="image-container">
        <img src="" alt="dog" />
      </div>
    </div>
  );
}

export default AdoptForm;

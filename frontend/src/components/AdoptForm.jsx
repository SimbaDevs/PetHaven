// src/components/AdoptionForm.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/AdoptionForm.css";

const AdoptionForm = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/pets/${id}`)
      .then((response) => response.json())
      .then((data) => setPet(data))
      .catch((error) => console.error("Error fetching pet details:", error));
  }, [id]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="adoption-form-page">
      <div className="adoption-form-container">
        <div className="form-section">
          <h2>Adopt {pet.name}</h2>
          <p>Fill out this form to start the adoption process</p>
          <form onSubmit={handleSubmit}>
            <div className="name-groups">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
        <div className="image-section">
          <img src={pet.image_url} alt={pet.name} />
        </div>
      </div>
    </div>
  );
};

export default AdoptionForm;

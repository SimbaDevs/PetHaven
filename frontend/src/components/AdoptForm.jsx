import React from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { useState } from "react";

import "./styles/AdoptionForm.css";
import { fetchData } from "../scripts/data";

const AdoptionForm = () => {
  const { id } = useParams();
  const url = `/api/v1/pets/${id}`;
  const { data, error, isLoading } = useSWR(url, fetchData);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    pet_id: id,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/v1/adopt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Adoption form submitted successfully!") {
          alert("Adoption form submitted successfully!");
          console.log(formData);
          console.log(data);
        }
      })
      .catch((error) => {
        console.error("Error submitting adoption form:", error);
        alert("Error submitting adoption form. Please try again.");
      });
  };

  return (
    <>
      <button className="back-btn" onClick={() => window.history.back()}>
        Back to Pet Details
      </button>
      <div className="adoption-form-page">
        <div className="adoption-form-container">
          <div className="form-section">
            <h2>Adopt {data.name}</h2>
            <p>Fill out this form to start the adoption process</p>
            <form onSubmit={handleSubmit}>
              <div className="name-groups">
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="image-section">
            <img
              src={`data:image/jpeg;base64,${data.image_str}`}
              alt={data.name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdoptionForm;

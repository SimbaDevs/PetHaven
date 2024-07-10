import useSWR from "swr";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles/PetDetails.css";
import { fetchData } from "../scripts/data";

const PetDetails = () => {
  const { id } = useParams();
  const url = `/api/v1/pets/${id}`;
  const { data, error, isLoading } = useSWR(url, fetchData);

  const navigate = useNavigate();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  document.title = `${data.name} - Pet Details`;

  return (
    <div className="pet-details">
      <button className="back-btn" onClick={() => window.history.back()}>
        Back to all pets
      </button>
      <div className="pet-specifics">
        <div className="pet-img">
          <img
            src={`data:image/jpeg;base64,${data.image_str}`}
            alt={data.name}
          />
        </div>
        <div className="details">
          <div className="name-and-availability">
            <p className="pet-name">{data.name}</p>
            <p className="availability">Available to adopt</p>
          </div>
          <h3 className="about-text">ABOUT</h3>
          <div className="particulars-and-variables">
            <div className="particulars">
              <p>
                <strong>Breed:</strong>
              </p>
              <p>
                <strong>Color:</strong>
              </p>
              <p>
                <strong>Age:</strong>
              </p>
              <p>
                <strong>Sex:</strong>
              </p>
              <p>
                <strong>Arrival Date:</strong>
              </p>
              <p>
                <strong>Size:</strong>
              </p>
              <p>
                <strong>Location:</strong>
              </p>
              <p>
                <strong>Adoption Fee:</strong>
              </p>
            </div>
            <div className="variables">
              <p className="var">{data.breed}</p>
              <p className="var">No yet defined</p>
              <p className="var">{data.color}</p>
              <p className="var">{data.age} years old</p>
              <p className="var">Not defined</p>
              <p className="var">{data.arrival_date}</p>
              <p className="var">{data.weight} kgs</p>
              <p className="var">{data.location}</p>
              <p className="var">Kshs {data.adoption_fee}</p>
            </div>
          </div>

          <button
            className="adopt-btn"
            onClick={() => navigate(`/adopt/${data.id}`)}
          >
            Apply to Adopt
          </button>
        </div>
      </div>
      <div className="description">
        <h2>Description</h2>
        <p>
          {data.name} is a {data.age} year old {data.breed} who is looking for a
          loving home. {data.name} is a very friendly and playful pet who loves
          to be around people. {data.name} is looking for a family who can give
          him the love and attention he deserves. If you are interested in
          adopting {data.name}, please fill out an adoption application.
        </p>
      </div>
      <div className="medical-history">
        <h2>Medical History</h2>
        {data.vaccines.map((vaccine) => (
          <p key={vaccine.id}>
            {vaccine.date_administered} - {vaccine.name}
          </p>
        ))}
        <p>Dummy Vaccination 1 - January 1, 2022</p>
        <p>Dummy Vaccination 2 - February 1, 2022</p>
        <p>Dummy Vaccination 3 - March 1, 2022</p>
      </div>
    </div>
  );
};

export default PetDetails;

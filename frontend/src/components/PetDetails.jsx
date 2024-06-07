import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/PetDetails.css";

const PetDetails = () => {
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

  return (
    <div className="pet-details">
      <button className="back-btn" onClick={() => window.history.back()}>
        Back to all pets
      </button>
      <div className="pet-specifics">
        <div className="pet-img">
          <img src={pet.image_url} alt={pet.name} />
        </div>
        <div className="details">
          <div className="name-and-availability">
            <p className="pet-name">{pet.name}</p>
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
              <p className="var">{pet.breed}</p>
              <p className="var">No yet defined</p>
              <p className="var">{pet.color}</p>
              <p className="var">{pet.age} years old</p>
              <p className="var">Not defined</p>
              <p className="var">{pet.arrival_date}</p>
              <p className="var">{pet.weight} kgs</p>
              <p className="var">{pet.location}</p>
              <p className="var">Kshs {pet.adoption_fee}</p>
            </div>
          </div>

          <button>Apply to Adopt</button>
        </div>
      </div>
      <div className="description">
        <h2>Description</h2>
        <p>
          {pet.name} is a {pet.age} year old {pet.breed} who is looking for a
          loving home. {pet.name} is a very friendly and playful pet who loves
          to be around people. {pet.name} is looking for a family who can give
          him the love and attention he deserves. If you are interested in
          adopting {pet.name}, please fill out an adoption application.
        </p>
      </div>
      <div className="medical-history">
        <h2>Medical History</h2>
        {pet.vaccines.map((vaccine) => (
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

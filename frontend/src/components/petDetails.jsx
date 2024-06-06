import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pets/${id}`)
      .then(response => response.json())
      .then(data => setPet(data))
      .catch(error => console.error('Error fetching pet details:', error));
  }, [id]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pet-details">
      <button onClick={() => window.history.back()}>Back to all pets</button>
      <div className="pet-info">
        <img src={pet.image_url} alt={pet.name} />
        <div className="details">
          <h1>{pet.name}</h1>
          <p><strong>Breed:</strong> {pet.breed}</p>
          <p><strong>Color:</strong> {pet.color}</p>
          <p><strong>Age:</strong> {pet.age} years old</p>
          <p><strong>Sex:</strong> {pet.sex}</p>
          <p><strong>Arrival Date:</strong> {pet.arrival_date}</p>
          <p><strong>Size:</strong> {pet.size} kgs</p>
          <p><strong>Location:</strong> {pet.location}</p>
          <p><strong>Adoption Fee:</strong> {pet.adoption_fee}</p>
          <button>Apply to Adopt</button>
        </div>
      </div>
      <div className="description">
        <h2>Description</h2>
        <p>{pet.description}</p>
      </div>
      <div className="medical-history">
        <h2>Medical History</h2>
        {pet.vaccines.map(vaccine => (
          <p key={vaccine.id}>{vaccine.date_administered} - {vaccine.name}</p>
        ))}
      </div>
    </div>
  );
};

export default PetDetails;

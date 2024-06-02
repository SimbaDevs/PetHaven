// src/components/PetCard.js
import React from 'react';
import './PetCard.css';

const PetCard = ({ pet }) => {
    return (
        <div className="pet-card">
            <img src={pet.image_url} alt={pet.name} className="pet-image" />
            <div className="pet-details">
                <h2>{pet.name}</h2>
                <p>{pet.age} {pet.age === 1 ? 'Year' : 'Years'} Old</p>
            </div>
        </div>
    );
};

export default PetCard;

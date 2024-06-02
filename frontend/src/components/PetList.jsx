// src/components/PetList.js
import React from 'react';
import PetCard from './PetCard';
import './PetList.css';

const PetList = () => {
    const pets = [
        { id: 1, name: 'Sunshine', age: '2 Months', image_url: '/images/sunshine.jpg' },
        // Add more pet objects as needed
    ];

    return (
        <div className="pet-list">
            {pets.map(pet => (
                <PetCard key={pet.id} pet={pet} />
            ))}
        </div>
    );
};

export default PetList;

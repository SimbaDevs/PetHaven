// src/components/PetList.js
import React, { useEffect } from "react";
import PetCard from "./PetCard";
import axios from "axios";
import "./styles/PetList.css";

const PetList = ({ selectedOption, searchQuery }) => {
  const [pets, setPets] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/v1/pets")
      .then((res) => {
        setPets(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredPets = pets.filter((pet) => {
    const matchesType =
      selectedOption === "all" || pet.pet_type === selectedOption;
    const matchesSearch = !searchQuery || pet.breed.includes(searchQuery);

    return matchesType && matchesSearch;
  });

  return (
    <div className="pet-list">
      {filteredPets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;

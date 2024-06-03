// src/components/PetList.js
import React, { useEffect } from "react";
import PetCard from "./PetCard";
import axios from "axios";
import "./PetList.css";

const PetList = ({ selectedOption }) => {
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

  const filteredPets =
    selectedOption === "all"
      ? pets
      : pets.filter((pet) => pet.pet_type === selectedOption);

  return (
    <div className="pet-list">
      {filteredPets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;

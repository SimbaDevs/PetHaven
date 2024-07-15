// src/components/PetList.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PetCard from "./PetCard";
import axios from "axios";
import "./styles/PetList.css";


const PetList = ({ selectedOption, searchQuery }) => {
  const [pets, setPets] = React.useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/pets/pagination")
      .then((res) => {
        setPets(res.data.items);
        console.log(res.data.items);
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
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `/pet/${pet.id}`,
            state: {pet: pet}
          }}
          key={pet.id}
          className="linked-card"
        >
          <PetCard key={pet.id} pet={pet} />
        </Link>
      ))}
    </div>
  );
};

export default PetList;

// src/components/PetList.js
import React from "react";
import { Link } from "react-router-dom";
import PetCard from "./PetCard";
import "./styles/PetList.css";
import useSWR from "swr";
import { fetchData } from "../scripts/data";

const PetList = ({ selectedOption, searchQuery }) => {
  const [pets, setPets] = React.useState([]);
  const url = "/api/v1/pets";

  const { data, error, isLoading } = useSWR(url, fetchData);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  setPets(data);

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
            state: { pet: pet },
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

// src/components/PetList.js
import "./styles/PetList.css";

import useSWR from "swr";
import PetCard from "./PetCard";
import React from "react";
import { Link } from "react-router-dom";
import { fetcher } from "../scripts/data-fetching";

const PetList = ({ selectedOption, searchQuery }) => {
  const [pets, setPets] = React.useState([]);

  const { data, error, isLoading } = useSWR("/api/v1/pets", fetcher);

  React.useEffect(() => {
    if (data) {
      setPets(data);
    }
  }, [data]);

  const filteredPets = pets.filter((pet) => {
    const matchesType =
      selectedOption === "all" || pet.pet_type === selectedOption;
    const matchesSearch = !searchQuery || pet.breed.includes(searchQuery);

    return matchesType && matchesSearch;
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

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

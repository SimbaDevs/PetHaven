// src/components/PetList.js
import React, { useEffect } from "react";
import PetCard from "./PetCard";
import axios from "axios";
import "./PetList.css";

const PetList = () => {
  const [pets, setPets] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/v1/cats")
      .then((res) => {
        setPets(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="pet-list">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;

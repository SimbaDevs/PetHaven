// src/components/PetCard.js
import "./styles/PetCard.css";
import React, {useEffect, useState} from "react";
import base64ToBlob from "../scripts/image-decode";

const PetCard = ({ pet }) => {

  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (pet.image_str) {
      const blob = base64ToBlob(pet.image_str);
      const url = URL.createObjectURL(blob);

      setImageSrc(url);

      // clean up url object when the component unmounts
      return () => URL.revokeObjectURL(url);
    }
  }, [pet.image_str]);

  return (
    <div className="pet-card">
      <img src={imageSrc} alt={pet.name} className="pet-image" />
      <div className="pet-details">
        <h2>{pet.name}</h2>
        <p>
          {pet.age} {pet.age === 1 ? "Year" : "Years"} Old
        </p>
      </div>
    </div>
  );
};

export default PetCard;

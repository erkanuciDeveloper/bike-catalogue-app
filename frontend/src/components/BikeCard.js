// BikeCard.js
import React from 'react';
import '../styles/bikeCard.css';

const BikeCard = ({ bike }) => {
  return (
    <div className="bike-card">
      <h3>{bike.model}</h3>
      <p>{bike.manufacturer}</p>
      <p className="price">${bike.price}</p>
    </div>
  );
};

export default BikeCard;

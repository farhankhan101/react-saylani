// src/components/Card.js
import React from 'react';

const Card = ({ image, text, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt={text} className="card-image" />
      <div className="card-content">
        <p className="card-text">{text}</p>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;

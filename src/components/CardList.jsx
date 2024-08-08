// src/components/CardList.js
import React from 'react';
import Card from './Card';

const CardList = ({ items }) => {
  return (
    <div className="card-list">
      {items.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          text={item.text}
          buttonText={item.buttonText}
        />
      ))}
    </div>
  );
};

export default CardList;

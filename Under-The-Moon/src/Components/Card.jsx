import React from 'react';
import './Card.module.scss';

const Card = ({ title, description, buttonText, imageUri }) => {
  return (
    <div className="card-container">
      <img
        src={imageUri}
        alt={title}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import style from './Card.module.scss';

const Card = ({ title, description, buttonText, imageUri }) => {
  return (
    <div className= {style.card_container}>
      <img
        src={imageUri}
        alt={title}
        className= {style.card_image}
      />
      <div className= {style.card_content}>
      <div className="card-content">
        <h2 className= {style.card_title}>{title}</h2>
        <p className= {style.card_description}>{description}</p>
        <button className= {style.card_button}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;

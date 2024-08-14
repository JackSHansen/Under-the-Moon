import React from 'react';
import Card from './Card';
import style from './CardSection.module.scss'
import img1 from '../Pictures/page_1_img_12.png'
import img2 from '../Pictures/page_1_img_15.png'

const CardSection = () => {
  const cardData = [
    {
      title: 'One 2 One',
      description: 'Lorem ipsum dolor sit amet consectetur. Orci elementum ullamcorper feugiat vitae faucibus.',
      buttonText: 'BOOK TID',
      imageUri: img1,
    },
    {
      title: 'Loyalty Free',
      description: 'Lorem ipsum dolor sit amet consectetur. Orci elementum ullamcorper feugiat vitae faucibus.',
      buttonText: 'LÆS MERE',
      imageUri: img2,
    },
  ];

  return (
    <div className= {style.card_section_container}>
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardSection;

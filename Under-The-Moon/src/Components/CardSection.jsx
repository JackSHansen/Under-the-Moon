import React from 'react';
import Card from './Card';
import './CardSection.scss';

const CardSection = () => {
  const cardData = [
    {
      title: 'One 2 One',
      description: 'Lorem ipsum dolor sit amet consectetur. Orci elementum ullamcorper feugiat vitae faucibus.',
      buttonText: 'BOOK TID',
      imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b30732660249b4e6cb99611f71b9856688f8fb89e3a90629bed3ee73fec37cb5?placeholderIfAbsent=true&apiKey=2f42b98499d44765b24188f002b261e7',
    },
    {
      title: 'Loyalty Free',
      description: 'Lorem ipsum dolor sit amet consectetur. Orci elementum ullamcorper feugiat vitae faucibus.',
      buttonText: 'LÆS MERE',
      imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0b24e761d6259e22878e070d9a0ed90a587d9f7ebf83e7986b026859968cf6f8?placeholderIfAbsent=true&apiKey=2f42b98499d44765b24188f002b261e7',
    },
  ];

  return (
    <div className="card-section-container">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardSection;

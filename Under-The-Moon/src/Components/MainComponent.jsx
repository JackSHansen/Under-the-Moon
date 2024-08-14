import React from 'react';
import CardSection from './CardSection';
import './MainComponent.scss';

const MainComponent = () => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <CardSection />
      </div>
    </div>
  );
};

export default MainComponent;

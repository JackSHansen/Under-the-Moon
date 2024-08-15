import React from 'react';
import style from './CardSection.module.scss'
import CardSection from './CardSection'
import './MainComponent.module.scss';

const MainComponent = () => {
  return (
    <div className= {style.main_container}>
      <div className= {style.content_wrapper}>
        <CardSection />
      </div>
    </div>
  );
};

export default MainComponent;

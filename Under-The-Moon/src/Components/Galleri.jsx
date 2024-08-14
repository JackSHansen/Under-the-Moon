import React from 'react';
import './App.css'; // Din hoved-CSS-fil
import GridItem from './GridItem';
import img3 from '../Pictures/page_1_img_11.png'
import img4 from '../Pictures/page_1_img_16.png'
import img5 from '../Pictures/page_1_img_2.png'
import img6 from '../Pictures/page_1_img_10.png'
import img7 from '../Pictures/page_1_img_6.png'
import img8 from '../Pictures/page_1_img_14.png'
import img9 from '../Pictures/page_1_img_8.png'
import img10 from '../Pictures/page_1_img_9.png'
import img11 from '../Pictures/page_1_img_5.png'
import img12 from '../Pictures/page_1_img_4.png'
import img13 from '../Pictures/page_1_img_1.png'
import img14 from '../Pictures/page_1_img_3.png'
import style from './Galleri.module.scss'
import style from './GridItem.module.scss'


const Galleri = () => {
  return (
    <div className="parent">
      <GridItem className= {Style.img3} imgSrc={img1} />
      <GridItem className={Style.img3} imgSrc={img2} />
      <GridItem className={Style.img3} imgSrc={img3} />
      <GridItem className={Style.img3} imgSrc={img4} />
      <GridItem className={Style.img3} imgSrc={img5} />
      <GridItem className={Style.img3} imgSrc={img6} />
      <GridItem className={Style.img3} imgSrc={img7} />
      <GridItem className={Style.img3} imgSrc={img8} />
      <GridItem className={Style.img3} imgSrc={img9} />
      <GridItem className={Style.img3} imgSrc={img10} />
      <GridItem className={Style.img3} imgSrc={img11} />
      <GridItem className={Style.img3} imgSrc={img12} />
    </div>
  );
};

export default Galleri;

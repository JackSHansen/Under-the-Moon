import React from 'react';
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


const Galleri = () => {
  return (
    <div className= {style.parents}>
      <img src={img3} alt="" className= {style.img3}/>
      <img src={img4} alt="" className= {style.img3}/>
      <img src={img5} alt="" className= {style.img3}/>
      <img src={img6} alt="" className= {style.img3}/>
      <img src={img7} alt="" className= {style.img3}/>
      <img src={img8} alt="" className= {style.img3}/>
      <img src={img9} alt="" className= {style.img3}/>
      <img src={img10} alt="" className= {style.img3}/>
      <img src={img11} alt="" className= {style.img3}/>
      <img src={img12} alt="" className= {style.img3}/>
      <img src={img13} alt="" className= {style.img3}/>
      <img src={img14} alt="" className= {style.img3}/>
    </div>
  );
};

export default Galleri;

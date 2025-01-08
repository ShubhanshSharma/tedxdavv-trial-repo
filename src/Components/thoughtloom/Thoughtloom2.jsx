import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Thoughtloom2.css';

const Thoughtloom2 = () => {
  

  

  return (
    <div className='thought-loom-section'  >
      <div className='thought_loom-top-content'> 
        An unfinished thought splits through the mind, weaving into a colourful spectrum of different perspectives and ideas
      </div>

      <div className='head_circle shift'></div>
      <div className='date-venue-container'>
        <div>7 March 2024</div>
        <pre>DAVV Auditorium, 
          Indore</pre>
      </div>

      <img loading="lazy" className='rainbow_img shift' src='https://imgur.com/w81ZkLh.png'></img>

      
      <img loading="lazy" className='thought_loom_img' src='https://imgur.com/SXty7kU.png'></img>

      <img loading="lazy" className='white_light shift' src='https://imgur.com/QMVLPsi.png'></img>
      <div className='boy-animation shift'>
        <img loading="lazy" className='boy-image' src='https://imgur.com/fN0NV9J.png' alt="person"></img>
      </div>
    </div>
  );
}

export default Thoughtloom2;

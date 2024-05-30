import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slideOne from '../../assets/labutoaie_slide01.jpg'
import './ShowCarousel.css';
import papanasiPhoto from '../../assets/papanasiButoaie.jpeg'
import laButoaieLogo from '../../assets/labutoaie.png'
function ShowCarousel() {
  return (
    <div className='carousel-container'>
      <Carousel 
        showThumbs={false}  
        showStatus={false}  
        infiniteLoop={true} 
        autoPlay={false}     
        interval={5000}     
        stopOnHover={false} 
        className='carousel-slide'
      >
        <div>
          <img src={slideOne} alt="Slide 1"  className='slide-1'/>
          <div className="profita-acum-container">
              <h1>PROFITA ACUM DE OFERTA NOASTRA SPECIALA</h1>
          </div>

          <div className="livram-intre-container">
              <p>Livram intre orele :10:00-24:00</p>
          </div>

          <div className="butoaie-logo-container-slide">

            <img src={laButoaieLogo} alt="" />

          </div>
        </div>
        <div>
          <img src={slideOne} alt="Slide 2" className='slide-2'/>
        </div>
      </Carousel>
    </div>
  );
}

export default ShowCarousel;

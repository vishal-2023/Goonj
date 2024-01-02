import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { cousel } from '../utils/navItem';


const CarouselComponent = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 2000,
    // centerMode: true,           // Enable center mode
    // centerPadding: '-10',     
  };

  return (
    <div className='w-7/12 mx-auto m-10'>
      <Slider {...settings}>
      {cousel.map((slide) => (
        <div key={slide.id} className="slide w-inherit flex flex-col items-center justify-center">
          <div className='w-1/6 flex ml-80 '>
            <img className='rounded-full h-3' src={slide.img} alt=''/>
          </div>
          <div className='my-5 '>{slide.data}</div>
          <div className='w-1/4  left-15 mx-auto px-5 text-xl font-semibold text-red-600'>{slide.title}</div>
        </div>
      ))}
    </Slider>
    </div>
    
    
  );
};

export default CarouselComponent;

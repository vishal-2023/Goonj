import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselComponent = ({cousel}) => {
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
    <div className='w-full xl:w-7/12 mx-auto m-10'>
      <Slider {...settings}>
      {cousel.map((slide) => (
        <div key={slide.id} className="slide w-inherit flex flex-col items-center justify-center">
          <div className='w-32 h-32 xl:w-40 xl:h-40 mx-auto xl:mx-20 flex xl:ml-80 '>
            <img className='rounded-full h-full' src={slide.img} alt=''/>
          </div>
          <div className='my-5 text-xs p-3 md:p-0 md:text-base lg:text-lg '>{slide.data}</div>
          <div className='w-1/4  left-15 mx-auto px-5 text-xl font-semibold text-red-600'>{slide.title}</div>
        </div>
      ))}
    </Slider>
    </div>
    
    
  );
};

export default CarouselComponent;

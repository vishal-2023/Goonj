import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Impact from '../components/Impact';
import { NavHome } from '../utils/navItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ContentData = () => {
  return (
    <div className='w-full md:w-10/12 gap-3 mt-5  p-5 leading-4  text-xs text-wrap lg:font-medium md:p-4 mx-auto  h-full flex flex-col md:items-center md:gap-4 md:justify-center md:text-base lg:text-xl md:text-center md:leading-7 flex-wrap '>
        <p>Goonj aims to build an equitable relationship of strength, sustenance and dignity between the cities and villages using the under-utilized urban material as a tool to trigger development with dignity, across the country.</p>
       <p>You too have a stake in this collective responsibility. Click here to contribute.</p>
    </div>
  )
}

const HomePage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000,
      
  };


  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div className=' w-full mt-14 md:mt-16 mx-auto h-full   md:mb-10'>
            <Slider {...settings}>
                {
                NavHome.map((props) => (
                    <div key={props.id} className= 'w-full  h-32  md:h-[22rem]  lg:h-[28rem] xl:h-[34rem] shadow-lg '>
                        <img className='w-full h-full md:w-full md:h-full mx-auto md:px-5 ' src={props.img} alt=''/>                        
                    </div>
                ))}
            </Slider>
        </div>
        <ContentData/>
        <Impact/>
        <Footer/>
    </div>
  )
}
export default HomePage;
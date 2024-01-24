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
    <div className='w-10/12 font-medium p-4 mx-auto  h-full flex flex-col items-center gap-4 justify-center text-xl text-center leading-7 flex-wrap text-black-400'>
        <p className='p-0'>Goonj aims to build an equitable relationship of strength, sustenance and dignity between the cities and villages using the under-utilized urban material as a tool to trigger development with dignity, across the country.</p>
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
        <div className='w-full mt-16 mx-auto h-full  mb-10'>
            <Slider {...settings}>
                {
                NavHome.map((props) => (
                    <div key={props.id} className='shadow-lg '>
                        <img className='w-full h-[34rem] mx-auto px-5 ' src={props.img} alt=''/>                        
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
import React from 'react'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Impact from '../components/Impact';

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <Slider/> 
        <Content/>
        <Impact/>
        <Footer/>
    </div>
  )
}
export default HomePage;
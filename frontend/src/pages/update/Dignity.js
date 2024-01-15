import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
const Dignity = () => {
  return (
    <div>
        <Navbar/>
        <div className='w-11/12 mx-auto'>
            <img className='w-full h-full' src='https://goonj.org/wp-content/uploads/2020/10/Dignity-Diaries-slider.jpg' alt='' />
        </div>
        <div className='mx-auto w-1/2'>
            <img src='https://goonj.org/wp-content/uploads/2023/12/SM-Post-on-DD-Special-edition-.png' alt='' />
        </div>
        
        <Share/>
        <Footer/>
    </div>
  )
}
export default Dignity;
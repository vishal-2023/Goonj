import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';

const Partner = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <img className='w-full h-80 scale-100 mt-2 ' src='https://goonj.org/wp-content/uploads/2018/05/partner-Ban-977x650.png' alt='' />
        <div className='absolute top-40 w-full mx-auto flex items-center justify-center   text-white text-3xl leading-9 font-medium'>Partner with us</div>  

        <Share/>
        <Footer/>
    </div>
  )
}
export default Partner;
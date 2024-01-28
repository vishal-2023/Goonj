import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';

const Partner = () => {
  return (
    <div className='overflow-hidden w-full h-full'>
        <div>
          <Navbar/>
        </div>
        <div className=''>
          <img className='w-full h-[14rem] mt-2 md:h-[24rem] lg:h-[34rem]' src='https://goonj.org/wp-content/uploads/2018/05/partner-Ban-977x650.png' alt='' />
          <div className='absolute top-20 md:top-40 w-full mx-auto flex items-center justify-center   text-white md:text-3xl leading-9 font-medium'>Partner with us</div>  
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default Partner;
import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import { body1 } from '../../utils/navItem';
import Box2 from '../../components/Box2';

const InitiativePage = () => {
  
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <img className='w-full md:h-96  mt-3 mb-5' src='https://goonj.org/wp-content/uploads/2018/07/bann..png' alt='' />
      <div className='absolute top-20 text-xl md:top-28 w-full mx-auto flex items-center  justify-center   text-white md:text-4xl leading-9 font-medium	'>Our Initiatives</div>  
      {
        body1.map((item)=>{
          return <Box2 className='w-full h-full py-3 gap-2 flex mt-1/2 content' {...item}/>
        })
      }
      <Share/>
      <Footer/>
    </div>
  )
}
export default InitiativePage;
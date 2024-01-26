import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Share from '../../components/Share';

const RecogitionPage = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <img className='w-full h-full md:h-[24rem] xl:h-[600px] mt-3' src='https://goonj.org/wp-content/uploads/2018/05/Ramon-Magsaysay-Award-15-4-1.jpg' alt='' />
        <div className='absolute top-24 md:top-40  text-lg xl:top-80 w-full mx-auto flex items-center justify-center   text-white md:text-4xl leading-9 font-medium'>Awards & Recognitions</div>
        <div className='md:my-10 my-2 mx-6'>
            <img className='w-full' src='https://goonj.org/wp-content/uploads/2018/05/Recognition-updated-2017-1.jpg' alt=''/> 
        </div>
        <div className='md:my-20 mx-6 flex flex-col md:flex-row md:gap-8 gap-2'>
            <img className='w-1/5 md:w-1/4 md:h-32' src='https://goonj.org/wp-content/uploads/2018/06/aimalogo.jpg' alt=''/>
            <img className='w-20 md:w-1/4 md:h-32' src='https://goonj.org/wp-content/uploads/2018/06/CurryStoneF-Logo.png' alt=''/>
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default RecogitionPage;
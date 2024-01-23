import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Share from '../../components/Share';

const RecogitionPage = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <img className='w-full h-[600px] mt-3' src='https://goonj.org/wp-content/uploads/2018/05/Ramon-Magsaysay-Award-15-4-1.jpg' alt='' />
        <div className='absolute top-80 w-full mx-auto flex items-center justify-center   text-white text-4xl leading-9 font-medium'>Awards & Recognitions</div>
        <div className='my-10 mx-6'>
            <img className='w-full' src='https://goonj.org/wp-content/uploads/2018/05/Recognition-updated-2017-1.jpg' alt=''/> 
        </div>
        <div className='my-20 mx-6 flex flex-row gap-8'>
            <img className='w-1/4 h-32' src='https://goonj.org/wp-content/uploads/2018/06/aimalogo.jpg' alt=''/>
            <img className='w-1/4 h-32' src='https://goonj.org/wp-content/uploads/2018/06/CurryStoneF-Logo.png' alt=''/>
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default RecogitionPage;
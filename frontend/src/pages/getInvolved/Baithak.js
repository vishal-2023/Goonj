import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { FaArrowLeft,FaArrowRight } from 'react-icons/fa';

const Baithak = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div className='w-full h-2/3  mt-2' >
            <img className='w-full h-[34rem] opacity-50' src='https://goonj.org/wp-content/uploads/2021/01/web-slider-baithak-1.jpg' alt=''/>
        </div>
        <div className='absolute top-80 w-full mx-auto flex items-center justify-center hover:text-black  text-white text-4xl leading-9 font-medium'>Baithak </div>
        
        <div className='w-8/12 mx-auto h-full flex  flex-col flex-wrap gap-7 border border-black m-10 p-5'>
            <div className='text-3xl font-semibold'>Baithak – Enabling and Building connections to Co-learn and Collaborate</div>
            <div className='flex flex-col gap-4 text-wrap text-base font-normal'>
                <div>Goonj initiated Baithak in the year of 2019 as a platform to enable and build connections to co-learn and collaborate among budding organisations of the development sector.</div>
                <div>The idea is to bring individuals/organizations closer who have just started their journey or in the initial phase of building and establishing their work in the development sector to connect, network,  share ideas, develop better understanding of organizational aspects & larger development ecosystems and form a community who can support each other.</div>
                <div>Baithak is a 2 day event where a group of people meet, bond and discuss among themselves about their journey, what worked & what didn’t and brainstorm on the challenges in the larger development landscape. After Baithak, the group remains connected, supports & collaborates with each other in case of needs.</div>
            </div>
        </div>

        <div className='w-8/12 h-full border mx-auto border-red-500 justify-center items-center text-2xl font-medium px-10 py-8'>
        If you are interested in the upcoming Baithak, then kindly fill up the <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf6Uvpj5nhBvs9DFzDZQl56GSU1YwTJjEV7yoOW9-5CIicC4w/viewform" className='text-red-500 hover:text-black' >form with your details here </Link>  and we will connect with you soon.
        </div>

        <div className='w-8/12 h-full mx-auto my-10 pb-10 border border-black'>
            <div className='m-5 flex flex-col gap-4'>
                <div className='text-2xl font-medium'>Who can participate?</div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-3'><FaArrowRight className='mt-1'/>Organizations which are less than 7 years in operations</div>
                    <div className='flex gap-3'><FaArrowRight className='mt-1'/>Founders/Co-founders of an organisation (max 2 representatives)</div>
                    <div className='flex gap-3'><FaArrowRight className='mt-1'/>Nonprofit (registered or non-registered) and For-profit organizations working on any development issue</div>
                </div>
                <div className='text-2xl font-medium'>Why Baithak?</div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-3'><FaArrowRight className='mt-1'/>To connect, cross-learn and to build collaborations.</div>
                    <div className='flex gap-3'><FaArrowRight className='mt-1'/>To build a better understanding of the development sector.</div>
                    <div className='flex gap-3'><FaArrowRight className='mt-1'/>To be connected with a community of like-minded people and form a network with supports each other</div>
                </div>
                <img src='https://goonj.org/wp-content/uploads/2019/12/blog-post-baithak-glimpse-goonj.jpg' alt=''/>
            </div>
            <div>

            </div>
        </div>

        <Share/>
        <Footer/>
    </div>
  )
}
export default Baithak;
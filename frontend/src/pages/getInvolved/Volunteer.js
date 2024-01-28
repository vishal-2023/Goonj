import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import CubeComponent from '../../components/CubeComponent';

const Volunteer = () => {
  return (
    <div className='overflow-hidden w-full'>
        <Navbar/>
        <div className='w-full h-full mt-10 md:mt-2' >
            <img src='https://goonj.org/wp-content/uploads/2018/05/Volunteer-Banner.jpg' alt=''/>
        </div>
        <div className='absolute top-20 md:top-36 lg:top-72 w-full mx-auto flex items-center justify-center   text-white md:text-4xl leading-9 font-medium'>
        Volunteer
        </div>
        <div className='w-full my-10'>
            <p className='w-10/12 text-sm md:text-base leading-6 font-semibold mx-auto'>
            “Volunteers don’t necessarily have time, but they have heart. As Volunteer, you will learn not just more about the needs of others, you will also learn more about your own needs and you will discover that in helping other, you help yourself most of all.<br/><br/>
            A Volunteer can be anybody. There is no age limit to begin a volunteer, no preferred categories, no salary specification, no special degree or work experience. All that is required is a dedication to the cause, sincerity about the work that one in doing and commitment to a regular and sustained efforts with the organisation.” </p>
            <address className='w-10/12 font-semibold text-base flex items-end justify-end'>
            – MAHATAMA GANDHI
            </address>
            <p className='w-10/12  text-base leading-6 font-semibold mx-auto my-5'>Goonj is only a medium to connect you to some hardcore realities of this country. Visit our nearest<Link className='text-red-500' to='/our-offices/'> Goonj Office cum Processing Center </Link> to better understand the work.</p>
        </div>
        <Share/>
        <Footer/>
        <CubeComponent/>
    </div>
  )
}
export default Volunteer;
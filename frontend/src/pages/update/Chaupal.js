import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { jgwImg } from '../../utils/navItem';
import { Link } from 'react-router-dom';
import Save from '../../components/Save';


const Chaupal = () => {

  const [visible,setVisible] = useState(3);
  const [hide,setHide] = useState(true);
  const showItems = () =>{
      setVisible((prev) => prev+3);
  }
  const hideItem = () =>{
      setHide(visible<16);
  }

  const Handler=()=>{
      console.log(visible)
      hideItem();
      showItems();
  }

  return (
    <div className='bg-[#fffcfc] w-full h-full'>
        <Navbar/>
        <div className='w-full h-full'>
          <img className='md:p-5 p-2 pt-16 md:pt-18' src='https://goonj.org/wp-content/uploads/2024/01/Website-Slider-Chaupal-1-1536x641.png' alt='' />
        </div>
        <div className='w-11/12 md:w-9/12 mx-auto flex flex-col items-center justify-center text-center gap-5'>
          <div className='md:text-xl font-bold'>Chaupal 2023 is here..</div>
          <div className='text-xs md:text-lg'>It’s that special time of the year when we meet for our <b> Annual No Agenda Conversations!</b></div>
          <div className='md:text-lg font-medium'>THIS YEAR IS SUPER SPECIAL!!</div>
          <div className='text-sm md:text-lg font-base'>Because we embark on our 25th year, the culmination of a 24-year-long journey of learning and unlearning while working for people, our evolving purpose of people’s dignity led development and the immense possibilities that our communities, partners, contributors, volunteers and  our team create every day.</div>
        </div>
        <div className='md:w-2/3 md:h-1/4 mx-auto p-5'>
          <img src='https://goonj.org/wp-content/uploads/2024/01/Chaupal-Invite-2.png' alt='' />
        </div>
        <div className='border-2 w-11/12 md:w-2/3 mx-auto p-3 text-sm md:text-lg flex flex-col gap-6 text-center'>
          <div>Please <Link className='text-red-500 text-sm font-medium underline' to='https://docs.google.com/forms/d/e/1FAIpQLScE8ugJRiOI_aVZO_ULItLd6bufNut72rqBAWSk5w9pI5vFtw/viewform'> RSVP here </Link> to help us make better arrangements for YOU!!</div>
          <div>We hope to see you there.. to HUG YOU and to TALK TO YOU about our collective way forward. </div>
          <div>Do block your calendar and don’t miss this opportunity to reconnect with us and other ‘Do Gooders’ in your city. </div>
          <div>(Dates for Kochi, Pune will be announced soon)</div>
        </div>

        <div className='text-center py-5 text-xl md:mt-5 md:text-3xl font-medium'>Goonj in various States</div>
        <div className='w-full h-full flex flex-col lg:flex-row gap-2 lg:gap-5 mx-auto md:w-9/12 text-center justify-center'>  
          <div className='lg:w-1/2 md:w-[30rem] mx-auto'>
            <div className='my-3 text-lg font-medium'>Assam & West Bengal</div>
            <iframe className='w-full md:h-60'  src="https://www.youtube.com/embed/V92n--PQ_dQ?si=utiduKc2j1jOsG8t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div  className='lg:w-1/2 md:w-[30rem] mx-auto'>
            <div className='my-3 text-lg font-medium'>Karnataka</div>
            <iframe className='w-full md:h-60' src="https://www.youtube.com/embed/q_0Z8z30_ZU?si=xLWwJj1gNwGx65iq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
          </div>
        </div>
        <div className='w-full h-full mx-auto mt-6 md:mt-0 lg:m-10'>
          <div className='text-center text-xl md:text-3xl font-medium md:my-8'>Glimpse of Chaupal 2023</div>
          <div className='flex  mx-auto flex-row flex-wrap items-center justify-center gap-2 m-3'>
            
            {
                jgwImg.slice(0,visible).map((item)=>{
                    return <Save {...item}/>
                })
            }
        </div>
        <div>
            {hide && 
                <Link className='border-0 w-full p-4 text-center flex items-center justify-center' >
                    <button className='border-2 border-red-500 p-2 m-6 text-center text-lg font-medium text-red-500 hover:bg-red-500 hover:text-white' onClick={Handler}>Load More</button>  
                </Link>
            }
        </div>
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default Chaupal;
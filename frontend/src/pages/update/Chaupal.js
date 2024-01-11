import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';

const Chaupal = () => {
  return (
    <div>
        <Navbar/>
        <div className=''>
          <img className='p-5 pt-18' src='https://goonj.org/wp-content/uploads/2024/01/Website-Slider-Chaupal-1-1536x641.png' alt='' />
        </div>
        <div className='w-9/12 mx-auto flex flex-col items-center justify-center text-center gap-5'>
          <div className='text-xl font-bold'>Chaupal 2023 is here..</div>
          <div className='text-lg'>It’s that special time of the year when we meet for our <b> Annual No Agenda Conversations!</b></div>
          <div className='text-lg font-medium'>THIS YEAR IS SUPER SPECIAL!!</div>
          <div className='text-lg font-base'>Because we embark on our 25th year, the culmination of a 24-year-long journey of learning and unlearning while working for people, our evolving purpose of people’s dignity led development and the immense possibilities that our communities, partners, contributors, volunteers and  our team create every day.</div>
        </div>
        <div className='w-2/3 h-1/4 mx-auto p-5'>
          <img src='https://goonj.org/wp-content/uploads/2024/01/Chaupal-Invite-2.png' alt='' />
        </div>
        <div className='border-2 w-2/3 mx-auto p-3 text-lg flex flex-col gap-6 text-center'>
          <div>Please RSVP here to help us make better arrangements for YOU!!</div>
          <div>We hope to see you there.. to HUG YOU and to TALK TO YOU about our collective way forward. </div>
          <div>Do block your calendar and don’t miss this opportunity to reconnect with us and other ‘Do Gooders’ in your city. </div>
          <div>(Dates for Kochi, Pune will be announced soon)</div>
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default Chaupal;
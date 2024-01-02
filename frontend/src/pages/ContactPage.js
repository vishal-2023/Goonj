import React from 'react'
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Share from '../components/Share';

const ContactPage = () => {
  return (
    <div>
        <Navbar/>
        <img className='h-72 w-full' src='https://goonj.org/wp-content/uploads/2018/05/Banner_ContactUs.png' alt='' />
        <Share/>
        <Contact/>
    </div>
  )
}
export default ContactPage;
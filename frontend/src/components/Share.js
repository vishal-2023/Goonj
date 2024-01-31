import React from 'react'
import {FaTwitter,FaFacebook,FaWhatsapp,FaLinkedinIn,FaPinterest} from "react-icons/fa";
import { Link } from 'react-router-dom';


const Share = () => {
  return (
    <div className='flex bg-white-200 m-4 p-4 flex-col'>
        <div className='flex  top-5 flex-row  gap-3 items-center text-yellow text-xl justify-center '>Share this page:</div>
        <div className='flex w-full text-xl flex-row gap-3 mt-3 items-center justify-center'>
            <Link to='https://www.facebook.com/goonj.org'>
              <FaFacebook className=''/>
            </Link>
            <Link to='https://twitter.com/goonj'>
              <FaTwitter/>            
            </Link>
            <Link to='https://api.whatsapp.com/send?text=Home%20https%3A%2F%2Fgoonj.org%2F'>
              <FaWhatsapp/>
            </Link>
            <Link to='https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%253A%252F%252Fgoonj.org%252F%26title%3DHome%26summary%3D%26source%3DAddToAny'>
              <FaLinkedinIn/>
            </Link>
            <Link to='https://goonj.org/'>
              <FaPinterest/>
            </Link>
        </div>
    </div>
  )
}
export default Share;
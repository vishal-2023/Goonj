import React from 'react'
import {FaTwitter,FaFacebook,FaWhatsapp,FaLinkedinIn,FaPinterest} from "react-icons/fa";

const Share = () => {
  return (
    <div className='flex bg-white-200 m-4 p-4 flex-col'>
        <div className='flex  top-4 flex-row gap-3 items-center text-yellow text-sm justify-center'>Share this page:</div>
        <div className='flex flex-row gap-3 mt-3 items-center justify-center'>
            <FaFacebook className=''/>
            <FaTwitter/>
            <FaWhatsapp/>
            <FaLinkedinIn/>
            <FaPinterest/>
        </div>
    </div>
  )
}
export default Share;
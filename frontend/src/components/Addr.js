import React from 'react'
import { FaLocationArrow, FaVoicemail, FaPhone,FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Addr = () => {
  return (
    <div className='w-full flex flex-row gap-12 items-center justify-evenly my-14 mx-0'>
        <div className='flex flex-col items-center justify-center gap-5'>
            <div><FaLocationArrow/></div>
            <div>J-93, Sarita Vihar, New Delhi- 110076</div>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <div><FaVoicemail/></div>
            <Link>mail@goonj.org</Link>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <div><FaPhone/></div>
            <div>011- 41401216, 26972351</div>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <Link to="https://www.facebook.com/goonj.org "> 
                <FaFacebook/>
            </Link>
            <Link to="https://www.facebook.com/goonj.org">facebook.com/goonj.org</Link>
        
        </div>
            
    </div>
  )
}
export default Addr;
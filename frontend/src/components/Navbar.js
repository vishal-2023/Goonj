import React from 'react'
import { FaSearch,FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaHome } from 'react-icons/fa';
import {  NavLink } from 'react-router-dom';
import Menubar from './Menubar';
import {AboutdropDown , impactdropDown, getdropDown,updatadropDown,contributedropDown} from "../utils/navItem"
import { useState } from 'react';

const Navbar = () => {
  const [firHovering, firIsHovering] = useState(false);
  const [secHovering, secIsHovering] = useState(false);
  const [thirdHovering, thirdIsHovering] = useState(false);
  const [fourHovering, fourIsHovering] = useState(false);
  const [fifthHovering, fifthIsHovering] = useState(false);
  
  const handleMouseOver = () => {
    firIsHovering(true);
  }

  const handleMouseOut = () => {
    firIsHovering(false);
  }
 
  const handleMouseOver1 = () => {
    secIsHovering(true);
  };
  const handleMouseOut1 = () => {
    secIsHovering(false);
  };

  const handleMouseOver2 = () => {
    fifthIsHovering(true);
  };
  const handleMouseOut2 = () => {
    fifthIsHovering(false);
  };

  const handleMouseOver3 = () => {
    thirdIsHovering(true);
  };
  const handleMouseOut3 = () => {
    thirdIsHovering(false);
  };

  const handleMouseOver4 = () => {
    fourIsHovering(true);
  };
  const handleMouseOut4 = () => {
    fourIsHovering(false);
  };


    
    

  
  return (
    <div className='w-full z-50 fixed bg-white mt-[-14px] border-2 p-2'>
    <div className=' box-border h-12  w-12/13 p-4 border-0 flex flex-row items-center mx-auto justify-between'>
      <div>
        <NavLink to="/">
          <img className='w-14 h-8' src='https://goonj.org/wp-content/uploads/2020/06/Goonj-logo-10June20.png' alt='img' />
        </NavLink>
      </div>
      <ul className='flex items-center z-40 text-sm justify-center gap-4'>
        <li> 
          <NavLink to="/"><FaHome/></NavLink>
        </li>
        <li className='relative h-16 flex flex-col items-center justify-center' onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>  
          
          <NavLink >about us</NavLink>
          {firHovering && (
            <div className='top-6 h-full z-50 absolute'>
              <Menubar  dropDown={AboutdropDown} />
            </div>)  
          }    
        </li>
        <li className='relative h-16 flex flex-col items-center justify-center' onMouseEnter={handleMouseOver1} onMouseLeave={handleMouseOut1}>
          <NavLink > Impact </NavLink>
          {secHovering && (
            <div className='top-6 absolute'>
            <Menubar  dropDown={impactdropDown} />
          </div>  
          )
          }
          
        </li>
        <li className='relative h-16 flex flex-col items-center justify-center' onMouseEnter={handleMouseOver2} onMouseLeave={handleMouseOut2}>
          <NavLink>Get Involved</NavLink>
          {
           fifthHovering && (
            <div className='top-6 right-9 absolute'>
            <Menubar  dropDown={getdropDown} />
          </div>  
          ) 
          }
        </li>
        <li className='relative h-16 flex flex-col z-50 items-center justify-center' onMouseEnter={handleMouseOver3} onMouseLeave={handleMouseOut3}>
          <NavLink>Updates</NavLink>
          {
            thirdHovering && (
              <div className='top-6 z-50 absolute'>
            <Menubar  dropDown={updatadropDown} />
          </div>
            )
          }
        </li>
        <li className='relative h-16 flex flex-col items-center justify-center' onMouseEnter={handleMouseOver4} onMouseLeave={handleMouseOut4}>
          <NavLink>Contribute Material</NavLink>
          {
            fourHovering && (
              <div className='top-6 right-16 absolute'>
            <Menubar  dropDown={contributedropDown} />
          </div>
            )
          }
        </li>
        <li>
          <NavLink to="/our-offices/">Contact us</NavLink>
        </li>
      </ul>
      <div className='flex flex-row gap-3 items-center justify-center'>
        <div>
          <NavLink> <FaSearch/> </NavLink>
        </div>
        <div>
          <NavLink to="https://www.facebook.com/goonj.org"> <FaFacebook/> </NavLink>
        </div>
        <div>  
          <NavLink to="https://www.instagram.com/goonj/"> <FaInstagram/> </NavLink>
        </div>
        <div> 
          <NavLink to="https://twitter.com/goonj"> <FaTwitter/> </NavLink>
        </div>
        <div>  
        <NavLink to="https://www.youtube.com/channel/UCCq8iYlmjT7rrgPI1VHzIHg"> <FaYoutube/> </NavLink>
        </div>
        <NavLink to="/donate/">
          <button class="bg-red-500 p-2 px-4 text-white text-sm">CONTRIBUTE</button>
        </NavLink>
        
      </div>
    </div>
    </div>
  )
}

export default Navbar;
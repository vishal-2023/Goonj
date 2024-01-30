import React from 'react'
import { FaSearch,FaFacebook,FaInstagram,FaTwitter,FaYoutube, FaThList } from 'react-icons/fa';
import {  NavLink } from 'react-router-dom';
import Menubar from './Menubar';
import {AboutdropDown , impactdropDown, getdropDown,updatadropDown,contributedropDown} from "../utils/navItem"
import { useState } from 'react';


const NavBox= () =>{
  <div className='border-4 top-20 bg-pink-600 w-full h-full'>
    console.log("first");
    <ul className='flex flex-col gap-2'>
      <li>About us</li>
      <li>Impact</li>
      <li>Get Involved</li>
      <li>Updates</li>
      <li>Contribute Material</li>
      <li>Contact us</li>

    </ul>
  </div>
}





export const Navbar = () => {
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

  const [isNavBoxVisible, setNavBoxVisible] = useState(true);

  const toggleNavBoxVisibility = () => {
    setNavBoxVisible(!isNavBoxVisible);
  };
    
    

  
  return (
    <div className='w-full z-50 fixed bg-white border-b  p-1'>
    <div className=' box-border h-12 text-sm  w-12/13 p-4 border-0 flex flex-row items-center mx-auto justify-between'>
      <div className=''>
        <NavLink to="/">
          <img className=' w-24 min-[375px]:w-20 h-full ' src='https://goonj.org/wp-content/uploads/2020/06/Goonj-logo-10June20.png' alt='img' />
        </NavLink>
      </div>
      <div className='hidden md:block'>
        <ul className='flex flex-row items-center  z-40 justify-center text-sm font-semibold  gap-6'>
          <li className='relative h-16 flex flex-col items-center justify-center' onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>  
            
            <NavLink className='block '>About us</NavLink>
            {firHovering && (
              <div className='top-5 h-full z-50 absolute '>
                <Menubar  dropDown={AboutdropDown} />
              </div>)  
            }    
          </li>
          <li className='relative h-16 te flex flex-col items-center justify-center' onMouseEnter={handleMouseOver1} onMouseLeave={handleMouseOut1}>
            <NavLink className=' '> Impact </NavLink>
            {secHovering && (
              <div className='top-5 absolute'>
              <Menubar  dropDown={impactdropDown} />
            </div>  
            )
            }
            
          </li>
          <li className='relative h-16 flex flex-col items-center justify-center' onMouseEnter={handleMouseOver2} onMouseLeave={handleMouseOut2}>
            <NavLink className=''>Get Involved</NavLink>
            {
            fifthHovering && (
              <div className='top-5 right-9 absolute'>
              <Menubar  dropDown={getdropDown} />
            </div>  
            ) 
            }
          </li>
          <li className='relative h-16 flex flex-col z-50 items-center justify-center' onMouseEnter={handleMouseOver3} onMouseLeave={handleMouseOut3}>
            <NavLink className=''>Updates</NavLink>
            {
              thirdHovering && (
                <div className='top-5 z-50 absolute'>
              <Menubar  dropDown={updatadropDown} />
            </div>
              )
            }
          </li>
          <li className='relative h-16 flex flex-col items-center justify-center' onMouseEnter={handleMouseOver4} onMouseLeave={handleMouseOut4}>
            <NavLink className=''>Contribute Material</NavLink>
            {
              fourHovering && (
                <div className='top-5 right-16 absolute'>
              <Menubar  dropDown={contributedropDown} />
            </div>
              )
            }
          </li>
          <li className=''>
            <NavLink to="/our-offices/">Contact us</NavLink>
          </li>
        </ul>
      </div>
      
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


        <div className='flex flex-row gap-3 items-center justify-center'>
          {/* Mobile Menu Icon */}
          <div className='' onClick={toggleNavBoxVisibility}>
            <FaThList />
          </div>

          {/* Render NavBox if isNavBoxVisible is true */}
          {isNavBoxVisible && <NavBox />}
        </div>

        
        <NavLink className='hidden md:block ' to="/donate/">
          <button class="bg-red-500 py-2 rounded-md px-3 text-white font-semibold text-base">CONTRIBUTE</button>
        </NavLink>
        
      </div>
    </div>
    </div>
  )
}

export default Navbar;
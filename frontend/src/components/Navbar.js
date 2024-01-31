import React from 'react'
import { FaSearch,FaFacebook,FaInstagram,FaTwitter,FaYoutube, FaThList } from 'react-icons/fa';
import {  NavLink } from 'react-router-dom';
import Menubar from './Menubar';
import {AboutdropDown , impactdropDown, getdropDown,updatadropDown,contributedropDown} from "../utils/navItem"
import { useState } from 'react';


const NavBox= () =>{
  <div className='border-4  bg-pink-600 w-full h-full'>
    console.log("first");
    
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

  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    // Toggle the value of isHidden
    setIsHidden(!isHidden);
  };

    
    

  
  return (
    
    <div className='flex border-b fixed z-50 mb-2 flex-col bg-white w-full '>
      <div className='w-full    bg-inherit   p-1'>
        <div className='box-border md:h-12 text-xs md:text-sm lg:text-base w-full lg:w-12/13 md:p-4 border-0 flex flex-row items-center mx-auto justify-between'>
          <div >
            <NavLink to="/">
              <img className=' w-20 lg:p-2 lg:w-24 h-12 md:h-full ' src='https://goonj.org/wp-content/uploads/2020/06/Goonj-logo-10June20.png' alt='img' />
            </NavLink>
          </div>
          <div className='hidden md:block'>
            <ul className='flex flex-row  items-center  z-40  lg:text-base justify-center  font-semibold gap-4  lg:gap-6'>
              <li className='relative h-16  flex flex-col items-center justify-center' onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>  
                
                <NavLink className='block '>About us</NavLink>
                {firHovering && (
                  <div className='top-5 h-full z-50 absolute '>
                    <Menubar  dropDown={AboutdropDown} />
                  </div>)  
                }    
              </li>
              <li className='relative  h-16 flex flex-col items-center justify-center' onMouseEnter={handleMouseOver1} onMouseLeave={handleMouseOut1}>
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
          
          <div className=' flex flex-row gap-3 items-center justify-center'>
            <div className='hidden md:hidden lg:block'>
              <NavLink> <FaSearch/> </NavLink>
            </div>
            <div className='md:hidden lg:block'>
              <NavLink to="https://www.facebook.com/goonj.org"> <FaFacebook/> </NavLink>
            </div>
            <div className=' md:hidden lg:block'>  
              <NavLink to="https://www.instagram.com/goonj/"> <FaInstagram/> </NavLink>
            </div>
            <div className=' md:hidden lg:block'> 
              <NavLink to="https://twitter.com/goonj"> <FaTwitter/> </NavLink>
            </div>
            <div className='md:hidden lg:block'>  
            <NavLink to="https://www.youtube.com/channel/UCCq8iYlmjT7rrgPI1VHzIHg"> <FaYoutube/> </NavLink>
            </div>


            <div className='md:hidden  flex flex-row gap-3 items-center justify-center'>
              {/* Mobile Menu Icon */}
              <div className='' >
                <FaThList onClick={handleClick}/>
              </div>

              {/* Render NavBox if isNavBoxVisible is true */}
              { <NavBox />}
            </div>

            
            <NavLink className=' md:block' to="/donate/">
              <button className="bg-red-500 py-2 rounded-md px-1 md:px-3 text-white font-semibold text-xs lg:text-base">CONTRIBUTE</button>
            </NavLink>
            
          </div>
        </div>
      </div>
      {isHidden &&
        <div className='border md:hidden  pt-2 pb-2 md:h-16'>
          <ul className='flex flex-row  lg:hidden flex-wrap items-center  z-40 justify-center text-sm font-semibold  gap-3'>
            <li className='relative flex flex-col ' onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>  
              
              <NavLink className='text-xs hover:text-red-600 '>About us</NavLink>
              {firHovering && (
                <div className='ml-4 h-full z-50 absolute '>
                  <Menubar  dropDown={AboutdropDown} />
                </div>)  
              }    
            </li>
            <li className='relative   flex flex-col items-center justify-center' onMouseEnter={handleMouseOver1} onMouseLeave={handleMouseOut1}>
              <NavLink className='text-xs hover:text-red-600'> Impact </NavLink>
              {secHovering && (
                <div className=' absolute'>
                <Menubar  dropDown={impactdropDown} />
              </div>  
              )
              }
              
            </li>
            <li className='relative  flex flex-col items-center justify-center' onMouseEnter={handleMouseOver2} onMouseLeave={handleMouseOut2}>
              <NavLink className='text-xs hover:text-red-600'>Get Involved</NavLink>
              {
              fifthHovering && (
                <div className=' right-9 absolute'>
                <Menubar  dropDown={getdropDown} />
              </div>  
              ) 
              }
            </li>
            <li className='relative flex flex-col z-50 items-center justify-center' onMouseEnter={handleMouseOver3} onMouseLeave={handleMouseOut3}>
              <NavLink className='text-xs hover:text-red-600'>Updates</NavLink>
              {
                thirdHovering && (
                  <div className='right-3  absolute'>
                <Menubar  dropDown={updatadropDown} />
              </div>
                )
              }
            </li>
            <li className='relative flex flex-col items-center justify-center' onMouseEnter={handleMouseOver4} onMouseLeave={handleMouseOut4}>
              <NavLink className='text-xs hover:text-red-600'>Contribute Material</NavLink>
              {
                fourHovering && (
                  <div className=' absolute'>
                    <Menubar  dropDown={contributedropDown} />
                  </div>
                )
              }
            </li>
            <li className='text-xs hover:text-red-600'>
              <NavLink to="/our-offices/">Contact us</NavLink>
            </li>
          </ul>
        </div>
      }
    </div>
  )
}

export default Navbar;
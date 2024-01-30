import React from 'react';
import { NavLink } from 'react-router-dom';

const Menubar = ({dropDown}) => {
    
  return (
    <ul className='relative m-5 z-50 right-9 md:right-6'>
        {
            <li className='absolute w-32 md:w-40 md:mt-5  flex flex-col  z-50 bg-slate-200 border-2'>
            {
                dropDown.map((item) => {
                return <li className='md:p-2   z-50 hover:bg-slate-100 text-base font-semibold' >
                    {    
                    <NavLink className='text-xs md:text-sm' to={item.path} key={item.id}>      
                        {item.title}
                    </NavLink>
                    }  
                    </li>
                })
            }
        </li>
        }
        
                
    </ul>
  )
}
export default Menubar;
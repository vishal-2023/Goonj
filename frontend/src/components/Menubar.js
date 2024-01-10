import React from 'react';
import { NavLink } from 'react-router-dom';

const Menubar = ({dropDown}) => {
    
  return (
    <ul className='relative m-5 z-50 right-6'>
        {
            <li className='absolute w-32 mt-5  flex flex-col  gap-2 z-50 bg-slate-200 border-2'>
            {
                dropDown.map((item) => {
                return <li className='border m-1 3px z-50 ' >
                    {    
                    <NavLink to={item.path} key={item.id}>      
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
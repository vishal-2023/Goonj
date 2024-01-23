import React from 'react';
import { NavLink } from 'react-router-dom';

const Menubar = ({dropDown}) => {
    
  return (
    <ul className='relative m-5 z-50 right-6'>
        {
            <li className='absolute w-40 mt-5  flex flex-col  z-50 bg-slate-200 border-2'>
            {
                dropDown.map((item) => {
                return <li className='p-2  z-50 hover:bg-slate-100 text-base font-semibold' >
                    {    
                    <NavLink className='' to={item.path} key={item.id}>      
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
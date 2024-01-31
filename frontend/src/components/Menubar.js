import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const Menubar = ({dropDown}) => {
    
  return (
    <ul className='relative m-5 z-50 right-9 md:right-6'>
        {
            <li className='absolute w-28 md:w-40 lg:w-44 mt-1 md:m-0  md:mt-5  flex flex-col lg:p-0  z-50 bg-slate-200 border-2 '>
            {
                dropDown.map((item) => {
                return <Link  key={item.id} className=' border-white border border-b-0 md:border-0 md:p-2    z-50 hover:bg-slate-100 text-base font-semibold hover:text-red-500' >
                    <NavLink to={item.path} >
                        {    
                        <div className='text-xs p-1 md:p-0 md:text-base lg:text-lg ' >      
                            {item.title}
                        </div>
                        }  
                    </NavLink>
                    
                    </Link>
                })
            }
        </li>
        }
        
                
    </ul>
  )
}
export default Menubar;
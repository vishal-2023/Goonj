import React from 'react'
import { Link } from 'react-router-dom';

const Box = (props) => {
  return (
    <Link key={props.id} to={props.link} className='flex items-center justify-center min-[320px]:h-60 min-[320px]:w-52 min-[425px]:h-72 min-[425px]:w-64 box-border  md:h-96 md:w-80 m-3  rounded-xl border shadow-lg border-black border-pulse-animation'>
        <img className='w-full h-full flex items-center rounded-xl justify-center hover:scale-95' src={props.img} alt=''/>
    </Link>
  )
}
export default Box;
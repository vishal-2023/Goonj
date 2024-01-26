import React from 'react'

const Card = (props) => {

  const handle = {
    width : props.width || 'fit'
  }

  return (
    <div className=' min-[320px]:w-32 min-[375px]:w-40  flex flex-row text-center justify-center flex-wrap  relative md:w-72 md:h-64 hover:scale-95'>
         <img  className='w-full h-full rounded-lg' src={props.image} alt='' />
         <div className='w-full absolute text-sm pt-1 md:text-2xl text-center md:mt-20 text-white font-semibold'>{props.text}</div> 
    </div>
  )
}
export default Card;
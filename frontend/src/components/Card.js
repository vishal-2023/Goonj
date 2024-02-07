import React from 'react'

const Card = (props) => {

  // const handle = {
  //   width : props.width || 'fit'
  // }

  return (
    // <div className=' min-[320px]:w-32 min-[375px]:w-40  flex flex-row text-center justify-center flex-wrap  relative md:w-72 md:h-64 hover:scale-95'>
    //      <img  className='w-full h-full rounded-lg ' src={props.image} alt='' />
    //      <div className='w-full absolute text-sm pt-1 md:text-2xl text-center md:mt-20 text-white font-semibold'>{props.text}</div> 
    // </div>

    <div className='border-pulse-animation border-2 rounded-lg min-[320px]:w-32  min-[375px]:w-40 flex flex-row text-center justify-center flex-wrap relative md:w-72 md:h-64 transform transition-transform duration-300 ease-in-out hover:scale-105'>
      <img className='w-full h-full rounded-lg' src={props.image} alt='' />
      <div className='absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100'>
      <p className='text-white text-lg md:text-2xl font-semibold'>{props.text}</p>
  </div> 
</div>

  )
}
export default Card;
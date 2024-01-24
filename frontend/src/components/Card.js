import React from 'react'

const Card = (props) => {

  const handle = {
    width : props.width || 'fit'
  }

  return (
    <div className=' flex flex-row text-center justify-around flex-wrap gap-10 relative w-72 h-64 hover:scale-95'>
         <img  className='w-full h-full rounded-lg' src={props.image} alt='' />
         <div className='w-full absolute text-2xl text-center mt-20 text-white font-semibold'>{props.text}</div> 
    </div>
  )
}
export default Card;
import React from 'react'

const Card = (props) => {

  const handle = {
    width : props.width || '4/5'
  }

  return (
    <div className='flex items-center justify-center relative w-1/4 mx-auto'>
        <img style={handle} className='m-1 p-0' src={props.image} alt='' />
        <div className='absolute text-xl text-stone-300 font-bold'>{props.text}</div>
    </div>
  )
}
export default Card;
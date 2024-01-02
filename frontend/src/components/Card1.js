import React from 'react'

const Card1 = (props) => {
  return (
    <div className='flex flex-row items-center mx-3 justify-center my-6 w-full h-full gap-1 p-1'>
        <div className='w-1/4 '><img className='border rounded-full w-2/3' src={props.imgdata} alt='' /></div>
        <div className='flex flex-col w-2/3 gap-2 mt-6'>
            <div className='text-3xl font-semibold'>{props.name}</div>
            <div className='text-lg font-medium'>{props.title}</div>
            <div className='font-normal'>{props.data}</div>
        </div>
    </div>
  )
}
export default Card1;
import React from 'react'

const Card1 = (props) => {
  return (
    <div className='flex flex-col lg:flex-row items-center md:mx-3 justify-center my-6 w-full h-full gap-1 p-1'>
        <div className='xl:w-1/4  w-full h-32 md:h-60 md:w-72 xl:h-full  '><img className='border mx-auto h-full rounded-full xl:w-2/3 ' src={props.imgdata} alt='' /></div>
        <div className='flex flex-col w-11/12  lg:w-2/3 gap-2 mt-6'>
            <div className='md:text-3xl  min-[320px]:text-lg mx-auto md:mx-0 font-semibold'>{props.name}</div>
            <div className=' md:text-lg font-medium mx-auto md:mx-0'>{props.title}</div>
            <div className='text-xs md:text-base md:font-normal mx-auto '>{props.data}</div>
        </div>
    </div>
  )
}
export default Card1;
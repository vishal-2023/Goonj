import React from 'react'
const Box1 = () => {
  return (
    <div className='w-full h-full  flex flex-col-reverse md:flex-row md:justify-between bg-gray-100  lg:gap-8 p-2 md:py-9 '>
        <div className='lg:w-[2400px] md:w-1/2 md:rounded-xl md:ml-10 shadow-xl bg-white   lg:px-10 md:h-[380px] flex flex-col md:py-20 md:items-center gap-1 md:justify-center '>
            <div className='lg:text-3xl md:text-lg mt-2  lg:mt-5 lg:pt-10 text-center font-semibold'>Our Mission & Vision</div>
            <div className='text-xs px-3 pb-3 lg:pb-10 lg:text-sm leading-4 md:text-sm xl:text-base md:mx-3 md:my-4 md:leading-5  lg:font-normal '>Goonj aims to build an equitable relationship of strength, sustenance, and dignity between the cities and villages,
                 using under-utilized material as a tool to trigger development with dignity. We envision growing as an idea across regions, economies, and countries using urban surplus material as a tool to address basic but neglected issues of the financially and materially poor, involving them in designing and implementing their own solutions, with
                 their own efforts, knowledge, and dignity, and material as a reward for their participation.
                </div>
        </div>
        <div className='md:mr-12  md:w-1/2 lg:w-[2900px] '> 
            <img className='mx-auto rounded-xl p-2 md:h-96 md:rounded-2xl lg:w-full ' src='https://goonj.org/wp-content/uploads/2018/06/Knowing-goonj_Vision.png' alt='' />
        </div>
    </div>
  )
}
export default Box1;
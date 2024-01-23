import React from 'react'
const Box1 = () => {
  return (
    <div className='w-full h-full flex flex-row justify-between bg-gray-100 gap-8 py-10 '>
        <div className='w-[2400px] rounded-xl ml-10 antialiased shadow-xl bg-white   px-10 h-[380px] flex flex-col py-20 items-center gap-1 justify-center '>
            <div className='text-3xl font-semibold'>Our Mission & Vision</div>
            <div className='text-base mx-3 my-4 leading-5  font-normal '>Goonj aims to build an equitable relationship of strength, sustenance, and dignity between the cities and villages,
                 using under-utilized material as a tool to trigger development with dignity. We envision growing as an idea across regions, economies, and countries using urban surplus material as a tool to address basic but neglected issues of the financially and materially poor, involving them in designing and implementing their own solutions, with
                 their own efforts, knowledge, and dignity, and material as a reward for their participation.
                </div>
        </div>
        <div className='mr-12 '> 
            <img className='h-96 rounded-xl w-[2900px] ' src='https://goonj.org/wp-content/uploads/2018/06/Knowing-goonj_Vision.png' alt='' />
        </div>
    </div>
  )
}
export default Box1;
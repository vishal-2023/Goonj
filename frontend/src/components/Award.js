import React from 'react'

const Award = (props) => {
  return (
    <div>
        <div className='w-full top-5 min-h-screen p-4 relative flex flex-row bg-fixed items-center justify-center'
        style={{
    
          backgroundImage:
            `url(${props.img})`
        }}>
          <div className='absolute w-11/12 h-2/3 p-11  border-white-500 border-4'></div>
          <div className='absolute top-1/3 text-white text-3xl	font-bold leading-11'> Awards and Recognitions </div>
          <div className='absolute mx-0 text-white	font-bold text-xl'> Over the span of almost 2 decades, Goonj has won both National and International attention
           and</div>
          <div className='absolute text-white	font-bold top-1/2 m-3 text-xl 	'>recognition for its extensive work on non-issues and sustainable innovation.</div>
          <div className='absolute top-1/2 m-16'><button className='border-solid border-2 font-bold border-white-600 text-white px-4 py-1'>Read me</button></div>
        </div>
    </div>
  )
}
export default Award;
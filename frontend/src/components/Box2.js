import React from 'react'


const Box2 = (props) => {
  return (
    <div className={`${props.className} flex text-xs flex-col md:flex-row lg:justify-between  bg-gray-100 md:p-2`}>
        <div className='md:w-1/2  xl:ml-20 w-60 h-48 mx-auto  md:h-full md:ml-4'>
            <img className='rounded-xl md:h-[20rem] w-full h-full xl:h-[500px] xl:w-[610px]' src={props.imgdata} alt=''/>
        </div>
        
        <div className='shadow-xl xl:mr-20 rounded-xl  md:w-1/2  bg-white lg:mr-8 flex flex-col py-4 lg:py-18 items-center justify-center gap-5'>
             <div className='lg:text-3xl font-bold mx-3 md:text-base md:font-semibold'>{props.title}</div>
            
            <div className='xl:px-20 md:px-3 px-3 xl:text-lg  lg:p-4 flex flex-col xl:gap-8 xl:leading-5'>
                <div>{props.data}</div>
                
            </div>
            <button className='md:border-2 border border-black p-2'>Read more</button>
        </div>
    </div>
  )
}
export default Box2;
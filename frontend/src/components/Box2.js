import React from 'react'


const Box2 = (props) => {
  return (
    <div className={`${props.className} flex flex-row justify-around bg-gray-100 p-2`}>
        <div className='w-1/2 h-2/3 ml-4'>
            <img className='rounded-xl h-[500px] w-[610px]' src={props.imgdata} alt=''/>
        </div>
        
        <div className='shadow-xl  rounded-xl w-1/2 bg-white mr-8 flex flex-col py-18 items-center justify-center gap-5'>
             <div className='text-3xl font-semibold'>{props.title}</div>
            
            <div className='px-20 flex flex-col gap-8 leading-5'>
                <div>{props.data}</div>
                
            </div>
            <button className='border-2 p-2'>Read more</button>
        </div>
    </div>
  )
}
export default Box2;
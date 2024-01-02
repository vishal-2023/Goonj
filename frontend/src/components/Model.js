import React from 'react'
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Model = ({onClose,...props}) => {
  return (
    <div className='w-2/3 flex flex-col border-2 m-1 z-20 h-full overflow-auto bg-white  mx-auto px-0 py-1 pb-9 inset-0 fixed backdrop-blur-sm'>
        <div className='flex flex-row-reverse mr-16 mt-2 text-xl' onClick={onClose}>
            <FaWindowClose/>
        </div>
        <img className='w-5/6 mx-auto mt-1' src={props.img} alt=''/>
        <Link className='m-5 mx-auto border-2 border-red-300 text-lg font-semibold w-32 p-2 text-red-400 hover:bg-red-300' to="https://docs.google.com/forms/d/e/1FAIpQLScqBF0inT5UIrNhc_EEYhNN0cQnLpocX0NKBUcQjtupatY8JQ/viewform">APPLY NOW</Link>
        <div className='flex mx-auto flex-col gap-8 w-5/6'>
            <div className='flex flex-col gap-2'>
                <div className='text-xl font-medium'>{props.q1}</div>
                <div className='text-sm font-normal'>{props.ans1}</div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-xl font-medium'>{props.q2}</div>
                <div className='text-sm font-normal'>{props.ans2}</div>
            </div>
            
        </div>
        
    </div>
  )
}
export default Model;
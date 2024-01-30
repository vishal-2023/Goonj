import React from 'react'
import { FaRupeeSign } from 'react-icons/fa'

const DonateBox = (props) => {
  return (
    <div className={` ${props.data}  border shadow-lg p-2 `}>
        <div className='flex flex-row mb-2 lg:mb-0 justify-between  '>
            <button className='p-2 min-[425px]:px-7 rounded-md bg-[#ededed]'>One Time</button>
            <button className='p-2 min-[425px]:px-7 rounded-md bg-[#ededed]'>Monthly</button>
            <button className=' p-2 min-[425px]:px-7 rounded-md bg-[#ededed]'>Team 500</button>
        </div>
        <div className='flex flex-col gap-2 pb-3 border-2 bg-[#ededed] rounded-md'>
            <div className='flex flex-row justify-between p-3 '>
                <button className='p-3 min-[425px]:px-10 rounded-md bg-white'>2000</button>
                <button className='p-3 min-[425px]:px-10 rounded-md bg-white'>4000</button>
                <button className='p-3 min-[425px]:px-10 rounded-md bg-white'>10000</button>
            </div>
            <div className='flex flex-row justify-between mx-3 ' >
                <button className=' p-1 min-[425px]:px-5 text-sm rounded-md bg-white'><FaRupeeSign/></button>
                <input 
                className='w-80 p-1 red-placeholder bg-white rounded-md'
                type='text'
                placeholder='Other Amount'/>
            </div>
        </div>
        <div className='flex mt-2 flex-row  justify-around gap-2 lg:gap-9'>
            <div className='flex w-1/2 m-auto px-3 py-2 gap-5 bg-[#ededed]'>
                <input type='radio' className='' />
                <label>Indian Citizen</label>
            </div>
            <div className='flex w-1/2 m-auto px-3 py-2 gap-5 bg-[#ededed]'>
                <input type='radio' className='' />
                <label>Foreign Citizen</label>
            </div>
        </div>
        <div className='text-center mt-2 lg:mt-0 p-1 md:p-2 bg-red-500 text-white text-lg font-sm rounded-md'>Contribute</div>
        <div className='flex flex-row mt-1 lg:mt-0 justify-between text-sm underline'>
            <div className=''>Guideline for Contribution</div>
            <div className=''>Contribute Offline</div>
        </div>
    </div>
  )
}

export default DonateBox
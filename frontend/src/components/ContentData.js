import React from 'react'

const ContentData = (props) => {
  return (
    <div className='w-11/12 md:w-10/12 mx-auto flex flex-col my-7 md:my-10 gap-3 md:gap-1'>
      <div className='md:text-lg font-semibold'>Q: {props.que}</div>
      <div className='text-sm lg:text-base md:text-normal font-normal'>Ans: {props.ans}</div>
    </div>
  )
}
export default ContentData;
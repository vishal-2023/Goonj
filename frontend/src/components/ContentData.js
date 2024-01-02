import React from 'react'

const ContentData = (props) => {
  return (
    <div className='w-10/12 mx-auto flex flex-col my-10 gap-1'>
      <div className='text-lg font-semibold'>Q: {props.que}</div>
      <div className='text-normal font-normal'>Ans: {props.ans}</div>
    </div>
  )
}
export default ContentData;
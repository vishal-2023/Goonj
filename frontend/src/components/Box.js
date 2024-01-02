import React from 'react'

const Box = (props) => {
  return (
    <div className='flex items-center justify-center box-border h-1/4 w-1/4 m-3 p-1 border border-black '>
        <img className='w-full flex items-center  justify-center' src={props.img} alt=''/>
    </div>
  )
}
export default Box;
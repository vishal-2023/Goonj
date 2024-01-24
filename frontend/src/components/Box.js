import React from 'react'

const Box = (props) => {
  return (
    <div className='flex items-center justify-center box-border h-96 w-80 m-3  rounded-xl border shadow-lg border-black '>
        <img className='w-full h-full flex items-center rounded-xl justify-center hover:scale-95' src={props.img} alt=''/>
    </div>
  )
}
export default Box;
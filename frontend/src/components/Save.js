import React from 'react'
import { Link } from 'react-router-dom';

const Save = (props) => {

  const imgStyle = {
    padding: props.imgPadding || 0,
    height:props.imgHeight || '20rem',
    width:props.imgWidth || '20rem'
  };
  

  return (
    <div className ='overflow-hidden p-5 md:p-2 md:border-2 mx-auto hover:scale-95'>
        <Link to={props.dir} className='w-full' >
            <img style={imgStyle} className='  md:h-full' src={props.imgdata} alt=''/>
            <div className='text-base font-medium w-72  break-all '>{props.data}</div>
        </Link>
    </div>
  )
}
export default Save;
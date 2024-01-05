import React from 'react'
import { Link } from 'react-router-dom';

const Save = (props) => {

  const imgStyle = {
    padding: props.imgPadding || 0,
    height:props.imgHeight || '24rem',
    width:props.imgWidth || '20rem'
  };
  

  return (
    <div className='overflow-hidden  hover:scale-95'>
        <Link to={props.dir}>
            <img style={imgStyle} className='border-2' src={props.imgdata} alt=''/>
            <div className='text-base font-medium w-72 flex items-center justify-center  break-all '>{props.data}</div>
        </Link>
    </div>
  )
}
export default Save;
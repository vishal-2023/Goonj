import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';

const SubItem = (props) => {
    const navigate = useNavigate();

    const handlerState=(id)=>{
        navigate(`/dummy/${id}`);
    }
  return (
    <div className=' border-4 flex flex-row gap-7 p-3 m-6'>
        <Link className='h-full w-full mt-2' to=''>< img className='w-72 h96' src={props.imgdata} alt='' /></Link>
        <div className='flex flex-col gap-5'>
            <h1 className='text-2xl font-semibold'>{props.title}</h1>
            <p className='break-word text-base font-normal leading-5'>{props.data.slice(0,400)}...</p>
            <Link className='text-red-500' onClick={handlerState(`${props.id}`)} to=''>Read more...</Link>
        </div>
    </div>
  )
}
export default SubItem;
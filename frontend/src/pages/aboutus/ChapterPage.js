import React from 'react'
import Navbar from '../../components/Navbar';
import {Report1,Report2} from '../../utils/navItem'
import Save from '../../components/Save';
import Share from '../../components/Share';
import Footer from '../../components/Footer';

const ChapterPage = () => {
  return (
    <div className='overflow-hidden lazy-load'>
        <Navbar/>
        <img className='w-full h-72  mt-3' src='https://goonj.org/wp-content/uploads/2023/08/Banner_Annual-Financial-Report.jpg' alt='' />
        <div className='absolute top-32 w-full mx-auto flex items-center justify-center   text-white text-4xl leading-9 font-medium'>Chapter Reports</div>
        <div className='w-full flex flex-row gap-7 my-10 item-center justify-center'>
            {
                Report1.map( (item)=>{
                    return <Save id={item.id} className="active" {...item}/>
                })
            }
        </div>
        <div className='w-full flex flex-row mb-8 items-center justify-around '>
            {
                Report2.map( (item)=>{
                    return <Save id={item.id} className="active" {...item}/>
                })
            }
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default ChapterPage;
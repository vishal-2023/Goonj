import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import { body } from '../../utils/navItem';
import Card1 from '../../components/Card1';

const GovernPage = () => {
  return (
    <div className='overflow-hidden w-full h-full'>
      <Navbar/>
        <img className='w-full h-96 opacity-95  mt-3' src='https://goonj.org/wp-content/uploads/2018/07/governing-ban..png' alt='' />
        <div className='absolute top-32 w-full mx-auto flex items-center justify-center   text-white text-4xl leading-9 font-medium	'>Governing Body</div>
        {
          body.map((item)=>{
            return <Card1 className="flex flex-row gap-3" {...item} />
          })
        }
        <Share/>
        <Footer/>
    </div>
  )
}
export default GovernPage;
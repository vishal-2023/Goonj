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
        <img className='w-full h-full md:h-96 opacity-60  mt-3' src='https://goonj.org/wp-content/uploads/2018/07/governing-ban..png' alt='' />
        <div className='absolute  min-[320px]:top-20  min-[320px]:text-lg md:mt-28  w-full mx-auto flex items-center justify-center   text-black lg:text-3xl leading-9 font-medium	'>Governing Body</div>
        <div>
          {
            body.map((item)=>{
              return <Card1 className="flex  min-[320px]:flex-col xl:flex-row gap-3" {...item} />
            })
          }
        </div>
        
        <Share/>
        <Footer/>
    </div>
  )
}
export default GovernPage;
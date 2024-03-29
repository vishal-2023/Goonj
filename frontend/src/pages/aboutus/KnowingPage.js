import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Box1 from '../../components/Box1';
import Footer from '../../components/Footer';
import { Value,Founder,Initiative,Processing ,Principles} from '../../utils/navItem';
import Box2 from '../../components/Box2';
import Addr from '../../components/Addr';
import { Award } from '../../components/Impact';

const KnowingPage = () => {
  return (
    <div className='relative w-full h-full overflow-hidden '>
        <Navbar />
        <img className='w-full md:h-[20rem] lg:h-[550px]  mt-3' src='https://goonj.org/wp-content/uploads/2018/06/final.png' alt='' />
        <div className='absolute top-16 xl:top-32 md:top-20 md:text-2xl w-full mx-auto flex items-center justify-center   text-white lg:text-4xl leading-9 font-medium	'>Knowing Goonj</div>
        <Box1/>
        <div className='bg-gray-100 '>
          <div>
            {
              Value.map((item)=> {
                return <Box2 className='w-full xl:h-full flex flex-row my-0 p-1/2 md:mx-2' {...item}/>
              })
            }
          </div>
          
          {
            Initiative.map((item)=>{
              return <Box2 className='w-full xl:h-full md:h-[20rem] flex flex-row my-8 p-1/2 md:mx-3' {...item} />
            })
          }
          {
            Processing.map((item) => {
              return <Box2 className='w-full xl:h-full md:h-[20rem] flex my-5  m-auto md:ml-3 flex-row-reverse ' {...item}/>
            })
          }
          {
            Principles.map((item)=>{
              return <Box2 className='w-full xl:h-full md:h-[20rem] flex flex-row my-8 p-1/2 md:mx-3' {...item} />
            })
          }
        </div>
        
        <Award  img={'https://goonj.org/wp-content/uploads/2018/06/Ramon-Magsaysay-Award-Ceremony-2015-Manila-Philipines.jpg'}/>
        <Addr/>
        <Share/>
        <Footer/>
    </div>
  )
}
export default KnowingPage;
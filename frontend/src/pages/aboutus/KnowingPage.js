import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Box1 from '../../components/Box1';
import Footer from '../../components/Footer';
import { Value,Founder,Initiative,Processing ,Principles} from '../../utils/navItem';
import Box2 from '../../components/Box2';
import Award from '../../components/Award';
import Addr from '../../components/Addr';

const KnowingPage = () => {
  return (
    <div className='relative w-full h-full overflow-hidden'>
        <Navbar />
        <img className='w-full h-[550px]  mt-3' src='https://goonj.org/wp-content/uploads/2018/06/final.png' alt='' />
        <div className='absolute top-[284px] w-full mx-auto flex items-center justify-center   text-white text-4xl leading-9 font-medium	'>Knowing Goonj</div>
        <Box1/>
        {
          Value.map((item)=> {
            return <Box2 className='w-full h-full flex flex-row my-5 p-1/2 mx-2' {...item}/>
          })
        }
        {
          Founder.map((item)=> {
            return <Box2 className='w-full h-full flex my-5  m-auto ml-3 flex-row-reverse ' {...item}/>
          })
        }
        {
          Initiative.map((item)=>{
            return <Box2 className='w-full h-full flex flex-row my-8 p-1/2 mx-3' {...item} />
          })
        }
        {
          Processing.map((item) => {
            return <Box2 className='w-full h-full flex my-5  m-auto ml-3 flex-row-reverse ' {...item}/>
          })
        }
        {
          Principles.map((item)=>{
            return <Box2 className='w-full h-full flex flex-row my-8 p-1/2 mx-3' {...item} />
          })
        }
        <Award  img={'https://goonj.org/wp-content/uploads/2018/06/Ramon-Magsaysay-Award-Ceremony-2015-Manila-Philipines.jpg'}/>
        <Addr/>
        <Share/>
        <Footer/>
    </div>
  )
}
export default KnowingPage;
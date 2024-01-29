import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Share from '../../components/Share'
import Save from '../../components/Save'
import { MediaData } from '../../utils/navItem'

const Media = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div>
          <img className='w-full mt-14 lg:mt-2 lg:h-[26rem]' src='https://goonj.org/wp-content/uploads/2018/05/Banner_media.png' alt='' />
          <div className='absolute m top-16 md:top-20 lg:top-40 z-0 w-full mx-auto flex items-center justify-center   text-black md:text-3xl leading-9 font-medium'>Goonj in Media</div>  
        </div>
        <div className='w-full mx-auto md:my-10 flex flex-wrap justify-between  md:gap-6'>
          {
            MediaData.map((item)=>{
              return <Save className='' key={item.id} {...item}/>
            })
          }
        </div>
        
        <Share/>
        <Footer/>
    </div>
  )
}

export default Media
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Share from '../../components/Share'
import Save from '../../components/Save'
import { MediaData } from '../../utils/navItem'

const Media = () => {
  return (
    <div>
        <Navbar/>
        <div>
          <img className='w-full mt-2 h-[26rem]' src='https://goonj.org/wp-content/uploads/2018/05/Banner_media.png' alt='' />
          <div className='absolute top-40 z-0 w-full mx-auto flex items-center justify-center   text-black text-3xl leading-9 font-medium'>Goonj in Media</div>  
        </div>
        <div className='w-11/12 mx-auto my-10 flex flex-wrap justify-between  gap-6'>
          {
            MediaData.map((item)=>{
              return <Save key={item.id} {...item}/>
            })
          }
        </div>
        
        <Share/>
        <Footer/>
    </div>
  )
}

export default Media
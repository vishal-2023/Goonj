import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SubItem from '../../components/SubItem'
import {WaterData} from '../../utils/navItem'
import { FaArrowRight } from 'react-icons/fa'

const Water = () => {
  return (
    <div>
        <Navbar/>
        <img className='w-full h-96 bg-clip-content	  mt-3' src='https://goonj.org/wp-content/themes/charity-ngo-child/img/impact/water-banner.png' alt='' />
        <div className='absolute top-32 w-full mx-auto flex items-center justify-center   text-white text-4xl leading-9 font-medium'>Water</div>
        <div className='w-full h-full m-3 flex flex-row gap-1/2'>
            <div className='w-2/3'>
                {
                    WaterData.map((item)=>{
                        return <SubItem {...item} />
                    })
                    
                }
            </div>
            <div className='w-60 my-6 h-1/3 border-2 word-wrap flex flex-col items-start gap-3'>
                <div>Turning old material into a resource for rural development activities.</div>
                <div>Get Involved</div>
                <button className='border-2'>Contribute</button>
                <div>For CSR funding opportunities and other activities, please write to abhinav@goonj.org, chandan@goonj.org.</div>
                <hr/>
                <div>To Know More</div>
                <button>Our Impact</button>
                <button>Latest Annual Report</button>
            </div> 
        </div>
        <div className='w-full h-full flex flex-row items-center justify-center gap-1 my-10'>
            <button className='border-2 mx-1 p-1 px-3'>1</button>
            <button className='border-2 mx-1 p-1 px-3'>2</button>
            <button className='border-2 mx-1 p-1 px-2 py-2'> <FaArrowRight/> </button>
        </div>
        <Footer/>
    </div>
  )
}
export default Water;
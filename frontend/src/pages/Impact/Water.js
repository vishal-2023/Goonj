import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {WaterData} from '../../utils/navItem'
import { Link } from 'react-router-dom' 

const Water = () => {
  return (
    <div className='overflow-hidden w-full'>
        <Navbar/>
        <img className='w-full md:h-96 bg-clip-content	  mt-0' src='https://goonj.org/wp-content/themes/charity-ngo-child/img/impact/water-banner.png' alt='' />
        <div className='absolute top-28 text-lg md:top-32 w-full mx-auto flex items-center justify-center   text-white md:text-4xl leading-9 font-medium'>Water</div>
        <div className='w-full h-full lg:m-3 flex flex-col lg:flex-row gap-1/2'>
            <div className='lg:w-2/3 md:w-8/12 mx-auto'>
                {
                    WaterData.map((item)=>(
                        // return <SubItem key={item.id} {...item} />
                        <div className='border  lg:border-4 flex flex-col lg:flex-row gap-7 mb-5 lg:mb-0 p-3 m-1 lg:m-6' key={item.id}>
                            <Link className='h-full w-full mt-2' to=''>< img className='w-full h-52 md:h-52 lg:w-80 ' src={item.imgdata} alt='' /></Link>
                            <div className='flex flex-col gap-5'>
                                <h1 className='text-2xl font-semibold'>{item.title}</h1>
                                <p className='break-word text-base font-normal leading-5'>{item.data.slice(0,400)}...</p>
                                <Link className='text-red-500'  to={`/dummy/${item.id}`} >Read more...</Link>
                            </div>
                        </div>
                    ))
                    
                }
            </div>
            <div className='border p-2 lg:w-1/3 lg:my-6 my-3  mx-10  word-wrap flex flex-col items-start gap-3'>
                <div>Turning old material into a resource for rural development activities.</div>
                <div>Get Involved</div>
                <button className='border-2 p-2'>Contribute</button>
                <div>For CSR funding opportunities and other activities, please write to abhinav@goonj.org, chandan@goonj.org.</div>
                <hr/>
                <div>To Know More</div>
                <button>Our Impact</button>
                <button>Latest Annual Report</button>
            </div> 
        </div>
        <Footer/>
    </div>
  )
}
export default Water;
import React from 'react'
import Navbar from '../../components/Navbar'
import Share from '../../components/Share'
import Footer from '../../components/Footer'
import { droppingData } from '../../utils/navItem'
import Collapsible from 'react-collapsible'

const Contribute = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div>
          <img className='w-full mt-2 h-[28rem]' src='https://goonj.org/wp-content/uploads/2018/07/Dropping-Centres_Banner.jpg' alt='' />
          <div className='absolute top-40 z-0 w-full mx-auto flex items-center justify-center   text-white text-4xl leading-9 font-bold'> Dropping Centers </div>  
        </div>
        <div className='w-10/12 mx-auto flex flex-row my-10'>
            <div className='w-1/2 border p-6'>
                <div>Here are our Dropping Centers.</div>
                <div>
                    <input className='border p-2' 
                    type='text'
                    placeholder='enter '
                    />
                    <button className='border-2 m-3 p-2 border-red-500 hover:bg-red-500'>Search</button>
                </div>
                <div>
                {
                droppingData.map((item)=>{
                    return <div className='border-2 m-0.5 py-2'>
                    <Collapsible id='btnLeft' className=' w-full h-full py-1 ml-3 text-base font-medium clickable-text'   index={item.id} trigger={item.title}>
                    
                    <hr/>
                    <div className='w-full h-full my-2 p-4 text-sm font-medium bg-yellow-400'>
                        <div>{item.data}</div>
                        <div>{item.heading}</div>
                        <div>{item.contact}</div>
                        <div>{item.email}</div>
                        <div>{item.Timing}</div>
                    </div>
                </Collapsible>
                </div>
                })
              
            } 
                </div>
            </div>
            <div className='w-1/2'>
                <img src='https://goonj.org/wp-content/themes/charity-ngo-child/img/dropping-center-dos-and-dont-2021.JPG' alt='' />
            </div>
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}

export default Contribute
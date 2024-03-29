import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import Save from '../../components/Save';
import { partner } from '../../utils/navItem';
import { Link } from 'react-router-dom';

const Menstrual = () => {
  const [visible,setVisible] = useState(3);
    const [hide,setHide] = useState(true);
    const showItems = () =>{
        setVisible((prev) => prev+3);
    }
    const hideItem = () =>{
        setHide(visible<8);
    }

    const Handler=()=>{
        console.log(visible)
        hideItem();
        showItems();
    }

  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div className='mt-16 md:mt-20' >
            <img className='w-full h-fit ' src='https://goonj.org/wp-content/uploads/2023/05/Cover-page-.jpg' alt=''/>
        </div>
        <div className='w-11/12 m-5 md:m-12 mx-auto flex flex-col text-start md:text-center gap-5 text-sm md:text-lg lg:text-2xl font-base'>
          <div>On May 28, 2023, this Menstrual Hygiene Day, MY Pad ATMs will be inaugurated in five states (Bihar, Maharashtra, Orissa, Rajasthan and West Bengal).</div>
          <div>Goonj’s MY Pad ATMs make cloth pads accessible in the far-flung villages of our country.</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 '>
          <div className='md:text-3xl font-semibold text-red-500'>Campaign Media Partner</div>
          <img className='w-32 md:w-48 lg:w-60 lg:h-full' src='https://goonj.org/wp-content/uploads/2023/05/Josh-2.png' alt='' />
          <div className='md:w-9/12 md:h-full flex flex-col lg:flex-row gap-4 mt-4'>
          <iframe className='w-full md:h-72' src="https://www.youtube.com/embed/LL1A9oysqss?si=CzacAYfN65OIqH4j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe className='w-full md:h-72'  src="https://www.youtube.com/embed/fY8Zvf5gRUU?si=4N9E2URaOPEB65TV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <div className='text-center mt-5  md:mt-10 md:m-10 text-xl md:text-3xl font-medium'>Some Glimpses</div>
        <div className='lg:w-10/12 mx-auto flex flex-row flex-wrap justify-center gap-2'>
          
            {
              partner.slice(0,visible).map((item)=>(
                <Save {...item}/>
              ))
            }
        </div>
          <div>
            {hide && 
                <Link className='border-0 w-full p-4 text-center flex items-center justify-center' >
                    <button className='border-2 border-red-500 p-2 m-6 text-center text-lg font-medium text-red-500 hover:bg-red-500 hover:text-white' onClick={Handler}>Load More</button>  
                </Link>
            }
        </div>
        
        <Share/>
        <Footer/>
    </div>
  )
}
export default Menstrual;
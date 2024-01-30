import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Share from '../../components/Share';
import { useParams} from 'react-router-dom';
import { WaterData } from '../../utils/navItem';

const Dummy = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    // console.log(id);
    useEffect(() => {
      // Find the item with the matching ID from the data array
      const selectedItem = WaterData.find(item => item.id === parseInt(id, 10));
      console.log(selectedItem)
      if (selectedItem) {
        setItem(selectedItem);
      } else {
        console.error('Item not found');
      }
    }, [id]);

    if (!item) {
      return <div>Loading...</div>;
    }

  return (
    <div className='overflow-hidden'>
        <Navbar />
        <div className='w-full h-28 md:h-52 bg-[#212938] scale-125 text-lg text-white mt-10' ></div>
        <div className='absolute top-20 md:top-40 w-full mx-auto flex items-center justify-center   text-white md:text-4xl leading-9 font-medium'>
            {item.title}
        </div>
        <div className='  md:p-10'>
          <img className='w-10/12 h-40 mt-8 md:h-96 md:w-1/2 border-2 mx-auto' src={item.imgdata} alt=''/>
        </div>
        <div className='md:w-10/12 mx-auto'>
          <div className=' m-5 p-3 text-sm md:text-base'>{item.data}</div>
          <div className='flex flex-wrap gap-4 p-10 justify-center'>
            {
              item.imgArr.map((item,index)=>{
                return <img key={index} className='w-80 hover:scale-95' src={item} alt='' />
              })
            }
          </div>
          
        </div>
        
        <Share/>
        <Footer/>
    </div>
  )
}
export default Dummy;
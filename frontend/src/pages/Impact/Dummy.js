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

    useEffect(() => {
      // Find the item with the matching ID from the data array
      const selectedItem = WaterData.find(item => item.id === parseInt(id, 10));
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
    <div>
        <Navbar/>
        <div className='w-full h-52 bg-black scale-125 text-lg text-white mt-10' ></div>
        <div className='absolute top-40 w-full mx-auto flex items-center justify-center   text-white text-4xl leading-9 font-medium'>
            {item.title}
        </div>
        <div>
          <img src={item.imgdata} alt=''/>
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default Dummy;
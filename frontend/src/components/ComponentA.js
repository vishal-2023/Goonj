import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
 import { donateData } from '../utils/navItem'
import Navbar from './Navbar';
import { Contribute, Guidelines } from '../pages/update/Donate';
import Footer from './Footer';
import DonateBox from './DonateBox';
import Share from './Share';


const ComponentA = () => {
    console.log(donateData, "donateData")
    
    const { id } = useParams();
    // console.log("first")
    // console.log(id);
    const selectedItem = donateData.find(item => item.id === parseInt(id, 10));
    // console.log(selectedItem);
    
    const [currentImage, setCurrentImage] = useState(0);
  const images = [
    `${selectedItem.img1}`,
    `${selectedItem.img2}`,
    `${selectedItem.img3}`,
    `${selectedItem.img4}`,
  ];

  useEffect(() => {
    // Change the image every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change the interval as needed (in milliseconds)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]);


  return (
    <div>
        <Navbar/>
        <div className='w-10/12 mx-auto pt-16'>
            <div className='text-center my-4 text-3xl font-semibold text-red-500'>
            {selectedItem.title}
            </div>
            <div className=' flex flex-row gap-3'>
                <div className='w-3/5  h-full'>
                    <img className='w-full h-96 shadow-lg rounded-xl m-auto ' src={images[currentImage]} alt='' />
                </div>
              <div className='w-2/5'>
                <DonateBox data={'top-32 border-4 left-3 p-4 text-red-500 w-full rounded-2xl flex flex-col gap-3 bg-white'}/>
                </div>  
            </div>
            <Share/>
            <div className='flex flex-col gap-6 my-6'>
                <div className='text-xl font-medium text-red-500'>
                {selectedItem.title1}
                </div>
                <div>
                {selectedItem.data1}
                </div>
                <div className='text-xl font-medium text-red-500'>
                {selectedItem.title2}
                </div>
                <div>
                {selectedItem.data2}
                </div>
            </div>
        </div> 
        
        <Guidelines/>
        <Contribute/>
        <Footer/>
    </div>
  )
}

export default ComponentA


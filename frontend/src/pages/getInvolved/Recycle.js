import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { FaHandPointRight } from 'react-icons/fa';
import Save from '../../components/Save';
import {GroundImg1,GroundImg2,GroundImg3} from '../../utils/navItem'

const Recycle = () => {
    const [visible,setVisible] = useState(2);
    const showItems = () =>{
        setVisible((prev) => prev+2);
    }

    const [hide,setHide] = useState(true);
    const setting = () =>{
        setHide(!hide);
    }

    const handleCombinedClick = () => {
        showItems();
        setting();
      };
  return (
    <div className='overflow-hidden w-full'>
        <Navbar/>
        <div className='w-full h-2/3  mt-2' >
            <img className='w-full h-[34rem] ' src='https://goonj.org/wp-content/uploads/2023/03/KKR-2023-webpage-header-1.jpg' alt=''/>
        </div>
        <div className='w-1/2 mx-auto border my-10 py-14 flex flex-col gap-6 flex-wrap text-center p-7'>
            <div className='text-3xl font-semibold text-red-500'>Background</div>
            <div className='text-xl font-medium '>School to School builds a relationship of empathy and dignity between urban and rural children and works to bridge the gap of resources between the urban and rural centers of learning</div>
            <div className='text-lg font-medium '>To know more about the School to School initiative, please visit</div>
            <Link className='text-xl font-semibold text-red-500 hover:text-black'>https://goonj.org/s2s/</Link>
            <div className='text-base font-medium '>As every child is starting to get busy with the new school session, how about recycling your last year’s school textbooks, notebooks, stationery and even supporting with new school supplies? We will ensure it is reached to our fellow children in rural India with Goonj’s ‘Khushiyon Ka Recycle’ campaign to fill in the material gaps in schools in remotest areas across India.</div>
            <div className='text-base font-medium '>Join us in our effort by contributing and by setting up collections camps in your residential areas, schools, institutions and offices.. Feel free to reach out to us on<Link className='text-xl font-semibold text-red-500 hover:text-black'> mail@goonj.org </Link>to take part in the campaign</div>
        </div>
        <div className='w-full flex flow-row mx-auto bg-blue-400 p-10' >
            <div className='w-2/5 mx-auto text-center text-3xl font-bold text-white hover:text-red-500'>With Material, Money Matters.. For logistical costs</div>
            <Link className='w-60 mx-auto flex flex-row gap-3 bg-white text-red-500 items-center justify-center hover:bg-red-500 hover:text-white'>
            <FaHandPointRight/>
            <Link className=' '> Click To Contribute</Link>
            </Link>
        </div>

        <div className='w-1/2 mx-auto my-10 text-2xl font-medium text-center hover:text-red-500'>Glimpses from the Ground</div>
        <div className='w-full h-full flex flex-row items-evenly justify-center flex-wrap'> 
            <div className=''>
            {
                GroundImg1.slice(0,visible).map((item)=>{
                    return <Save key={item.id} {...item}/>
                })
            }
            </div>
            <div>
            {
                GroundImg2.slice(0,visible).map((item)=>{
                    return <Save key={item.id} {...item}/>
                })
            }
            </div>
            <div>
            {
                GroundImg3.slice(0,visible).map((item)=>{
                    return <Save key={item.id} {...item}/>
                })
            }
            </div>
            
        </div>
        {
            hide && <Link className='border-0 w-full p-4 text-center flex items-center justify-center' onClick={handleCombinedClick}>
              <button className='border-2 border-red-500 p-2 m-6 text-center text-base text-red-500 hover:bg-red-500 hover:text-white'>Load More</button>  
                </Link>
        }
        <Share/>
        <Footer/>
    </div>
  )
}
export default Recycle;
import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import CarouselComponent from '../../components/CarouselComponent';
import { Link } from 'react-router-dom';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import { Gallery, faq, model } from '../../utils/navItem';
import Model from '../../components/Model';
import Collapsible from 'react-collapsible';
import Save from '../../components/Save';
import { cousel } from '../../utils/navItem';


const Internship = () => {

    const [value1,setValue1]= useState(false);
    const [value,setValue]= useState(false);


    

  return (
    <div className=" overflow-hidden">
            
        <Navbar/>
        <img className='w-full md:h-96  mt-2' src='https://goonj.org/wp-content/uploads/2023/06/banner-2.jpg' alt='' />
        <div className='absolute top-24 md:top-60 w-full mx-auto flex items-center justify-center   text-white md:text-4xl leading-9 font-medium'>Annual Reports</div>  

        <div className='mt-10 text-sm md:text-base w-10/12 mx-auto my-10'>
        Interning at Goonj is an unforgettable experience. The interesting tasks, the passionate team and the exposure to Goonj’s variety of initiatives can give you a great opportunity. If you are open-minded, enthusiastic and are looking to experiment while having a lot of fun, this is the place for you. At Goonj, we welcome your new ideas and suggestions with open arms and try to incorporate them in our work. Some days may be mundane or repetitive but they will always be meaningful. Your activity, however monotonous, adds value to what we do.
        <br/><br/>Write to us on <Link className='text-red-600'>mail@goonj.org</Link>  with your resume, duration (dates), and preferred location for your internship
        </div>

        <div className='w-full flex flex-col items-center'>
          <div className='text-2xl font-semibold'>Our Internship</div>
          <div className='flex flex-col lg:flex-row gap-0 items-center'>
            <Link className='relative ' onClick={()=> setValue1(true)}>
            
            <div className='absolute top-12 left-16 md:top-28 md:m-10 md:left-32 text-center z-10 text-white md:text-2xl font-semibold'>COMMUNITY WARRIORS <br/> &nbsp; &nbsp; &nbsp; &nbsp; FOR SCHOOL</div>
              <img className='md:h-96 w-fit p-4 md:p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'  src='https://goonj.org/wp-content/uploads/2023/06/banner-1.jpg' alt=''/>
            </Link>
            <Link className='relative' onClick={()=> setValue(true)}>
              <div className='absolute left-11 top-4 md:top-24 m-10 md:left-32 z-10 text-white md:text-2xl font-semibold'>SOCIAL INTERNSHIP <br/> &nbsp; &nbsp; &nbsp; &nbsp; FOR COLLAGE</div>
              <img className='md:h-96 w-fit p-4 md:p-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300' src='https://goonj.org/wp-content/uploads/2023/06/Sorting-of-books-new.jpg' alt=''/>
            </Link>
          </div>
          {
              value1 && model.filter(function(items){
                return items.id===1;
              }).map((item)=>{
                return <Model {...item} onClose={()=> setValue1(false)} />
              })
          }
          {
               value && model.filter(function(items){
                return items.id===2;
              }).map((item)=>{
                return <Model {...item} onClose={()=> setValue(false)} />
              })
          }
        </div>
        
    <div className='w-full md:m-4 flex flex-col items-center'>
      <h1 className='md:text-2xl  font-semibold'>Hear From Our Previous Interns</h1>
      <CarouselComponent cousel={cousel} />
    </div>
    
      <div className='flex flex-col items-center gap-7 flex-wrap mx-5'>
        <div className='text-2xl font-semibold'>Internship Locations</div>
        <div className='flex flex-col items-center gap-2 text-xs md:text-sm'>
          <div>Internship opportunities are offered at Goonj’s <b> Delhi, Bangalore, Chennai, Hyderabad, Dehradun, Kolkata, Kochi, Patna, Rishikesh and Mumbai </b> offices.</div>
          <div>If anyone wishes to be engaged in our on ground work, let us know. Goonj’s work is happening in parts of 28 states and UTs.</div>
        </div>
         </div>
          <div className='flex flex-row w-full lg:w-11/12 px-10 flex-wrap items-center justify-center mx-auto gap-5'>
            <div className='mx-auto my-8 text-2xl font-semibold'>Photo Gallery</div>
            <div className=' flex flex-row justify-center  gap-2 w-full flex-wrap'>
            {
              Gallery.map((item)=>{
                return <Save className="" index={item.id} {...item} />
              })
            }
            </div>  
          </div>
          <div className='lg:w-1/2 h-full m-auto flex flex-col p-10 gap-3 lg:my-10 flex-wrap'>
            <div className='mx-auto text-2xl font-semibold mb-3'>FAQs</div>
            {
              faq.map((item)=>{
                return <div className='border-2 py-2'>
                <Collapsible id='btnLeft' className=' w-full h-full py-1 ml-3 text-sm xl:text-base font-medium clickable-text'   index={item.id} trigger={item.title}>
                
                <hr/>
                <div className='w-full h-full my-2 p-4 text-sm xl:text-base font-medium'>
                
                  {item.data}
                </div>
              </Collapsible>
            </div>
              })
              
            } 
          </div>
       <Share/>
       <Footer/> 
    </div>
  )
}
export default Internship;
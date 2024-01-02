import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import { Story } from '../../utils/navItem';
import Save from '../../components/Save';
import { Link } from 'react-router-dom';

const StoryChange = () => {

  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <img className='w-full h-96 scale-125 mt-14' src='https://goonj.org/wp-content/uploads/2019/06/100-stories-of-change-banner.jpg' alt='' />
        <div className='absolute top-64 w-full mx-auto flex items-center justify-center   text-white text-4xl leading-9 font-medium'>100 Stories of Change (Vol. 1)</div>
        <div></div>
        <div className='relative mt-24 scale-150 smooth '>
            <div className='flex flex-col ml-80 mt-5 gap-4 items-center justify-center absolute text-black  font-semibold' >
                <div className='text-lg'>Saluting the wisdom and grit of masses in far flung villages of India.</div>
                <div className='text-xs'>This book represents stories from 2 decades of Goonj’s work from field sites, where the hardcore development work is done.</div>
                <div className='text-xs text-red-700 '>available against a minimum contribution of INR 500 or more.</div>
            </div>
            <img className='h-40 w-full  opacity-30' src='https://goonj.org/wp-content/uploads/2019/06/100-stories-of-change-pic.jpg' alt=''/>
        </div>
        <div>
            <iframe className='w-full mt-11 h-96' src="https://www.youtube.com/embed/vZJRossGytg?si=zHH0jxk2HDNfVaG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='w-full m-auto my-6 text-3xl font-normal flex items-center justify-center'>Stories from the book</div>
        <div className='flex w-full flex-row my-5 flex-wrap items-center justify-evenly gap-4'>
          {
            Story.map((item)=>{
              return <Save  {...item}/>
            })
          }
        </div>
        <p className='w-full flex items-center my-10 text-3xl font-medium justify-center'>
        To get your copy, write to us at &nbsp; <Link to='' className='text-red-500 hover:text-black'> mail@goonj.org</Link> 
        </p>
        <div className='w-full h-full flex flow-row '>
          <div className='w-1/2 flex flex-col gap-5 items-start justify-center p-1  0 bg-gray-900'>
            <div className='text-3xl font-medium text-white'>Launched: 30th Jan 2018</div>
            <div className='text-white'> Released 1st volume of Goonj’s book 100 Stories of Change documenting 25 powerful stories about transformative changes at grass root level …</div>
          </div>
          <div className='w-1/2'>
            <img src='https://goonj.org/wp-content/uploads/2019/06/100-stories-of-change-launched.jpg' alt='' />
          </div>
        </div>
        <Share/>
        <Footer/>
    </div>
  )  
}
export default StoryChange;
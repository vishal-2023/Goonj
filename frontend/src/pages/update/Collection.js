import React from 'react'
import Navbar from '../../components/Navbar'
import Share from '../../components/Share'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <div>
        <Navbar/>
        <div className='colored-image'>
          <img className='w-full mt-2 h-[20rem]' src='https://goonj.org/wp-content/uploads/2018/06/banner_collection-Camp.png' alt='' />
          <div className='absolute top-40 z-0 w-full mx-auto flex items-center justify-center   text-white text-4xl leading-9 font-bold'> Collection Camps </div>  
        </div>
        <div className='m-10 flex flex-col gap-5'>
            <div>We request you to kindly read through these <Link to="https://goonj.org/wp-content/uploads/2021/07/material-contribution-guidelines-in-camps.jpg" className="text-red-500 underline text-sm font-semibold"> Guidelines </Link> for contributing material.</div>
            <div>If you wish to organise the collection drive in your residential area/office/school etc,<Link className='text-red-500 text-sm font-semibold underline' to='https://docs.google.com/forms/d/e/1FAIpQLScPImdR5r2qtnlOtY63nRPVrv7Wsym8fTsQzqcXy3Tc4DT84w/viewform' > Please fill this form</Link></div>
            <div>You could also contribute at Goonj's Joint Campaigns - through your other favorite brands - please scroll down to know more.</div>
            <div>Here are the organized Collection Camp set up in different cities, where you can contribute.</div>
            <div>
                <input
                className='w-1/6 border-2 p-2 border-red-500'
                type='text'
                placeholder='Address/Volunteer'
                />
                <button className='border-2 m-3 p-2 px-4 border-red-500 hover:bg-red-500'>Search</button>
            </div>
                <div className='text-center text-xl font-bold'>Goonj's Joint Campaigns - Contribute to Goonj through your other favorite brands</div>
                <div className='text-base'>Throughout the year, Goonj jointly runs campaigns with various apparel brands and e-commerce platforms, in which they extend a hand in supporting Goonj by channelising material to our offices. Do drop by at your nearest store as per the following location details or visit the websites to send material directly to Goonj.</div>
                <div className='text-lg font-semibold'>Marks & Spencer</div>
                <div>In its select stores, Marks & Spencer is accepting CLOTHES only, which are then delivered to Goonj.
                <br/>To find your nearest store,<Link className='text-red-500 text-sm font-bold' to='https://docs.google.com/spreadsheets/d/1UEsA2HXA4adx0HouCmJ1sPyF-6kbkllx/edit#gid=873973959'> Click here</Link></div>
                <div className='text-lg font-semibold'>AIRIA Mall, Gurugram</div>
                <div>AIRIA Mall, Gurugram is accepting clothing, footwear, toys & stationery and one-sided used paper for Goonj.
                <br/>Address: Sector-68, Sohna Road, Gurugram 122101, Haryana). To refer to Google Map directions -
                <Link className='text-red-500 text-sm font-bold' to='https://www.google.co.in/maps/place/Airia+Mall/@28.3831783,77.0529094,17z/data=!3m1!4b1!4m6!3m5!1s0x390d22fecb57f373:0xcc4398c9599fcdd7!8m2!3d28.3831783!4d77.0529094!16s%2Fg%2F1hm33nvdw?entry=ttu'> Click here</Link>
                 </div>
            <div>

            </div>
            
        </div>

        <Share/>
        <Footer/>
    </div>
  )
}

export default Collection
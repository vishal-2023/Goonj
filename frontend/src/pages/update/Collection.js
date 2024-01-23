import React from 'react'
import Navbar from '../../components/Navbar'
import Share from '../../components/Share'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import ContentData from '../../components/ContentData'
import {dropFaq,droppingData,droppingData1} from '../../utils/navItem'
import Collapsible from 'react-collapsible'

const Collection = () => {
  return (
    <div className='bg-[#fcfcfc] overflow-hidden'>
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

            <div className='w-10/13 mx-auto bg-white flex flex-wrap flex-row  '>
                <div className='w-1/2 mx-auto'>
                    {
                    droppingData.map((item)=>{
                        return <div className='border-2 m-0.5 py-2'>
                        <Collapsible id='btnLeft' className=' w-full h-full py-1 ml-3 text-base font-medium clickable-text'   index={item.id} trigger={item.title}>
                        
                        <hr/>
                        <div className='w-full h-full my-2 p-4 text-sm font-medium flex flex-col gap-3'>
                            <div>{item.data}</div>
                            <div>Address: {item.heading}</div>
                            <div>Contact: {item.contact}</div>
                            <div>Email: {item.email}</div>
                            <div>Timing: {item.Timing}</div>
                        </div>
                    </Collapsible>
                    </div>
                    })
                    } 
                </div>
                <div className='w-1/2'>
                    {
                    droppingData1.map((item)=>{
                        return <div className='border-2 m-0.5 py-2'>
                        <Collapsible id='btnLeft' className=' w-full h-full py-1 ml-3 text-base font-medium clickable-text'   index={item.id} trigger={item.title}>
                        
                        <hr/>
                        <div className='w-full h-full my-2 p-4 text-sm font-medium flex flex-col gap-3'>
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

            <div className='text-center text-xl font-bold'>Goonj's Joint Campaigns - Contribute to Goonj through your other favorite brands</div>
            <div className='text-base'>Throughout the year, Goonj jointly runs campaigns with various apparel brands and e-commerce platforms, in which they extend a hand in supporting Goonj by channelising material to our offices. Do drop by at your nearest store as per the following location details or visit the websites to send material directly to Goonj.</div>
            <div className='text-lg font-semibold'>Marks & Spencer</div>
            <div>In its select stores, Marks & Spencer is accepting CLOTHES only, which are then delivered to Goonj.
            <br/>To find your nearest store,<Link className='text-red-500 text-sm font-bold' to='https://docs.google.com/spreadsheets/d/1UEsA2HXA4adx0HouCmJ1sPyF-6kbkllx/edit#gid=873973959'> Click here</Link></div>
            <div className='text-lg font-semibold'>AIRIA Mall, Gurugram</div>
            <div>AIRIA Mall, Gurugram is accepting clothing, footwear, toys & stationery and one-sided used paper for Goonj.
            <br/>Address: Sector-68, Sohna Road, Gurugram 122101, Haryana). To refer to Google Map directions -
            <Link className='text-red-500 text-sm font-bold' to='https://www.google.co.in/maps/place/Airia+Mall/@28.3831783,77.0529094,17z/data=!3m1!4b1!4m6!3m5!1s0x390d22fecb57f373:0xcc4398c9599fcdd7!8m2!3d28.3831783!4d77.0529094!16s%2Fg%2F1hm33nvdw?entry=ttu'> Click here</Link> </div>
        
            
        </div>
        <div className='w-full flex flex-col gap-6 bg-[#333]  py-16'>
            <div className='text-white text-2xl mx-6 font-semibold'>Want to organize Collection camp</div>
            <div className='text-white text-center'>Here is the perfect guide</div>
            <div className='flex flex-row gap-5 mx-auto'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-INMvztCz44?si=wBPeSpbxTWpVGDNK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/F4ct5Sqafnw?si=l7jQCD_6dWxm8u6a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <div className=''>
            <div className='text-center my-10 text-4xl font-semibold'>FAQs</div>
            {
                dropFaq.map((item)=>{
                    return <ContentData id={item.id} {...item}/>
                })
            }
        </div>

        <Share/>
        <Footer/>
    </div>
  )
}

export default Collection
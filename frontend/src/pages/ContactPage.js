import React, { useState } from 'react'
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Share from '../components/Share';
import { AddressData } from '../utils/navItem';
import { Link } from 'react-router-dom';


const ContactPage = () => {
  const [page,setPage] = useState();
  const [set,PageSet] = useState(false);
  const handleClick=(id)=>{
    const select=AddressData.find((page)=> page.id === id);
    setPage(select);
  }
  

  const PageContent = ({ content }) => (
    <div className='flex flex-col gap-2 m-0 p-5 mx-auto flex-wrap text-wrap  border-t'>
      <p> Office Address#1 : {content.add1}</p>
      <p>Office Address#12 :{content.add2}</p>
      <p>Contact: {content.contact}</p>
      <p>Email: {content.email}</p>
      <p>Timing: {content.timing}</p>
      <p>{content.note}</p>
    </div>
  );

  return (
    <div>
        <Navbar/>
        <img className='h-72 w-full' src='https://goonj.org/wp-content/uploads/2018/05/Banner_ContactUs.png' alt='' />
        <div className='w-9/12 mt-7 mx-5  text-lg font-medium flex flex-row gap-4'>
          {
            AddressData.map((item)=>{
              return (
                <Link key={item.id} className={` p-2 border-t border-r border-l `}   onClick={() => handleClick(item.id) } >
                  {item.city}
                </Link>
              )
            })
          }
        </div>
        <div>{
          page &&<PageContent content={page} />}
        </div>
        <Share/>
        <Contact/>
    </div>
  )
}
export default ContactPage;
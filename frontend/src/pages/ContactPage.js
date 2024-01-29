import React, { useState } from 'react'
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Share from '../components/Share';
import { AddressData } from '../utils/navItem';
import { Link } from 'react-router-dom';


const ContactPage = () => {
  const defaultSelectedPage = AddressData.find((page) => page.id === 1);

  const [page,setPage] = useState(defaultSelectedPage);

  const handleClick=(id)=>{
    const select=AddressData.find((page)=> page.id === id);
    setPage(select);
  }
  

  const PageContent = ({ content }) => (
    <div className='flex flex-col gap-2 m-0 p-5 text-sm md:text-base mx-auto flex-wrap text-wrap shadow-xl border-t border-b '>
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
        <img className='pt-14 md:h-72 w-full shadow-lg' src='https://goonj.org/wp-content/uploads/2018/05/Banner_ContactUs.png' alt='' />
        <div className='lg:w-9/12 pb-3 lg:pb-0 mt-7 mx-5 shadow-lg md:text-lg text-sm font-medium  flex flex-wrap flex-row gap-4'>
          {
            AddressData.map((item)=>{
              return (
                <Link key={item.id} className={`p-1 md:p-2 text-sm md:text-base border-2 lg:border lg:border-t lg:border-r  lg:border-l `}   onClick={() => handleClick(item.id) } >
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
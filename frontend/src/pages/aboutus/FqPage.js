import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import { Asked } from '../../utils/navItem';
import ContentData from '../../components/ContentData';

const FqPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='w-full h-52 bg-black scale-125 mt-10' ></div>
        <div className='absolute top-40 w-full mx-auto flex items-center justify-center   text-white text-4xl leading-9 font-medium'>Frequently Asked Questions</div>
        <div className='w-10/12 mx-auto my-14 flex flex-col gap-5'>
            <div className='text-4xl font-semibold'>General Disclaimer;</div>
            <div className='text-xl font-medium'>No third party agency is working on behalf of Goonj for any recruitment, training, camps or other activities related to Goonj. Please check/consult with Goonj directly to get correct information or assistance. Please beware of any unwarranted claims made by anyone on our behalf. Kindly bring any such claims to our notice for immediate attention and action. Goonj doesn’t charge any money from anyone for these activities. So if you come across any individual/organization making a monetary demand in our name please bring it to our notice immediately on mail@goonj.org or call us on 011-41401216, 26972351</div>
        </div>
        <div>
            {
                Asked.map((item)=>{
                    return <ContentData key={item.id} {...item}/>
                })
            }
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default FqPage;
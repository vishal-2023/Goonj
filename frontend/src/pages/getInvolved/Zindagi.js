import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Share from '../../components/Share';
import { Zindagi1,Zindagi2,Zindagi3,campaign } from '../../utils/navItem';
import Save from '../../components/Save';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';


const Zindagi = () => {
  return (
    <div className='w-full h-full'>
        <Navbar/>
        <div className='pt-14'>
            <img className='lg:h-screen' src='https://goonj.org/wp-content/uploads/2023/11/ODZ-page-header-file.png' alt='' />
            <div className='text-center text-lg md:text-2xl lg:text-5xl m-4 md:m-8 font-semibold hover:text-red-500'>
            Goonj’s winter campaign
            </div>
        </div>

        <div className='w-full h-full bg-[#b17a49] md:py-10'>
            <div className='w-full flex flex-col md:flex-row justify-center p-4 md:p-10 gap-5'>
                
                    <img className='md:w-1/3' src='https://goonj.org/wp-content/uploads/2023/11/2.jpg' alt='' />
                
                    <img className='md:w-1/3' src='https://goonj.org/wp-content/uploads/2023/11/1.jpg' alt='' />
               
            </div>
            <div className='w-full lg:m-10 flex flex-col justify-center md:flex-row'>
                <div className='lg:w-1/3 flex flex-col gap-3 m-10   md:mt-16'>
                    <div className='text-2xl text-center lg:text-start font-semibold text-white '>Material</div>
                    <Link className='lg:w-1/2 p-3 text-red-500 bg-white text-center border-2 text-lg'>Our Offices</Link>
                    <Link className='lg:w-1/2 p-3 text-center text-red-500 bg-white border-2 text-lg'>Dropping Centers</Link>
                    <Link className='lg:w-1/2 p-3 text-center border-2 text-red-500 bg-white text-lg'>Collection Camp Near You</Link>
                </div>
                <div className='md:w-2/3 flex flow-row flex-wrap'>
                {
                    campaign.map((item)=>(
                        <div key={item.id } className=' md:w-96 md:m-10'>
                            <div className='md:w-1/2 text-3xl  font-bold text-white text-center lg:m-4'> {item.heading} </div>
                            
                            <Collapsible id='btnLeft' className=' md:w-2/3  text-center mt-4 text-red-500 py-2 bg-white text-xl hover:text-red-500 m-6 md:m-3 font-medium clickable-text' trigger={item.title}>
                            
                                
                                <div className='border-2 bg-white mt-2 text-wrap'>
                                <div className='w-full h-full my-2 lg:p-4 text-sm font-medium'>
                                1.  
                                {item.data1}
                                </div>
                                <div className='w-full h-full my-2 p-4 text-sm font-medium'>
                                2.  
                                {item.data2}
                                </div>
                                <div className='w-full h-full my-2 p-4 text-sm font-medium'>
                                3.  
                                {item.data3}
                                </div>
                                <div className='w-full h-full my-2 p-4 text-sm font-medium'>
                                4.  
                                {item.data4}
                                </div>
                                </div>
                            </Collapsible>
                            
                        </div>
                    ))
                }
        </div>

            </div>
            <div className='flex flex-col pb-20 md:pb-0 lg:flex-row gap-3 justify-center'>
                <img className='p-10 md:px-40 lg:px-0 lg:w-auto w-full h-full' src='https://goonj.org/wp-content/uploads/2023/11/ODZ-2023-CAMPAIGN-WEBSITE-DESIGN.jpg' alt='' />
                <button className='lg:w-1/4 h-20 text-xl lg:text-3xl mx-10 md:mx-32 lg:mx-0 md:my-auto bg-white font-semibold'>Stories of Impact</button>
            </div>
        </div>

        <div className='text-center mt-5 md:mt-10 text-lg md:m-10 md:text-2xl lg:text-5xl font-semibold'>Glimpses of Odha Do Zindagi</div>
        <div className='w-11/12 mx-auto flex flex-row gap-2 justify-center flex-wrap'>
            <div>
                {
                    Zindagi1.map((item)=>{
                        return <Save {...item} />
                    })
                }
            </div>
            <div>
                {
                    Zindagi2.map((item)=>{
                        return <Save {...item} />
                    })
                }
            </div>
            <div className='md:flex gap-2 lg:flex lg:flex-col'>
                {
                    Zindagi3.map((item)=>{
                        return <Save {...item} />
                    })
                }
            </div>
        </div>
        
        <div className='border-2 w-32 mx-auto text-center p-3 m-7 text-2xl font-semibold bg-[#b17a49] hover:bg-red-500 text-white'>
            <Link to='https://goonj.org/wp-content/uploads/2023/11/ODZ-FAQ-2023-1.pdf'>FAQs</Link>
        </div>

        <div className='w-full h-full lg:h-[30rem]  flex flex-col lg:flex-row justify-center gap-10 p-4 md:p-12 lg:p-20 bg-[#ededed] '>
            <div className='opacity-100 w-full h-full md:h-72   '>
            <iframe  className='w-full h-full ' src="https://www.youtube.com/embed/5diB1nC-b1o?si=UAGig8qarT6WL8wK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='opacity-100 w-full md:h-72 h-full'>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/BdTscGWGbbc?si=uDjIBTfmCcQunriN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default Zindagi;
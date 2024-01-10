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
        <div className=''>
            <img className='h-screen' src='https://goonj.org/wp-content/uploads/2023/11/ODZ-page-header-file.png' alt='' />
            <div className='text-center text-5xl m-8 font-semibold hover:text-red-500'>
            Goonj’s winter campaign
            </div>
        </div>

        <div className='w-full h-full bg-[#b17a49] py-10'>
            <div className='w-full flex flex-row justify-center p-10 gap-5'>
                
                    <img className='w-1/3' src='https://goonj.org/wp-content/uploads/2023/11/2.jpg' alt='' />
                
                    <img className='w-1/3' src='https://goonj.org/wp-content/uploads/2023/11/1.jpg' alt='' />
               
            </div>
            <div className='w-full m-10 flex flex-row'>
                <div className='w-1/3 flex flex-col gap-3 m-10 mt-16'>
                    <div className='text-2xl font-semibold text-white '>Material</div>
                    <Link className='w-1/2 p-3 text-red-500 bg-white text-center border-2 text-lg'>Our Offices</Link>
                    <Link className='w-1/2 p-3 text-center text-red-500 bg-white border-2 text-lg'>Dropping Centers</Link>
                    <Link className='w-1/2 p-3 text-center border-2 text-red-500 bg-white text-lg'>Collection Camp Near You</Link>
                </div>
                <div className='w-2/3 flex flow-row flex-wrap'>
                {
                    campaign.map((item)=>(
                        <div key={item.id } className=' w-96 m-10'>
                            <div className='w-1/2 text-3xl font-bold text-white text-center m-4'> {item.heading} </div>
                            
                            <Collapsible id='btnLeft' className=' w-2/3 text-center text-red-500 py-2 bg-white ml-0 text-xl hover:text-red-500 font-medium clickable-text' trigger={item.title}>
                            
                                
                                <div className='border-2 bg-white mt-2 text-wrap'>
                                <div className='w-full h-full my-2 p-4 text-sm font-medium'>
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
            <div className='flex flex-row gap-3 justify-center'>
                <img src='https://goonj.org/wp-content/uploads/2023/11/ODZ-2023-CAMPAIGN-WEBSITE-DESIGN.jpg' alt='' />
                <button className='border-2 w-1/4 h-20 text-3xl my-auto bg-white font-semibold'>Stories of Impact</button>
            </div>
        </div>

        <div className='text-center m-10 text-5xl font-semibold'>Glimpses of Odha Do Zindagi</div>
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
            <div>
                {
                    Zindagi3.map((item)=>{
                        return <Save {...item} />
                    })
                }
            </div>
            <div>
                {
                    Zindagi1.map((item)=>{
                        return <Save {...item} />
                    })
                }
            </div>
        </div>
        
        <div className='border-2 w-32 mx-auto text-center p-3 m-7 text-2xl font-semibold bg-[#b17a49] hover:bg-red-500 text-white'>
            <Link to='https://goonj.org/wp-content/uploads/2023/11/ODZ-FAQ-2023-1.pdf'>FAQs</Link>
        </div>

        <div className='w-full h-full flex flex-row justify-center gap-10 border-2 p-20 bg-[#ededed] '>
            <div className='opacity-100'>
            <iframe width="600" height="350" src="https://www.youtube.com/embed/5diB1nC-b1o?si=UAGig8qarT6WL8wK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='opacity-100'>
            <iframe width="600" height="350" src="https://www.youtube.com/embed/BdTscGWGbbc?si=uDjIBTfmCcQunriN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default Zindagi;
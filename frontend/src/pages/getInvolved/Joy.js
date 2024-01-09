import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import Save from '../../components/Save';
import { JoyItem1,JoyItem2, JoyItem3, JoyItem4 ,jgwImg,ParticipateData} from '../../utils/navItem';
import { Link,} from 'react-router-dom';
import Collapsible from 'react-collapsible';

const Joy = () => {
    const [visible,setVisible] = useState(4);
    const [hide,setHide] = useState(true);
    const showItems = () =>{
        setVisible((prev) => prev+4);
    }
    const hideItem = () =>{
        setHide(visible<16);
    }

    const Handler=()=>{
        console.log(visible)
        hideItem();
        showItems();
    }

    
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div className='w-full h-2/3  mt-1' >
            <img className='w-full h-[35rem] ' src='https://goonj.org/wp-content/uploads/2023/09/Web-header-JGW-Page-1.jpg' alt=''/>
        </div>
        <div className='w-10/12 h-full flex flex-col my-10 mx-auto'>
            <div className='flex flex-row gap-4 '>
                <div className='border-2 border-black p-5 flex flex-col gap-4 text-center'>
                    <p className='text-4xl font-semibold text-red-500'>FESTIVAL OF GIVING</p>
                    <p className='text-lg font-semibold'>October 2nd, 2023 onwards</p>
                    <p className='font-base leading-6'>India’s very own festival of giving is around the corner! Join us, a community of do-gooders gearing up for an action-packed month of giving – from 2nd October onwards.</p>
                    <p className='font-base leading-5'>Goonj, as one of the co-creators, celebrates this festival with great enthusiasm by connecting with its pan-India community of do-gooders, encouraging people to engage in simple acts of giving. This season of giving, we urge you to spread the joy, by giving back to the community and bringing a smile to as many fellow citizens as possible.  Together, we can bring happiness to the lives of many by filling in the gaps of the ever-growing </p>
                    <p className='text-lg font-medium'>monetary and material needs.</p>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vZJRossGytg?si=BZ6LBJXYsz2LBcw6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className='border-2 border-black p-8 my-10 flex flex-col gap-10 text-center'>
                <div>
                    <p className='text-4xl font-semibold text-red-500'>Dil Ki Suno, Goonj.. Karo</p>
                    <p className='text-lg font-medium text-red-500'>(Listen to your heart and Goonj it)</p>
                </div>
                <div className='text-lg font-medium'>We all know about recycling, reuse, repurpose etc, but if you can do exponentially more with Goonj.. It, why just recycle?</div>
                <div className='text-base'>
                In the last 25 years, Goonj has used the world’s surplus material to mobilise, motivate and enable communities across India to solve their own issues on water access, education, roads, menstrual hygiene, disaster relief and much more.  When you make a choice to “Goonj.. It” ,  the possibilities of what your contribution can do for people are endless. We deeply cherish Do-Gooders and want to create a strong community of such people as a persistent, growing and evolving possibility for a more humane world.
                </div>
                <div className='text-lg font-medium'>
                Hold a Goonj Festival of Giving in your residential area/office/school/college/club. Give your used/unused/ household/office/stock material to us. You can engage with us for short term as well as long term. To organise, Goonj Festival of Giving. register with us.
                </div>
                <div className='flex flex-row justify-between'>
                    <button className='border-2 p-3 border-red-500 bg-red-500 text-white'>Please Register Here</button>
                    <button className='border-2 p-3 border-red-500'>Ground Report</button>
                </div>
            </div>
        </div>
        <div className='text-center w-full bg-red-500 border-2 text-wrap mx-auto m-10 p-10'>
            <div className='border-2 w-10/12 mx-auto p-6 bg-white text-3xl font-medium text-red-400'>
                Goonj Volunteers are organising collection drives in different zones across India
            </div>
            <div className='border-2 bg-white w-10/12 mx-auto flex flow-row flex-wrap text-wrap gap-4 p-5'>
                <div className='text-xl font-semibold '>East Zone –</div>
                <div className='flex flex-row gap-2 text-2xl font-semibold text-red-400'>
                    {
                        JoyItem1.map((item)=>{
                        return <Link className='hover:text-black'  to={item.link}>{item.title},</Link>
                        })
                    }
                </div>
            </div>
            <div className='border-2 w-10/12 mx-auto bg-white flex flow-row text-wrap flex-wrap gap-4 p-5'>
                <div className='text-xl font-semibold '>North Zone –</div>
                <div className='flex flex-row gap-2 text-2xl font-semibold text-red-400'>
                    {
                        JoyItem2.map((item)=>{
                        return <Link  className='hover:text-black' to={item.link}>{item.title},</Link>
                        })
                    }
                </div>
            </div>
            <div className='border-2 w-10/12 mx-auto bg-white flex flow-row text-wrap flex-wrap gap-4 p-5'>
                <div className='text-xl font-semibold '>South Zone –</div>
                <div className='flex flex-row gap-2 text-2xl font-semibold text-red-400'>
                    {
                        JoyItem3.map((item)=>{
                        return <Link className='hover:text-black'  to={item.link}>{item.title},</Link>
                        })
                    }
                </div>
            </div>
            <div className='border-2 w-10/12 mx-auto bg-white flex flow-row text-wrap flex-wrap gap-4 p-5'>
                <div className='text-xl font-semibold '>West Zone  –</div>
                <div className='flex flex-row gap-2 text-2xl font-semibold text-red-400'>
                    {
                        JoyItem4.map((item)=>{
                        return <Link className='hover:text-black'  to={item.link}>{item.title},</Link>
                        })
                    }
                </div>
            </div>
        </div>

        <div className='flex flow-row justify-center flex-wrap'>
            {
                ParticipateData.map((item)=>(
                    <div key={item.id } className=' w-96 m-10'>
                        <img className='w-fill h-80' src={item.imgdata} alt='' />
                        <Collapsible id='btnLeft' className=' w-full  h-full py-2 ml-0 text-xl hover:text-red-500 font-medium clickable-text' trigger={item.title}>
                
                            <hr/>
                            <div className='border-2 text-wrap'>
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

        <div className='w-full h-full relative '>
            <div className='w-5/6 absolute mx-28 top-16 border h-48 text-lg bg-white text-red-500 flex flex-col gap-6 items-center justify-center'>
                <div className='text-4xl font-medium'>
                    You can tie up with Goonj for logistics, space, awareness, etc. for  
                </div>
                <div className='text-xl font-medium'>Dil ki Suno, GOONJ.. Karo (Listen to your heart and Goonj it )</div>
            </div>
            <div className='absolute w-full border h-48 bottom-0 bg-red-500'>
                <div className='w-1/2 mx-auto text-white text-4xl font-bold mt-5'>
                “Doing good is a collective responsibility..
                because we all want to live in a better world.”
                — Anshu Gupta, Founder, Goonj
                </div>
            </div>
            <img className='w-full h-[35rem] ' src='https://goonj.org/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-15-at-3.52.16-PM.jpeg' alt='' />

        </div>

        <div className='w-full'>
            <div className='text-center m-10 text-4xl font-bold text-red-500'>Festival of Giving..</div>
            <div className='flex flex-row gap-5 justify-center'>
                <div><iframe width="560" height="315" src="https://www.youtube.com/embed/oqeXDG8-FzQ?si=3MnH5D_46uZOHKWm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                <div><iframe width="560" height="315" src="https://www.youtube.com/embed/oqeXDG8-FzQ?si=3MnH5D_46uZOHKWm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </div>
        </div>


        <div className='text-center m-10 text-4xl font-bold hover:text-red-500'>Glimpses of earlier JGWs</div>
        <div className='flex flex-row flex-wrap items-center justify-evenly gap-2 m-3'>
            
            {
                jgwImg.slice(0,visible).map((item)=>{
                    return <Save {...item}/>
                })
            }
        </div>
        <div>
            {hide && 
                <Link className='border-0 w-full p-4 text-center flex items-center justify-center' >
                    <button className='border-2 border-red-500 p-2 m-6 text-center text-lg font-medium text-red-500 hover:bg-red-500 hover:text-white' onClick={Handler}>Load More</button>  
                </Link>
            }
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default Joy;
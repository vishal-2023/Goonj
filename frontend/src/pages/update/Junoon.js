import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import Box from '../../components/Box';
import { DignityData } from '../../utils/navItem';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Junoon = () => {
  return (
    <div className='bg-[#fcf7f7]'>
        <Navbar/>
        
        <img className='w-full h-[35rem]' src='https://goonj.org/wp-content/uploads/2023/08/Junoon-Header.jpeg' alt='' />
        <div className='bg-white border-2 w-9/12 mx-auto m-10 p-5 px-10 text-center flex flex-col gap-10'>
            <div className='text-3xl text-red-500'>Objective</div>
            <div className='text-base leading-6 font-thin '>Often great work is a combination of the heart, the head, and the hands. While the complex theories of change and the detailed development matrix’s often delve into the head and the hands part of working in the development space, it’s our hearts which connect us back to the humanity of why we do, what we do. ‘Junoon’, a Hindi word for Passion, is at the heart of Junoon Awards.. We are looking for organizations who lead with their heart with a consistent zeal and passion. People who show exemplary courage and take risks to stay the course with what they strongly believe in, in the face of tremendous personal and organizational adversity, for the larger good. In summary, Junoon awards are the equivalent of the bravery awards in the world. Just that in development work, bravery emerges in different ways, goes unnoticed many times and deserves to be applauded often. We are instituting this award to recognize the unrelenting passion and resilience of people doing development work against many odds. We want to honor the efforts in the past few years towards the wellbeing of the people of this country. We hope these stories keep inspiring each one of us to never lose our light and passion.. for what we believe in..</div>
        </div>

        <div className='w-10/12 flex flow-row bg-white  justify-center mx-auto p-6 gap-5 text-wrap'>
            <div className='w-1/2 border-2 p-2 flex flex-col gap-6'>
                <img className='w-full' src='https://goonj.org/wp-content/uploads/2023/11/Junoon-extension.jpg' alt='' />  
                <div className='text-lg font-medium'>Basic criteria for participation –</div>
                <div className='flex flex-col gap-1' > 
                    <div className='flex flex-row '> <FaAngleRight className='m-1' /> The organization must be registered as a section 8 company, society, or trust</div>
                    <div className='flex flex-row '> <FaAngleRight className='m-1' /> Think and write about the innovation which is still in action (not past work)</div>
                    <div className='flex flex-row '> <FaAngleRight className='m-1 text-2xl' />  Ethics matter and matter a lot.. same projects/efforts/initiatives cannot be submitted twice and any misrepresentation or false information regarding the initiative/effort in the entry form will disqualify the applicant</div>
                </div>
            </div>
            <div className='w-1/2 border-2 text-center flex flex-col gap-12 p-5 py-7'>
                <div className='text-3xl font-semibold text-red-500'>The Theme for 2024 Awards is</div>
                <div className='text-xl font-bold leading-7'><span className='text-red-500'>“Empowering through Innovations”,</span> All the creative, path-breaking, and out-of-the-box ideas are welcome for the application. Often innovations deviate from the norms and bear the brunt of being unique. We understand how tough it may have been for you to carry forward these ideas and wish to applaud the courage you have shown to take this tough journey of challenging existing ideas and narratives, bringing forth new rebellious ideas, and redefining the norms of development.</div>
                <div className='text-3xl font-semibold text-red-600'>Applications for Junoon Awards 2024 are now closed!</div>
                <div className='text-xl font-semibold'>Please submit your entry by December 15th, 2023</div>
                <div >
                    <Link className='border-2 p-4 ' to=''>Application Guide</Link>
                </div>
                <div>
                    <Link className=' p-4 bg-red-500 text-white text-base font-bold hover:bg-green-300 hover:text-red-500' to=''>Application in Hindi</Link>
                </div>
                <div>
                    <Link className=' p-4 bg-red-500 text-white text-base font-bold hover:bg-green-300 hover:text-red-500' to=''>Application in English</Link>
                </div>
            </div>
        </div>

        <div className='bg-white w-10/12 mx-auto text-center flex flex-col items-center gap-10'>
            <div className='text-4xl text-red-600 font-medium'>Heartiest Congratulations to the Awardees, 2023 !!</div>
            <div className='border-4 border-red-400 w-5/6 p-3 py-10 flex justify-center'>
                <img src='https://goonj.org/wp-content/uploads/2023/08/junoon-finalist-1.jpg' alt='' />
            </div>
        </div>
        <div className='flex flex-col justify-center items-center m-10 gap-10'>
            <div className='text-3xl font-semibold text-red-500'>Junoon Awards 2023 </div>
            <iframe className='border' width="560" height="315" src="https://www.youtube.com/embed/lIyWK5l7eT0?si=x0N04eTKoD3d4Ftl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        </div>
        <div className='w-2/5 h-0.5 bg-red-500   mx-auto' ></div>
        <div className='text-center m-10 text-3xl font-medium text-red-500'>
        Award Ceremony held in Delhi on 20th August, 2023
        </div>
        <div className='flex flex-wrap w-full justify-center items-center gap-4'>
        {
            DignityData.map((item)=>{
                return <Box {...item}/>
            })
        }
        </div>
        
        <Share/>
        <Footer/>
    </div>
  )
}
export default Junoon;
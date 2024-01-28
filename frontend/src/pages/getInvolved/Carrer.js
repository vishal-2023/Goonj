import React from 'react';
import Navbar from '../../components/Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { carrerdata } from '../../utils/navItem'
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Carrer = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        
        autoplaySpeed: 2000,
          
      };

  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div className='w-11/12 mt-14 mx-auto h-full my-2'>
            <Slider {...settings}>
                {
                carrerdata.map((props) => (
                    <div key={props.id} className='border h-32 w-10 md:h-80 lg:h-96 shadow-xl relative '>
                        <img className='w-full h-full mx-auto px-5 ' src={props.imgdata} alt=''/>                        
                    </div>
                ))}
            </Slider>
        </div>
        
        <div className='w-11/12 mx-auto h-full flex flex-col lg:flex-row gap-10 my-10'>
            <div className='w-full lg:w-1/2 border text-sm md:text-base border-black h-full p-8 flex flex-col gap-7'>
                <div className='text-lg md:text-2xl text-red-500 font-medium '>About us</div>
                <div className=' leading-6'>We are more than 24 years old organization of 1400+ members, a group of people that believe in the power of diversity and take strength from it. While our work and approaches are genuinely impactful, we cannot do any of this without talented, creative individuals at every positions of our organization. We are looking for individuals who can thrive in a dynamic and fast paced environment, collaborating towards a goal of social change!</div>
                <div className='text-lg md:text-2xl text-red-500 font-medium '>At Goonj you will have</div>
                <div className=' leading-6'><b>Values, Culture and Environment:</b> We take pride in our values and ethos built over the past 24 years, lauded and well recognized by our volunteers, partners, sector peers and people for whom we work. Ours is a family of like-minded yet diverse individuals, moving towards a common goal. </div>
                <div className=' leading-6'><b>Talent investment, freedom and responsibility:</b> With the right amount of nudge we believe talent is omnipresent, in each and every individual. We believe in providing freedom to our team members to reach their potential, and expect only responsibility in actions from them.</div>
                <div className=' leading-6'><b>Parity and inclusion: </b>Goonj is devoted to inclusion and parity, encourages all applicants to apply irrespective of gender, caste, disabilities, religious and ethnic background.</div>
            </div>
            <div className='w-full lg:w-1/2 border border-black h-full p-8 lg:pb-60 flex flex-col gap-7'>
                <div className='text-lg md:text-2xl text-red-500 font-medium '>What makes us tick!</div>
                <div className='flex flex-col gap-4 text-sm md:text-base font-medium '>
                    <div>Respect for all</div>
                    <div>Dignity for self</div>
                    <div>Work in remote areas Pan India</div>
                    <div>Field visits and Activities</div>
                    <div>Many Events and Campaigns</div>
                    <div>Individual budget for Learning & Development</div>
                    <div>Saturday Adda (fun time get together – now in its online avatar!)</div>
                    <div>Team meets and food, and more food!</div>
                    <div>Peaceful and satisfied sleepy nights!</div>
                </div>
            </div>
        </div>
        <div className='w-10/12 mx-auto text-sm md:text-lg flex flex-col items-center gap-5'>
            <div className=' font-semibold'>Sorry, we do not have vacancies currently, please drop your resume at<Link className='text-red-500 font-bold hover:text-black'> hr@goonj.org</Link>, we will revert when we have an opening!</div>
            <div className='text-sm md:text-lg font-semibold'>Meanwhile, you can connect with us for<Link className='text-red-500 text-sm md:text-xl font-bold hover:text-black'>  Volunteering  / Internship </Link></div>
            <div className='text-base md:text-3xl pt-10 pb-5 font-medium text-red-500 hover:text-black'>Join our Team..</div>
            <img className='hover:scale-95' src='https://goonj.org/wp-content/uploads/2018/07/core_team.jpg' alt=''/>
            
        </div>
        <div className='border border-black m-6 p-5 flex flex-col lg:flex-row justify-center md:text-lg gap-3 font-base'>
            “The strength of the team is each individual member. The strength of each member is the team.”<div className=' lg:text-lg font-medium'>— Phil Jackson</div>
        </div>
        <div className='flex flex-col items-center m-10 lg:text-2xl text-red-500 font-semibold'>Hear Our Team say…</div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default Carrer;
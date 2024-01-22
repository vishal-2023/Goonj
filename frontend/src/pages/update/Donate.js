import React from 'react'
import Navbar from '../../components/Navbar'
import Share from '../../components/Share'
import DonateBox from '../../components/DonateBox'
import Footer from '../../components/Footer'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { donateData } from '../../utils/navItem';
import { Link } from 'react-router-dom';

const Carousel = ({donateData}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 2000,
    // centerMode: true,           // Enable center mode
    // centerPadding: '-10',     
  };
  
  return (
    <div className='w-full '>
      <Slider {...settings} className='w-10/12 mx-auto  mb-10'>
      {donateData.map((slide) => (
        <div key={slide.id} className="slide flex ">
          <div className='w-full flex flex-wrap flex-row text-red-500 justfy-around text-center p-5'>
            <div className='border-2 w-full'>
            <img className='h-72' src={slide.img1} alt=''/>
            <div className='p-4 text-xl'>{slide.title}</div>
            <div className='text-base'>{slide.title2}</div>
            <Link to={slide.link}>
              <button className='p-2 mx-auto bg-red-500 text-white font-semibold text-xl mt-10 rounded-md w-60  mb-5'>Contribute</button>
            </Link>
            </div>
            
          </div>

          </div>
      ))}
    </Slider>
    </div>
    
    
  );
};

export const Guidelines =()=>{
  return(
    <div className='flex flex-col gap-4  w-10/12 mx-auto text-center'>
      <div className='text-3xl font-semibold text-red-500'>Guidelines</div>
      <div className='flex w-full flex-row  justify-center gap-3 '>
        <div className='w-1/3 px-10 leading-5  mt-3 shadow-xl rounded-xl'>
        As per Income Tax guidelines, organizations will have to mandatorily generate certificate 10BE for contributors. For this, contributors must provide their complete address and a Govt recognized unique identification number.
        </div>
        <div className=' w-1/3  py-10 shadow-xl rounded-xl'>
        As per the FCRA 2010, to receive from foreign contributors, submission of a passport copy (front and back pages) is mandatory.
        </div>
        <div className='shadow-xl w-1/3 px-10 py-10 rounded-xl'>
        All Indian contributions made to GOONJ are eligible for tax exemption of 50% u/s 80G of the Income Tax Act, 1961.
        </div>
      </div>
      <div className='mt-10'>
        <div className='text-lg'>For any queries, write to us on <Link >priyanka@goonj.org</Link> </div>
        <div>or call us on 011 -41401216,011-26972351</div>
      </div>
    </div>
  )
}


export const Contribute =() =>{
  return(
    <div>
      <div className='text-center my-10 text-3xl font-medium text-red-500'>Contribute Offline</div>
        <div className='w-10/12 p-10 shadow-xl mx-auto flex flex-row gap-4 text-wrap text-center justify-between'>
        <div>
          <div className='text-xl text-red-500 font-semibold'>For All Indian Nationals</div>
          <ul className='mt-3 flex flex-col gap-1'>
            <li>Bank: HDFC Bank Ltd.</li>
            <li>A/c Name: Goonj</li>
            <li>A/c No : 04801450000130</li>
            <li>A/c Type : Savings Account</li>
            <li>Swift Code: HDFCINBB</li>
            <li>IFSC Code: HDFC0000480</li>
            <li>MICR Code: 110 240 072</li>
            <li>Bank Address: Plot No-9, H & J Block,</li>
            <li>LSC, Sarita Vihar,</li>
            <li>New Delhi-110076</li>
          </ul>
        </div>
        <hr className='h-80 mt-2 w-1 bg-red-300'/>
        <div className='w-1/3'>
          <div className='text-xl text-red-500 font-semibold mb-4'>By Cheque/Draft</div>
          <div >Please make your cheque/draft in the name of GOONJ and send it to J-93, Sarita Vihar, New Delhi-110076</div>
        </div>
        <hr className='h-80 w-1 mt-2 bg-red-300'/>
        <div>
          <div className='text-xl font-semibold mb-3 text-red-500'>
          For All Foreign Passport Holders
          </div>
          <ul className='flex flex-col gap-1'>
          <li>Bank – SBI</li>
          <li>A/c Name – Goonj</li>
          <li>A/c No – 39999163028</li>
          <li>A/c Type : FCRA Savings Account</li>
          <li>Branch Code – 00691</li>
          <li>IFSC – SBIN0000691</li>
          <li>SWIFT – SBININBB104</li>
          <li>Bank Address :FCRA Cell,</li>
          <li>4th Floor, State Bank of India,</li>
          <li>New Delhi Main Branch,</li>
          <li>11, Sansad Marg, New Delhi-110001</li>
          </ul>
        </div>
    </div>
    </div>

  )
}


const Donate = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div className='pt-12 relative'>
            <img className='w-full h-[30rem]' src='https://goonj.org/donate/assets/images/banner-image.jpg' alt='' />
            <DonateBox data={'absolute top-32  left-20 p-4 text-red-500 w-1/3 h-4/6 rounded-2xl flex flex-col gap-3 bg-white'} />
        </div>
        <div>
          <div className='text-center my-5 text-4xl font-semibold text-red-500'>Our Campaigns</div>
          <Carousel donateData={donateData} />
        </div>
        <Link>
          <img className='mx-auto w-10/12 h-72 rounded-3xl' src='https://goonj.org/donate/assets/images/team-5000-new.jpeg' alt='' />
        </Link>
        <Contribute/>
        <div className='my-20'>
          <div className='text-center text-3xl font-semibold text-red-500'>Other ways to contribute</div>
          <div className='flex flex-row mt-10 w-10/12 mx-auto items-center justify-center gap-3 '>
            <Link className='ml-28 w-32'>
              <img className='h-1/3' src='https://goonj.org/wp-content/themes/charity-ngo-child/img/logo/paytm-logo.png' alt='' />
            </Link>
            <Link className=''  >
              <img className='h-20' src='https://goonj.org/wp-content/uploads/2023/05/Give-Logo.png' alt='' />
            </Link>
            <Link  >
              <img className='w-full h-10' src='https://give2asia.org/wp-content/themes/give2asia/images/give2asia-logo-370.png' alt='' />
            </Link>
            <Link  >
              <img className='w-28' src='https://goonj.org/donate/assets/images/ICA%20logo.jpg' alt='' />
            </Link>
            <Link className='' >
              <img className='w-2/3' src='https://goonj.org/wp-content/themes/charity-ngo-child/img/logo/danamojo-logo.png' alt='' />
            </Link>
          </div>
        </div>
        <Guidelines/>
        <Share/>
        <Footer/>
    </div>
  )
}

export default Donate
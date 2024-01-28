import React from 'react'
import Navbar from '../../components/Navbar';
import { fellowImg } from '../../utils/navItem'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Share from '../../components/Share';
import Footer from '../../components/Footer';
import Save from '../../components/Save';
import { GlimpsImg , GoonjImg} from '../../utils/navItem';

const Fellowship = () => {

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
    <div className='overflow-hidden '>
        <Navbar/>
        <div className='w-11/12 mx-auto mt-14 h-full my-2'>
            <Slider {...settings}>
                {
                fellowImg.map((props) => (
                    <div key={props.id} className='border w-32 h-40 md:h-72 lg:h-96 shadow-lg relative '>
                        <div className= 'w-full absolute text-center  text-lg md:text-3xl mx-auto top-9 xl:font-bold text-white'>Fellowship</div>
                        <img className='w-full h-full mx-auto md:px-5 ' src={props.img} alt=''/>
                        
                    </div>
                ))}
            </Slider>
        </div>
        <div className='w-11/12 mx-auto flex flex-col items-center justify-center gap-8 m-14'>
            <div className='flex flex-row gap-5'>
                <div className='h-10 w-20 border-black border-t-2  mt-5 '></div>
                <div className="flex flex-col items-center text-center">
                    <div className='text-sm font-medium md:text-3xl md:font-normal'>About the Fellowship</div>
                    <div className='text-xs md:text-sm'>Exploring the world of possibilities!!</div>
                </div>
                <div className='h-10 w-20 border-black border-t-2 mt-5'></div>
            </div>
            <div className='text-wrap w-full p-0 text-xs md:text-sm lg:text-lg flex flex-col items-center'>
                <div>Our aim is to create more doers, following the words of our founder, Anshu Gupta, “Right now India doesn’t need more thinkers, </div>
                <div>it needs more doers.” We are looking for people with a passion to make a difference. If one is tired of thinking about solutions and wants</div>
                <div>to do something, then this Fellowship is the place for you!</div>
            </div>
            <div className='flex flex-col w-full h-full md:w-auto md:h-72 xl:h-80 items-center'>
            <iframe className='w-full h-full '  width="560" height="315" src="https://www.youtube.com/embed/q_YSHz5mlxY?si=dHI8t4mfEx62CJqT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className=' w-full p-4  bg-red-400 group  hover:bg-white'>
                <button className='group-hover:bg-red-400 group-hover:text-white  text-xl text-red-500 font-semibold p-1 bg-white '>
                    Applications for Goonj Fellowships 2023-24 are closed !
                </button>
               
            </div>
            </div>
        </div>

        <div>
            <div className='flex  md:w-1/4 gap-5 my-10 mx-auto text-2xl md:text-3xl font-normal justify-center items-center'>
                <hr className='w-32 h-1 bg-red-600'/>
                <div className='w-full text-center'>
                Fellowship
                </div>
                <hr className='w-32 h-1 bg-red-600'></hr>
            </div> 
            
        </div>

        <div className='xl:w-10/12 w-full mx-auto flex flex-wrap flow-row justify-center gap-3 mb-10  '>
            {
                GoonjImg.map((item)=>{
                    return <Save {...item}/>
                })
            }
        </div>

        <div className='flex w-full md:w-1/2 gap-5 mx-auto md:text-3xl mt-20 font-normal justify-center items-center'>
            <hr className='w-32 h-1 bg-red-600'/>
            <div className='w-full text-center h-full text-sm md:text-3xl  md:mx-auto'>
            Our Fellows are spread across
            </div>
            <hr className='w-32 h-1 bg-red-600'></hr>
        </div>
        <div className='md:w-1/2 w-full flex mx-auto justify-center'>
            <img src='https://goonj.org/wp-content/uploads/2022/04/map-02-1.png' alt=''/>
        </div>



        <div className='flex my-10  w-1/2 gap-5 mx-auto md:text-3xl font-normal text-center  justify-center items-center'>
            <hr className='w-full md:w-32 h-1 bg-red-600'/>
            <div>
                Glimpses Of Fellowships
            </div>
            <hr className='w-32 h-1 bg-red-600'></hr>
        </div>
        <div className='w-full lg:w-10/12 flex flex-row  flex-wrap  mx-auto items-center  md:gap-2'>
        {
            GlimpsImg.map((item)=>{
                return <Save  key={item.id} {...item}/>
            })
        }
        </div>
        
        <div className='w-full h-full md:h-96  md:w-10/12 mx-auto p-5 '>
        <iframe className='w-full h-full' width="1090" height="550" src="https://www.youtube.com/embed/c7P8OX2sXAI?si=WUt0KQX5czcAk2_F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default Fellowship;
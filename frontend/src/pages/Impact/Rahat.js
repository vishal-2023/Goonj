import React,{useEffect,useState} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Share from '../../components/Share'
import { Link } from 'react-router-dom'
import { RahatImg ,RahatLensData} from '../../utils/navItem'

const RahatData=()=>{
    return(
        <div className=' w-full text-wrap mx-auto my-10 flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-8 bg-gray-100'>
            {
                RahatLensData.map((item)=>{
                    return <div key={item.id} className ='lg:w-1/3  h-[inherit] p-5  relative text-wrap'>
    
                        <div className='absolute  bg-white  border-2 w-36 h-36 rounded-full'>
                        <img className='rounded-full w-full h-full' src={item.img} alt='' />
                        </div>
                        <div className='border-2 mt-32 h-80 md:h-52 lg:h-80 bg-white rounded-lg text-center p-8 flex flex-col gap-4'>
                            <div className='text-lg font-semibold'>{item.title}</div>
                            <div className='text-base '>{item.data}</div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}


const Rahat = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const images=['https://goonj.org/wp-content/uploads/2022/07/website-slider.jpg',
                    'https://goonj.org/wp-content/uploads/2022/12/4.jpg',
                'https://goonj.org/wp-content/uploads/2022/12/5.jpg',
            'https://goonj.org/wp-content/uploads/2022/12/9.jpg',
        'https://goonj.org/wp-content/uploads/2022/12/10.jpg']

    useEffect(() => {
        // Change the image every 5 seconds
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change the interval as needed (in milliseconds)
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
        }, [images.length]);

  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div className='pt-5'>
            <img className='w-full h-full md:h-[30rem]' src='https://goonj.org/wp-content/uploads/2021/05/New-header-Updated-for-Rahat-covid-page.jpeg' alt='' />
        </div>
        <div className='w-full  h-full '>
            <img className='w-full md:h-96 shadow-lg p-5 rounded-3xl ' src={images[currentImage]} alt='' />
            <Link to='https://drive.google.com/file/d/175xV1lSPjkUwIWdpa2OnJApxlEomLCxl/view'>
                <div className=' border-red-500 border-2 rounded-md shadow-sm w-fit p-3 text-sm md:text-base font-medium text-red-500 mt-3 mx-auto hover:text-white hover:bg-red-500'>Read Full Booklet</div>            
            </Link>
        </div>
        <div className='my-10'>
            <div className='text-center md:text-4xl font-bold'>Updates From the Ground</div>
            <div className='w-60 border-b-2 border-red-500 my-4 mx-auto'></div>
            <div className='flex flex-wrap justify-evenly gap-4'>
                {
                    RahatImg.map((item)=>(
                        <div key={item.id} className='relative shadow-lg border border-red-500 w-72 h-80 rounded-lg text-center hover:scale-95'>
                            <div className='absolute font-bold text-white w-full h-[inherit]  flex items-center  justify-center text-lg'>{item.title}</div>
                            <img className='h-3/5 w-full rounded-lg' src={item.img} alt=''/>
                            <div className='p-1 my-2'> {item.text} </div>
                        </div>
                    ))
                }
            </div>
            <div className='p-2 md:p-0 md:w-10/12  mx-auto flex flex-col md:flex-row gap-3 text-center md:mt-10 md:mb-32 md:text-3xl font-semibold text-red-500 '>
                <div className='lg:w-1/2 lg:h-60'>
                    <div className='my-4'>Goonj’s work in 2021</div>
                    <iframe className='w-full h-full' src="https://www.youtube.com/embed/zQwZrmuMkWw?si=yB2JBW52bgsUnyh7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='lg:w-1/2 lg:h-60'>
                    <div className='my-4'>Goonj’s work in 2020</div>
                    <iframe className='w-full h-full' src="https://www.youtube.com/embed/-pbxrgeeCLE?si=aX1HB563SX0wLqXZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-center'>
                <div className='md:w-1/2 p-3 md:p-0'>
                  <img className='w-full' src='https://goonj.org/wp-content/uploads/2021/05/PAGE-5-Our-Approach.jpeg' alt='ambulanceImg' />  
                </div>
                <div className='md:w-1/2 px-8 shadow-xl pt-3 flex flex-col text-wrap gap-4'>
                    <div className='text-3xl font-semibold text-red-500'>Our Approach</div>
                    <div className='flex flex-col gap-3'>
                        <div><b>Decentralise, localise, customise</b> Respond to needs emerging from the ground. Work with local vendors, partners and volunteers to listen to what’s happening on ground, understand and fulfil the needs of the Missed-out Communities.</div>
                        <div><b>Work with Partners</b> Empower and fill gaps in the work of our time tested partners, listen to them, stand with them, give voice and visibility to their challenges.</div>
                        <div><b>Focus on Missed-out Communities </b>Focus and Engage with Missed-out Communities such as transgenders, sex workers, patients, daily wage workers, institutions like old age homes, etc. who need immediate supply of ration, hygiene essentials, masks, gloves, medical kits etc.</div>
                        <div><b>Filling the gaps </b>Filling the gaps in ongoing Covid work of other start-ups, non-profits and individual efforts to ensure a stronger, a more comprehensive response.</div>
                    </div>
                    <button className='border-2 w-fit p-2 mx-auto font-semibold border-red-500 text-red-500 hover:bg-red-500 hover:text-white'>Frequent asked question</button>
                </div>
            </div>
        </div>
        <RahatData/>
        <Share/>
        <Footer/>
    </div>
  )
}

export default Rahat
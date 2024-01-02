import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Slider = () => {
  return (
    <div className='mx-7 flex items-center mt-3 relative'>
        <AliceCarousel autoPlay autoPlayInterval="3000">
            <div>
                <img className='w-full h-full ml-12' src='https://goonj.org/wp-content/uploads/2023/12/GoonjRahat_Michaung-New.jpg' alt='img'/>
            </div>
            <div>
                <img src="https://goonj.org/wp-content/uploads/2023/01/AR-website-banner-1.jpg" alt='img' />
            </div>
            <div>
                <img src="https://goonj.org/wp-content/uploads/2022/11/GARRD-slider.jpg" alt='img' />
            </div>
            <div>
                <img src='https://goonj.org/wp-content/uploads/2023/11/ODZ-Slider-on-Home-page-min-1536x560.png' alt=''/>
            </div>
            <div>
                <img src='https://goonj.org/wp-content/uploads/2023/05/Chaupal-2023-Header-for-webpage-shorta.jpg' alt='' />
            </div>
            <div>
                <img src='https://goonj.org/wp-content/uploads/2023/04/DD-homepage-slider-2.jpg' alt=''/>
            </div>
        </AliceCarousel>
        
    </div>
    
  )
}
export default Slider;
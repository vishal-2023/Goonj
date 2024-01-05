import React from 'react'
import Navbar from '../../components/Navbar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';

const Joy = () => {
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
        <Share/>
        <Footer/>
    </div>
  )
}
export default Joy;
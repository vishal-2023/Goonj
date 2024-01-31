import React from 'react'
import Card from './Card'
import Box from './Box'
import Share from './Share'
import {dataa1,dataa} from '../utils/navItem'
import { Link } from 'react-router-dom'

export const Award = (props) => {
  return (
    <div>
        <div className='w-full top-5 h-[28rem] md:min-h-screen p-4 relative flex flex-wrap text-wrap flex-row bg-fixed items-center justify-center'
        style={{
          backgroundImage:
            `url(${props.img})`
        }}>

          <div className='absolute text-sm mx-4 py-6 px-1 md:mx-10  text-white border-4 md:p-5 text-center md:text-base lg:text-2xl flex flex-col gap-3 md:leading-10 flex-wrap text-wrap md:py-20 rounded-xl font-bold'>
            <div>Awards and Recognitions</div>
            <div>Over the span of almost 2 decades, Goonj has won both National and International attention and </div>
            <div>recognition for its extensive work on non-issues and sustainable innovation.</div>
            <Link className='border px-4 py-1 md:w-40 hover:bg-red-500 mx-auto' to='/milestones/'> Read me </Link>

          </div>
        </div>
    </div>
  )
}



const Impact = () => {

  return (
    <div>
        <h2 className=' md:text-3xl text-lg font-bold md:font-bold  md:p-3 flex items-center justify-center'>Our Impact</h2>
        <div className='w-11/12 flex  flex-row items-center justify-center gap-4 flex-wrap my-4  md:my-8 mx-auto'>
          {
            dataa.map( (info) => {
              return <Card key={info.id} {...info} />
            })
          }
        </div>
        <div className='w-full homeContent h-screen HomeValue mt-10 top-4/5  p-4 relative flex flex-row bg-fixed items-center justify-center'
        style={{
          backgroundImage:
            "url('https://goonj.org/wp-content/uploads/2021/05/DignityDiaries-1.jpg')"
        }}>
          <div className='text-xs md:py-10 lg:py-1 font-medium gap-2 text-white md:text-lg md:gap-2 lg:text-3xl lg:font-bold text-center flex flex-col lg:gap-5'>
            <div>VALUING VALUES: CHANGING THE LENS & LANGUAGE</div>
            <div className='w-1/5 h-0.5 border-b-2 lg:border-b-4 mx-auto'></div>
            <div>Read our Dignity Diaries</div>
            <Link className= 'border-2 text-xs min-[320px]:py-1 min-[320px]:px-3  md:px-3 rounded-md lg:w-28 lg:p-2   mx-auto lg:text-2xl lg:rounded-xl hover:bg-red-500' to='/dignitydiaries/'>Visit</Link>
          </div>
      
        </div>

        <div className='flex flex-col bg-[#fffcfc] flex-wrap items-center justify-center'>
          <div className='md:text-2xl mt-5 text-lg font-semibold md:mt-6 md:mb-3'>What's New..</div>
          <div className='flex flex-row items-center flex-wrap justify-center'>
            {
              dataa1.map((img) => {
                return <Box key={img.id} {...img} />
              })
            }
          </div>
        </div>

        {/* Awards and Recognitions */}
        <Award img={'https://goonj.org/wp-content/uploads/2018/06/Magsaysay.png'}/>
        <Share/>
    </div>
  );
}

export default Impact;
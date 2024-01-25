import React from 'react'
import Card from './Card'
import Box from './Box'
import Share from './Share'
import {dataa1,dataa} from '../utils/navItem'

export const Award = (props) => {
  return (
    <div>
        <div className='w-full top-5 min-h-screen p-4 relative flex flex-wrap text-wrap flex-row bg-fixed items-center justify-center'
        style={{
          backgroundImage:
            `url(${props.img})`
        }}>

          <div className='absolute mx-10 homeAward text-white border-2 p-5 text-center text-2xl flex flex-col gap-3 leading-10 flex-wrap text-wrap py-20 rounded-xl font-bold'>
            <div>Awards and Recognitions</div>
            <div>Over the span of almost 2 decades, Goonj has won both National and International attention and </div>
            <div>recognition for its extensive work on non-issues and sustainable innovation.</div>
            <button className='border-2 w-32 mx-auto'> Read me </button>

          </div>
        </div>
    </div>
  )
}



const Impact = () => {

  return (
    <div>
        <h2 className=' text-3xl font-bold  p-3 flex items-center justify-center homeText'>Our Impact</h2>
        <div className='w-11/12 homeImpact flex  flex-row items-center justify-center gap-4 flex-wrap  my-8 mx-auto'>
          {
            dataa.map( (info) => {
              return <Card  {...info} />
            })
          }
        </div>
        <div className='w-full homeContent h-screen HomeValue mt-10 top-4/5  p-4 relative flex flex-row bg-fixed items-center justify-center'
        style={{
          backgroundImage:
            "url('https://goonj.org/wp-content/uploads/2021/05/DignityDiaries-1.jpg')"
        }}>
          <div className='text-white text-3xl HomeValue font-bold text-center flex flex-col gap-5'>
            <div>VALUING VALUES: CHANGING THE LENS & LANGUAGE</div>
            <div className='w-1/5 h-0.5 border-b-4 mx-auto'></div>
            <div>Read our Dignity Diaries</div>
            <button className= 'border-2 w-28 p-2 homeContent mx-auto text-2xl rounded-xl hover:bg-red-500'>Visit</button>
          </div>
      
        </div>

        <div className='flex flex-col bg-[#fffcfc] flex-wrap items-center justify-center'>
          <div className='text-2xl font-semibold my-5'>What's New..</div>
          <div className='flex flex-row items-center flex-wrap justify-center'>
            {
              dataa1.map((img) => {
                return <Box {...img} />
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
import React from 'react'
import Card from './Card'
import Box from './Box'
import Share from './Share'
import {dataa1,dataa} from '../utils/navItem'

export const Award = (props) => {
  return (
    <div>
        <div className='w-full top-5 min-h-screen p-4 relative flex flex-row bg-fixed items-center justify-center'
        style={{
          backgroundImage:
            `url(${props.img})`
        }}>
          <div className='absolute w-11/12 h-2/3 p-11  border-white-500 border-4 rounded-lg'></div>
          <div className='absolute top-1/3 text-white text-3xl	font-bold leading-11'> Awards and Recognitions </div>
          <div className='absolute mx-0 text-white	font-bold text-xl'> Over the span of almost 2 decades, Goonj has won both National and International attention
           and</div>
          <div className='absolute text-white	font-bold top-1/2 m-3 text-xl 	'>recognition for its extensive work on non-issues and sustainable innovation.</div>
          <div className='absolute top-1/2 m-16'><button className='border-solid border-2 font-bold border-white-600 text-white px-4 py-2 hover:bg-red-500'>Read me</button></div>
        </div>
    </div>
  )
}



const Impact = () => {

  return (
    <div>
        <h2 className='mt-6 text-3xl font-bold p-3 flex items-center justify-center'>Our Impact</h2>
        <div className='w-11/12  flex items-center justify-between gap-7 flex-wrap  my-9 pb-10 mx-auto'>
          {
            dataa.map( (info) => {
              return <Card  {...info} />
            })
          }
        </div>
        <div className='w-full mt-10 top-4/5 min-h-screen p-4 relative flex flex-row bg-fixed	 items-center justify-center'
        style={{
          backgroundImage:
            "url('https://goonj.org/wp-content/uploads/2021/05/DignityDiaries-1.jpg')"
        }}>
            <div className='absolute top-48 flex items-center text-white justify-center text-3xl  font-bold'>VALUING VALUES: CHANGING THE LENS & LANGUAGE</div>
            <div className='absolute top-72 w-1/5 h-0.5 bg-white flex items-center justify-center' ></div>
            <div className='absolute  bottom-3/2 flex items-center text-white justify-center text-xl leading-10 font-bold'>Read our Dignity Diaries</div>
            <button className='absolute top-96 border-2 p-2 px-8 rounded-xl  text-white m-1 text-xl font-bold hover:bg-red-500'>Visit</button>
          
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
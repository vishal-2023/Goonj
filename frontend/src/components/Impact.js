import React from 'react'
import Card from './Card'
import Box from './Box'
import Share from './Share'
import Award from './Award'

const Impact = () => {
  const data=[
    {
      id: 1,
      image: "https://goonj.org/wp-content/uploads/2021/05/rahat-covid.jpg",
      text: "Disaster Relief & Rehabilitation"
    },
    {
      id:2,
      image: "https://goonj.org/wp-content/themes/charity-ngo-child/img/8tabs/water.png",
      text: "Water"
    },
    {
      id:3,
      image: "https://goonj.org/wp-content/themes/charity-ngo-child/img/8tabs/education.jpg",
      text: "Education"
    },
    {
      id:4,
      image: "https://goonj.org/wp-content/themes/charity-ngo-child/img/8tabs/health.png",
      text: "Health"
    },
    {
      id:5,
      image: "https://goonj.org/wp-content/themes/charity-ngo-child/img/8tabs/sanitation.png",
      text: "Sanitation"
    },
    {
      id:6,
      image: "https://goonj.org/wp-content/themes/charity-ngo-child/img/8tabs/livelihood.png",
      text: "Livelihood"
    },
    {
      id:7,
      image: "https://goonj.org/wp-content/themes/charity-ngo-child/img/8tabs/environment.png",
      text: "Environment"
    },
    {
      id:8,
      image: "https://goonj.org/wp-content/themes/charity-ngo-child/img/8tabs/infra.png",
      text: "Access & Infrastructure"
    }
  ]

  const data1 = [
    {
      id:1,
      img: "https://goonj.org/wp-content/uploads/2023/11/Chaupal-2023-Mumbai-580x580.jpeg",
    },
    {
      id:2,
      img:"https://goonj.org/wp-content/uploads/2023/11/Junoon-extension.jpg",
    },
    {
      id:3,
      img:"https://goonj.org/wp-content/uploads/2023/10/Web-header-JGW-Page-580x608.jpg",
    }
  ]

  return (
    <div>
        <h2 className='mt-6 text-2xl font-bold p-3 flex items-center justify-center'>Our Impact</h2>
        <div className='flex items-center justify-center flex-wrap mt-4 mx-0'>
          {
            data.map( (info) => {
              return <Card  {...info} />
            })
          }
        </div>
        <div className='w-full top-4/5 min-h-screen p-4 relative flex flex-row bg-fixed	 items-center justify-center'
        style={{
          backgroundImage:
            "url('https://goonj.org/wp-content/uploads/2021/05/DignityDiaries-1.jpg')"
        }}>
            <div className='absolute top-48 flex items-center text-white justify-center text-3xl  font-bold'>VALUING VALUES: CHANGING THE LENS & LANGUAGE</div>
            <div className='absolute top-72 w-1/5 h-0.5 bg-white flex items-center justify-center' ></div>
            <div className='absolute  bottom-3/2 flex items-center text-white justify-center text-xl leading-10 font-bold'>Read our Dignity Diaries</div>
            <button className='absolute top-96 border-2 px-12 py-1 rounded-2xl text-white m-1'>Visit</button>
          
        </div>

        <div className='flex flex-col items-center justify-center'>
          <div>What's New..</div>
          <div className='flex flex-row items-center justify-center'>
            {
              data1.map((img) => {
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
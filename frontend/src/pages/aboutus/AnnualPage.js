import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import Share from '../../components/Share'
import Footer from '../../components/Footer'
import Save from '../../components/Save'
import { Cardsave } from '../../utils/navItem'

const AnnualPage = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <img className='w-full mt-14 md:h-72  md:mt-3' src='https://goonj.org/wp-content/uploads/2019/02/annula-report-banner.jpg' alt='' />
        <div className='absolute top-20 text-lg md:top-32 w-full mx-auto flex items-center justify-center   text-white md:text-4xl leading-9 font-medium'>Annual Reports</div>
        <Link to="https://drive.google.com/file/d/1u3stEh7_ZVsKem0m1ARZn1yOzbiqwK4j/view">
            <img className='m-1/2 w-full h-full mx-auto lg:w-[1050px] lg:h-[500px] p-4' src='https://goonj.org/wp-content/uploads/2023/01/AR-website-banner.jpg' alt=''/>
        </Link>
        <div className='w-full flex flex-wrap  flex-row gap-3 '>
            {
                Cardsave.map((item) => {
                    return <Save id={item.id} className='flex flex-wrap  flex-row' {...item}/>
                 })
            }    
        </div>
        <div className='flex flex-col gap-5 items-center flex-wrap justify-center m-5 mt-9'>
            <div className='text-2xl font-semibold'>FCRA Balance Sheet</div>
            <div className='flex flow-row gap-6 flex-wrap mx-auto items-center justify-center'>
                <Link className='border-2 p-5 border-slate-500 flex  flex-col ' to='https://goonj.org/wp-content/uploads/2023/11/FCRA-Auditor-Report-with-Balance-Sheet-FY-2022-23.pdf'>
                    <div className='text-lg font-medium text-red-600'>Auditor React with Balance Sheet for</div>
                    <div className='mx-auto text-base font-medium text-red-600'>2022-23</div>
                </Link>
                <Link className='border-2 border-slate-500 p-5 flex flex-col ' to='https://goonj.org/wp-content/uploads/2022/11/Auditor-Report-FCRA-with-Balance-Sheet-2021-22.pdf'>
                    <div className='text-lg font-medium text-red-600'>Auditor React with Balance Sheet for</div>
                    <div className='mx-auto text-base font-medium text-red-600'>2021-22</div>
                </Link>
                <Link className='border-2 p-5 border-slate-500 flex flex-col ' to='https://goonj.org/wp-content/uploads/2022/01/Auditor-Report-With-Balance-Sheet-FY-2020-21.pdf'>
                    <div className='text-lg font-medium text-red-600'>Auditor React with Balance Sheet for</div>
                    <div className='mx-auto text-base font-medium text-red-600'>2020-21</div>
                </Link>
            </div>
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}
export default AnnualPage;
import React ,{useState} from 'react'
import Navbar from '../../components/Navbar'
import Share from '../../components/Share'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { DisasterImg } from '../../utils/navItem'
import Save from '../../components/Save'
import { Pages } from '../../utils/navItem'

const Gaard = () => {
    
    const defaultSelectedPage = Pages.find((page) => page.id === 1);
    const [visible,setVisible] = useState(4);
    const [hide,setHide] = useState(true);
    const [shown,setShown] = useState(defaultSelectedPage);
    const HandlerClick = (id) =>{
        const select=Pages.find((page) => page.id === id);
        setShown(select);
    }
    
    
    const showItems = () =>{
        setVisible((prev) => prev+4);
    }
    const hideItem = () =>{
        setHide(visible<16);
    }

    const Handler=()=>{
        console.log(visible)
        hideItem();
        showItems();
    }


    const PageContent = ({ content }) => (
        <div className='flex flex-col mx-auto p-6 gap-2 md:gap-4 flex-wrap text-sm md:text-base text-wrap md:w-10/12'>
          <h2 className='md:text-3xl text-base font-semibold'>{content.title}</h2>
          <p>{content.data1}</p>
          <p>{content.data2}</p>
          <p>{content.data3}</p>
          <p>{content.data4}</p>
          {/* Add more content as needed */}
        </div>
      );
      
  return (
    <div className='overflow-hidden lazy-loading'>
        <Navbar/>
        <div className='w-full h-full'>
          <img className='w-full mt-2  md:h-[34rem]' src='https://goonj.org/wp-content/uploads/2020/08/Garrd-for-Gallery-Pic2.jpg' alt='' />
          <div className='absolute top-40 md:top-64 z-0 w-full text-center  text-white lg:text-3xl lg:leading-9 md:font-medium'>Goonj Alliance for Rapid Response on Disasters (GARRD)</div>  
        </div>
        <div className='md:w-2/3 mx-auto p-4 lg:p-10 flex flex-col gap-6'>
            <div className='lg:text-center my-5 text-xs md:text-base lg:text-lg font-medium'>GARRD is an alliance initiated by Goonj to set up a formal cross-sectoral alliance of entities with pre-committed resources to positively impact the disaster response ecosystem and understanding. This solution is unique and first-of-its-kind globally, to bring together diverse entities involved, and those who must be involved, to create a transformative impact. Through this alliance, we hope to achieve a more comprehensive, coordinated, and collaborative bottoms-up approach to rapid and sustained disaster mitigation, relief, and rehabilitation.</div>
            <Link to='https://goonj.org/wp-content/uploads/2020/12/GARRD-Problem-Statement.jpg' >
                <img src='https://goonj.org/wp-content/uploads/2020/12/GARRD-Problem-Statement.jpg' alt='' />
            </Link>
        </div>
        <div className='w-11/12 mx-auto flex flex-col md:flex-row flex-wrap'>
            <div className='lg:w-1/2 flex flex-row flex-wrap gap-3 justify-center'>
                {
                    Pages.map((item)=>(
                        <div key={item.id} className={`border-2 rounded-lg hover:scale-95 hover:border-red-500 mb-0 w-44 md:w-60 md:p-10 ${item.color}`} onClick={()=>HandlerClick(item.id)} >
                            <img className='lg:w-10 h-16 lg:h-auto mx-auto' src={item.imgdata} alt='' />
                            <div className='w-10/12 mx-auto text-lg font-semibold text-wrap text-center my-3'>{item.title}</div>
                        </div>
                    ))
                }
            </div>
            <div className='lg:w-1/2'>
                {
                    shown&&<PageContent content={shown} />
                }
            </div>
        </div>
        <div className='md:w-2/3 mx-auto px-5 md:px-0 md:p-10 flex flex-col gap-6'>
            <Link to='https://goonj.org/wp-content/uploads/2022/12/SDG-icons-scaled.jpg'>
                <img src='https://goonj.org/wp-content/uploads/2022/12/SDG-icons-scaled.jpg' alt='' />
            </Link>
            
        </div>
        <div className='w-10/12 md:w-9/12 mx-auto flex flex-col gap-7'>
            <div className='text-center w-full text-xl md:text-3xl lg:text-4xl mt-10 font-bold'>Unique Approaches</div>
            <div className='border-b-4 w-1/2 border-red-600 mx-auto md:mb-10'></div>
            <ol className='w-full flex flex-col gap-5 md:gap-4 lg:text-lg font-extrathin'>
                <li> - Goonj has looked at every disaster as an opportunity to bring attention and resources to address the ignored issues and needs of the most neglected disaster hit communities.</li>
                <li> - Our work has evolved into a reliable and time-tested, need based disaster relief & rehabilitation approach that engages a network of stakeholders in urban and rural India with a unique disaster Management Protocol that involves the masses across the country, sensitizing them for a rapid and better response to a disaster.</li>
                <li> - Goonj tackles mismatch between what’s needed and what’s contributed post disaster by engaging with urban masses and key stakeholders in non- disaster times on myths, realities, dignity and changing needs of disaster hit people.</li>
                <li> - Year round work with the masses and key stakeholders around breaking disaster related myths, sensitizing them to mindful giving through sessions, exhibitions etc. brings efficiency in operations and reduces wastage of precious resources.</li>
                <li> - In the initial few weeks post a disaster, our focus is on building collaborations with partners and stakeholders at local, regional, national and international level from different walks of life, for different things, to generate resources.</li>
            </ol>
            <div className='md:text-lg w-full text-center font-bold'>To know more write to <a className='text-red-500 hover:text-black' href='mailto:abhinav@goonj.org'>abhinav@goonj.org</a> and <a className='text-red-500 hover:text-black' href='mailto:chandan@goonj.org'>chandan@goonj.org</a>  or <a className='text-red-500 hover:text-black' href='mailto:mail@goonj.org'>mail@goonj.org</a> </div>
        </div>
        <div className='my-5 md:my-14'>
            <div className='text-center text-lg md:text-4xl font-bold'>Disaster Image Gallery</div>
            <div className='border-b-4 border-red-500 w-1/4 mx-auto my-4 mb-10'></div>
            <div className='w-full flex flex-row flex-wrap md:gap-2 mx-auto '>
            
            {
                DisasterImg.slice(0,visible).map((item)=>{
                    return <Save {...item}/>
                })
            }
        </div>
        <div>
            {hide && 
                <Link className='border-0 w-full p-4 text-center flex items-center justify-center' >
                    <button className='border-2 border-red-500 p-2 m-6 text-center text-lg font-medium text-red-500 hover:bg-red-500 hover:text-white' onClick={Handler}>Load More</button>  
                </Link>
            }
        </div>
        </div>
        <Share/>
        <Footer/>
    </div>
  )
}

export default Gaard
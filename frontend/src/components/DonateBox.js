import React,{useState} from 'react'
import { FaRupeeSign } from 'react-icons/fa'

const DonateBox = (props) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [option, setOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const ColorhandleOption= (value)=>{
        setOption(value);
    };

    const handleAlert = () => {
        alert(`Selected Option: ${selectedOption}, Custom Amount: ${option}\nYour amount ${option} Received`);

    };
    
    const handleInputChange = (event) => {
        setOption(event.target.value);
      };
  return (
    <div className={` ${props.data}  border shadow-lg p-2 `}>

        <div className='flex flex-row mb-2 lg:mb-0 justify-between'>
            <button
            className={`p-2 min-[425px]:px-7 rounded-md bg-[#ededed] ${selectedOption === 'oneTime' ? 'bg-blue-200' : ''}`}
            onClick={() => handleOptionClick('oneTime')}
            >
            One Time
            </button>
            <button
            className={`p-2 min-[425px]:px-7 rounded-md bg-[#ededed] ${selectedOption === 'monthly' ? 'bg-blue-200' : ''}`}
            onClick={() => handleOptionClick('monthly')}
            >
            Monthly
            </button>
            <button
            className={`p-2 min-[425px]:px-7 rounded-md bg-[#ededed] ${selectedOption === 'team500' ? 'bg-blue-200' : ''}`}
            onClick={() => handleOptionClick('team500')}
            >
            Team 500
            </button>
      </div>


        <div className='flex flex-col gap-2 pb-3 border-2 bg-[#ededed] rounded-md'>
            <div className='flex flex-row justify-between p-3 '>
                <button className={`p-3 min-[425px]:px-10 rounded-md bg-white ${option === '2000' ? 'bg-green-300' : ''}`} 
                onClick={() => ColorhandleOption('2000')}>2000</button>
                <button className={`p-3 min-[425px]:px-10 rounded-md bg-white ${option === '4000' ? 'bg-green-200' : ''}`} 
                onClick={() => ColorhandleOption('4000')}>4000</button>
                <button className={`p-3 min-[425px]:px-10 rounded-md bg-white ${option === '10000' ? 'bg-green-200' : ''}`} 
                onClick={() => ColorhandleOption('10000')}>10000</button>
            </div>
            <div className='flex flex-row justify-between mx-3 ' >
                <button className=' p-1 min-[425px]:px-5 text-sm rounded-md bg-white'><FaRupeeSign/></button>
                <input 
                className='w-80 p-1 red-placeholder bg-white rounded-md'
                type='text'
                value={option}
                onChange={handleInputChange}
                placeholder='Other Amount'/>
            </div>
        </div>
        <div className='flex mt-2 flex-row  justify-around gap-2 lg:gap-9'>
            <div className='flex w-1/2 m-auto px-3 py-2 gap-5 bg-[#ededed]'>
                <input type='radio' name='citizenship' className='' />
                <label>Indian Citizen</label>
            </div>
            <div className='flex w-1/2 m-auto px-3 py-2 gap-5 bg-[#ededed]'>
                <input type='radio' name='citizenship' className='' />
                <label>Foreign Citizen</label>
            </div>
        </div>
        <div className='text-center mt-2 lg:mt-0 p-1 md:p-2 bg-red-500 text-white text-lg font-sm rounded-md' onClick={handleAlert} >Contribute</div>
        <div className='flex flex-row mt-1 lg:mt-0 justify-between text-sm underline'>
            <div className=''>Guideline for Contribution</div>
            <div className=''>Contribute Offline</div>
        </div>
    </div>
  )
}

export default DonateBox
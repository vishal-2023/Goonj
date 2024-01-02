import React from 'react'
import { FaFacebook ,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-screen h-full bg-red-500 flex flex-col gap-1/2 '>
        <div className='w-2/3  flex flex-col  items-center justify-center text-sm text-white m-4 p-1/2 mx-auto'>
        Disclaimer<br/><br/>
        No third party agency is working on behalf of Goonj for any recruitment, trainings, camps or other activities related to Goonj. Please check/consult with Goonj directly to get correct information
         or assistance. Please beware of any unwarranted claims made by anyone on our behalf. Kindly bring any such claims to our notice for immediate attention and action.
        <br/><br/>
        Goonj doesn't charge any money from anyone for these activities. So if you come across any individual/ organization 
        making a monetary demand in our name please bring it to our notice immediately on mail@goonj.org
        </div>
        <div className='w-2/3 m-9 ml-12 flex flex-row justify-evenly align-center text-sm text-white p-2'>
            <div className=' mx-auto flex flex-col gap-3'>
                <div>Contact us</div>
                <div>Registered Office Address :<br/>
                    J-93, Sarita Vihar, New Delhi-110076 <br/><br/>
                    mail@goonj.org<br/><br/>
                    Call Us: 011-26972351, 41401216</div>
            </div>
            <div className='flex flex-col   mr-10'>
                <div className=''>Write to us</div><br></br>
                <form className='bg-red-500'>
                <label>Select Subject
                    <br/>
                    <select className='bg-white mt-2 text-black'>
                    <option value="--">--</option>
                    <option value="Internship/volunteering">Internship/volunteering</option>
                    <option value="Collection drives">Collection drives</option>
                    <option value="Material contribution">Material contribution</option>
                    <option value="An institutional collabration with Goonj ">An institutional collabration with Goonj </option>
                    <option value="others">Others</option>
                </select>
                        
                </label>
                <br/><br/>
                <label>Your Email: (required)
                    <br/>
                    <input
                    type="text" 
                    className='mt-2 border-2 w-11/3 border-white bg-inherit'
                    >
                    </input>
                </label>
                <br/><br/>
                <div className='flex flex-auto '>
                    <label className='w-full'>Your Message
                        <br/>
                        <input
                        type="text" 
                        className='mt-1 w-72 h-48 border-2 border-white bg-inherit'
                        >
                        </input>
                    </label><br/>
                </div>
                
                <button className='border-2 p-1  mt-9 border-white bg-inherit'>Send</button>
                </form>
                
            </div>
            
        </div>
        <div className='border-t-2 border-white w-1/2 h-1/3 mx-auto m-1 py-2 text-sm text-white flex flex-row item-center justify-between	'>
            <div className='flex flex-row '>
                <div>FAQ |</div>
                <div>Annual Reports |</div>
                <div>Privacy Policy</div>
            </div>
            <div className='flex flex-row gap-2'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaYoutube/>
            </div>
        </div>
        
    </div>
  )
}
export default Footer;
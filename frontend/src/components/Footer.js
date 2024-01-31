import React from 'react'
import { FaFacebook ,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#d94b38] h-full  text-white text-lg '>
        <div className='w-10/12 h-full mx-auto text-wrap  py-7 homeContent flex flex-col flex-wrap gap-9'>
        <div className='w-full h-full flex flex-col flex-wrap text-wrap homeContent1 gap-5'>
            <div>Disclaimer</div>
            <div>No third party agency is working on behalf of Goonj for any recruitment, trainings, camps or other activities related to Goonj. Please check/consult with Goonj directly to get correct information or assistance. Please beware of any unwarranted claims made by anyone on our behalf. Kindly bring any such claims to our notice for immediate attention and action.</div>
            <div>Goonj doesn't charge any money from anyone for these activities. So if you come across any individual/ organization making a monetary demand in our name please bring it to our notice immediately on mail@goonj.org
            </div>
        </div>
        <div className='w-full h-full flex flex-col lg:flex-row  text-wrap gap-32 flex-wrap homeContent'>
            <div>
                <div>Contact us</div>
                <div> Registered Office Address :J-93, Sarita Vihar, New Delhi-110076</div>
                <div>mail@goonj.org</div>
                <div>Call Us: 011-26972351, 41401216</div>
            </div>
            <div className=' min-[320px]:w-60 h-full max-[280px]:m-[-7px] flex flex-col flex-wrap gap-4'>
                <div>Write to us</div>
                <label className='w-full h-full bg-[inherit] overflow-hidden'>
                    <div>Select Subject</div>
                    <select className='bg-[inherit] w-full text-wrap border-2 mt-2 text-white'>
                        <option className='text-black' value="--">--</option>
                        <option className='text-black' value="Internship/volunteering">Internship/volunteering</option>
                        <option className='text-black' value="Collection drives">Collection drives</option>
                        <option className='text-black' value="Material contribution">Material contribution</option>
                        <option className='text-black' value="An institutional collabration with Goonj ">An institutional collabration with Goonj </option>
                        <option className='text-black' value="others">Others</option>
                    </select>
                        
                </label>
                <label className='w-full'>
                    <div>Your Email: (required)</div>
                    <input
                    type="text" 
                    className='mt-2 w-64 border-2 md:w-80 border-white bg-inherit'
                    >
                    </input>
                </label>
                <label className='w-full '>
                    <div className='mb-3'>Your Message</div>
                    <textarea className='w-full text-white border-2 bg-inherit md:w-96 h-40 md:h-60' name="comment" form="usrform">
                    </textarea>
                </label>
                <button className='border-2 p-1 w-1/3  mt-5 border-white bg-inherit'>Send</button>
            </div>
            
        </div>
        <div className='border-t-2 border-white w-1/2  mx-auto  py-2 text-sm text-white flex flex-row flex-wrap item-center justify-between	'>
            <div className='flex flex-row flex-wrap'>
                <div>FAQ |</div>
                <div>Annual Reports |</div>
                <div>Privacy Policy</div>
            </div>
            <div className='flex flex-row flex-wrap gap-2'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaYoutube/>
            </div>
        </div>
        </div>
    </div>

  )
}
export default Footer;
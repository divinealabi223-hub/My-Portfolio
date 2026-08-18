import React from 'react'
// import Image from '../assets/Logo1.png'
import Image from '../assets/Logo1.png'
import { BsGithub, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'


function Footer() {
  return (
    <>
    <div className='bg-[#080B1A] min-h-7xl mx-auto px-6'> 
        <div className='flex justify-between items-center'> 
           <img src={Image} className='w-28' sm:w-30 /> 
          <div class="text-center text-sm text-gray-500">
            &copy; 2026 Your Name. All rights reserved.
          </div>
            
            <ul className='text-gray-400 font-bold gap-3 items-center hidden md:flex'> 
                <li>Home</li>
                <li>About</li>
                <li>Skill</li>
                <li>Project</li> 
                <li>Testimonial</li>
            </ul>
            
            <div className='flex gap-2 items-center'> 
                <BsGithub size={25} className='text-white border border-gray-800 rounded-md p-1' /> 
                <FaLinkedinIn size={25} className='text-white border border-gray-800 rounded-md p-1' />
                <BsTwitter size={25} className='text-white border border-gray-800 rounded-md p-1' />
                <BsWhatsapp size={25} className='text-white border border-gray-800 rounded-md p-1' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer

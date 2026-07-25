import React, { useState } from 'react'
import Logo from '../assets/Logo1.png' 
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion' 


function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className='bg-slate-950 w-full shadow-lg sticky top-0 z-50'>
          <div className='max-w-7xl mx-auto h-20 flex items-center justify-between px-6'>  
               <img src={Logo} alt="Logo" className='w-28'/> 

            <ul className='hidden sm:flex sm:gap-4 md:gap-8 lg:flex items-center justify-center gap-8 text-white font-["Poppins"] font-bold'> 
               <NavLink to="/" className="font-bold hover:underline underline-offset-4 hover:text-blue-900 decoration-2 transition-all">Home</NavLink>
               <NavLink to="/about" className="font-bold hover:underline underline-offset-4 hover:text-purple-600 decoration-2 transition-all">About</NavLink> 
               <NavLink className="font-bold hover:underline underline-offset-4 hover:text-purple-600 decoration-2 transition-all">Skill</NavLink> 
               <NavLink className="font-bold hover:underline underline-offset-4 hover:text-purple-600 decoration-2 transition-all">Project</NavLink>
               <NavLink className="font-bold hover:underline underline-offset-4 hover:text-purple-600 decoration-2 transition-all">Blog</NavLink>
               <NavLink className="font-bold hover:underline underline-offset-4 hover:text-purple-600 decoration-2 transition-all">Testimonial</NavLink>
               <NavLink className="font-bold hover:underline underline-offset-4 hover:text-purple-600 decoration-2 transition-all">Contact</NavLink>
            </ul> 

            <motion.button
            whileHover={{
                scale:1.05
            }}
            whileTap={{
                scale:0.95
            }}
            className='text-white py-2 px-4 border border-purple-500 rounded-md mr-4 hidden sm:flex md:flex lg:flex font-bold font-["Poppins"] cursor-pointer hover:bg-purple-600 '>Hire me</motion.button>

            <button className='sm:hidden md:hidden lg:hidden cursor-pointer' onClick={() => setOpen(!open)} >
              {!open ? <Menu className='text-white' /> : <X className='text-white' />} 
            </button>
          </div> 
              {open && ( 
                
                <div className='bg-gray-800 top-0 bottom-0 text-white p-5'>
                  <div>
                  <NavLink to="/">Home</NavLink>
                  </div>
                  <div>
                  <NavLink to="/about">About</NavLink> 
                  </div>
                  <div>
                  <NavLink>Skill</NavLink> 
                  </div>
                   <div>
                  <NavLink>Project</NavLink> 
                  </div>
                  <div>
                  <NavLink>Blog</NavLink> 
                  </div>
                   <div>
                     <NavLink>Testimonal</NavLink> 
                  </div>
                  <div>
                        <NavLink>Contact</NavLink> 
                  </div>
                  </div>
                  )}
      </nav>
    </>
  )
}

export default Navbar

import React, { useState } from 'react'
import Logo from '../assets/Logo1.png'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className='bg-slate-950 w-full shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8'>
        <img src={Logo} alt='Logo' className='w-28 sm:w-32' /> 

       
          {/* <NavLink to='/' className='font-bold hover:underline underline-offset-4 hover:text-blue-900 decoration-2 transition-all'>Home</NavLink>
          <NavLink to='/about' className='font-bold hover:underline underline-offset-4 hover:text-purple-600 decoration-2 transition-all'>About</NavLink>
          <NavLink to='/skill' className='font-bold hover:underline underline-offset-4 hover:text-purple-600 decoration-2 transition-all'>Skill</NavLink>
          <NavLink to='/project' className='font-bold hover:underline underline-offset-4 hover:text-purple-600 decoration-2 transition-all'>Project</NavLink>
          <NavLink to='/blog' className='font-bold hover:underline underline-offset-4 hover:text-purple-600 decoration-2 transition-all'>Blog</NavLink>
          <NavLink to='/testimonial' className='font-bold hover:underline underline-offset-4 hover:text-purple-600 decoration-2 transition-all'>Testimonial</NavLink>
          <NavLink to='/contact' className='font-bold hover:underline underline-offset-4 hover:text-purple-600 decoration-2 transition-all'>Contact</NavLink> */}

        <ul className='hidden md:flex items-center justify-center gap-6 text-white font-["Poppins"] font-bold'>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skill</a>
          <a href="#contact">Contact</a>
      </ul>

        <div className='flex items-center gap-3'>
          <motion.button
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className='hidden md:inline-flex text-white py-2 px-4 border border-purple-500 rounded-md font-bold font-["Poppins"] cursor-pointer hover:bg-purple-600 mx-6'
          > 
            Download CV
          </motion.button>

          <button className='md:hidden text-white' onClick={() => setOpen(!open)}>
            {!open ? <Menu className='text-white' /> : <X className='text-white' />}
          </button>
        </div>
      </div>

      {open && ( 
        <div className='md:hidden bg-slate-950 border-t border-slate-800 text-white'>
          <div className='space-y-3 px-6 py-5 text-center'>
            <a href="#home" onClick={() => setOpen(false)} className='block py-2 text-lg font-semibold hover:text-purple-400'>Home</a>
            <a href="#about" onClick={() => setOpen(false)} className='block py-2 text-lg font-semibold hover:text-purple-400'>About</a>
            <a href="#skills" onClick={() => setOpen(false)} className='block py-2 text-lg font-semibold hover:text-purple-400'>Skill</a>
            <a href="#contact" onClick={() => setOpen(false)} className='block py-2 text-lg font-semibold hover:text-purple-400'>Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

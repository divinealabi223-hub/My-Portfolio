import React from 'react'
import { MapPin, Laptop, GraduationCap, Rocket, Folder, Server, RocketIcon } from 'lucide-react'
import { SiTailwindcss } from 'react-icons/si'
import Pics from '../assets/Image.png'

function About() {
  return (
    <>
       <div className='bg-[#080B1A] min-h-screen py-15'> 
          <div className='mx-w-7xl mx-auto px-6 lg:px-6'> 
             <div className='text-center'> 
              <h1 className='uppercase tracking-[2px] text-violet-500 font-bold text-2xl'>About Me</h1>
               <h3 className='mt-3 text-4xl md:text-4xl lg:text-4xl font-bold leading-tight text-white'>Passionate About Building<br />
               <span className="bg-linear-to-r from-violet-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">Modern Digital Experences</span></h3> 

               <p className='text-slate-400 mt-3 max-w-3xl mx-auto leading-6 text-sm'>I transform ideas into modern, responsive and scalable web applications <br />
                 that deliver real value and exceptional user experiences.
            </p>
             </div>

             <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
               <div className=''>  
                  <img src={ Pics } alt="Divine Alabi" className='w-100' />
               </div>

                     <div>
                           <h3 className='text-white text-2xl font-bold'>I'm Passionate about<br />
                           <span className='bg-linear-to-r from-violet-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent'>building solution through code</span>
                           </h3>

                           <p className='text-slate-400 text-sm leading-5 my-2'>I Enjoyed turning ideas into modern responsive and scalable web applications. <br />
                           My Journey started with frontend development, and i am now expanding into<br />backend development with node.js.</p>

                           <p className='text-sm text-slate-400 leading-5'>My goal is to become a software engineer, that<br />can build product that solve real world problem and help people.</p> 


                           <div className='flex space-x-3 py-4'>
                               <div className='border-gray-800 border p-4 shadow-lg w-32 rounded-md'> 
                                  <MapPin className='text-purple-600 mx-8' />
                                  <p className='font-bold text-sm text-slate-200 text-center mt-2'>Location</p>
                                  <p className='text-slate-200 text-xs text-center'>Lagos, Nigeria</p>
                            </div> 

                             <div className='border-gray-800 border p-4 shadow-lg w-32 rounded-md'> 
                                  <Laptop className='text-violet-300 mx-8' />
                                  <p className='font-bold text-xs text-slate-200 text-center mt-1'>Focus</p>
                                  <p className='text-slate-200 text-xs text-center mt-1'>Full Stack<br />Development</p>
                            </div> 

                             <div className='border-gray-800 border p-4 shadow-lg w-32 rounded-md'> 
                                  <GraduationCap className='text-green-500 mx-8'/>
                                  <p className='font-bold text-sm text-slate-200 text-center mt-2'>Learning</p>
                                  <p className='text-slate-200 text-xs text-center'>React<br />+ Node.js</p>
                            </div> 

                             <div className='border-gray-800 border p-4 shadow-lg w-32 rounded-md'> 
                                  <RocketIcon className='text-orange-400 mx-8'/>
                                  <p className='font-bold text-sm text-slate-200 text-center mt-2'>Goal</p>
                                  <p className='text-slate-200 text-xs text-center'>Software developer</p>
                            </div> 
                          </div>
                     </div> 
            </div>
          </div>
       </div>
    </>
  )
}

export default About

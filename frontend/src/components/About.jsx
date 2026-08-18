import React from 'react'
import { MapPin, Laptop, GraduationCap, Rocket, Folder, Server, RocketIcon, User, Mail, PowerIcon } from 'lucide-react'
import { SiTailwindcss } from 'react-icons/si'
import Pics from '../assets/Image.png'
import { BsGithub, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

function About() {
  return (
    <>
    <div className='bg-[#080B1A] pt-10'> 
          <div className='mx-w-7xl mx-auto px-6 lg:px-12'> 
            <div className='flex md:flex-row items-center space-x-4 justify-center'> 


             <div> 
                <h1 className='text-3xl sm:text-3xl lg:text-4xl font-bold tracking-[2px] text-violet-500'>About Me</h1> 
                <p className='text-white font-semibold text-2xl'>Get to know me</p> 

                   <p className='text-slate-400 text-sm leading-5 my-2'>I Enjoyed turning ideas into modern<br />responsive and scalable web applications.<br />
                   My Journey started with frontend development,<br />and i am now expanding into<br />backend development with node.js.</p>

                    <p className='text-slate-400 text-sm leading-5'>I'm Passionate about building solution through code.</p>
             </div> 


               
               <div className='hidden md:block'> 
                   <img src={Pics} className='w-80 h-100'/> 
               </div>





            <div className='py-4 px-6 rounded-md w-90 hidden lg:block'> 
               <div className='flex item-center gap-2 my-2'>
                  <User size={35} className='text-white border border-slate-800 p-2 rounded-md' /> 
                  <div className='font-bold text-sm'> 
                     <p className='text-white'>Name:</p>
                     <p className='text-white'>Divine Alabi</p> 
                  </div>
               </div>

               <div className='flex item-center gap-2 my-2'>
                  <Mail size={35} className='text-white border border-slate-800 p-2 rounded-md' /> 
                  <div className='font-bold text-sm'> 
                     <p className='text-white'>Email:</p>
                     <p className='text-white'>divinealabi223@gmail.com</p>
                  </div>
               </div>


               <div className='flex item-center gap-2 my-2'>
                  <MapPin size={35} className='text-white border border-slate-800 p-2 rounded-md' /> 
                  <div className='font-bold text-sm'> 
                     <p className='text-white'>Location:</p>
                     <p className='text-white'>Lagos, Nigeria</p> 
                  </div>
               </div>

               <div className='flex gap-2 my-2'>
                  <PowerIcon size={35} className='text-white border border-slate-800 p-2 rounded-md' /> 
                  <div className='font-bold text-sm'> 
                    <p className='text-white'>Availability:</p> 
                    <span className='inline-flex items-center justify-center md:justify-start gap-2 text-sm text-white'>
                   <span className='w-2 h-2 rounded-full bg-green-400'></span> 
                  Open to work
                </span>
                  </div>
               </div>
                 <div className='flex gap-2 my-2'> 
                    <BsGithub size={30} className='text-white border border-slate-700 rounded-md p-2 shadow-lg' />
                    <BsLinkedin size={30} className='text-white  border border-slate-700 rounded-md p-2 shadow-lg' />
                    <BsTwitter size={30} className='text-white  border border-slate-700 rounded-md p-2 shadow-lg' />
                    <BsWhatsapp size={30} className='text-white  border border-slate-700 rounded-md p-2 shadow-lg' />
                 </div>
            </div> 



          </div>
        </div>
       </div>

       {/* <div className='bg-[#080B1A] min-h-screen py-15'> 
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


                           <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 space-x-2 py-4 space-y-2'>   
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
       </div> */}
    </>
  )
}

export default About




// bg-linear-to-r from-violet-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent
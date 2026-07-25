import { ArrowBigLeft, ArrowRight, Mail, User } from 'lucide-react'
import React from 'react'
import Laptop from '../assets/Laptop.png'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import { easeInOut, motion } from 'framer-motion'
import StatView from './StatView'

function Hero() {
  return (
    <>
       <section className='bg-[#080B1A] min-h-screen text-white overflow-hidden pt-6'> 
           <div className='px-9 lg:px-15 max-w-7xl mx-auto'> 
            <div className=' absolute left-20 top-20 h-80 w-80 rounded-full bg-purple-600 opacity-20 blur-[150px]'></div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center'>
                <motion.div 
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                > 
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-600 text-purple-400 text-sm">

                          <span className="w-2 h-2 rounded-full bg-green-400"></span>
                          Available for Work
                          </span>

                          <h3 className='text-purple-600 text-2xl font-bold mt-4'>Hello, i'm</h3>
                          <h1 className=' text-white text-5xl font-extrabold leading-tight sm:text-5xl lg:text-6xl'>
                            Divine
                            <span className='text-purple-600'>Alabi</span> 
                          </h1>


                          <h2 className='text-purple-600 md:text-2xl text-xl font-bold mt-3'>
                            Full Stack Software Engineer
                            </h2>


                          <p className='text-white text-sm font-semibold my-3'>
                            I build modern, scalable and fast web<br />application that solve real world problems<br />and deliver exceptional user interface.
                          </p>


                          <div className="flex flex-wrap gap-4 my-6 "> 
                                  <p className="px-4 py-2 bg-slate-900/70 rounded-lg flex gap-1.5 items-center text-sm text-slate-300"><FaReact className='text-[#61dafb]' />React</p> 

                                  <p className="px-4 py-2 bg-slate-900/70 rounded-lg flex gap-1.5 items-center text-sm text-slate-300"><FaNodeJs className='text-[#339933]' /> Node.js</p>

                                  <p className="px-4 py-2 bg-slate-900/70 rounded-lg flex gap-1.5 items-center text-sm text-slate-300"><DiMongodb className='text-[#47A248]' /> MongoDB</p>

                                  <p className="px-4 py-2 bg-slate-900/70 rounded-lg flex gap-1.5 items-center text-sm text-slate-300"><SiTailwindcss className='text-[#06B6D4]' /> Tailwind CSS</p>

                          </div>

                          <div className='flex flex-wrap gap-5'> 
                                <motion.button 
                                whileHover={{ scale: 1.05, y: -5, }}
                                whileTap={{ scale: 0.95, }}
                                className="px-5 py-2 rounded-md bg-purple-600 hover:bg-slate-950 border border-purple-500 hover:text-purple-400
                                text-white transition-all duration-300 flex gap-2 items-center cursor-pointer">
                                  View My Work<ArrowRight />
                                </motion.button>

                              <motion.button 
                              whileHover={{ scale: 1.05, x: -5, }}
                              whileTap={{ scale: 0.95 }}
                              className="px-5 py-2 rounded-md border border-purple-500 text-purple-400 hover:bg-purple-600
                                hover:text-white transition-all duration-300 flex gap-2 items-center cursor-pointer">
                                  Hire Me<User />
                                  </motion.button>
                            </div>
                </motion.div>        

                    <motion.div 
                    initial= {{ opacity: 0, x: 80  }}
                    animate= {{ opacity: 1, x: 0  }}
                    transition= {{ duration: 0.8, delay: 0.3  }}
                    className='relative flex justify-center'> 


                       <div className='absolute rounded-full bg-purple-600 blur-[130px] opacity-50'></div>
                       <motion.img 
                       animate= {{ y: [ 0, -15, 0 ] }}
                       transition={{ duration: 4, 
                       repeat: Infinity,
                       ease: easeInOut 
                        }}
                       src={Laptop} className='relative w-full h-full object-cover z-10 max-w-7xl drop-shadow-[0_40px_60px_rgba(124,58,237,.45)]'/> 
                  </motion.div>

              </div>
         
         <StatView /> 
           </div>
       </section>
    </>
  )
}

export default Hero



 {/* <div>
                         <p className='text-white font-medium pt-3'>Connect with me</p>
                        <div className='flex gap-5 my-2'>  
                              <BsGithub size={30} className='text-white bg-transparent border p-2 rounded-md '/>
                              <BsLinkedin size={30} className='text-white bg-transparent border p-2 rounded-md'/>
                              <BsTwitter size={30} className='text-white bg-transparent border p-2 rounded-md'/>
                              <Mail size={30} className='text-white bg-transparent border p-2 rounded-md'/> 
                        </div>
                      </div> */}

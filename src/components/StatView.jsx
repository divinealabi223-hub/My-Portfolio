import React from 'react'
import { FiBox, FiStar, FiUsers } from 'react-icons/fi'
import { TbHexagonLetterC } from 'react-icons/tb'

function StatView() {
  return (
       <>
              <div className='max-w-7xl mx-auto py-7'> 
                     <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>

                       <div className='bg-[#111827] border border-slate-900 py-2 px-5 flex gap-3 items-center rounded-md'> 
                         <FiBox size={40} className='text-violet-400 bg-purple-800 p-2 rounded-md' /> 
                         <div className='font-medium'>
                            <h2 className='text-xl font-bold'>10+</h2>
                            <p>Project Completed</p>
                         </div>
                       </div>

                            <div className='bg-[#111827] border border-slate-900 py-2 px-5 flex gap-3 items-center rounded-md'> 
                            <FiUsers size={40} className='text-green-600 bg-green-700 p-2 rounded-md' /> 
                            <div className='font-medium'>
                                   <h2 className='text-xl font-bold'>20+</h2>
                                   <p>Happy Client</p>
                            </div>
                            </div>

                             <div className='bg-[#111827] border border-slate-900 py-2 px-5 flex gap-3 items-center rounded-md'> 
                            <TbHexagonLetterC size={40} className='text-purple-400 bg-purple-800 p-2 rounded-md' /> 
                            <div className='font-medium'>
                                   <h2 className='text-xl font-bold'>2+</h2> 
                                   <p>Years of Learning</p>
                            </div>
                            </div>

                            <div className='bg-[#111827] border border-slate-900 py-2 px-5 flex gap-3 items-center rounded-md'> 
                                   <FiStar size={40} className='text-orange-400 bg-yellow-600 p-2 rounded-md' /> 
                                   <div className='font-medium'>
                                          <h2 className='text-xl font-bold'>100%</h2>
                                          <p>Committment</p>
                                   </div>
                            </div>

                     </div>
              </div>
  </>
  )
}

export default StatView

import React from 'react'
import { FiBox, FiStar, FiUsers } from 'react-icons/fi'
import { TbHexagonLetterC } from 'react-icons/tb'

function StatView() {
  return (
    <div className='max-w-7xl mx-auto py-7'>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='bg-[#111827] border border-slate-900 py-4 px-6 flex flex-col sm:flex-row items-center sm:items-start gap-3 rounded-md'>
          <FiBox size={40} className='text-violet-400 bg-purple-800 p-2 rounded-md' />
          <div className='text-center sm:text-left font-medium'>
            <h2 className='text-xl font-bold'>10+</h2>
            <p>Projects Completed</p>
          </div>
        </div>

        <div className='bg-[#111827] border border-slate-900 py-4 px-5 flex flex-col sm:flex-row items-center sm:items-start gap-3 rounded-md'>
          <FiUsers size={40} className='text-green-600 bg-green-700 p-2 rounded-md' />
          <div className='text-center sm:text-left font-medium'>
            <h2 className='text-xl font-bold'>20+</h2>
            <p>Happy Clients</p>
          </div>
        </div>

        <div className='bg-[#111827] border border-slate-900 py-4 px-5 flex flex-col sm:flex-row items-center sm:items-start gap-3 rounded-md'>
          <TbHexagonLetterC size={40} className='text-purple-400 bg-purple-800 p-2 rounded-md' />
          <div className='text-center sm:text-left font-medium'>
            <h2 className='text-xl font-bold'>2+</h2>
            <p>Years of Learning</p>
          </div>
        </div>

        <div className='bg-[#111827] border border-slate-900 py-4 px-5 flex flex-col sm:flex-row items-center sm:items-start gap-3 rounded-md'>
          <FiStar size={40} className='text-orange-400 bg-yellow-600 p-2 rounded-md' />
          <div className='text-center sm:text-left font-medium'>
            <h2 className='text-xl font-bold'>100%</h2>
            <p>Commitment</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatView

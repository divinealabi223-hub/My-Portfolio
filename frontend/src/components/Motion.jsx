import React from 'react'
import { motion } from 'framer-motion'

function Motion() {
  return (
    <div className='min-h-screen'>
      <motion.h1
      initial={{ opacity: 0, x: -100, scale: 10,  }} 
      animate={{ opacity: 1, y: 50, scale: 5, }} 
      transition={{ duration: 5, }} 
      >Welcome Back</motion.h1> 
    </div>
  )
}

export default Motion

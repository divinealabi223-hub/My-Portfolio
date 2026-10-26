import React from 'react'
import Navbar from './components/Navbar' 
// import Home from './Pages/Home'
import Hero from './components/Hero'
// import StatView from './components/StatView'
import About from './components/About'
import Skills from './components/Skills'
// import Contact from './components/Contact'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { MessageCircle } from 'lucide-react'
// import Motion from './components/Motion'

function App() {
  return (
    <>
      <Navbar /> 
      <main>
        <section id='home' className='scroll-mt-20'><Hero /></section>
        <section id='about' className='scroll-mt-20'><About /></section>
      {/* <StatView /> */}
        <section id='skills' className='scroll-mt-20'><Skills /></section>
     {/* <Contact />  */}
        <section id='contact' className='scroll-mt-20'><Contact /></section> 
        
      </main>
     <Footer />
     <a
       href="https://wa.me/2347071568407"
       target="_blank"
       rel="noreferrer"
       aria-label="Chat with me on WhatsApp"
       className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white shadow-2xl transition-transform hover:scale-110"
     >
       <MessageCircle size={30} />
       <span className="absolute -left-2 -top-2 animate-bounce rounded-full bg-green-500 px-2 py-1 text-xs text-white">
         Chat?
       </span>
     </a>
     {/* <Motion /> */}
    </>
  )
}

export default App

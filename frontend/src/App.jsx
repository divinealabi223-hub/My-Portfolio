import React from 'react'
import Navbar from './components/Navbar' 
// import Home from './Pages/Home'
import Hero from './components/Hero'
// import StatView from './components/StatView'
import About from './components/About'
import Skills from './components/Skills'
// import Contact from './components/Contact'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
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
        <section id='contact' className='scroll-mt-20'><ContactForm /></section>
      </main>
     <Footer />
     {/* <Motion /> */}
    </>
  )
}

export default App

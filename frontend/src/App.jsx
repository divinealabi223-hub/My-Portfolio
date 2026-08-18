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

function App() {
  return (
    <>
      <Navbar /> 
      <Hero /> 
      <About /> 
      {/* <StatView /> */}
      <Skills /> 
     {/* <Contact />  */}
     <ContactForm /> 
     <Footer />
    </>
  )
}

export default App

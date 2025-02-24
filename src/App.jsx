import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Myprojects from './components/Myprojects/Myprojects'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Myprojects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

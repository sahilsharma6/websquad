import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/HeroSection.jsx'
import Services from './components/Services.jsx'
import Whyus from './components/Whyus.jsx'

const App = () => {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Whyus/>
    <Services/>
    </>
  )
}

export default App
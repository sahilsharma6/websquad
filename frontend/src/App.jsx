import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SubFooter from './components/SubFooter'
import ScrollToTopButton from './components/ScrollToTopButton'

const App = () => {
  return (
    // need to implement smooth scroll <SmoothScrollComponent />
    <> 
      <Navbar />
      <Outlet />
      <Footer />
      <SubFooter />
      <ScrollToTopButton />
    </>
  )
}

export default App
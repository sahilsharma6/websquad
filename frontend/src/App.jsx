import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SubFooter from './components/SubFooter';
import AnimatedCursor from "react-animated-cursor";

// Smooth scroll package
import { Link, animateScroll as scroll } from "react-scroll";

const App = () => {
  // Implementing smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      {/* Animated Cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={15}
        color='0,0,0'
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />

      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <SubFooter />
    </>
  );
};

export default App;

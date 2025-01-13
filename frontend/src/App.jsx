import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SubFooter from './components/SubFooter';
import ScrollToTopButton from './components/ScrollToTopButton';
import AnimatedCursor from "react-animated-cursor";
import SmoothScrollComponent from './components/SmoothScrollComponent';// Import the new component

const App = () => {
  return (
    <SmoothScrollComponent>
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
      <ScrollToTopButton />
      <ScrollRestoration />
    </SmoothScrollComponent>
  );
};

export default App;
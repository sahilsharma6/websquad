import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Show/hide button based on scroll position
      setIsVisible(window.scrollY > 300);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Determine if scroll is complete
  const isScrollComplete = scrollProgress >= 100;

  return (
    <>
      {isVisible && (
        <div 
          onClick={scrollToTop}
          className={`
            fixed z-50 cursor-pointer transition-all duration-300 ease-in-out 
            ${isScrollComplete ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}
            rounded-full flex items-center justify-center
          `}
          style={{
            bottom: '20px',
            right: '20px',
            width: '50px',
            height: '50px',
            position: 'fixed'
          }}
        >
          {/* Animated Progress Border */}
          <div 
            className={`
              absolute inset-0 rounded-full 
              ${isScrollComplete ? 'border-secondary' : ''}
            `}
            style={{
              border: '3px solid',
              clipPath: `polygon(0 0, ${scrollProgress}% 0, ${scrollProgress}% 100%, 0 100%)`,
              transition: 'clip-path 0.3s ease'
            }}
          />
          
          {/* Button Content */}
          <ArrowUp 
            color={isScrollComplete ? 'currentColor' : 'currentColor'} 
            size={24} 
            className="z-10"
          />
        </div>
      )}
      
      {/* Mobile Responsiveness with Tailwind */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed {
            width: 40px !important;
            height: 40px !important;
            bottom: 10px !important;
            right: 10px !important;
          }
        }
      `}</style>
    </>
  );
};

export default ScrollToTopButton;
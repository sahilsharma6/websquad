import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SmoothScrollComponent = ({ children }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    // Prevent multiple initializations
    const content = contentRef.current;
    if (!content) return;

    // Smooth scroll setup
    const smoothScroll = () => {
      // Create a smooth scroll wrapper
      gsap.set(content, { 
        y: -window.pageYOffset 
      });

      // Smooth scrolling listener
      const handleScroll = () => {
        gsap.to(content, {
          y: -window.pageYOffset,
          duration: 0.5,
          ease: 'power2.out'
        });
      };

      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);

      // ScrollTrigger setup for smooth scrolling
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          // Optional: Add custom scroll behavior
          gsap.to(content, {
            y: -window.pageYOffset,
            duration: 0.5,
            ease: 'power2.out'
          });
        }
      });

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    };

    // Initialize smooth scroll
    const cleanup = smoothScroll();

    // Return cleanup function
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div 
      ref={contentRef} 
      style={{ 
        position: 'fixed', 
        width: '100%', 
        top: 0, 
        left: 0 
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScrollComponent;
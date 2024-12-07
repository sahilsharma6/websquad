import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Zap, Layout } from 'lucide-react';

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const Banner2 = () => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // Ensure all refs exist before animating
    if (!bannerRef.current || !textRef.current || !lineRef.current || !featuresRef.current) return;

    // Reset ScrollTrigger before creating a new animation
    ScrollTrigger.getAll().forEach(st => st.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bannerRef.current,
        start: 'top center', // Trigger when top of banner hits center of viewport
        end: 'bottom center',
        scrub: false, // Change to false for a one-time animation
        toggleActions: 'play none none reverse', // Play forward on enter, reverse on leave
      }
    });

    // Ensure we're selecting children correctly
    // const textChildren = textRef.current.children;
    // const featuresChildren = featuresRef.current.children;

    // tl.from(textChildren, {
    //   y: 50,
    //   opacity: 0,
    //   duration: 0.8,
    //   stagger: 0.2,
    //   ease: 'power3.out'
    // })
    // .from(lineRef.current, {
    //   scaleX: 0,
    //   duration: 0.8,
    //   ease: 'power3.inOut'
    // }, '-=0.4')
    // .from(featuresChildren, {
    //   y: 30,
    //   opacity: 0,
    //   duration: 0.6,
    //   stagger: 0.1,
    //   ease: 'power3.out'
    // }, '-=0.4');

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div 
      ref={bannerRef}
      className="relative min-h-[50vh] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-primary/20 z-0" />
      
      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Wrapped in a div to ensure correct GSAP child selection */}
        <div ref={textRef}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Elevate Your <span className="text-primary">Digital Presence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Crafting minimalist web solutions that deliver maximum impact
          </p>
        </div>

        <div 
          ref={lineRef}
          className="w-24 h-1 bg-primary mx-auto mb-12"
        />

        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800"
        >
          <div className="flex flex-col items-center">
            <Code className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
            <p className="text-sm text-gray-600">Efficient and maintainable solutions</p>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast Performance</h3>
            <p className="text-sm text-gray-600">Lightning-quick load times</p>
          </div>
          <div className="flex flex-col items-center">
            <Layout className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
            <p className="text-sm text-gray-600">Seamless on all devices</p>
          </div>
        </div>
      </div>

      {/* Subtle background animation */}
      {/* <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary mix-blend-multiply filter blur-xl"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px); }
        }
      `}</style> */}
    </div>
  );
};

export default Banner2;
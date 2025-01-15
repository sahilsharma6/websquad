import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const WaveBackground = ({color1, color2}) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const wave1 = svg.querySelector('#wave1');
    const wave2 = svg.querySelector('#wave2');

    if (wave1 && wave2) {
      // Animate wave1
      gsap.to(wave1, {
        x: '-70%',
        repeat: -1,
        duration: 20,
        ease: 'linear',
      });

      // Animate wave2
      gsap.to(wave2, {
        x: '-50%',
        repeat: -1,
        duration: 15,
        ease: 'linear',
      });
    }

    // Cleanup function
    return () => {
      gsap.killTweensOf(wave1);
      gsap.killTweensOf(wave2);
    };
  }, []);

  return (
    <svg 
      ref={svgRef}
      className="absolute inset-0 w-full h-full z-0"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 2880 320"
      preserveAspectRatio="xMinYMin slice"
    >
      <defs>
        <linearGradient id="bgGradient" x1="10%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
        
        <path 
          id="wave1" 
          d="M0,160 C480,240 960,80 1440,160 C1920,240 2400,80 2880,160 L2880,320 L0,320 Z" 
          fill="url(#bgGradient)"
        />
        <path 
          id="wave2" 
          d="M0,224 C480,128 960,320 1440,224 C1920,128 2400,320 2880,224 L2880,320 L0,320 Z" 
          fill="url(#bgGradient)"
        />
      </defs>
      <use href="#wave1" x="0" y="0" />
      <use href="#wave1" x="28080" y="0" />
      {/* <use href="#wave2" x="0" y="0" /> */}
      {/* <use href="#wave2" x="2880" y="0" /> */}
    </svg>
  );
};

export default WaveBackground;
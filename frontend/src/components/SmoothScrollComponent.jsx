import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScrollComponent = ({ children }) => {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.001, // Lower value makes scrolling slower and smoother
        multiplier: 0.8, // Reduce scroll speed
        direction: 'vertical',
        smartphone: {
          smooth: true,
          lerp: 0.07,
          multiplier: 0.9
        },
        tablet: {
          smooth: true,
          lerp: 0.06,
          multiplier: 0.85
        },
        // Optional: add easing for even smoother feel
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }

    // Cleanup on unmount
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScrollComponent;
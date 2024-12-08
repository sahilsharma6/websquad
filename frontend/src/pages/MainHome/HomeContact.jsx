// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { Mail, Phone, MapPin } from 'lucide-react';

// const HomeContact = () => {
//   const containerRef = useRef(null);
//   const formRef = useRef(null);
//   const infoRef = useRef(null);
//   const titleRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const form = formRef.current;
//     const info = infoRef.current;
//     const title = titleRef.current;

//     gsap.set([form, info, title], { autoAlpha: 0, y: 50 });

//     const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

//     tl.to(container, { duration: 1, autoAlpha: 1 })
//       .to(title, { duration: 0.8, autoAlpha: 1, y: 0 })
//       .to([form, info], { duration: 0.8, autoAlpha: 1, y: 0, stagger: 0.2 });

//     // Animate SVG waves
//     gsap.to('#wave1', { 
//       duration: 10, 
//       x: '-=100%', 
//       repeat: -1, 
//       ease: 'linear' 
//     });
//     gsap.to('#wave2', { 
//       duration: 15, 
//       x: '-=100%', 
//       repeat: -1, 
//       ease: 'linear' 
//     });

//     return () => {
//       tl.kill();
//     };
//   }, []);

//   const handleHover = (target) => {
//     gsap.to(target, { duration: 0.3, x: 10, color: 'rgba(11, 13, 12, 0.7)', ease: 'power2.out' });
//   };

//   const handleHoverExit = (target) => {
//     gsap.to(target, { duration: 0.3, x: 0, color: 'inherit', ease: 'power2.out' });
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-t from-primary to-primary/20">
//       {/* Animated SVG Background */}
//       <svg 
//         className="absolute inset-0 w-full h-full z-0"
//         xmlns="http://www.w3.org/2000/svg" 
//         viewBox="0 0 1440 320"
//         preserveAspectRatio="none"
//       >
//         <defs>
//           <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="rgba(168, 179, 171, 1)" />
//             <stop offset="100%" stopColor="rgba(11, 13, 12, 0.05)" />
//           </linearGradient>
          
//           {/* Wave Path Definitions */}
//           <path 
//             id="wave1" 
//             d="M0,160 C320,240 640,80 960,160 C1280,240 1440,160 1440,160 L1440,320 L0,320 Z" 
//             fill="url(#bgGradient)"
//           />
//           <path 
//             id="wave2" 
//             d="M0,224 C320,128 640,320 960,224 C1280,128 1440,224 1440,224 L1440,320 L0,320 Z" 
//             fill="url(#bgGradient)"
//           />
//         </defs>
//         <use href="#wave1" x="0" y="0" />
//         <use href="#wave2" x="0" y="0" />
//       </svg>

//       <div 
//         ref={containerRef}
//         className="relative z-10 min-h-screen bg-transparent flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8"
//       >
//         <h1 
//           ref={titleRef}
//           className="text-4xl sm:text-7xl md:text-6xl font-bold mb-8 text-center text-secondary"
//         >
//           Get in Touch
//         </h1>
        
//         <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
//           <div 
//             ref={formRef}
//             className="flex-1 bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-secondary/10"
//           >
//             <h2 className="text-2xl font-semibold mb-6 text-secondary">Send us a message</h2>
//             <form>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-sm font-medium mb-2 text-secondary">Name</label>
//                 <input 
//                   type="text" 
//                   id="name" 
//                   name="name" 
//                   className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition duration-300" 
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-sm font-medium mb-2 text-secondary">Email</label>
//                 <input 
//                   type="email" 
//                   id="email" 
//                   name="email" 
//                   className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition duration-300" 
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="message" className="block text-sm font-medium mb-2 text-secondary">Message</label>
//                 <textarea 
//                   id="message" 
//                   name="message" 
//                   rows="4" 
//                   className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition duration-300"
//                 ></textarea>
//               </div>
//               <button 
//                 type="submit" 
//                 className="w-full bg-secondary text-primary font-semibold py-3 px-4 rounded-md hover:bg-secondary/90 transition duration-300 ease-in-out"
//                 onMouseEnter={(e) => gsap.to(e.target, { scale: 1.05, duration: 0.3 })}
//                 onMouseLeave={(e) => gsap.to(e.target, { scale: 1, duration: 0.3 })}
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           <div 
//             ref={infoRef}
//             className="flex-1 bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-secondary/10"
//           >
//             <h2 className="text-2xl font-semibold mb-6 text-secondary">Contact Information</h2>
//             <div className="space-y-6">
//               <div 
//                 className="flex items-center space-x-4 text-secondary" 
//                 onMouseEnter={(e) => handleHover(e.currentTarget)}
//                 onMouseLeave={(e) => handleHoverExit(e.currentTarget)}
//               >
//                 <Mail className="w-6 h-6" />
//                 <span>contact@websquad.com</span>
//               </div>
//               <div 
//                 className="flex items-center space-x-4 text-secondary" 
//                 onMouseEnter={(e) => handleHover(e.currentTarget)}
//                 onMouseLeave={(e) => handleHoverExit(e.currentTarget)}
//               >
//                 <Phone className="w-6 h-6" />
//                 <span>+1 (123) 456-7890</span>
//               </div>
//               <div 
//                 className="flex items-center space-x-4 text-secondary" 
//                 onMouseEnter={(e) => handleHover(e.currentTarget)}
//                 onMouseLeave={(e) => handleHoverExit(e.currentTarget)}
//               >
//                 <MapPin className="w-6 h-6" />
//                 <span>123 Web Street, Digital City, 12345</span>
//               </div>
//             </div>
//             <div 
//               className="mt-8 p-4 bg-secondary/5 rounded-lg"
//               onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 })}
//               onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
//             >
//               <h3 className="text-lg font-semibold mb-2 text-secondary">Business Hours</h3>
//               <p className="text-secondary">Monday - Friday: 9am - 5pm</p>
//               <p className="text-secondary">Saturday: 10am - 2pm</p>
//               <p className="text-secondary">Sunday: Closed</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeContact;




import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin } from 'lucide-react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomeContact = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const titleRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const form = formRef.current;
    const info = infoRef.current;
    const title = titleRef.current;
    const svg = svgRef.current;

    gsap.set([form, info, title], { autoAlpha: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.to(container, { duration: 0.1, autoAlpha: 1 })
      .to(title, { duration: 0.8, autoAlpha: 1, y: 0 })
      .to([form, info], { duration: 0.8, autoAlpha: 1, y: 0, stagger: 0.2 });
  
    // Animate SVG waves
    const wave1 = svg.querySelector('#wave1');
    const wave2 = svg.querySelector('#wave2');

    gsap.to(wave1, {
      x: '-50%',
      repeat: -1,
      duration: 20,
      ease: 'linear',
    });

    gsap.to(wave2, {
      x: '-50%',
      repeat: -1,
      duration: 15,
      ease: 'linear',
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const handleHover = (target) => {
    gsap.to(target, { duration: 0.3, x: 10, color: 'rgba(11, 13, 12, 0.7)', ease: 'power2.out' });
  };

  const handleHoverExit = (target) => {
    gsap.to(target, { duration: 0.3, x: 0, color: 'inherit', ease: 'power2.out' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-t from-primary to-primary/20">
      {/* Animated SVG Background */}
      <svg 
        ref={svgRef}
        className="absolute inset-0 w-full h-full z-0"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 2880 320"
        preserveAspectRatio="xMinYMin slice"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 179, 171, 1)" />
            <stop offset="100%" stopColor="rgba(11, 13, 12, 0.05)" />
          </linearGradient>
          
          {/* Wave Path Definitions */}
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
        <use href="#wave1" x="2880" y="0" />
        <use href="#wave2" x="0" y="0" />
        <use href="#wave2" x="2880" y="0" />
      </svg>

      <div 
        ref={containerRef}
        className="relative z-10 min-h-screen bg-transparent flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-7xl md:text-6xl font-bold mb-8 text-center text-secondary"
        >
          Get in Touch
        </h1>
        
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
          <div 
            ref={formRef}
            className="flex-1 bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-secondary/10"
          >
            <h2 className="text-2xl font-semibold mb-6 text-secondary">Send us a message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-secondary">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition duration-300" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-secondary">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition duration-300" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-secondary">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition duration-300"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-secondary text-primary font-semibold py-3 px-4 rounded-md hover:bg-secondary/90 transition duration-300 ease-in-out"
                onMouseEnter={(e) => gsap.to(e.target, { scale: 1.05, duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.target, { scale: 1, duration: 0.3 })}
              >
                Send Message
              </button>
            </form>
          </div>

          <div 
            ref={infoRef}
            className="flex-1 bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-secondary/10"
          >
            <h2 className="text-2xl font-semibold mb-6 text-secondary">Contact Information</h2>
            <div className="space-y-6">
              <div 
                className="flex items-center space-x-4 text-secondary" 
                onMouseEnter={(e) => handleHover(e.currentTarget)}
                onMouseLeave={(e) => handleHoverExit(e.currentTarget)}
              >
                <Mail className="w-6 h-6" />
                <span>contact@websquad.com</span>
              </div>
              <div 
                className="flex items-center space-x-4 text-secondary" 
                onMouseEnter={(e) => handleHover(e.currentTarget)}
                onMouseLeave={(e) => handleHoverExit(e.currentTarget)}
              >
                <Phone className="w-6 h-6" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div 
                className="flex items-center space-x-4 text-secondary" 
                onMouseEnter={(e) => handleHover(e.currentTarget)}
                onMouseLeave={(e) => handleHoverExit(e.currentTarget)}
              >
                <MapPin className="w-6 h-6" />
                <span>123 Web Street, Digital City, 12345</span>
              </div>
            </div>
            <div 
              className="mt-8 p-4 bg-secondary/5 rounded-lg"
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
            >
              <h3 className="text-lg font-semibold mb-2 text-secondary">Business Hours</h3>
              <p className="text-secondary">Monday - Friday: 9am - 5pm</p>
              <p className="text-secondary">Saturday: 10am - 2pm</p>
              <p className="text-secondary">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;


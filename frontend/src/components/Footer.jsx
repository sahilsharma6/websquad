import React, { useEffect, useRef, useState } from 'react';
import { MoveDown, Undo } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const linksRef = useRef(null);
  const moveDownRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const content = contentRef.current;
    const title = titleRef.current;
    const email = emailRef.current;
    const links = linksRef.current;
    const moveDown = moveDownRef.current;

    gsap.set([content, title, email, links], { opacity: 0, y: 100 });

    const tl = gsap.timeline({ paused: true });

    tl.to(content, { opacity: 1, y: 0, duration: 0.9 })
      .to(title, { opacity: 1, y: 0, duration: 0.9 }, '-=1')
      .to(email, { opacity: 1, y: 0, duration: 0.9 }, '-=1')
      .to(links, { opacity: 1, y: 0, duration: 0.9 }, '-=1');

    gsap.to(moveDown, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: 'power1.inOut'
    });

    ScrollTrigger.create({
      trigger: footer,
      start: 'top 80%',
      onEnter: () => {
        setIsVisible(true);
        tl.play();
      },
      onLeaveBack: () => {
        setIsVisible(false);
        tl.reverse();
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={footerRef}
      className='sm:min-h-[80vh] bg-secondary text-white flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden'
    >
      <div ref={contentRef} className='text-center w-full mt-8 sm:mt-12 md:mt-16 lg:mt-24'>
        <div 
          className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'
        >
          🖐️ hello !
        </div>
        <div ref={titleRef} className='relative hidden sm:block'>
          <p 
            className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight'
          >
            Let's Talk
          </p>
          <p 
            className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight'
          >
            with us
          </p>
        </div>
        <div className='relative block sm:hidden'>
          <p className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight'>Let's Talk With us</p>
        </div>
      </div>

      <div 
        className='sm:hidden absolute top-2/3 left-10 transform rotate-225 -translate-x-1/2 -translate-y-1/2 border border-transparent hover:bg-primary w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center group'
      >
        <Undo className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-400 group-hover:text-secondary transition duration-200' />
      </div>

      <div 
        ref={moveDownRef}
        className='mt-10 hidden sm:block'
      >
        <MoveDown />
      </div>
      
      <div ref={emailRef} className='w-full flex flex-col items-center space-y-6 mt-8 sm:mt-12 md:mt-16 lg:mt-24'>
        <a 
          href="mailto:websquad@example.com" 
          className='text-xl sm:text-2xl md:text-3xl font-bold underline italic hover:text-gray-300 transition duration-200'
        >
          websquad@example.com
        </a>
        
        <ul ref={linksRef} className='text-sm sm:text-base md:text-lg uppercase flex flex-wrap justify-center space-x-2 sm:space-x-4'>
          <li>
            <a href="#contact" className='font-bold text-gray-600 hover:text-white transition duration-200'>
              Contact us
            </a>
          </li>
          <li className='border-r border-gray-600 hidden sm:block'></li>
          <li>
            <a href="#careers" className='font-bold text-gray-600 hover:text-white transition duration-200'>
              Careers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;


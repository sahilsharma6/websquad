import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin } from 'lucide-react';
import WaveBackground from '../../components/customSVGs/WaveBackground'; // Ensure this is the path to your WaveBackground component

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomeContact = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const form = formRef.current;
    const info = infoRef.current;
    const title = titleRef.current;

    // Initial setup: hide elements
    gsap.set([form, info, title], { autoAlpha: 0, y: 50 });

    // Create scroll-triggered animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate elements into view
    tl.to(container, { duration: 0.1, autoAlpha: 1 })
      .to(title, { duration: 0.8, autoAlpha: 1, y: 0 })
      .to([form, info], { duration: 0.8, autoAlpha: 1, y: 0, stagger: 0.2 });

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  // Hover animation for contact info items
  const handleHover = (target) => {
    gsap.to(target, { 
      duration: 0.3, 
      x: 10, 
      color: 'rgba(11, 13, 12, 0.7)', 
      ease: 'power2.out' 
    });
  };

  const handleHoverExit = (target) => {
    gsap.to(target, { 
      duration: 0.3, 
      x: 0, 
      color: 'inherit', 
      ease: 'power2.out' 
    });
  };

  // Form submission handler (placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic
    console.log('Form submitted');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-t from-primary to-primary/20">
      {/* Animated Wave Background */}
      c

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
          {/* Contact Form */}
          <div 
            ref={formRef}
            className="flex-1 bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-secondary/10"
          >
            <h2 className="text-2xl font-semibold mb-6 text-secondary">Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-secondary">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition duration-300" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-secondary">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition duration-300" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-secondary">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required
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

          {/* Contact Information */}
          <div 
            ref={infoRef}
            className="flex-1 bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-secondary/10"
          >
            <h2 className="text-2xl font-semibold mb-6 text-secondary">Contact Information</h2>
            <div className="space-y-6">
              <div 
                className="flex items-center space-x-4 text-secondary cursor-pointer" 
                onMouseEnter={(e) => handleHover(e.currentTarget)}
                onMouseLeave={(e) => handleHoverExit(e.currentTarget)}
              >
                <Mail className="w-6 h-6" />
                <span>contact@websquad.com</span>
              </div>
              <div 
                className="flex items-center space-x-4 text-secondary cursor-pointer" 
                onMouseEnter={(e) => handleHover(e.currentTarget)}
                onMouseLeave={(e) => handleHoverExit(e.currentTarget)}
              >
                <Phone className="w-6 h-6" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div 
                className="flex items-center space-x-4 text-secondary cursor-pointer" 
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
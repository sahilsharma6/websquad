import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Twitter, Instagram, ArrowRight, ArrowLeft, User, Code, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Team members data
const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years of tech experience driving innovation and strategic growth.",
    fullDescription: "John has been at the forefront of technological innovation, leading multiple successful startups and transforming complex challenges into breakthrough solutions. His expertise spans strategic planning, product development, and team leadership.",
    image: "https://i.pinimg.com/originals/2e/dd/02/2edd02160b51797f7adb807a79d96d36.jpg",
    background: "Tech Entrepreneur",
    achievements: [
      "Founded 3 successful tech companies",
      "Raised over $50M in venture capital",
      "Speaker at international tech conferences"
    ],
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    },
    skills: ["Strategy", "Leadership", "Innovation"]
  },
  {
    name: "Jane Smith",
    role: "CTO",
    bio: "Technical genius driving our product innovation",
    fullDescription: "Jane is a cutting-edge technologist with deep expertise in software architecture and emerging technologies. She leads our technical vision, ensuring we're always at the bleeding edge of innovation.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/002/406/611/small_2x/business-man-cartoon-character-vector.jpg",
    background: "Software Architect",
    achievements: [
      "Developed award-winning AI algorithms",
      "Led engineering teams at top tech companies",
      "Patent holder in machine learning"
    ],
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#"
    },
    skills: ["Software Architecture", "Machine Learning", "Cloud"]
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    bio: "Code wizard with a passion for solving complex problems",
    fullDescription: "Mike is our technical maestro, transforming complex coding challenges into elegant solutions. With expertise across multiple programming paradigms, he drives our technical excellence.",
    image: "https://thumbs.dreamstime.com/b/happy-man-points-out-something-presentation-showing-element-advertising-goods-vector-illustration-cartoon-style-119680930.jpg",
    background: "Full Stack Developer",
    achievements: [
      "Contributed to open-source projects",
      "Built scalable microservices architectures",
      "Mentor for junior developers"
    ],
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    },
    skills: ["Full Stack", "React", "Node.js"]
  }
];

// Animated Wave Background Component
const AnimatedWaveBackground = () => {
  // const waveRef = useRef(null);

  // useEffect(() => {
  //   const waves = waveRef.current.querySelectorAll('path');
    
  //   const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
  //   tl.to(waves, {
  //     attr: {
  //       d: (index) => {
  //         const morphPaths = [
  //           "M0 200 Q250 250 500 200 T1000 200",
  //           "M0 200 Q250 300 500 200 T1000 200",
  //           "M0 200 Q250 150 500 200 T1000 200"
  //         ];
  //         return morphPaths[index % morphPaths.length];
  //       }
  //     },
  //     scale: 1.05,
  //     opacity: 0.7,
  //     duration: 4,
  //     ease: "power1.inOut"
  //   });

  //   return () => {
  //     tl.kill(); // Clean up the animation
  //   };
  // }, []);

  return (
    <svg 
      // ref={waveRef}
      className="absolute inset-0 w-full h-full z-0" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1000 400"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(168, 179, 171, 1)" />
          <stop offset="100%" stopColor="rgba(11, 13, 12, 1)" />
        </linearGradient>
      </defs>
      <path 
        d="M0 200 Q250 450 400 200 T1000 200" 
        fill="url(#waveGradient)"
      />
    </svg>
  );
};

const HomeTeams = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef(null);
  const teamMembersRef = useRef([]);

  // Scroll-triggered animations
  useEffect(() => {
    const section = sectionRef.current;
    const members = teamMembersRef.current;

    // Section reveal animation
    const sectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    sectionTimeline
      .fromTo(section, 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.9 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out"
        }
      )
      .fromTo('.team-title', 
        { 
          opacity: 0, 
          y: 50 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "power3.out"
        },
        "-=1"
      );

    // Individual team member reveal
    members.forEach((member, index) => {
      gsap.fromTo(member, 
        { 
          opacity: 0, 
          x: index % 2 === 0 ? -100 : 100,
          scale: 0.8 
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: member,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      sectionTimeline.kill();
    };
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const cardVariants = {
    initial: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    })
  };

  const detailsVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 200 
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <div 
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen flex items-center justify-center p-4 md:p-8 bg-primary/10 pt-10 md:pt-30"
    >
      {/* Animated Wave Background */}
      <AnimatedWaveBackground />
      
      <div className="container mx-auto relative z-10">
        {/* Section Title with Reveal Animation */}
        <div className="text-center mb-16">
          <h1 className="team-title text-5xl md:text-6xl font-bold text-primary/90 mb-4">
            Meet Our Innovators
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A team of passionate technologists transforming ideas into groundbreaking solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Team Member Image Section */}
          <motion.div 
            ref={(el) => teamMembersRef.current[0] = el}
            className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center"
          >
            <div className="absolute z-20 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <motion.button 
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-primary text-white p-3 rounded-full shadow-lg"
              >
                <ArrowLeft />
              </motion.button>
              <motion.button 
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-primary text-white p-3 rounded-full shadow-lg"
              >
                <ArrowRight />
              </motion.button>
            </div>

            <AnimatePresence initial={false} custom={direction}>
              <motion.div 
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute w-[280px] md:w-[300px] h-[380px] md:h-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <img 
                  src={currentMember.image} 
                  alt={currentMember.name} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Team Member Details Section */}
          <motion.div 
            ref={(el) => teamMembersRef.current[1] = el}
            className="bg-white/80 p-8 rounded-2xl backdrop-blur-sm shadow-lg group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={detailsVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h2 className="text-4xl font-bold mb-4 text-primary group-hover:text-secondary/70 transition duration-200">
                  {currentMember.name}
                </h2>
                <p className="text-xl mb-6 text-gray-700">
                  {currentMember.role}
                </p>

                <div className="space-y-6">
                  {/* Background Section */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 flex items-center">
                      <User className="mr-3 text-primary" /> Background
                    </h3>
                    <p className="text-gray-600">{currentMember.background}</p>
                  </div>

                  {/* Skills Section */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 flex items-center">
                      <Code className="mr-3 text-primary" /> Skills
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {currentMember.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="bg-primary text-secondary px-4 py-2 rounded-full text-sm group-hover:bg-secondary group-hover:text-primary transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements Section */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 flex items-center">
                      <Award className="mr-3 text-primary" /> Achievements
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {currentMember.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 flex space-x-4">
                    {Object.entries(currentMember.socials)
                      .filter(([_, link]) => link)
                      .map(([platform, link]) => {
                        const SocialIcon = {
                          linkedin: Linkedin,
                          github: Github,
                          twitter: Twitter,
                          instagram: Instagram
                        }[platform];

                        return (
                          <a 
                            key={platform}
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-primary transition-colors"
                          >
                            <SocialIcon size={24} />
                          </a>
                        );
                      })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeTeams;
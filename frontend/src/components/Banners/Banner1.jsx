import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Globe } from 'lucide-react';

const Banner1 = () => {
  // Variants for consistent animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      className="relative min-h-[60vh] bg-black bg-opacity-90 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/path/to/your/texture-or-pattern.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-primary opacity-70"></div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight"
        >
          Welcome to <span className="text-primary">WebSquad</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8"
        >
          Crafting Digital Experiences That Inspire
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          className="flex justify-center space-x-8 sm:space-x-12 lg:space-x-16"
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <Code className="w-12 h-12 sm:w-16 sm:h-16 text-primary mb-2" />
            <span className="text-white text-sm sm:text-base">Clean Code</span>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-primary mb-2" />
            <span className="text-white text-sm sm:text-base">Fast Performance</span>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-primary mb-2" />
            <span className="text-white text-sm sm:text-base">Global Reach</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner1;
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const leftCircleY = useTransform(scrollYProgress, [0, 0.2], [150, -150]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-10">
        <motion.svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1440 600"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          <motion.path
            d="M0 0 
               Q720 300, 1440 0 
               L1440 600 
               Q720 300, 0 600 Z"
            fill="url(#gradientBackground)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="gradientBackground" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6B46C1" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#3182CE" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6  text-center"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold"
            >
              WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-500">SKILLED IN</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mt-3"
            >
              WEB DESIGN
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-3"
            >
              AND <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800">DEVELOPMENT</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We are a full-service digital agency that transforms your vision into stunning digital experiences, blending creativity with cutting-edge technology.
          </motion.p>

          <div className="flex space-x-4 items-center text-center object-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-600 text-gray-600 px-6 py-3 rounded-full hover:bg-purple-50 transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Visual Section */}
        <div className="relative flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-md aspect-square"
          >
            {/* Left Semicircle with Image */}
            <motion.div
              style={{ y: leftCircleY }}
              className="absolute top-0 left-0 w-1/2 h-full bg-primary rounded-l-full overflow-hidden shadow-2xl z-10"
            >
              <img
                src="/api/placeholder/400/400"
                alt="Creative Design"
                className="w-full h-full object-cover rounded-l-full"
              />
            </motion.div>

            {/* Right Semicircle */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-400 rounded-r-full shadow-xl"></div>

            {/* Decorative Circles */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-12 -right-12 w-24 h-24 bg-green-100 rounded-full opacity-50"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut"
              }}
              className="absolute -bottom-12 -left-12 w-32 h-32 bg-yellow-100 rounded-full opacity-50"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [20, 0, 20]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        {/* <div className="w-16 h-16 bg-white/30 backdrop-blur-lg rounded-full shadow-xl flex items-center justify-center">
          <ChevronDown className="w-8 h-8 text-purple-600" />
        </div> */}
      </motion.div>
    </div>
  );
};

export default Hero;
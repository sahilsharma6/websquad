import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Star, Target, Rocket } from "lucide-react";

const HomeAbout = ({ onScrollNext }) => {
  // Stagger animation for list items
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-100 to-primary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.8, 
          type: "spring",
          bounce: 0.4
        }}
        className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-8 p-8"
      >
        {/* Left Side - Visual Content */}
        <motion.div 
          className="relative flex items-center justify-center"
          initial={{ rotate: -5 }}
          animate={{ 
            rotate: [0, 5, -5, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl opacity-20 blur-2xl"></div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.05, 1], 
              opacity: 1 
            }}
            transition={{
              duration: 1,
              type: "spring",
              bounce: 0.5
            }}
            className="relative z-10 w-full max-w-sm aspect-square bg-white rounded-3xl shadow-2xl flex items-center justify-center"
          >
            <div className="w-64 h-64 bg-gradient-to-br from-gray-400 to-gray-500 rounded-3xl p-6 flex flex-col items-center justify-center text-white text-center">
              <Target className="w-16 h-16 mb-4 text-white" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-sm opacity-80">
                Transforming ideas into innovative solutions
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-600"
          >
            Why Choose Us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We blend creativity, technology, and passion to deliver extraordinary solutions that transform your vision into reality.
          </motion.p>

          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {[
              { 
                icon: Star, 
                text: "Innovative Design Solutions" 
              },
              { 
                icon: Rocket, 
                text: "Cutting-Edge Technology" 
              },
              { 
                icon: Target, 
                text: "Precision-Driven Approach" 
              }
            ].map((item, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-4 bg-blue-50 p-4 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <item.icon 
                  className="w-8 h-8 text-black" 
                  strokeWidth={2} 
                />
                <span className="text-lg font-medium text-gray-800">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [20, 0, 20],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        onClick={onScrollNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* <div className="w-20 h-20 bg-white/30 backdrop-blur-lg rounded-full shadow-xl flex items-center justify-center cursor-pointer">
          <ChevronDown 
            className="w-10 h-10 text-blue-600" 
            strokeWidth={3} 
          />
        </div> */}
      </motion.div>
    </div>
  );
};

export default HomeAbout;
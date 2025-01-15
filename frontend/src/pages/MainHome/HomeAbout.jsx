import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Zap, Target, Rocket, Users } from 'lucide-react';

const HomeAbout = ({ onScrollNext }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-t from-primary/90 via-primary to-secondary flex items-center justify-center p-8 overflow-hidden">
      {/* Background animated shapes */}
      {/* <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70"
            style={{
              background: `radial-gradient(circle, ${index % 2 === 0 ? '#ff9999' : '#99ccff'} 0%, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative z-10 w-full max-w-6xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden p-12 border border-white border-opacity-20"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Visual Content */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="w-full aspect-square bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center p-1 shadow-lg">
              <div className="w-full h-full bg-white rounded-full p-8 flex flex-col items-center justify-center text-center">
                <Target className="w-24 h-24 mb-6 text-secondary" strokeWidth={1.5} />
                <h3 className="text-3xl font-bold mb-3 text-secondary">Our Vision</h3>
                <p className="text-lg text-gray-600">
                  Transforming ideas into innovative solutions that shape the future
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl font-extrabold text-white"
            >
              Why Choose Us?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-white leading-relaxed"
            >
              We blend creativity, cutting-edge technology, and unwavering passion to deliver extraordinary solutions that transform your vision into tangible reality.
            </motion.p>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {[
                { icon: Zap, text: "Innovative Design Solutions", color: "from-primary to-secondary" },
                { icon: Rocket, text: "Cutting-Edge Technology", color: "from-primary to-secondary" },
                { icon: Users, text: "Client-Centric Approach", color: "from-primary to-secondary" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center space-x-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-4 rounded-2xl group transition-all duration-300 hover:bg-opacity-30`}
                >
                  <div className={`bg-gradient-to-r ${item.color} p-3 rounded-xl group-hover:scale-110 transition-all duration-300`}>
                    <item.icon 
                      className="w-8 h-8 text-white" 
                      strokeWidth={2} 
                    />
                  </div>
                  <span className="text-xl font-semibold text-white">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [20, 0, 20],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={onScrollNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full shadow-xl flex items-center justify-center cursor-pointer">
          <ChevronDown 
            className="w-8 h-8 text-white" 
            strokeWidth={3} 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeAbout;


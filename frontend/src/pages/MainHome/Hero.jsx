import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles, Globe, Code } from "lucide-react";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative min-h-screen bg-secondary flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            background: [
              "radial-gradient(circle at 0% 0%, #4f46e5 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #4f46e5 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, #4f46e5 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, #4f46e5 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, #4f46e5 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{ 
                y: [null, -20, 20],
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block"
          >
            <motion.span
              className="absolute -inset-1 bg-gradient-to-r from-primary to-navlinks blur opacity-30"
              // animate={{ opacity: [0.3, 0.6, 0.3] }}
              // transition={{ duration: 2, repeat: Infinity }}
            />
            <h2 className="relative text-lg font-medium text-primary">
              Welcome to Web Squad.
            </h2>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              We Create
              <span className="block mt-2 bg-gradient-to-r from-primary to-navlinks bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
            >
              Transform your digital presence with cutting-edge web solutions that combine 
              stunning design with powerful functionality.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-navlinks rounded-full overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                style={{ opacity: 0.2 }}
              />
              <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primfrom-primary/30 text-primary rounded-full hover:bg-primfrom-primary/10 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Visual Section */}
        <motion.div
          style={{ y, opacity }}
          className="relative hidden lg:block"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-[70%] aspect-square"
          >
            {/* Main Circle */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-navlinks"
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Orbiting Elements */}
            {/* {[Sparkles, Globe, Code].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 2
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${index * 120}deg) translateX(150px) rotate(-${index * 120}deg)`
                }}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
            ))} */}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaArrowRight } from "react-icons/fa6";

const services = [
  {
    title: "Graphic Design",
    description: "Transform your brand with visually stunning and strategic design solutions that captivate and communicate.",
    icon: "🎨",
    color: "from-gray-700 to-gray-900"
  },
  {
    title: "Digital Products",
    description: "Innovative digital experiences that blend cutting-edge technology with intuitive user interfaces.",
    icon: "✨",
    color: "from-gray-600 to-gray-800"
  },
  {
    title: "Social Marketing",
    description: "Amplify your brand's voice and connect with your audience through data-driven social media strategies.",
    icon: "🧑‍🤝‍🧑",
    color: "from-gray-500 to-gray-700"
  },
  {
    title: "Brand Strategy",
    description: "Craft a compelling brand narrative that resonates with your target audience and drives business growth.",
    icon: "🏛️",
    color: "from-gray-600 to-gray-800"
  },
  {
    title: "Product Development",
    description: "Turn innovative ideas into scalable digital solutions with our comprehensive product development approach.",
    icon: "📈",
    color: "from-gray-500 to-gray-700"
  },
  {
    title: "Consulting",
    description: "Strategic insights and expert guidance to navigate complex business challenges and unlock potential.",
    icon: "🔵",
    color: "from-gray-600 to-gray-900"
  },
];

const ServiceCard = ({ title, description, icon, color, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const yValue = index % 2 === 0 ? -50 : 50;

  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: yValue, opacity: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: index * 0.1
      }}
      className="flex justify-center"
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        className="relative w-full max-w-sm bg-gray-800 shadow-2xl rounded-2xl overflow-hidden group"
      >
        {/* Gradient Background */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-all duration-300`}
        />

        <div className="p-6 relative z-10">
          <motion.div
            animate={{ 
              rotate: isHovered ? [0, 10, -10, 0] : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
            className="text-6xl mb-4 text-center text-gray-300"
          >
            {icon}
          </motion.div>

          <h3 className="text-2xl font-bold mb-3 text-gray-200 text-center">
            {title}
          </h3>

          <p className="text-gray-400 mb-6 text-center min-h-[100px] line-clamp-4">
            {description}
          </p>

          {/* Updated Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 rounded-lg font-semibold 
              text-gray-800 bg-white 
              border border-gray-300 
              flex items-center justify-center 
              space-x-2 
              shadow-lg hover:shadow-xl 
              transition-all duration-300`}
          >
            <span>Learn More</span>
            <FaArrowRight className="ml-2 text-gray-800" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};


const HomeServices = () => {
  return (
    <div className="bg-gray-900 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto text-center mb-12"
      >
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-400 mb-4">
          Our Services
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Empowering businesses through innovative solutions, strategic insights, and transformative digital experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeServices;

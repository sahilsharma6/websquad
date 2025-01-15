import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Smartphone, Users, Building, TrendingUp, Briefcase } from 'lucide-react';

const services = [
  {
    title: "Graphic Design",
    description: "Transform your brand with visually stunning and strategic design solutions that captivate and communicate.",
    icon: Palette,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Digital Products",
    description: "Innovative digital experiences that blend cutting-edge technology with intuitive user interfaces.",
    icon: Smartphone,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Social Marketing",
    description: "Amplify your brand's voice and connect with your audience through data-driven social media strategies.",
    icon: Users,
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Brand Strategy",
    description: "Craft a compelling brand narrative that resonates with your target audience and drives business growth.",
    icon: Building,
    color: "from-yellow-500 to-amber-500"
  },
  {
    title: "Product Development",
    description: "Turn innovative ideas into scalable digital solutions with our comprehensive product development approach.",
    icon: TrendingUp,
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "Consulting",
    description: "Strategic insights and expert guidance to navigate complex business challenges and unlock potential.",
    icon: Briefcase,
    color: "from-cyan-500 to-sky-500"
  },
];

const ServiceCard = ({ title, description, icon: Icon, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group perspective"
    >
      <motion.div
        whileHover={{ rotateY: 10, rotateX: -10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative overflow-hidden rounded-2xl border border-secondary shadow-lg transition-all duration-300 group-hover:shadow-2xl`}
      >
        <div className={`absolute inset-0 ${color} opacity-80`} />
        <div className="relative p-6 z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
            className={`mb-6 w-16 h-16 rounded-full bg-gradient-to-r  flex items-center justify-center`}
          >
            <Icon size={32} className="text-gray-800" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-3 text-navlinks">
            {title}
          </h3>
          <p className="text-secondary/60 mb-6 line-clamp-3">
            {description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-navlinks font-semibold group"
          >
            <span className="border-b-2 border-transparent group-hover:border-white transition-all duration-300">Learn More</span>
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/30 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

const HomeServices = () => {
  return (
    <div className="bg-gradient-to-b from-primary/90 to-primary/40 min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background animated shapes */}
      {/* {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          style={{
            background: `radial-gradient(circle, ${index % 2 === 0 ? 'rgba(236, 72, 153, 0.3)' : 'rgba(59, 130, 246, 0.3)'} 0%, transparent 70%)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 600 + 200}px`,
            height: `${Math.random() * 600 + 200}px`,
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
      ))} */}

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-6 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses through innovative solutions, strategic insights, and transformative digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;


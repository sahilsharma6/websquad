import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronRight, Globe, Zap, Users } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description: "Complete overhaul of an online store, boosting conversions by 35%",
    icon: Globe,
  },
  {
    id: 2,
    title: "Tech Startup Landing Page",
    description: "Modern, responsive design that increased user engagement by 50%",
    icon: Zap,
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Intuitive interface for managing multiple social accounts",
    icon: Users,
  },
]

const HomePortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white text-black"
    >
      {/* Portfolio Showcase */}
      <section className="container mx-auto px-6 py-16">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Portfolio
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover how we've transformed digital landscapes for businesses across industries.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <project.icon className="w-12 h-12 text-primary mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <motion.a 
                href="#" 
                className="inline-flex items-center text-primary hover:underline"
                whileHover={{ x: 5 }}
              >
                View Project <ChevronRight className="ml-1 w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="text-center mt-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a 
            href="#" 
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="bg-secondary text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Ready to elevate your online presence?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's create something extraordinary together.
          </motion.p>
          <motion.a 
            href="#" 
            className="bg-white text-secondary px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default HomePortfolio


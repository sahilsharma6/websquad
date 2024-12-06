import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  }

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center">
        <motion.img 
          src="https://crowdytheme.com/wp/arolax/web-design-agencey/wp-content/uploads/sites/15/2024/06/binox_404Page.webp"
          alt="404 Error - Cute monster holding a sorry sign"
          className="w-64 md:w-80 mx-auto mb-8"
          variants={itemVariants}
        />
        
        <motion.h2 
          className="text-3xl md:text-5xl font-semibold mt-8 mb-4 text-gray-900"
          variants={itemVariants}
        >
          Oops, looks like the page is lost.
        </motion.h2>
        
        <motion.p 
          className="text-gray-700 text-lg mb-12 max-w-md mx-auto"
          variants={itemVariants}
        >
          This is not a fault, just an accident that was not intentional.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/"
            className="inline-flex items-center sm:h-56 sm:w-56 h-48 w-48 gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
          > 
            <div className='flex items-center flex-col sm:flex-row justify-center w-full sm:gap-3'>
              <span className="font-medium sm:w-28">BACK TO HOME</span>
              <ArrowRight className="w-6 h-6 transform -rotate-45" />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default NotFound


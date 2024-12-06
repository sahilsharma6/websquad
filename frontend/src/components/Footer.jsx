import React from 'react'
import { MoveDown, Undo } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <motion.div 
      className='sm:min-h-[80vh] bg-secondary text-white flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className='text-center w-full mt-8 sm:mt-12 md:mt-16 lg:mt-24' variants={itemVariants}>
        <motion.div 
          className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'
          whileHover={{ scale: 1.05 }}
        >
          🖐️ hello !
        </motion.div>
        <div className='relative hidden sm:block'>
          <motion.p 
            className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight'
            variants={itemVariants}
          >
            Let's Talk
          </motion.p>
          <motion.p 
            className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight'
            variants={itemVariants}
          >
            with us
          </motion.p>
        </div>
        <motion.div className='relative block sm:hidden' variants={itemVariants}>
          <p className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight'>Let's Talk With us</p>
        </motion.div>
      </motion.div>

      <motion.div 
        className='sm:hidden absolute top-2/3 left-16 transform rotate-225 -translate-x-1/2 -translate-y-1/2 border border-transparent hover:bg-primary w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center group'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Undo className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gray-400 group-hover:text-secondary transition duration-200' />
      </motion.div>

      <motion.div 
        className='mt-10 hidden sm:block'
        variants={itemVariants}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <MoveDown />
      </motion.div>
      
      <motion.div className='w-full flex flex-col items-center space-y-6 mt-8 sm:mt-12 md:mt-16 lg:mt-24' variants={itemVariants}>
        <motion.a 
          href="mailto:websquad@example.com" 
          className='text-xl sm:text-2xl md:text-3xl font-bold underline italic hover:text-gray-300 transition duration-200'
          whileHover={{ scale: 1.05 }}
        >
          websquad@example.com
        </motion.a>
        
        <motion.ul className='text-sm sm:text-base md:text-lg uppercase flex flex-wrap justify-center space-x-2 sm:space-x-4' variants={itemVariants}>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#contact" className='font-bold text-gray-600 hover:text-white transition duration-200'>
              Contact us
            </a>
          </motion.li>
          <li className='border-r border-gray-600 hidden sm:block'></li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#careers" className='font-bold text-gray-600 hover:text-white transition duration-200'>
              Careers
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  )
}

export default Footer


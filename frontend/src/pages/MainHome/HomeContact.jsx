// import React from 'react'
// import { motion } from 'framer-motion'
// import { Mail, Phone, MapPin } from 'lucide-react'

// const HomeContact = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 100 }
//     }
//   }

//   return (
//     <motion.div 
//       className="min-h-screen bg-primary text-secondary flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.h1 
//         className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center"
//         variants={itemVariants}
//       >
//         Get in Touch
//       </motion.h1>
      
//       <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
//         <motion.div 
//           className="flex-1 bg-secondary/10 backdrop-blur-sm p-8 rounded-lg shadow-lg"
//           variants={itemVariants}
//         >
//           <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
//           <form>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
//               <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
//               <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
//               <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50"></textarea>
//             </div>
//             <motion.button 
//               type="submit" 
//               className="w-full bg-secondary text-primary font-semibold py-2 px-4 rounded-md hover:bg-secondary/90 transition duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Send Message
//             </motion.button>
//           </form>
//         </motion.div>

//         <motion.div 
//           className="flex-1 bg-secondary/10 backdrop-blur-sm p-8 rounded-lg shadow-lg"
//           variants={itemVariants}
//         >
//           <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
//           <div className="space-y-6">
//             <motion.div className="flex items-center space-x-4" whileHover={{ x: 10 }}>
//               <Mail className="w-6 h-6" />
//               <span>contact@websquad.com</span>
//             </motion.div>
//             <motion.div className="flex items-center space-x-4" whileHover={{ x: 10 }}>
//               <Phone className="w-6 h-6" />
//               <span>+1 (123) 456-7890</span>
//             </motion.div>
//             <motion.div className="flex items-center space-x-4" whileHover={{ x: 10 }}>
//               <MapPin className="w-6 h-6" />
//               <span>123 Web Street, Digital City, 12345</span>
//             </motion.div>
//           </div>
//           <motion.div 
//             className="mt-8 p-4 bg-secondary/5 rounded-lg"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
//             <p>Monday - Friday: 9am - 5pm</p>
//             <p>Saturday: 10am - 2pm</p>
//             <p>Sunday: Closed</p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   )
// }

// export default HomeContact


import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const HomeContact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-primary">
      {/* Animated SVG Background */}
      <svg 
        className="absolute inset-0 w-full h-full z-0"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 179, 171, 1)" />
            <stop offset="100%" stopColor="rgba(11, 13, 12, 0.05)" />
          </linearGradient>
          
          {/* Wave Path Definitions */}
          <path 
            id="wave1" 
            d="M0,160 C320,240 640,80 960,160 C1280,240 1440,160 1440,160 L1440,320 L0,320 Z" 
            fill="url(#bgGradient)"
          />
          <path 
            id="wave2" 
            d="M0,224 C320,128 640,320 960,224 C1280,128 1440,224 1440,224 L1440,320 L0,320 Z" 
            fill="url(#bgGradient)"
          />
        </defs>
        
        {/* Animated Waves */}
        {/* <motion.use 
          href="#wave1" 
          x="0" 
          y="0" 
          animate={{
            x: [-50, 50],
            transition: { 
              duration: 10, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }
          }}
        />
        <motion.use 
          href="#wave2" 
          x="0" 
          y="0" 
          animate={{
            x: [50, -50],
            transition: { 
              duration: 12, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }
          }}
        /> */}
        <use href="#wave1" x="0" y="0" />
        <use href="#wave2" x="0" y="0" />
      </svg>

      <motion.div 
        className="relative z-10 min-h-screen bg-transparent flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl sm:text-7xl md:text-6xl font-bold mb-8 text-center text-secondary"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h1>
        
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
          <motion.div 
            className="flex-1 bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-secondary/10"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-6 text-secondary">Send us a message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-secondary">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition duration-300" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-secondary">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition duration-300" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-secondary">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="w-full px-3 py-2 bg-secondary/5 border border-secondary/20 rounded-md text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50 transition duration-300"
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="w-full bg-secondary text-primary font-semibold py-3 px-4 rounded-md hover:bg-secondary/90 transition duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            className="flex-1 bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-secondary/10"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-6 text-secondary">Contact Information</h2>
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4 text-secondary" 
                whileHover={{ x: 10, color: 'rgba(11, 13, 12, 0.7)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Mail className="w-6 h-6" />
                <span>contact@websquad.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4 text-secondary" 
                whileHover={{ x: 10, color: 'rgba(11, 13, 12, 0.7)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Phone className="w-6 h-6" />
                <span>+1 (123) 456-7890</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4 text-secondary" 
                whileHover={{ x: 10, color: 'rgba(11, 13, 12, 0.7)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <MapPin className="w-6 h-6" />
                <span>123 Web Street, Digital City, 12345</span>
              </motion.div>
            </div>
            <motion.div 
              className="mt-8 p-4 bg-secondary/5 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-secondary">Business Hours</h3>
              <p className="text-secondary">Monday - Friday: 9am - 5pm</p>
              <p className="text-secondary">Saturday: 10am - 2pm</p>
              <p className="text-secondary">Sunday: Closed</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default HomeContact
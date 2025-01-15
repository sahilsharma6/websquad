import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Lock, Eye, EyeOff, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        damping: 20,
        stiffness: 100
      }
    },
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { type: 'spring', stiffness: 300 } },
  }

  const buttonVariants = {
    hover: { scale: 1.05, transition: { type: 'spring', stiffness: 400 } },
    tap: { scale: 0.95 },
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <motion.div 
        className="w-full max-w-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white shadow-2xl rounded-3xl px-8 pt-8 pb-10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-navlinks"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <div className="mb-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
              className="w-20 h-20 bg-gradient-to-br from-primary to-navlinks rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <UserPlus className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Create an Account
            </motion.h2>
            <motion.p 
              className="text-gray-500 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Join us today and get started
            </motion.p>
          </div>
          <form className="space-y-6">
            <motion.div className="relative" variants={inputVariants} whileFocus="focus">
              <User className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </motion.div>
            <motion.div className="relative" variants={inputVariants} whileFocus="focus">
              <Mail className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </motion.div>
            <motion.div className="relative" variants={inputVariants} whileFocus="focus">
              <Lock className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
              <motion.button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-gray-400 focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </motion.button>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-primary to-navlinks text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition flex items-center justify-center"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Sign Up
            </motion.button>
          </form>
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-500">Already have an account?</p>
            <Link to="/Authentication/login" className="text-primary hover:text-primary font-medium transition">
              Sign in here
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}


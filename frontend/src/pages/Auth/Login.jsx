import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
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
              <LogIn className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Welcome Back
            </motion.h2>
            <motion.p 
              className="text-gray-500 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Please sign in to your account
            </motion.p>
          </div>
          <form className="space-y-6">
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
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-500">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-primfrom-primary hover:text-primfrom-primary transition">
                Forgot password?
              </a>
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-primary to-navlinks text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primfrom-primary focus:ring-opacity-50 transition"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Sign In
            </motion.button>
          </form>
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-500">Don't have an account?</p>
            <Link to="/Authentication/register" className="text-primfrom-primary hover:text-primfrom-primary font-medium transition">
              Create an account
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}


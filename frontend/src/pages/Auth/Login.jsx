import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, Eye, EyeOff, ChevronRight, Sparkles } from 'lucide-react';

const Login = ({ isDarkMode }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: 'spring',
        damping: 25,
        stiffness: 120
      }
    },
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { type: 'spring', stiffness: 300 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, rotate: 1 },
    tap: { scale: 0.95, rotate: -1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`relative overflow-hidden p-8 rounded-3xl shadow-2xl ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } backdrop-filter backdrop-blur-xl bg-opacity-30 border border-opacity-20 ${
        isDarkMode ? 'border-gray-700' : 'border-white'
      }`}
      style={{ width: '400px', height: '550px' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
      />
      <motion.div
        animate={{
          background: [
            'linear-gradient(0deg, #8b5cf6, #ec4899)',
            'linear-gradient(90deg, #8b5cf6, #ec4899)',
            'linear-gradient(180deg, #8b5cf6, #ec4899)',
            'linear-gradient(270deg, #8b5cf6, #ec4899)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-20 filter blur-3xl"
      />
      <motion.div
        animate={{
          background: [
            'linear-gradient(0deg, #3b82f6, #10b981)',
            'linear-gradient(90deg, #3b82f6, #10b981)',
            'linear-gradient(180deg, #3b82f6, #10b981)',
            'linear-gradient(270deg, #3b82f6, #10b981)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-20 filter blur-3xl"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
        className="w-24 h-24 mx-auto mb-8 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl transform rotate-45" />
        <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center">
          <LogIn className="w-12 h-12 text-purple-600" />
        </div>
      </motion.div>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold text-center mb-6"
      >
        Welcome Back
      </motion.h2>
      <form className="space-y-6">
        <motion.div
          className="relative"
          variants={inputVariants}
          whileFocus="focus"
        >
          <Mail className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
          <input
            className={`pl-10 w-full py-3 px-4 bg-transparent border-2 rounded-xl focus:outline-none transition-all duration-300 ${
              isDarkMode
                ? 'border-gray-700 focus:border-purple-500 text-white'
                : 'border-gray-300 focus:border-purple-500 text-gray-900'
            }`}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>
        <motion.div
          className="relative"
          variants={inputVariants}
          whileFocus="focus"
        >
          <Lock className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
          <input
            className={`pl-10 w-full py-3 px-4 bg-transparent border-2 rounded-xl focus:outline-none transition-all duration-300 ${
              isDarkMode
                ? 'border-gray-700 focus:border-purple-500 text-white'
                : 'border-gray-300 focus:border-purple-500 text-gray-900'
            }`}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <motion.button
            type="button"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-3 right-3 text-gray-400 focus:outline-none"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </motion.button>
        </motion.div>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 transform hover:shadow-lg flex items-center justify-center space-x-2"
          type="submit"
        >
          <span>Sign In</span>
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </form>
      <div className="mt-8 text-center">
        <Link
          to="/Authentication/register"
          className={`text-sm font-medium ${
            isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'
          } transition-colors duration-300`}
        >
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Don't have an account? Register
          </motion.span>
        </Link>
      </div>
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Or sign in with</p>
        <div className="flex justify-center mt-4 space-x-4">
          {['Google', 'Facebook', 'Twitter'].map((provider) => (
            <motion.button
              key={provider}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className={`p-2 rounded-full ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors duration-300`}
            >
              <img
                src={`/icons/${provider.toLowerCase()}.svg`}
                alt={provider}
                className="w-6 h-6"
              />
            </motion.button>
          ))}
        </div>
      </motion.div>
      <AnimatePresence>
        {(email || password) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 right-4"
          >
            <Sparkles className={`w-6 h-6 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-500'}`} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Login;


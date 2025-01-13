import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, UserPlus } from 'lucide-react';

const Register = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-8 rounded-lg shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Create an Account
      </motion.h2>
      <form className="space-y-6">
        <div className="relative">
          <User className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
          <input
            className={`pl-10 w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
            }`}
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="relative">
          <Mail className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
          <input
            className={`pl-10 w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
            }`}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="relative">
          <Lock className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
          <input
            className={`pl-10 w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 ${
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
            }`}
            type="password"
            placeholder="Password"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          type="submit"
        >
          <UserPlus className="inline-block w-5 h-5 mr-2" />
          Sign Up
        </motion.button>
      </form>
      <div className="mt-6 text-center">
        <Link to="/Authentication/login" className="text-sm font-medium text-purple-600 hover:underline">
          Already have an account? Login
        </Link>
      </div>
    </motion.div>
  );
};

export default Register;


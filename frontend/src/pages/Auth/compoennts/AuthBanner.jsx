import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Logo from '../../../components/navbarComponents/Logo'

const AuthBanner = () => {
  return (
    <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center flex flex-col items-center justify-center"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
          className="inline-block mb-6"
        >
          <Sparkles className="w-16 h-16 text-yellow-300" />
        </motion.div>
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" mb-6 text-center"
        >
          <Logo size={'5xl'}/>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-primary"
        >
          Your gateway to amazing experiences
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            <motion.path
              d="M100 20 L180 100 L100 180 L20 100 Z"
              stroke="white"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              stroke="white"
              strokeWidth="4"
              fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
            />
          </svg>
        </motion.div>
      </motion.div>
  )
}

export default AuthBanner
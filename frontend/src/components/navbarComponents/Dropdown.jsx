import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const EnhancedDropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const dropdownRef = useRef(null);

  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if the current route is the home page
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const getIcon = (IconComponent) => {
    return IconComponent ? <IconComponent className="w-5 h-5 mr-3" /> : null;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center px-3 py-2 transition-colors duration-300 focus:outline-none ${
          isScrolled || !isHomePage
            ? 'text-gray-700 hover:text-primary'
            : 'text-white hover:text-gray-700'
        }`}
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="ml-1 w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute top-full left-0 mt-2 w-96 rounded-lg shadow-xl border border-gray-200 overflow-hidden z-10 ${
              isScrolled || !isHomePage ? 'bg-white' : 'backdrop-blur-3xl'
            }`}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {items.map((item) => (
              <motion.div
                key={item.path}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="relative"
                onHoverStart={() => setHoveredItem(item.path)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-5 text-sm transition-colors duration-200 relative overflow-hidden group ${
                    isScrolled || !isHomePage
                      ? 'text-gray-700 hover:text-primary'
                      : 'text-white hover:text-navlinks'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {getIcon(item.icon)}
                  <span className="relative">
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                      initial="hidden"
                      animate={hoveredItem === item.path ? 'visible' : 'hidden'}
                      variants={underlineVariants}
                    />
                  </span>
                  <motion.div
                    className="absolute right-5 opacity-0 text-primary"
                    animate={{
                      opacity: hoveredItem === item.path ? 1 : 0,
                      x: hoveredItem === item.path ? 0 : 10
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedDropdown;

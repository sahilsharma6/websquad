import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const menuItems = [
    { 
      label: "Home", 
      path: "/",
      dropdown: false
    },
    { 
      label: "Demo", 
      path: "/demo",
      dropdown: true,
      subItems: [
        { label: "Web Design", path: "/demo/web-design" },
        { label: "Mobile App", path: "/demo/mobile-app" },
        { label: "UI/UX", path: "/demo/ui-ux" }
      ]
    },
    { 
      label: "Portfolio", 
      path: "/portfolio",
      dropdown: true,
      subItems: [
        { label: "Graphic Design", path: "/portfolio/graphic-design" },
        { label: "Web Development", path: "/portfolio/web-development" },
        { label: "Branding", path: "/portfolio/branding" }
      ]
    },
    { 
      label: "Pages", 
      path: "/pages",
      dropdown: true,
      subItems: [
        { label: "About Us", path: "/pages/about" },
        { label: "Services", path: "/pages/services" },
        { label: "Contact", path: "/pages/contact" }
      ]
    },
    { 
      label: "Shop", 
      path: "/shop",
      dropdown: false
    }
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black"
        >
          Websquad
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <li 
              key={item.label} 
              className="relative group"
              onMouseEnter={() => item.dropdown && toggleDropdown(index)}
              onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center text-lg font-medium transition duration-300 ${
                    isActive
                      ? "text-gray-600"
                      : "text-gray-700 hover:text-gray-500"
                  } ${item.dropdown ? 'pr-2' : ''}`
                }
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown 
                    className={`ml-1 w-4 h-4 transition-transform ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} 
                  />
                )}
              </NavLink>

              {/* Dropdown */}
              {item.dropdown && activeDropdown === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden min-w-[200px]"
                >
                  {item.subItems.map((subItem) => (
                    <NavLink
                      key={subItem.label}
                      to={subItem.path}
                      className={({ isActive }) => `
                        block px-4 py-2 text-sm 
                        ${isActive 
                          ? 'bg-purple-50 text-purple-600' 
                          : 'text-gray-700 hover:bg-gray-100'
                        }
                      `}
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-purple-500 cursor-pointer focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu (dropdown with animation) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute top-full left-0 w-full bg-white shadow-md z-50 md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.ul className="flex flex-col py-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="border-b last:border-b-0 border-gray-100"
                  >
                    <div 
                      className="flex justify-between items-center px-4 py-3"
                      onClick={() => item.dropdown && toggleDropdown(index)}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `text-lg font-medium transition duration-300 ${
                            isActive
                              ? "text-purple-600"
                              : "text-gray-700 hover:text-purple-500"
                          }`
                        }
                        onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                      {item.dropdown && (
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`} 
                        />
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    {item.dropdown && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-50 overflow-hidden"
                      >
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.label}
                            to={subItem.path}
                            className={({ isActive }) => `
                              block px-6 py-2 text-sm 
                              ${isActive 
                                ? 'bg-purple-50 text-purple-600' 
                                : 'text-gray-700 hover:bg-gray-100'
                              }
                            `}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
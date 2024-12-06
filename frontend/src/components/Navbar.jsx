import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative flex justify-between items-center px-6 py-4 bg-white shadow-lg rounded-md">
      {/* Logo */}
      <div className="text-3xl font-extrabold text-gray-800">Websquad</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">
          Demo
        </li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">
          Portfolio
        </li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">
          Home
        </li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">
          Pages
        </li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">
          Shop
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 hover:text-blue-500 cursor-pointer focus:outline-none"
        >
          <i className="fa fa-bars text-2xl"><FiAlignJustify /></i>
        </button>
      </div>

      {/* Search Icon */}
      <div className="hidden md:block text-gray-700 hover:text-blue-500 cursor-pointer">
        <i className="fa fa-search text-xl"></i>
      </div>

      {/* Mobile Menu (dropdown) */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-md z-50 md:hidden">
          <ul className="flex flex-col items-center py-4 gap-2">
            <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">
              Demo
            </li>
            <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">
              Portfolio
            </li>
            <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">
              Home
            </li>
            <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">
              Pages
            </li>
            <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">
              Shop
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

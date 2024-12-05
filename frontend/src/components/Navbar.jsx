// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-lg rounded-md">
      <div className="text-3xl font-extrabold text-gray-800">Websquad</div>
      <ul className="flex gap-6">
        <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">Demo</li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">Portfolio</li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">Home</li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">Pages</li>
        <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer">Shop</li>
      </ul>
      <div className="text-gray-700 hover:text-blue-500 cursor-pointer">
        <i className="fa fa-search text-xl"></i>
      </div>
    </nav>
  );
};

export default Navbar;

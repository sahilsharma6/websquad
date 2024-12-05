// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold">Websquad</div>
      <ul className="flex gap-6">
        <li className="hover:text-gray-600 cursor-pointer">Demo</li>
        <li className="hover:text-gray-600 cursor-pointer">Portfolio</li>
        <li className="hover:text-gray-600 cursor-pointer">Home</li>
        <li className="hover:text-gray-600 cursor-pointer">Pages</li>
        <li className="hover:text-gray-600 cursor-pointer">Shop</li>
      </ul>
      <div className="hover:text-gray-600 cursor-pointer">
        <i className="fa fa-search"></i>
      </div>
    </nav>
  );
};

export default Navbar;

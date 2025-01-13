import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

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

  return (
    <Link
      to={to}
      className={`
        relative px-3 py-2 transition-colors duration-300 
        ${
          isScrolled || !isHomePage
            ? isActive
              ? 'text-primary'
              : 'text-gray-700 hover:text-primary'
            : isActive
            ? 'text-navlinks'
            : 'text-white hover:text-navlinks'
        }
        before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5
        before:bg-primary before:transform before:scale-x-0 before:transition-transform before:duration-300
        ${isActive ? 'before:scale-x-100' : 'hover:before:scale-x-100'}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;

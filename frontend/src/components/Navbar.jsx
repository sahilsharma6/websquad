import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe, Code, Briefcase, LayoutGrid, Cloud, MessagesSquare } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Logo from './navbarComponents/Logo';
import NavLink from './navbarComponents/NavLink';
import Dropdown from './navbarComponents/Dropdown';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Projects',
      dropdown: true,
      items: [
        { label: 'Web Development', path: '/projects/web-development', icon: Globe },
        { label: 'Mobile Apps', path: '/projects/mobile-apps', icon: Code },
        { label: 'UI/UX Design', path: '/projects/ui-ux-design', icon: Briefcase },
      ],
    },
    {
      label: 'Services',
      dropdown: true,
      items: [
        { label: 'Custom Software', path: '/services/custom-software', icon: LayoutGrid },
        { label: 'Cloud Solutions', path: '/services/cloud-solutions', icon: Cloud },
        { label: 'IT Consulting', path: '/services/it-consulting', icon: MessagesSquare },
      ],
    },
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
    { label: 'Blog', path: '/blog' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? 'bg-white'
            : 'backdrop-blur-sm bg-transparent text-white'
          : 'bg-white text-gray-700'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo size={isScrolled ? '2xl' : '2xl'} />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) =>
              item.dropdown ? (
                <Dropdown key={item.label} label={item.label} items={item.items} />
              ) : (
                <NavLink key={item.label} to={item.path}>
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center ml-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className={`pl-8 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 transition-all duration-300 ${
                  isHomePage
                    ? isScrolled
                      ? 'bg-gray-200 focus:ring-primary text-gray-700'
                      : 'bg-transparent focus:ring-white text-white'
                    : 'bg-gray-200 focus:ring-primary text-gray-700'
                }`}
              />
              <Search
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                  isHomePage
                    ? isScrolled
                      ? 'text-gray-500'
                      : 'text-white'
                    : 'text-gray-500'
                }`}
                size={18}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col py-2">
              {menuItems.map((item) =>
                item.dropdown ? (
                  <Dropdown key={item.label} label={item.label} items={item.items} />
                ) : (
                  <NavLink key={item.label} to={item.path}>
                    {item.label}
                  </NavLink>
                )
              )}
              <div className="px-4 py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full pl-8 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 transition-all duration-300 ${
                    isHomePage
                      ? isScrolled
                        ? 'bg-gray-200 focus:ring-blue-400 text-gray-700'
                        : 'bg-transparent focus:ring-white text-white'
                      : 'bg-gray-200 focus:ring-blue-400 text-gray-700'
                  }`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

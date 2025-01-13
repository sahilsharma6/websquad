import React from 'react';
import AuthBanner from './AuthBanner';

const LeftSection = ({ isDarkMode }) => {
  return (
    <div className={`hidden md:flex md:w-1/2 items-center justify-center ${isDarkMode ? 'bg-secondary' : 'bg-secondary'}`}>
      <AuthBanner />
    </div>
  );
};

export default LeftSection;


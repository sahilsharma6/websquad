import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({size, title}) => {
  return (
    <Link to="/" className="flex items-center space-x-2 group" title='Click to Navigate Home Page'>
      <span className={`text-${size} font-bold relative`}>
        <span className="absolute inset-0 animate-wave-alternate bg-gradient-to-r from-primary via-gray-700 to-primary bg-[length:200%_100%] bg-clip-text text-transparent">
        {title ? title : 'Web Squad.'}
        </span>
        <span className="invisible">{title ? title : 'Web Squad.'}</span>
      </span>
    </Link>
  );
};

export default Logo;

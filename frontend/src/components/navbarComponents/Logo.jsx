import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({size}) => {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <span className={`text-${size} font-bold relative`}>
        <span className="absolute inset-0 animate-wave-alternate bg-gradient-to-r from-primary via-gray-700 to-primary bg-[length:200%_100%] bg-clip-text text-transparent">
          Web Squad.
        </span>
        <span className="invisible">Web Squad.</span>
      </span>
    </Link>
  );
};

export default Logo;

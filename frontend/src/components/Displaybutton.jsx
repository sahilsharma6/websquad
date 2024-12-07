import React from "react";
import PropTypes from "prop-types";

const Displaybutton = ({ type = "fill", children, className = "", ...props }) => {
  const buttonTypes = {
    fill: "hover:shadow-[inset_0_0_0_2em_var(--hover)]",
    pulse: "hover:animate-pulse",
    close:
      "hover:shadow-[inset_-3.5em_0_0_0_var(--hover),_inset_3.5em_0_0_0_var(--hover)]",
    raise: "hover:shadow-[0_0.5em_0.5em_-0.4em_var(--hover)] hover:-translate-y-1",
    up: "hover:shadow-[inset_0_-3.25em_0_0_var(--hover)]",
    slide: "hover:shadow-[inset_6.5em_0_0_0_var(--hover)]",
    offset:
      "hover:shadow-[0_0_0_0_var(--hover),_inset_6em_3.5em_0_0_var(--hover)]",
  };

  const baseStyles = `transition-colors duration-300 border-2 px-4 py-2 rounded focus:outline-none text-white font-medium ${
    buttonTypes[type] || ""
  }`;

  return (
    <button
      className={`${baseStyles} ${className}`}
      style={{
        "--hover": "hsl(220, 90%, 60%)", // Default hover color
        "--color": "hsl(220, 90%, 50%)", // Default base color
      }}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf([
    "fill",
    "pulse",
    "close",
    "raise",
    "up",
    "slide",
    "offset",
  ]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Displaybutton;

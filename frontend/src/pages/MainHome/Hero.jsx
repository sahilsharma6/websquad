import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import img1 from ".../";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const leftCircleY = useTransform(scrollYProgress, [0, 0.3], [150, -150]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 w-11/12 max-w-screen-xl">
        {/* Text Section */}
        <div className="mb-10 md:mb-0">
          <h1 className="text-xl md:text-6xl font-extrabold leading-tight text-gray-900">
            WE ARE{" "}
            <span className="text-green-500">
              {" "}
              <br />
              SKILLED IN
            </span>
          </h1>
          <h4 className="text-2xl md:text-4xl mt-3 text-gray-700">WEB DESIGN</h4>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-3">
            AND <span className="text-yellow-400">DEVELOPMENT</span>
          </h1>
          <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed">
            We are a full-service digital agency that builds outstanding
            websites and applications, turning your vision into reality with a
            creative and innovative approach.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          {/* Wrapper for the semicircles */}
          <div className="relative w-96 h-96">
            {/* Left Semicircle (Yellow - Scrolls Down) */}
            <motion.div
              style={{
                y: leftCircleY,
              }}
              className="absolute top-0 left-0 w-1/2 h-full bg-yellow-200 rounded-l-full"
            >
              <img
                src={""}
                alt="Image"
                className="w-full h-full object-cover rounded-l-full"
              />
            </motion.div>

            {/* Right Semicircle (Green - Fixed) */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-green-300 rounded-r-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

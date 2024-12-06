import { motion } from "framer-motion";
import React from "react";
// import img1 from "../assets/image.png";

const HomeAbout = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-evenly py-16 bg-gradient-to-r rounded-lg shadow-md">
      {/* Left side */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-white p-8 rounded-lg md:w-3/2 shadow-lg md:ml-8 mb-8 md:mb-0"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          We are committed to delivering high-quality products that meet the
          needs of our clients. Our team of experts works tirelessly to ensure
          that every project is a success.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Expertise in design and development</li>
          <li>Innovative and creative solutions</li>
          <li>Personalized service tailored to your needs</li>
        </ul>
      </motion.div>

      {/* Right side */}
      <motion.div
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="md:w-1/2 flex justify-center"
      >
        <div className="bg-blue-900 rounded-lg p-4 text-center text-white shadow-lg">
          <img
            src={"img1"}
            alt="Vision"
            className="mx-auto rounded-lg border-4 border-white max-w-full h-auto md:w-80"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeAbout;

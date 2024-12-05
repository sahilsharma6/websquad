import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Graphic Design",
    description:
      "A decade ago, we founded Melinda with the goal of creating meaningful digital experiences.",
    icon: "🎨",
  },
  {
    title: "Digital Products",
    description:
      "A decade ago, we founded Melinda with the goal of creating meaningful digital experiences.",
    icon: "✨",
  },
  {
    title: "Social Market",
    description:
      "A decade ago, we founded Melinda with the goal of creating meaningful digital experiences.",
    icon: "🧑‍🤝‍🧑",
  },
  {
    title: "Graphic Design",
    description:
      "A decade ago, we founded Melinda with the goal of creating meaningful digital experiences.",
    icon: "🏛️",
  },
  {
    title: "Digital Products",
    description:
      "A decade ago, we founded Melinda with the goal of creating meaningful digital experiences.",
    icon: "📈",
  },
  {
    title: "Social Market",
    description:
      "A decade ago, we founded Melinda with the goal of creating meaningful digital experiences.",
    icon: "🔵",
  },
];

const ServiceCard = ({ title, description, icon, index }) => {
  const yValue = index % 2 === 0 ? -50 : 50;

  return (
    <motion.div
      whileInView={{ y: 0 }}
      initial={{ y: yValue }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white shadow-lg rounded-lg p-6 text-center"
      >
        <div className="text-5xl mb-4 text-purple-600">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <motion.a
          whileHover={{ color: "#805ad5" }}
          href="#"
          className="text-purple-500 font-medium underline"
        >
          Read More
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const HomeServices = () => {
  return (
    <div className="items-center justify-items-center">
      <div className="bg-white py-12 w-11/12">
        <div className="text-center mb-12 ">
          <h2 className="text-4xl font-bold text-purple-700">Our Services</h2>
          <p className="text-gray-600 mt-4 max-w-md mx-auto">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;

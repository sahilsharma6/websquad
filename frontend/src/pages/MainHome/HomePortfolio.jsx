import React, { useState } from 'react';
import { X, ExternalLink, Github, ChevronRight } from 'lucide-react';
import { AnimatePresence, useSpring } from 'framer-motion';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    subtitle: "Web Application",
    description: "A modern e-commerce dashboard with real-time analytics, inventory management, and order processing. Built with React and Node.js.",
    image: "https://images.ctfassets.net/ly25iagmtxce/7JYmD20GEOGZkDqN7t7uvy/8bd9e5454f643b09989ee515badaf66b/website-02-1600x1064.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com",
    features: [
      "Real-time sales tracking",
      "Inventory management",
      "Customer analytics",
      "Order processing",
      "Payment integration"
    ],
    technologies: {
      frontend: ["React", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],
      deployment: ["AWS", "Docker"]
    }
  },
  {
    id: 2,
    title: "Portfolio Website",
    subtitle: "Static Website",
    description: "A creative portfolio website for a digital artist showcasing their work with interactive galleries.",
    image: "https://images.ctfassets.net/ly25iagmtxce/7JYmD20GEOGZkDqN7t7uvy/8bd9e5454f643b09989ee515badaf66b/website-02-1600x1064.jpg",
    tags: ["Next.js", "Three.js", "GSAP"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com",
    features: [
      "3D animations",
      "Image gallery",
      "Contact form",
      "Blog section",
      "Newsletter signup"
    ],
    technologies: {
      frontend: ["Next.js", "Three.js", "GSAP"],
      backend: ["Vercel", "Sanity CMS"],
      deployment: ["Vercel"]
    }
  },
  {
    id: 3,
    title: "Social Media Platform",
    subtitle: "Full Stack Application",
    description: "A social media platform for creative professionals with real-time messaging and portfolio sharing.",
    image: "https://images.ctfassets.net/ly25iagmtxce/7JYmD20GEOGZkDqN7t7uvy/8bd9e5454f643b09989ee515badaf66b/website-02-1600x1064.jpg",
    tags: ["React", "Firebase", "Tailwind"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com",
    features: [
      "Real-time chat",
      "User profiles",
      "Project sharing",
      "Comments & likes",
      "Follow system"
    ],
    technologies: {
      frontend: ["React", "Redux", "Tailwind CSS"],
      backend: ["Firebase", "Cloud Functions"],
      deployment: ["Firebase Hosting"]
    }
  }
];

const ProjectCard = ({ project, onViewMore, index }) => {
  const springProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: index * 100,
  });

  return (
    <motion.div style={springProps}>
      <motion.div
        className="group relative bg-white/70 backdrop-blur-xl hover:bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ y: -5 }}
      >
        {/* Project Image with Overlay */}
        <div className="relative overflow-hidden h-64">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <motion.p
                className="text-sm text-navlinks hover:text-secondary font-semibold mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.subtitle}
              </motion.p>
              <motion.h3
                className="text-xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {project.title}
              </motion.h3>
            </div>
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <a href={project.demoLink} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href={project.githubLink} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          <motion.p
            className="text-gray-600 mb-4 line-clamp-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {project.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary text-navlinks hover:text-secondary text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.button
            onClick={() => onViewMore(project)}
            className="flex items-center text-navlinks group-hover:text-secondarytransition-colors group/btn"
            whileHover={{ x: 5 }}
          >
            View Details
            <ChevronRight className="ml-1 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectDetails = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 z-50 flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-2xl bg-white h-full overflow-y-auto"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        >
          <div className="sticky top-0 bg-white z-10 p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="p-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-navlinks mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                {Object.entries(project.technologies).map(([category, techs]) => (
                  <div key={category} className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 capitalize mb-2">{category}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {techs.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={project.demoLink}
                  className="flex-1 bg-pritext-navlinks text-white px-4 py-2 rounded-lg text-center hover:bg-pritext-navlinks transition-colors"
                >
                  View Live Demo
                </a>
                <a
                  href={project.githubLink}
                  className="flex-1 border border-pritext-navlinks text-navlinks px-4 py-2 rounded-lg text-center hover:bg-pritext-navlinkstransition-colors"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </motion.div >
      </motion.div >
    </AnimatePresence>
  );
};

const PortfolioShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative min-h-screen overflow-hidden">

      <div className="relative z-10 min-h-screen bg-gradient-to-b from-primary/40 to-secondary py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-left mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl uppercase italic font-bold mb-4 text-navlinks ">Our Projects -</h1>
            <p className="text-xl text-navlinks ">Showcasing our best work in web development</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewMore={setSelectedProject}
                index={index}
              />
            ))}
          </div>

          {selectedProject && (
            <ProjectDetails
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/portfolio" className='bg-pritext-navlinks text-white px-10 py-2 rounded-lg text-center hover:bg-pritext-navlinks transition-colors border border-navlinks italic hover:bg-primary hover:text-navlinks'>View More</Link>
        </div>
      </div>

    </div>
  );
};

export default PortfolioShowcase;
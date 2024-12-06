// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Linkedin, 
//   Github, 
//   Twitter, 
//   Instagram, 
//   User, 
//   Code, 
//   Award 
// } from 'lucide-react';

// const teamMembers = [
//   {
//     name: "John Doe",
//     role: "Founder & CEO",
//     bio: "Visionary leader with 10+ years of tech experience",
//     image: "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg",
//     socials: {
//       linkedin: "#",
//       github: "#",
//       twitter: "#"
//     },
//     skills: ["Strategy", "Leadership", "Innovation"]
//   },
//   {
//     name: "Jane Smith",
//     role: "CTO",
//     bio: "Technical genius driving our product innovation",
//     image: "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg",
//     socials: {
//       linkedin: "#",
//       github: "#",
//       instagram: "#"
//     },
//     skills: ["Software Architecture", "Machine Learning", "Cloud"]
//   },
//   {
//     name: "Mike Johnson",
//     role: "Lead Developer",
//     bio: "Code wizard with a passion for solving complex problems",
//     image: "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg",
//     socials: {
//       linkedin: "#",
//       github: "#",
//       twitter: "#"
//     },
//     skills: ["Full Stack", "React", "Node.js"]
//   }
// ];

// const HomeTeams = () => {
//   const [hoveredMember, setHoveredMember] = useState(null);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const memberVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 24
//       }
//     },
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
//       transition: { duration: 0.3 }
//     }
//   };

//   return (
//     <div className=" text-white min-h-[90vh] py-16 px-4">
//       <motion.div 
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         className="container mx-auto"
//       >
//         <motion.h1 
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl md:text-6xl font-bold text-center mb-16 text-secondary"
//         >
//           Meet Our Team
//         </motion.h1>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={member.name}
//               variants={memberVariants}
//               whileHover="hover"
//               onHoverStart={() => setHoveredMember(index)}
//               onHoverEnd={() => setHoveredMember(null)}
//               className="bg-secondary text-white rounded-2xl overflow-hidden shadow-lg relative"
//             >
//               <div className="relative">
//                 <img 
//                   src={member.image} 
//                   alt={member.name} 
//                   className="w-full h-64 object-cover"
//                 />
//                 <motion.div 
//                   initial={{ opacity: 0 }}
//                   animate={{ 
//                     opacity: hoveredMember === index ? 1 : 0,
//                     transition: { duration: 0.3 }
//                   }}
//                   className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center"
//                 >
//                   <div className="flex space-x-4">
//                     {member.socials.linkedin && (
//                       <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
//                         <Linkedin className="text-white hover:text-primary transition-colors" />
//                       </a>
//                     )}
//                     {member.socials.github && (
//                       <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
//                         <Github className="text-white hover:text-primary transition-colors" />
//                       </a>
//                     )}
//                     {member.socials.twitter && (
//                       <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
//                         <Twitter className="text-white hover:text-primary transition-colors" />
//                       </a>
//                     )}
//                     {member.socials.instagram && (
//                       <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
//                         <Instagram className="text-white hover:text-primary transition-colors" />
//                       </a>
//                     )}
//                   </div>
//                 </motion.div>
//               </div>
              
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
//                 <p className="text-primary mb-4">{member.role}</p>
//                 <p className="text-gray-300 mb-4">{member.bio}</p>
                
//                 <div className="flex flex-wrap gap-2">
//                   {member.skills.map((skill) => (
//                     <span 
//                       key={skill}
//                       className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HomeTeams;


// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Linkedin, 
//   Github, 
//   Twitter, 
//   Instagram, 
//   ArrowRight, 
//   ArrowLeft,
//   User,
//   Code,
//   Award
// } from 'lucide-react';

// const teamMembers = [
//   {
//     name: "John Doe",
//     role: "Founder & CEO",
//     bio: "Visionary leader with 10+ years of tech experience driving innovation and strategic growth.",
//     fullDescription: "John has been at the forefront of technological innovation, leading multiple successful startups and transforming complex challenges into breakthrough solutions. His expertise spans strategic planning, product development, and team leadership.",
//     image: "https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg",
//     background: "Tech Entrepreneur",
//     achievements: [
//       "Founded 3 successful tech companies",
//       "Raised over $50M in venture capital",
//       "Speaker at international tech conferences"
//     ],
//     socials: {
//       linkedin: "#",
//       github: "#",
//       twitter: "#"
//     },
//     skills: ["Strategy", "Leadership", "Innovation"]
//   },
//   {
//     name: "Jane Smith",
//     role: "CTO",
//     bio: "Technical genius driving our product innovation",
//     fullDescription: "Jane is a cutting-edge technologist with deep expertise in software architecture and emerging technologies. She leads our technical vision, ensuring we're always at the bleeding edge of innovation.",
//     image: "https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg",
//     background: "Software Architect",
//     achievements: [
//       "Developed award-winning AI algorithms",
//       "Led engineering teams at top tech companies",
//       "Patent holder in machine learning"
//     ],
//     socials: {
//       linkedin: "#",
//       github: "#",
//       instagram: "#"
//     },
//     skills: ["Software Architecture", "Machine Learning", "Cloud"]
//   },
//   {
//     name: "Mike Johnson",
//     role: "Lead Developer",
//     bio: "Code wizard with a passion for solving complex problems",
//     fullDescription: "Mike is our technical maestro, transforming complex coding challenges into elegant solutions. With expertise across multiple programming paradigms, he drives our technical excellence.",
//     image: "https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg",
//     background: "Full Stack Developer",
//     achievements: [
//       "Contributed to open-source projects",
//       "Built scalable microservices architectures",
//       "Mentor for junior developers"
//     ],
//     socials: {
//       linkedin: "#",
//       github: "#",
//       twitter: "#"
//     },
//     skills: ["Full Stack", "React", "Node.js"]
//   }
// ];

// const HomeTeams = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
//   };

//   const cardVariants = {
//     initial: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       rotate: direction > 0 ? 50 : -50,
//       opacity: 0
//     }),
//     animate: {
//       x: 0,
//       rotate: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30
//       }
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -1000 : 1000,
//       rotate: direction > 0 ? -50 : 50,
//       opacity: 0,
//       transition: {
//         duration: 0.3
//       }
//     })
//   };

//   const detailsVariants = {
//     initial: { opacity: 0, y: 50 },
//     animate: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.5,
//         type: "spring",
//         stiffness: 200 
//       }
//     },
//     exit: { 
//       opacity: 0, 
//       y: 50,
//       transition: { duration: 0.3 }
//     }
//   };

//   const currentMember = teamMembers[currentIndex];

//   return (
//     <div className=" text-black overflow-x-hidden min-h-screen flex items-center justify-center p-8">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Stacked Card Navigation */}
//         <div className="relative h-[500px] w-full flex items-center justify-center">
//           <div className="absolute z-10 flex space-x-4">
//             <motion.button 
//               onClick={handlePrev}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="bg-primary/20 text-primary p-3 rounded-full"
//             >
//               <ArrowLeft />
//             </motion.button>
//             <motion.button 
//               onClick={handleNext}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="bg-primary/20 text-primary p-3 rounded-full"
//             >
//               <ArrowRight />
//             </motion.button>
//           </div>

//           <AnimatePresence initial={false} custom={currentIndex}>
//             <motion.div 
//               key={currentIndex}
//               custom={currentIndex}
//               variants={cardVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               className="absolute w-[300px] h-[400px] bg-secondary rounded-2xl shadow-2xl overflow-hidden"
//             >
//               <img 
//                 src={currentMember.image} 
//                 alt={currentMember.name} 
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Member Details */}
//         <AnimatePresence>
//           <motion.div
//             key={currentIndex}
//             variants={detailsVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             className="bg-secondary/50 p-8 rounded-2xl"
//           >
//             <motion.h2 
//               className="text-4xl font-bold mb-4 text-primary"
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               {currentMember.name}
//             </motion.h2>
            
//             <motion.p 
//               className="text-xl mb-4 text-white"
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               {currentMember.role}
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               <h3 className="text-2xl font-semibold mb-2 flex items-center">
//                 <User className="mr-2 text-primary" /> Background
//               </h3>
//               <p className="mb-4 text-gray-300">{currentMember.background}</p>

//               <h3 className="text-2xl font-semibold mb-2 flex items-center">
//                 <Code className="mr-2 text-primary" /> Skills
//               </h3>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {currentMember.skills.map((skill) => (
//                   <span 
//                     key={skill}
//                     className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>

//               <h3 className="text-2xl font-semibold mb-2 flex items-center">
//                 <Award className="mr-2 text-primary" /> Key Achievements
//               </h3>
//               <ul className="list-disc list-inside text-gray-300">
//                 {currentMember.achievements.map((achievement) => (
//                   <li key={achievement} className="mb-2">{achievement}</li>
//                 ))}
//               </ul>
//             </motion.div>

//             <motion.div 
//               className="mt-6 flex space-x-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               {Object.entries(currentMember.socials)
//                 .filter(([_, link]) => link)
//                 .map(([platform, link]) => {
//                   const SocialIcon = {
//                     linkedin: Linkedin,
//                     github: Github,
//                     twitter: Twitter,
//                     instagram: Instagram
//                   }[platform];

//                   return (
//                     <a 
//                       key={platform}
//                       href={link} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="text-white hover:text-primary transition-colors"
//                     >
//                       <SocialIcon size={24} />
//                     </a>
//                   );
//                 })}
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default HomeTeams;

import React from 'react'

const HomeTeams = () => {
  return (
    <div>HomeTeams</div>
  )
}

export default HomeTeams
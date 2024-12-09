import React, { useRef } from 'react';
import {
    SquareChartGantt, Orbit, Microscope, Vote
} from 'lucide-react';
import BrushStrokeSVG from '../customSVGs/BrushStrokeSVG';
import LongBrush from '../customSVGs/LongBrush';
import { motion, useScroll, useTransform } from 'framer-motion';
import WaveBackground from '../customSVGs/WaveBackground';

const color = "#a8b3ab"; // from tailwind config, this is primary color

const Banner3 = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Enhanced parallax with more responsive transformations
    const y = useTransform(
        scrollYProgress, 
        [0, 1], 
        ["-5%", "15%"]  // Less extreme vertical movement
    );

    // Icons with titles and descriptions
    const iconData = [
        {
            Icon: SquareChartGantt,
            title: "Strategic Planning",
            description: "Develop comprehensive strategies that drive business growth and innovation."
        },
        {
            Icon: Orbit,
            title: "Market Expansion",
            description: "Explore new market opportunities and expand your business reach globally."
        },
        {
            Icon: Microscope,
            title: "Detailed Analysis",
            description: "Leverage deep insights and data-driven approaches to optimize performance."
        },
        {
            Icon: Vote,
            title: "Collaborative Solutions",
            description: "Foster teamwork and innovative problem-solving strategies."
        }
    ];

    // More fluid and responsive animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className="relative min-h-screen md:min-h-[70vh] overflow-hidden flex items-center justify-center px-4 py-16"
        >
            {/* Fully responsive wave background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <WaveBackground 
                    color1="#ddede1" 
                    color2="#a5b0a8"
                    className="w-full h-full" 
                />
            </div>

            {/* Content Container with enhanced responsiveness */}
            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Title Section with responsive typography */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6,
                        ease: "easeOut" 
                    }}
                    viewport={{ once: true }}
                    className='text-center mb-12 md:mb-16'
                >
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 leading-tight'>
                        We build strong 
                        <span className='relative ml-2'>
                            <span className='relative z-10'>productive</span>
                            <LongBrush 
                                color={color} 
                                height={120} 
                                width={180} 
                                className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 z-0" 
                            />
                        </span>
                    </h1>
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto'>
                        Market strategies that increase your sales growth and drive business success
                    </p>
                </motion.div>

                {/* Icons and Descriptions with enhanced grid responsiveness */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 relative"
                >
                    {iconData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Responsive Brush Stroke Background */}
                            <div className="absolute -inset-3 sm:-inset-4 transform group-hover:scale-105 transition-transform duration-300">
                                <BrushStrokeSVG color={color} height="" width="" />
                            </div>

                            {/* Icon with responsive sizing */}
                            <div className="relative z-10 mb-3 sm:mb-4">
                                <item.Icon
                                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-300`}
                                />
                            </div>

                            {/* Text Content with responsive typography */}
                            <div className="relative z-10 px-3 sm:px-4">
                                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-800">{item.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Banner3;
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Banner4 = () => {
    const sectionref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: sectionref,
      offset: ["start end", "center start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

    // Text animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (delay) => ({
            opacity: 1, 
            y: 0,
            transition: {
                delay: delay,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <section ref={sectionref} className='relative min-h-[70vh] w-full overflow-hidden text-white'>
            <motion.div style={{ top: y }} className='absolute w-full h-full -z-10'>
                <div className='absolute inset-0 bg-black/60 z-10'/>
                <img 
                    src="https://t4.ftcdn.net/jpg/05/14/20/47/360_F_514204772_mT0EpTdZkScyiRPn2PInaKaqd88QGrzE.jpg" 
                    className='w-full h-full object-cover' 
                    alt="banner_image" 
                />
            </motion.div>
            <div className='px-4 md:px-8 lg:px-16 h-[70vh] w-full flex items-center'>
                <div className='w-full max-w-6xl mx-auto'>
                    <div className='text-center md:text-right space-y-4 md:space-y-6 pr-0 md:pr-8 lg:pr-16'>
                        <motion.span 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants}
                            custom={0.2}
                            className='uppercase text-sm md:text-base font-bold block text-gray-200'
                        >
                            Exploration
                        </motion.span>
                        <motion.h1 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants}
                            custom={0.4}
                            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'
                        >
                            Discover Unlimited Possibilities Beyond Imagination
                        </motion.h1>
                        <motion.p 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={textVariants}
                            custom={0.6}
                            className='text-sm sm:text-base md:text-lg md:mx-0 text-gray-100'
                        >
                            Embark on a journey of innovation and creativity, where boundaries blur and potential knows no limits. Explore, dream, and transform your vision into reality.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner4
import React from 'react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

// Variants for simple items like subtitles and the button
const simpleItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
    const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <motion.section 
            id="home" 
            className="h-screen flex items-center justify-center text-center -mt-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ transformStyle: "preserve-3d" }}
        >
            <div style={{ transformStyle: "preserve-3d" }}>
                <motion.h1 
                    variants={simpleItemVariants}
                    className="text-shine text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
                    style={{
                        transform: 'translateZ(80px)',
                        textShadow: '0 2px 3px rgba(0,0,0,0.4), 0 5px 8px rgba(0,0,0,0.2), 0 8px 15px rgba(0,0,0,0.2)',
                    }}
                    aria-label="Aung Kyaw Min"
                >
                   Aung Kyaw Min
                </motion.h1>
                <motion.p 
                    variants={simpleItemVariants}
                    className="mt-4 text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto"
                    style={{ transform: 'translateZ(60px)' }}
                >
                    Senior Computer Engineering & Health Science Student
                </motion.p>
                <motion.p 
                    variants={simpleItemVariants}
                    className="mt-2 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                    style={{ transform: 'translateZ(40px)' }}
                >
                    AI, ML, UX/UI, QA, Computer Hardware Enthusiastic
                </motion.p>
                <motion.div variants={simpleItemVariants} style={{ transform: 'translateZ(30px)' }}>
                    <motion.a
                        href="#projects"
                        onClick={handleScrollToProjects}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                            mt-12 inline-block px-8 py-4 rounded-full text-white text-base font-medium transition-all duration-300
                            bg-white/5 backdrop-blur-lg border border-white/10
                            shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6),_inset_0_3px_5px_rgba(255,255,255,0.08),_inset_0_-4px_8px_rgba(0,0,0,0.8)]
                            hover:border-white/30 hover:shadow-[0_50px_100px_-25px_rgba(0,0,0,0.8),_inset_0_3px_5px_rgba(255,255,255,0.1),_inset_0_-4px_8px_rgba(0,0,0,0.8)]
                            cursor-pointer
                        "
                    >
                        View My Work
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
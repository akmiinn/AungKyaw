import React from 'react';
import GlassCard from './common/GlassCard';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <motion.section 
            id="about" 
            className="py-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <GlassCard>
                <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">About Me</h2>
                <div className="flex flex-col md:flex-row items-center gap-12" style={{ transform: "translateZ(25px)"}}>
                    <div className="flex-shrink-0">
                        <motion.img 
                            src="public/aungkyawmin.webp" 
                            alt="Aung Kyaw Min" 
                            loading="lazy"
                            className="rounded-full w-40 h-40 object-cover border-4 border-white/20 shadow-lg filter grayscale hover:grayscale-0 transition-all duration-500"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        I am a dedicated and ambitious student pursuing a dual path in Computer Engineering and Health Science. My passion lies at the intersection of technology and healthcare, where I am enthusiastic about leveraging AI and Machine Learning to solve real-world medical challenges. From developing diagnostic tools to exploring computer hardware for medical devices, I am driven by the potential to improve patient outcomes through innovation. I thrive on complex problem-solving and am constantly expanding my skills in software, hardware, and user-centric design.
                    </p>
                </div>
            </GlassCard>
        </motion.section>
    );
};

export default About;

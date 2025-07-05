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
                            src="data:image/jpeg;base64,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"
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

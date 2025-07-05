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
                            src="/public/aungkyawmin.jpg"
                            alt="Aung Kyaw Min" 
                            loading="lazy"
                            className="rounded-full w-40 h-40 object-cover border-4 border-white/20 shadow-lg transition-all duration-500"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        As a fourth-year Computer Engineering student at Sirindhorn International Institute of Technology, Thammasat University, and a first-year Health Science student at the University of People, I am passionate about leveraging technology to solve real-world problems. My primary interests lie in Artificial Intelligence, Medical Image Processing, and Machine Learning. I have gained practical experience through research internships, including developing algorithms for image enhancement at Moments for Image Processing and localizing hemorrhages in OCT images. Additionally, I have developed projects such as "BurmaFoodie," a Burmese food chatbot, and a sign language detection application. I am proficient in various programming languages, including Python, JAVA, and MATLAB, and am eager to apply my skills to create innovative and impactful solutions.
                    </p>
                </div>
            </GlassCard>
        </motion.section>
    );
};

export default About;

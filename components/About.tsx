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
                            src="/aungkyawmin.jpg"
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
                        As a final-year Computer Engineering student at SIIT, Thammasat University , and a Health Science student at the University of People, I have a strong foundation in both software and hardware. My expertise in software development is highlighted by my research in medical image processing, where I've developed algorithms to enhance and classify digital images , and a project focused on localizing hemorrhages in OCT scans.
                        <br/><br/>
                        On the hardware side, I have hands-on experience developing an IoT-based automatic agricultural watering system using Arduino. My practical skills were further refined during an internship at NECTEC, where I built a hardware model for wave simulation to measure coastal erosion. I am proficient in languages like Python, JAVA, and C#.Net and am eager to apply my balanced skill set to create innovative, impactful solutions that bridge the gap between the physical and digital worlds.
                    </p>
                </div>
            </GlassCard>
        </motion.section>
    );
};

export default About;

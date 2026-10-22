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
                        I am a Master's student in Computer Engineering at SIIT, Thammasat University, and an AI Automation Executive at FUNNOW Group. My master's thesis sits at the intersection of cybersecurity and systems programming: I am building a C++ Intel Pin dynamic binary instrumentation (DBI) tool that instruments <code className="px-1.5 py-0.5 rounded bg-white/10 text-gray-200 text-base">powershell.exe</code> and correlates runtime API behaviour with Sysmon telemetry to detect fileless malware execution. To keep the design data-driven rather than heuristic, I ran a static frequency analysis across a 340-sample MalwareBazaar malware corpus against 102 benign administration scripts to justify which APIs to hook and how to filter noise.
                        <br/><br/>
                        Alongside the thesis I publish in applied machine learning and signal processing. My work on interpretable EEG-based meditation state classification, using ensemble learning with subject-independent validation, appeared at IIAI-AAI 2026, and my adaptive sampling method based on spectral analysis for real-time coastal erosion monitoring was presented at iSAI-NLP 2025. Earlier research spans medical image processing, hemorrhage localisation in OCT scans, and LiDAR-based object detection.
                        <br/><br/>
                        On the engineering side I have shipped production work across the stack and the bench: n8n automation integrated across departments at FUNNOW, PLC and hydraulic machine web-controller software with custom HMI design at Bosch Rexroth, and a hardware wave-simulation model for coastal erosion measurement at NECTEC. I work in Python, C++, C# .NET, Java and MATLAB, and I am drawn to problems where low-level systems behaviour and statistical modelling meet.
                    </p>
                </div>
            </GlassCard>
        </motion.section>
    );
};

export default About;

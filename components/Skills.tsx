import React from 'react';
import GlassCard from './common/GlassCard';
import { motion } from 'framer-motion';

const skills = {
    "AI & Data Science": [
        { name: "Artificial Intelligence", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-5 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd"/></svg> },
        { name: "Natural Language Processing", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12l4 4V4c0-1.103-.897-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg> },
        { name: "Machine Learning", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 5a3 3 0 100-6 3 3 0 000 6zm0 14a3 3 0 100-6 3 3 0 000 6zm-8-7a3 3 0 100-6 3 3 0 000 6zm16 0a3 3 0 100-6 3 3 0 000 6z"/><path d="M12 16.5c-2.3 0-4.38-1.07-5.8-2.79l.8-.82c1.28 1.55 3.1 2.61 5 2.61s3.72-1.06 5-2.61l.8.82c-1.42 1.72-3.5 2.79-5.8 2.79zM12 9.5c-1.9 0-3.72-1.06-5-2.61l.8-.82c1.28 1.55 3.1 2.61 5 2.61s3.72-1.06 5-2.61l.8.82c-1.28 1.55-3.1 2.61-5 2.61z"/></svg> },
        { name: "Medical Image Processing", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M19.03 17.616l-4.242-4.242a7.5 7.5 0 10-1.414 1.414l4.242 4.242a1 1 0 001.414-1.414zM10.5 16a5.5 5.5 0 110-11 5.5 5.5 0 010 11z"/><path d="M10.5 7H9v3.5H5.5v2H9v3.5h1.5V12.5h3.5v-2h-3.5z"/></svg> },
    ],
    "Programming Languages": [
        { name: "Python", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.23 8.31a.95.95 0 00-.94-.95H8.38a.95.95 0 00-.95.95v1.9c0 .52.43.95.95.95h1.9c.52 0 .95-.43.95-.95V8.31zm-2.85 9.49a.95.95 0 00.95.95h1.9a.95.95 0 00.95-.95v-1.9a.95.95 0 00-.95-.95H9.33a.95.95 0 00-.95.95v1.9zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm6.62 15.69a.95.95 0 01-.95.95h-1.9a.95.95 0 01-.95-.95v-1.9a.95.95 0 01.95-.95h.95v-1.9H13.8a.95.95 0 01-.95-.95V8.93H9.9v1.9h1.9c.52 0 .95.43.95.95v.95H9.9a.95.95 0 01-.95-.95V8.93a.95.95 0 01.95-.95h1.9a.95.95 0 01.95-.95h2.85c.52 0 .95.43.95.95v2.85c0 .52-.43.95-.95.95h-.95v1.9h1.9c.52 0 .95.43.95.95v1.9z"/></svg> },
        { name: "JAVA", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M18.5 3H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h1v4h2v-4h4v4h2v-4h1c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 12H6.5c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5h11c.3 0 .5.2.5.5v9c0 .3-.2.5-.5.5z"/><path d="M8 12h8v2H8z"/></svg> },
        { name: "C# .Net", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.5 11h-3v2h3v-2zm-5 0h-2v2h2v-2zm10 0h-2v2h2v-2zm-5 0h-2v2h2v-2zm-5-5H6.5v2h2v-2zm10 0h-2v2h2v-2zm-5 0h-2v2h2v-2zm-5 5H6.5v2h2v-2zM4 2v20h16V2H4zm14 18H6V4h12v16z"/></svg> },
        { name: "C++", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M15.42 13.94h-1.8v1.8h-1.28v-1.8h-1.8v-1.28h1.8v-1.8h1.28v1.8h1.8zm2.66-8.2L12 2.68 5.92 5.73v6.53L12 18.8l6.08-6.53V5.73zM12 0l12 3.87v9.05l-12 9.08L0 12.92V3.87zm5.92 13.94h-1.8v1.8h-1.28v-1.8h-1.8v-1.28h1.8v-1.8h1.28v1.8h1.8z"/></svg> },
        { name: "C", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.01 2C6.485 2 2 6.485 2 12s4.485 10 10.01 10C17.535 22 22 17.515 22 12S17.535 2 12.01 2zm3.84 14.12c-1.397.945-3.033 1.455-4.83 1.455-3.4 0-6.19-2.3-6.19-6.31s2.8-6.4 6.32-6.4c1.67 0 3.2.46 4.54 1.3l-1.5 2.2C13.295 9.715 12.285 9.4 11.025 9.4c-1.8 0-2.92 1.48-2.92 3.03s1.01 2.87 2.81 2.87c1.32 0 2.25-.43 3.01-1.04l1.65 2.26z"/></svg> },
        { name: "Assembly", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 18H4v-4h4v4zm0-6H4v-4h4v4zm6 6h-4v-4h4v4zm0-6h-4v-4h4v4zm6 6h-4v-4h4v4zm0-6h-4v-4h4v4z"/></svg> },
        { name: "HTML", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 1.252l-10.25 1.5v16.5l10.25 3.5 10.25-3.5v-16.5zm-8.25 2.72l8.25-1.18v16.9l-8.25-2.82zm10.25 14.08l-8.25 2.82v-8.4h6.5l.5-2h-7v-4h8.25z"/></svg> },
    ],
    "Hardware & Embedded Systems": [
        { name: "Arduino", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 6.5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM5.5 11h-2v2h2zm15 0h-2v2h2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg> },
        { name: "Microcontroller", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 2v2h-2V4h2zM8 4h2v2H8V4zm-2 16H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4v-2h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8v-2h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2zm0-4h-2V4h2v2z"/></svg> },
        { name: "Logisim", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M22 12c0 4.41-3.59 8-8 8h-1a8 8 0 01-8-8 8 8 0 018-8h1c4.41 0 8 3.59 8 8zM5 12c0 3.31 2.69 6 6 6h1c3.31 0 6-2.69 6-6s-2.69-6-6-6h-1c-3.31 0-6 2.69-6 6zM2 10h5v4H2zm15-4h5v4h-5z"/></svg> },
        { name: "Logicwork5", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M16.5 12c0-1.74-1.01-3.23-2.5-4v8c1.49-.77 2.5-2.26 2.5-4zM2 10h5v4H2zM21 12c0 3.3-2.7 6-6 6H9c-3.3 0-6-2.7-6-6s2.7-6 6-6h6c3.3 0 6 2.7 6 6z"/></svg> },
    ],
    "Web, DB & Analytics": [
        { name: "Web Development", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg> },
        { name: "UX/UI", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> },
        { name: "System Analytics", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4 9h4v11H4zm6-5h4v16h-4zm6 8h4v8h-4z"/></svg> },
        { name: "MySQL", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5V14h-1v2.5c0 .83-.67 1.5-1.5 1.5S7 19.33 7 18.5V14H6v4.5c0 1.66 1.34 3 3 3s3-1.34 3-3zm3-11v2h1V8h1.5c.83 0 1.5.67 1.5 1.5V12h1v-2.5c0-1.66-1.34-3-3-3H14zM5 12V9.5C5 8.67 5.67 8 6.5 8S8 8.67 8 9.5V12H5z"/></svg> },
        { name: "phpMyAdmin", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.5 15.5H12v-2h2.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H11v-2h3.5c1.93 0 3.5 1.57 3.5 3.5v2c0 1.93-1.57 3.5-3.5 3.5zm-6 0H6v-9h2.5c1.93 0 3.5 1.57 3.5 3.5v2c0 1.93-1.57 3.5-3.5 3.5zM8.5 8H10v2H8.5c-.83 0-1.5-.67-1.5-1.5S7.67 8 8.5 8z"/></svg> },
    ],
    "Scientific Computing & Math": [
        { name: "MATLAB", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="m11.97 1.99-.02.01c-2.22.42-4.13 1.63-5.59 3.51-.83 1.07-1.4 2.33-1.68 3.7l-.02.13c-.3 1.5.02 3.1.84 4.5l.03.05.41.67.4.65c1.4 2.32 3.63 3.96 6.22 4.67l.1.02c3.2.9 6.29-.12 8.4-2.52l.06-.07c1.3-1.52 2.08-3.37 2.2-5.32l.01-.16.01-.12.01-.17c.04-2.8-1.2-5.57-3.48-7.39-1.45-1.16-3.15-1.85-4.9-1.98Z"/></svg> },
        { name: "Numerical Linear Algebra", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17H5v-2h3v2zm0-4H5v-2h3v2zm0-4H5V7h3v2zm5 8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3V7h3v2zm5 8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3V7h3v2z"/></svg> },
        { name: "Numerical Analysis", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v12zm2-10h14v10H5V8zm4 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/></svg> },
        { name: "Large Scale Scientific Computing", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c3.95.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z"/></svg> },
    ],
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const gridVariants = {
    visible: {
        transition: { staggerChildren: 0.08 }
    },
    hidden: {}
};

const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};


const SkillItem: React.FC<{ name: string; icon: React.ReactNode }> = ({ name, icon }) => (
    <motion.div 
        variants={skillItemVariants}
        className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl transition-all duration-300 hover:bg-white/10"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.1, y: -10, z: 50 }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        <div style={{ transform: "translateZ(60px)" }}>{icon}</div>
        <span className="mt-2 text-sm font-medium text-center" style={{ transform: "translateZ(45px)" }}>{name}</span>
    </motion.div>
);

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24">
             <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <GlassCard>
                    <motion.h2 variants={categoryVariants} className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">My Skills</motion.h2>
                    <div className="space-y-10">
                        {Object.entries(skills).map(([category, skillList]) => (
                            <motion.div key={category} variants={categoryVariants}>
                                <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">{category}</h3>
                                <motion.div 
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                                    variants={gridVariants}
                                >
                                    {skillList.map(skill => <SkillItem key={skill.name} {...skill} />)}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </GlassCard>
            </motion.div>
        </section>
    );
};

export default Skills;

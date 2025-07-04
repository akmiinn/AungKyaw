import React from 'react';
import GlassCard from './common/GlassCard';
import { motion } from 'framer-motion';

const skills = {
    "Languages & Software": [
        { name: "Python", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.23 8.31a.95.95 0 00-.94-.95H8.38a.95.95 0 00-.95.95v1.9c0 .52.43.95.95.95h1.9c.52 0 .95-.43.95-.95V8.31zm-2.85 9.49a.95.95 0 00.95.95h1.9a.95.95 0 00.95-.95v-1.9a.95.95 0 00-.95-.95H9.33a.95.95 0 00-.95.95v1.9zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm6.62 15.69a.95.95 0 01-.95.95h-1.9a.95.95 0 01-.95-.95v-1.9a.95.95 0 01.95-.95h.95v-1.9H13.8a.95.95 0 01-.95-.95V8.93H9.9v1.9h1.9c.52 0 .95.43.95.95v.95H9.9a.95.95 0 01-.95-.95V8.93a.95.95 0 01.95-.95h1.9a.95.95 0 01.95-.95h2.85c.52 0 .95.43.95.95v2.85c0 .52-.43.95-.95.95h-.95v1.9h1.9c.52 0 .95.43.95.95v1.9z"/></svg> },
        { name: "C++", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M15.42 13.94h-1.8v1.8h-1.28v-1.8h-1.8v-1.28h1.8v-1.8h1.28v1.8h1.8zm2.66-8.2L12 2.68 5.92 5.73v6.53L12 18.8l6.08-6.53V5.73zM12 0l12 3.87v9.05l-12 9.08L0 12.92V3.87zm5.92 13.94h-1.8v1.8h-1.28v-1.8h-1.8v-1.28h1.8v-1.8h1.28v1.8h1.8z"/></svg> },
        { name: "JavaScript", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 128 128" fill="#EAEAEA"><path d="M49.2 106.3c1.2 2.3 3.6 3.6 6.8 3.6 3.2 0 5.3-1.4 5.3-3.4 0-2.3-2-3.3-5.6-4.7l-2.6-1c-5-2-8.3-5.4-8.3-11.2 0-5.4 4-9.6 11.2-9.6 5.2 0 9.2 2.3 11.4 6.8l-5.8 3.6c-1-1.8-2.4-2.6-4.8-2.6-2.2 0-3.6 1.1-3.6 2.8 0 2 1.4 2.8 4.5 4.1l2.6 1c6.1 2.3 9.4 5.8 9.4 11.6 0 6.6-4.5 10.8-12.8 10.8-6.8 0-11.2-2.8-13.4-7.6l6-3.5zm31.3-19.1c-2.4-3.5-6.5-5.6-11.2-5.6-8.5 0-14.5 6.3-14.5 14.7 0 8.6 6 14.8 14.6 14.8 5.1 0 9.2-2.1 11.5-6.1l-6-3.6c-1.4 2.1-3.3 3.4-5.6 3.4-3.6 0-5.8-2.6-5.8-6.3 0-3.8 2.2-6.4 5.7-6.4 2.3 0 4.2 1.2 5.5 3.3l6-3.4z"/></svg> },
        { name: "MATLAB", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="m11.97 1.99-.02.01c-2.22.42-4.13 1.63-5.59 3.51-.83 1.07-1.4 2.33-1.68 3.7l-.02.13c-.3 1.5.02 3.1.84 4.5l.03.05.41.67.4.65c1.4 2.32 3.63 3.96 6.22 4.67l.1.02c3.2.9 6.29-.12 8.4-2.52l.06-.07c1.3-1.52 2.08-3.37 2.2-5.32l.01-.16.01-.12.01-.17c.04-2.8-1.2-5.57-3.48-7.39-1.45-1.16-3.15-1.85-4.9-1.98Z"/></svg> },
    ],
    "AI / ML": [
        { name: "TensorFlow", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="m12.012 1.584.012.012c4.896.792 8.616 5.028 8.616 9.972 0 4.944-3.72 9.18-8.616 9.972l-.012.012-6.036-3.48-2.58-1.488V9.432l2.58-1.488zm0 1.296L5.976 6.36v11.28l6.036 3.48 6.036-3.48V6.36zm0 4.38L9.108 8.94v2.58L12.012 13.2v2.58l-2.904 1.68v2.58l6.036-3.48v-2.58l-2.904-1.68V8.94z"/></svg> },
        { name: "PyTorch", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.247 11.933a6.236 6.236 0 01-2.09.395c-3.456 0-6.26-2.793-6.26-6.237C3.897 2.628 6.702 0 10.16 0c3.48 0 6.26 2.535 6.26 6.095a6.273 6.273 0 01-3.111 5.373L7.962 18.04l4.285 5.96a.987.987 0 001.31.396.983.983 0 00.396-1.31l-3.23-4.505zM10.16 1.96c-2.34 0-4.24 1.88-4.24 4.228 0 2.34 1.9 4.227 4.24 4.227a4.24 4.24 0 003.11-1.423l.024-.023a4.238 4.238 0 001.106-2.804c0-2.256-1.9-4.228-4.24-4.228z"/></svg> },
        { name: "Scikit-learn", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.97 17.065a.555.555 0 010 .78l-3.475 3.475a.555.555 0 01-.78 0l-1.39-1.39a.555.555 0 010-.78L9.8 15.675a.555.555 0 01.78 0zm11.7-1.1L18.495.785a.555.555 0 00-.78 0l-3.475 3.475a.555.555 0 000 .78l6.535 6.535a.555.555 0 00.78 0l2.12-2.12a.555.555 0 000-.78zM4.755 12.02a.555.555 0 00-.78 0l-3.475 3.475a.555.555 0 000 .78l1.39 1.39a.555.555 0 00.78 0L6.145 14.19a.555.555 0 000-.78z"/></svg> },
        { name: "Pandas", icon: <svg role="img" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4.5 1.5v12h3V1.5h-3zm6.75 3v12h3V4.5h-3zm6.75 2.25v12h3V6.75h-3zM3 19.5v3h18v-3H3z"/></svg> },
    ],
    "Hardware & Tools": [
        { name: "FPGA", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2H4v3H2v2h2v2h3V7h2V5H7V2zm10 0h3v3h2v2h-2v2h-3V7h-2V5h2V2zM7 15H4v-2H2v2h2v3h3v2h2v-2H7v-3zm10 0h3v-2h2v2h-2v3h-3v2h-2v-2h2v-3zM9 9h6v6H9V9z"/></svg> },
        { name: "VHDL", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v4l-4-2-4 2-4-2-4 2v10l4-2 4 2 4-2 4 2v4H3V3zm2 4.236L7 6l2 1.236V16L7 14.764 5 16V7.236zm6 0L13 6l2 1.236V16l-2-1.236L11 16V7.236z"/></svg> },
        { name: "Git", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="#EAEAEA"><path d="M22.3 8.8c-.5-1.4-1.3-2.6-2.5-3.5c-1.1-.9-2.5-1.4-4-1.4H8.2c-.3 0-.5.1-.7.3L.7 10.9c-.2.2-.3.4-.3.7v.8c0 .3.1.5.3.7l6.8 6.8c.2.2.4.3.7.3h10.6c1.5 0 2.9-.5 4-1.4c1.2-.9 2-2.1 2.5-3.5c.5-1.4.6-2.9.1-4.4s-1.3-2.8-2.5-3.8zM20 12.8c0 .7-.2 1.4-.6 2c-.4.6-.9 1.1-1.5 1.4c-.6.3-1.3.5-2 .5H8.2L2 10.4l6.2-6.2h7.7c1.4 0 2.6.5 3.5 1.5s1.4 2.1 1.5 3.5c.2.7.1 1.4-.1 2.1s-.6 1.3-1.1 1.9zm-8.8-5.6l-3.5 3.5l3.5 3.5c.2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3L6 12l3.5-3.5c.2-.2.4-.3.7-.3s.5.1.7.3c.2.2.3.4.3.7s-.1.5-.3.7z"/></svg> },
        { name: "VS Code", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="#EAEAEA"><path d="m23.1 8.2l-6.2-6.2c-.6-.6-1.6-.6-2.2 0L2.3 14.3c-.6.6-.6 1.6 0 2.2l6.2 6.2c.6.6 1.6.6 2.2 0l12.4-12.3c.6-.6.6-1.7 0-2.2zM7.9 19.3L2.7 14l10.4-10.4l5.2 5.2L7.9 19.3z"/><path d="m0 14l5.2-5.2l2.8 2.8L2.8 16.8z"/></svg> },
    ]
};

const SkillItem: React.FC<{ name: string; icon: React.ReactNode }> = ({ name, icon }) => (
    <motion.div 
        className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl transition-all duration-300 hover:bg-white/10"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.1, y: -10, z: 50 }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        <div style={{ transform: "translateZ(60px)" }}>{icon}</div>
        <span className="mt-2 text-sm font-medium text-center" style={{ transform: "translateZ(45px)" }}>{name}</span>
    </motion.div>
);

const listVariants = {
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    },
    hidden: { opacity: 0 }
};

const itemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 }
}

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <GlassCard>
                    <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">My Skills</h2>
                    <div className="space-y-10">
                        {Object.entries(skills).map(([category, skillList]) => (
                            <div key={category}>
                                <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">{category}</h3>
                                <motion.div 
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                                    variants={listVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    {skillList.map(skill => <motion.div variants={itemVariants} key={skill.name}><SkillItem {...skill} /></motion.div>)}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </motion.div>
        </section>
    );
};

export default Skills;

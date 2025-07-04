import React from 'react';
import GlassCard from './common/GlassCard';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const projects = [
    {
        title: "AI Symptom Checker",
        description: "A machine learning model deployed in a web app that helps users identify potential conditions based on their symptoms, powered by a TensorFlow backend.",
        image: "https://picsum.photos/seed/project-ai-1/600/400",
        tags: ["Python", "TensorFlow", "React", "FastAPI"],
        link: "#",
    },
    {
        title: "Medical Image Analysis",
        description: "Developed a convolutional neural network (CNN) to detect anomalies in medical scans like X-rays, achieving high accuracy in testing.",
        image: "https://picsum.photos/seed/project-ai-2/600/400",
        tags: ["Python", "PyTorch", "CNN", "Medical Imaging"],
        link: "#",
    },
    {
        title: "FPGA-based Heart Rate Monitor",
        description: "Designed and implemented a real-time heart rate monitoring system on an FPGA, focusing on low-latency signal processing.",
        image: "https://picsum.photos/seed/project-hw-1/600/400",
        tags: ["VHDL", "FPGA", "Quartus", "Hardware Design"],
        link: "#",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' } },
};

const ProjectCard: React.FC<typeof projects[0]> = ({ title, description, image, tags, link }) => (
    <motion.div 
        variants={itemVariants} 
        className="h-full"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
        <GlassCard className="flex flex-col overflow-hidden !p-0 h-full">
            <div className="flex flex-col h-full" style={{ transformStyle: "preserve-3d" }}>
                <div className="overflow-hidden" style={{transform: "translateZ(-50px) scale(1.1)"}}>
                    <img src={image} alt={title} loading="lazy" className="w-full h-48 object-cover filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out transform hover:scale-110" />
                </div>
                <div className="p-6 flex flex-col flex-grow" style={{ transform: "translateZ(50px)" }}>
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag) => (
                            <span key={tag} className="bg-white/10 text-white/80 text-xs font-semibold px-2.5 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <a href={link} className="text-white font-bold mt-auto self-start hover:underline">
                        View Project &rarr;
                    </a>
                </div>
            </div>
        </GlassCard>
    </motion.div>
);

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24">
            <motion.h2 
                className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                My Work
            </motion.h2>
            <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
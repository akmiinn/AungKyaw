import React from 'react';
import GlassCard from './common/GlassCard';
import { motion, type Variants } from 'framer-motion';

const projects = [
    {
        title: "BurmaFoodie",
        description: "A conversational AI chatbox deployed as a web application to help users explore Burmese cuisine, providing dish recommendations, ingredient details, and recipes.",
        image: "/aungkyawmin.jpg",
        tags: ["Python", "NLP", "Flask", "HTML/CSS"],
        link: "https://www.burmafoodie.site",
    },
    {
        title: "Sign Language Detection System",
        description: "A real-time application that utilizes a machine learning model to recognize and translate sign language gestures into text, facilitating communication between signers and non-signers.",
        image: "/signlanguage.jpg",
        tags: ["Python", "TensorFlow", "OpenCV", "React"],
        link: "https://www.figma.com/proto/nNQhZR8XsbvQq85z95Lf9f/SE?node-id=757-3963&viewport=454%2C669%2C0.27&t=DjwGBoRZyc5fpLmB-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=757%3A3963&show-proto-sidebar=1",
    },
    {
        title: "Automatic Agricultural Watering System",
        description: "An IoT-based project that automates crop irrigation using soil moisture sensors to activate a water pump when necessary, promoting water conservation and ensuring optimal plant growth.",
        image: "/wateringsystem.jpg",
        tags: ["Arduino", "C++", "Sensors", "IoT"],
        link: "https://youtu.be/LYY35AYcGJ0?si=GXSKsuJD3hN-ClEX",
    },
    {
        title: "Hybridus Task Manager",
        description: "A full-stack web application designed for effective task and time management. It allows users to organize schedules, track project deadlines, and manage their to-do lists through a clean and intuitive user interface.",
        image: "/taskmanager.png",
        tags: ["React", "Node.js", "MySQL", "HTML/CSS"],
        link: "https://www.hybridus.site",
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const ProjectCard: React.FC<typeof projects[0]> = ({ title, description, image, tags, link }) => {
    return (
        <motion.div 
            className="h-full"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
            <GlassCard className="h-full">
                <div className="flex flex-col h-full">
                    <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                        <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow flex flex-col">
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="text-sm text-gray-400 mt-2">{description}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                            {tags.map(tag => (
                                <span key={tag} className="bg-white/10 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold text-white/80 hover:text-white transition-colors mt-4">
                            View Project →
                        </a>
                    </div>
                </div>
            </GlassCard>
        </motion.div>
    );
};


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
                className="grid md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;

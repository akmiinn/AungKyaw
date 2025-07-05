import React from 'react';
import GlassCard from './common/GlassCard';
import { motion } from 'framer-motion';

const experiences = [
    {
        type: 'Practical Experience',
        title: 'Implementation Intern',
        company: 'NECTEC',
        duration: 'May 2025 - Present',
        description: [
            'Developed hardware model for wave simulation on measuring the coastals erosion measurement.'
        ],
        image: '/nectec-wave-sim.jpg',
    },
    {
        type: 'Practical Experience',
        title: 'Data Analytics Intern',
        company: 'NECTEC',
        duration: 'May 2025 - Jul 2025',
        description: [
            'Data visualization on proposed method wave data to measured data from coastal region.'
        ],
        image: '/nectec-data-vis.jpg',
    },
    {
        type: 'Research Intern',
        title: 'Object Detection and Classification Using LiDAR',
        company: 'Mobile Mapping Research',
        duration: 'May 2024 - Jan 2025',
        description: [
            'Used dataset and divided categories including testing, preprocessing, modeling, training, and validation.'
        ],
        image: '/lidar-research.jpg',
    },
    {
        type: 'Research Assistant',
        title: 'Image Processing Internship',
        company: 'Moments for Image Processing',
        duration: 'May 2024 - Feb 2025',
        description: [
            'Studied and developed algorithms for enhancing, segmenting, and classifying digital images using Python, MATLAB, and machine learning techniques.',
            'Aim: Improve image recognition accuracy.'
        ],
        image: '/image-processing-internship.jpg',
    },
    {
        type: 'Research Project',
        title: 'Automatic Hemorrhage (HE) Localization in OCT Images',
        company: 'RPD 2024',
        duration: 'May 2024 - Present',
        description: [
            'Studied characteristics of HE in OCT images.',
            'Developed programs to localize Hemorrhages in OCT images.'
        ],
        image: '/oct-hemorrhage.jpg',
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24">
            <motion.h2 
                className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                Experience
            </motion.h2>
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
                    >
                        <GlassCard className={`bg-white/[.06]`}>
                           <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-1/3 w-full flex-shrink-0">
                                    <img src={exp.image} alt={exp.title} loading="lazy" className="rounded-2xl w-full h-56 object-cover" />
                                </div>
                                <div className="md:w-2/3">
                                    <span className="text-sm font-semibold text-gray-400">{exp.type}</span>
                                    <h3 className="text-2xl font-bold mt-1">{exp.title}</h3>
                                    <p className="text-md text-gray-300 font-medium mt-1">{exp.company} | {exp.duration}</p>
                                    <ul className="mt-4 space-y-2 text-gray-400 list-disc list-inside">
                                        {exp.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                           </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

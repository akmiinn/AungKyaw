import React from 'react';
import GlassCard from './GlassCard';
import { motion } from 'framer-motion';

export interface TimelineItem {
    type: string;
    title: string;
    company: string;
    duration: string;
    description: string[];
    image: string;
    link?: string;
}

interface TimelineSectionProps {
    id: string;
    heading: string;
    items: TimelineItem[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ id, heading, items }) => {
    return (
        <section id={id} className="py-24">
            <motion.h2
                className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                {heading}
            </motion.h2>
            <div className="space-y-12">
                {items.map((exp, index) => {
                    const cardContent = (
                        <GlassCard className={`bg-white/[.06] hover:bg-white/[.1] transition cursor-pointer`}>
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
                    );

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            {exp.link ? (
                                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="block">
                                    {cardContent}
                                </a>
                            ) : (
                                cardContent
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default TimelineSection;

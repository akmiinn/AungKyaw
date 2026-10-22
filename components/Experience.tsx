import React from 'react';
import GlassCard from './common/GlassCard';
import { motion } from 'framer-motion';

const experiences = [
    {
        type: 'Professional Experience',
        title: 'AI Automation Executive',
        company: 'FUNNOW Group',
        duration: 'Aug 2026 - Present',
        description: [
            'Full-time role following internship conversion. Building internal workplace AI implementations with n8n and integrating them across departments.'
        ],
        image: '/funnow.jpg',
    },
    {
        type: 'Professional Experience',
        title: 'AI Automation Executive Intern',
        company: 'FUNNOW Group',
        duration: 'Jan 2026 - Jul 2026',
        description: [
            'Prototyped n8n automation workflows for internal teams, including a Slack-based recruitment approval bot.'
        ],
        image: '/funnow.jpg',
    },
    {
        type: 'Professional Experience',
        title: 'Service Application Engineer Intern',
        company: 'Bosch Rexroth',
        duration: 'Aug 2025 - Nov 2025',
        description: [
            'Developed the software interface between PLC and hydraulic machinery for a web controller, including hardware component design and HMI design for display over wired/wireless connection.'
        ],
        image: '/ctrlX.jpg',
        link: 'https://www.bosch.com',
    },
    {
        type: 'Professional Experience',
        title: 'Data Analytics and Implementation Intern',
        company: 'NECTEC',
        duration: 'May 2025 - Present',
        description: [
            'Data visualisation comparing proposed-method wave data against measured data from the coastal region.',
            'Developed a hardware model for wave simulation to measure coastal erosion.'
        ],
        image: '/datavis.jpg',
        link: 'https://www.nectec.or.th',
    },
    {
        type: 'Research & Publication',
        title: "Master's Thesis - Fileless Malware Detection via Intel Pin DBI",
        company: 'SIIT, Thammasat University',
        duration: '2026 - Present',
        description: [
            'Developing a C++ Intel Pin dynamic binary instrumentation tool that instruments powershell.exe and correlates runtime API behaviour with Sysmon telemetry to detect fileless execution.',
            'Static frequency analysis across a 340-sample MalwareBazaar malware corpus against 102 benign administration scripts, making watched-API selection and noise filtering data-driven.',
            'Ongoing survey of anti-analysis and evasion techniques used by fileless threats.'
        ],
        image: '/pintool.jpg',
    },
    {
        type: 'Research & Publication',
        title: 'Interpretable AI for Meditation Experience Classification (EEG)',
        company: 'IIAI-AAI 2026 | Published',
        duration: 'Aug 2025 - Jul 2026',
        description: [
            'Brainwave-based prediction using EEG and ensemble learning with subject-independent validation.',
            'Cross-device state classification with feature engineering, signal processing, model training and personalised insight visualisation.'
        ],
        image: '/brain.jpg',
        link: 'https://ieeexplore.ieee.org/document/11685083',
    },
    {
        type: 'Research & Publication',
        title: 'Adaptive Sampling Based on Spectral Analysis for Real-Time Coastal Erosion Monitoring',
        company: 'iSAI-NLP 2025 | Published',
        duration: 'Jul 2025 - Dec 2025',
        description: [
            'Real-time simulation of sinusoidal wavelets in comparison analysis against a fixed water-level sampling rate.',
            'Developed adaptive controller sampling driven by wave height.'
        ],
        image: '/coastal.jpg',
        link: 'https://ieeexplore.ieee.org/document/11320703',
    },
    {
        type: 'Research Experience',
        title: 'Object Detection and Classification Using LiDAR',
        company: 'Mobile Mapping Research',
        duration: 'May 2024 - Jan 2025',
        description: [
            'Dataset preparation and pipeline stages: preprocessing, modelling, training, validation and testing.'
        ],
        image: '/lidar.jpg',
    },
    {
        type: 'Research Experience',
        title: 'Moments for Image Processing - Research Assistant',
        company: 'SIIT, Thammasat University',
        duration: 'May 2024 - Feb 2025',
        description: [
            'Developed algorithms for enhancing, segmenting and classifying digital images using Python, MATLAB and machine learning techniques.',
            'Aim: improve image recognition accuracy.'
        ],
        image: '/imageprocessing.jpg',
    },
    {
        type: 'Research Experience',
        title: 'Automatic Hemorrhage (HE) Localisation in OCT Images',
        company: 'RPD 2024',
        duration: 'May 2024 - Jan 2025',
        description: [
            'Studied characteristics of hemorrhages in OCT images.',
            'Developed programs to localise hemorrhages in OCT images.'
        ],
        image: '/rdp.jpg',
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
                {experiences.map((exp, index) => {
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
                            whileInView={{

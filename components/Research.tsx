import React from 'react';
import TimelineSection, { type TimelineItem } from './common/TimelineSection';

const research: TimelineItem[] = [
    {
        type: "Master's Thesis",
        title: "Fileless Malware Detection via Intel Pin DBI",
        company: 'SIIT, Thammasat University',
        duration: '2026 - Present',
        description: [
            'Developing a C++ Intel Pin dynamic binary instrumentation tool that instruments powershell.exe and correlates runtime API behaviour with Sysmon telemetry to detect fileless execution.',
            'Static frequency analysis across a 340-sample MalwareBazaar malware corpus against 102 benign administration scripts, making watched-API selection and noise filtering data-driven.',
            'Ongoing survey of anti-analysis and evasion techniques used by fileless threats.'
        ],
        image: '/pintoo.jpg',
    },
    {
        type: 'Published Paper',
        title: 'Interpretable AI for Meditation Experience Classification (EEG)',
        company: 'IIAI-AAI 2026',
        duration: 'Aug 2025 - Jul 2026',
        description: [
            'Brainwave-based prediction using EEG and ensemble learning with subject-independent validation.',
            'Cross-device state classification with feature engineering, signal processing, model training and personalised insight visualisation.'
        ],
        image: '/brain.jpg',
        link: 'https://ieeexplore.ieee.org/document/11685083',
    },
    {
        type: 'Published Paper',
        title: 'Adaptive Sampling Based on Spectral Analysis for Real-Time Coastal Erosion Monitoring',
        company: 'iSAI-NLP 2025',
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
        type: 'Research Assistant',
        title: 'Moments for Image Processing',
        company: 'SIIT, Thammasat University',
        duration: 'May 2024 - Feb 2025',
        description: [
            'Developed algorithms for enhancing, segmenting and classifying digital images using Python, MATLAB and machine learning techniques.',
            'Aim: improve image recognition accuracy.'
        ],
        image: '/imageprocessing.jpg',
    },
    {
        type: 'Research Project',
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

const Research: React.FC = () => (
    <TimelineSection id="research" heading="Research & Publications" items={research} />
);

export default Research;

import React from 'react';
import TimelineSection, { type TimelineItem } from './common/TimelineSection';

const experiences: TimelineItem[] = [
    {
        type: 'Full-time',
        title: 'AI Automation Executive',
        company: 'FUNNOW Group',
        duration: 'Aug 2026 - Present',
        description: [
            'Full-time role following internship conversion. Building internal workplace AI implementations with n8n and integrating them across departments.'
        ],
        image: '/funnow.jpg',
    },
    {
        type: 'Internship',
        title: 'AI Automation Executive Intern',
        company: 'FUNNOW Group',
        duration: 'Jan 2026 - Jul 2026',
        description: [
            'Prototyped n8n automation workflows for internal teams, including a Slack-based recruitment approval bot.'
        ],
        image: '/funnow.jpg',
    },
    {
        type: 'Internship',
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
        type: 'Internship',
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
];

const Experience: React.FC = () => (
    <TimelineSection id="experience" heading="Experience" items={experiences} />
);

export default Experience;


import React from 'react';
import GlassCard from './common/GlassCard';
import { motion } from 'framer-motion';

const socialLinks = [
    {
        name: "GitHub",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
        url: "https://github.com/akmiinn"
    },
    {
        name: "LinkedIn",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
        url: "https://www.linkedin.com/in/aungkyawminsyian?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
        name: "Email",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>,
        url: "mailto:sssyiannn@gmail.com"
    }
];

const Contact: React.FC = () => {
    return (
        <motion.section 
            id="contact" 
            className="py-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <GlassCard className="text-center">
                <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">Get In Touch</h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    I'm currently open to new opportunities and experience. Feel free to reach out if you have a project in mind or just want to connect.
                </p>
                <div className="flex justify-center items-center gap-12">
                    {socialLinks.map(link => (
                        <motion.a 
                            key={link.name} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={link.name}
                            className="text-white/70 hover:text-white transition-colors duration-300"
                            whileHover={{ scale: 1.2, y: -4 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </div>
            </GlassCard>
            <footer className="text-center mt-12 text-gray-500">
                <p>&copy; {new Date().getFullYear()} Aung Kyaw Min. All Rights Reserved.</p>
                <p className="text-sm">Built with React, Framer Motion & Tailwind CSS.</p>
            </footer>
        </section>
    );
};

export default Contact;

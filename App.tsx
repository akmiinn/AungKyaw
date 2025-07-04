import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Background from './components/common/Background';

const App: React.FC = () => {
    return (
        <div className="min-h-screen w-full relative">
            <Background />
            <Header />
            <main 
                className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-24 relative z-10"
                style={{ perspective: '2000px' }}
            >
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </div>
    );
};

export default App;
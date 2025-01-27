import { useState, useEffect } from 'react';
import { DotNavigation } from './components/Navigation/DotNavigation';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Skills } from './components/Sections/Skills';
import { SocialLinks } from './components/UI/SocialLinks';
import { Header } from './components/Navigation/Header';
import { Experience } from './components/Sections/Experience';
import { AnimatedBackground } from './components/Background/AnimatedBackground';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <AnimatedBackground />
      <Header />
      <DotNavigation activeSection={activeSection} />
      <div className="relative pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import MatrixBackground from './components/MatrixBackground';
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <MatrixBackground />
      <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
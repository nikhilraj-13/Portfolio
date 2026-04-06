import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Certificates from './components/Certificates';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import StarBackground from './components/StarBackground';
import LightBackground from './components/LightBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-container">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          {theme === 'dark' ? <StarBackground /> : <LightBackground />}
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />

            <Certificates />
            <Contact />
          </main>

          {/* Simple Footer */}
          <footer className="footer section">
            <p>© {new Date().getFullYear()} NIKHIL RAJ. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app-container">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <StarBackground />
          <Navbar />
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

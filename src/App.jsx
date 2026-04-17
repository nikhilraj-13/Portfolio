import React, { useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Hackathons from './components/Hackathons';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import StarBackground from './components/StarBackground';
import LightBackground from './components/LightBackground';

const sectionFromPathname = (pathname) => {
  switch (pathname) {
    case '/skills':
      return 'skills';
    case '/projects':
      return 'projects';
    case '/certificates':
      return 'certificates';
    case '/hackathons':
      return 'hackathons';
    case '/contact':
      return 'contact';
    default:
      return null;
  }
};

const pathnameFromSectionId = (sectionId) => {
  switch (sectionId) {
    case 'home':
      return '/';
    case 'skills':
      return '/skills';
    case 'projects':
      return '/projects';
    case 'certificates':
      return '/certificates';
    case 'hackathons':
      return '/hackathons';
    case 'contact':
      return '/contact';
    default:
      return null;
  }
};

const isScrollSpyPathname = (pathname) => pathname === '/' || sectionFromPathname(pathname) !== null;

const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'certificates', 'hackathons', 'contact'];

function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects limit={3} showViewAllButton={true} viewAllTo="/allProjects" />
        <Certificates limit={3} showViewAllButton={true} viewAllTo="/allCertificates" />
        <Hackathons />
        <Contact />
      </main>

      <footer className="footer section">
        <p>© {new Date().getFullYear()} NIKHIL RAJ. All rights reserved.</p>
      </footer>
    </>
  );
}

function AllProjectsPage() {
  return (
    <main>
      <Projects
        limit={null}
        showViewAllButton={false}
        title="All Projects"
        subtitle="A complete list of my projects."
      />
    </main>
  );
}

function AllCertificatesPage() {
  return (
    <main>
      <Certificates
        limit={null}
        showViewAllButton={false}
        title="All Certifications"
        subtitle="A complete list of my certifications."
      />
    </main>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();
  const navigate = useNavigate();
  const pathnameRef = useRef(location.pathname);
  const skipNextScrollRef = useRef(false);
  const activeSectionRef = useRef(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    pathnameRef.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    if (isLoading) return;
    if (skipNextScrollRef.current) {
      skipNextScrollRef.current = false;
      return;
    }

    const sectionId = sectionFromPathname(location.pathname);

    const scroll = () => {
      if (!sectionId) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        return;
      }

      const el = document.getElementById(sectionId);
      if (!el) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        return;
      }

      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const raf = requestAnimationFrame(scroll);
    const t = setTimeout(scroll, 50);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [isLoading, location.pathname]);

  useEffect(() => {
    if (isLoading) return;
    if (!isScrollSpyPathname(location.pathname)) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const sectionId = visible[0].target.id;

        if (!sectionId || activeSectionRef.current === sectionId) return;

        activeSectionRef.current = sectionId;
        const nextPath = pathnameFromSectionId(sectionId);
        if (!nextPath) return;
        if (pathnameRef.current === nextPath) return;

        skipNextScrollRef.current = true;
        navigate(nextPath, { replace: true });
      },
      {
        root: null,
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.4, 0.6, 0.75],
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading, location.pathname, navigate]);

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/certificates" element={<Home />} />
            <Route path="/hackathons" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/allProjects" element={<AllProjectsPage />} />
            <Route path="/allProject" element={<AllProjectsPage />} />
            <Route path="/allCertificates" element={<AllCertificatesPage />} />
            <Route path="/allCertificate" element={<AllCertificatesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

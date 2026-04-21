import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Youtube, X, Gamepad2, Copy, Code, Server, Layers, LayoutGrid, PenTool } from 'lucide-react';
import './Projects.css';

const Projects = ({
  limit = null,
  showViewAllButton = true,
  viewAllTo = '/allProjects',
  title = 'Projects',
  subtitle = 'Explore my diverse portfolio spanning games, clones, figma designs, frontend, backend, and full-stack applications.',
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All', icon: <LayoutGrid size={18} /> },
    { id: 'games', label: 'Games', icon: <Gamepad2 size={18} /> },
    { id: 'clones', label: 'Clones', icon: <Copy size={18} /> },
    { id: 'figma', label: 'Figma', icon: <PenTool size={18} /> },
    { id: 'frontend', label: 'Frontend', icon: <Code size={18} /> },
    { id: 'backend', label: 'Backend', icon: <Server size={18} /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Layers size={18} /> },
  ];

  // TODO: Replace with your actual project data
  const projectsData = {
    games: [
      {
        id: 'g1',
        name: 'Memory Flip Card Game',
        description: 'Interactive memory card matching game with move counter, timer, and score tracking. Features smooth card flip animations and responsive design.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        image: '/project-memory-game.png',
        github: 'https://github.com/nikhilraj-13/Game/tree/main/Memory-Flip-Card-Game',
        demo: 'https://flip-card-game-test-your-memory.netlify.app/',
        youtube: null
      },
      {
        id: 'g2',
        name: 'Tic-Tac-Toe AI',
        description: 'Classic game with AI opponent using minimax algorithm.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        image: '/project-tictactoe.png',
        github: 'https://github.com/nikhilraj-13/Game/tree/main/tic-tac-toe',
        demo: 'https://tic-tac-toe-kr.netlify.app/',
        youtube: null
      },
      {
        id: 'g3',
        name: 'Click Counter Game',
        description: 'Interactive click counter game with score tracking and animations.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        image: '/project-click-counter.png',
        github: 'https://github.com/nikhilraj-13/Game/tree/main/Click-counter-game',
        demo: 'https://click-counter-game-kr.netlify.app/',
        youtube: null
      },
    ],
    clones: [
      {
        id: 'c2',
        name: 'Amazon Clone',
        description: 'E-commerce interface with product catalog and cart functionality.',
        tech: ['React', 'Node.js', 'MongoDB'],
        image: '/project-amazon.png',
        github: '#',
        demo: '#',
        youtube: null
      },
      {
        id: 'c3',
        name: 'Zerodha Clone',
        description: 'Financial trading platform UI with real-time market data and trading features.',
        tech: ['HTML', 'CSS'],
        image: '/project-Zerodha.png',
        github: 'https://github.com/nikhilraj-13/Websites-clone-By-HTML-and-CSS/tree/main/Zerodha-clone',
        demo: 'https://zerodha-n.netlify.app/',
        youtube: null
      }
    ],
    frontend: [
      {
        id: 'f1',
        name: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with React.',
        tech: ['React', 'Vite', 'CSS3'],
        image: '/project-portfolio.png',
        github: 'https://github.com/nikhilraj-13/Portfolio',
        demo: 'https://nikhil-raj-13-portfolio.vercel.app/',
        youtube: null
      },
      {
        id: 'f2',
        name: 'Weather Dashboard',
        description: 'Real-time weather application with forecasts.',
        tech: ['JavaScript', 'API Integration', 'CSS3'],
        image: '/project-weather.png',
        github: 'https://github.com/nikhilraj-13',
        demo: null,
        youtube: null
      }
    ],
    figma: [
      {
        id: 'f1',
        name: 'Portfolio Design',
        description: 'Modern portfolio website design with dark theme and smooth animations.',
        tech: ['UI/UX', 'Figma', 'Prototyping'],
        image: '/project-portfolio-figma.png',
        demo: 'https://figma.com',
        youtube: null
      }
    ],
    backend: [],
    fullstack: [],
  };

  // Get all projects for 'All' category
  const allProjects = Object.values(projectsData).flat();
  
  const visibleProjects = selectedCategory === 'all' 
    ? allProjects 
    : projectsData[selectedCategory] || [];

  return (
    <section id="projects" className="section projects-section">
      <div className="container projects-container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">
            {subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="project-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {(limit ? visibleProjects.slice(0, limit) : visibleProjects).map((project) => (
            <div
              key={project.id}
              className="project-card"
            >
              <div className="project-image-wrapper" onClick={() => setSelectedProject(project)}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/1a1a1a/ffffff?text=${encodeURIComponent(project.name)}`;
                  }}
                />
                <div className="project-overlay">
                  <span className="view-details-text">View Details</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-techs">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="project-tech">{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.youtube && (
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn btn-youtube"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Youtube size={16} /> YouTube
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn btn-demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn btn-source"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} /> Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {showViewAllButton && viewAllTo && (
          <div className="section-cta">
            <button
              type="button"
              className="view-all-btn"
              onClick={() => navigate(viewAllTo)}
            >
              View All Projects
            </button>
          </div>
        )}
      </div>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">PROJECT EXPLORER</span>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <X size={18} />
              </button>
            </div>

            <div className="modal-image-container">
              <img src={selectedProject.image} alt={selectedProject.name} className="modal-image" />
            </div>

            <div className="modal-body">
              <div className="modal-info">
                <h2 className="modal-project-name">{selectedProject.name}</h2>
                <p className="modal-project-desc">{selectedProject.description}</p>
                <div className="modal-techs">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="modal-btn btn-demo-cyan">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
                {selectedProject.youtube && (
                  <a href={selectedProject.youtube} target="_blank" rel="noopener noreferrer" className="modal-btn btn-youtube">
                    <Youtube size={18} /> YouTube
                  </a>
                )}
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-btn btn-source">
                    <Github size={18} /> Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

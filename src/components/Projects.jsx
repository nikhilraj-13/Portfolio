import React from 'react';
import { ExternalLink, Github, Star, GitFork, Layout, ShoppingCart, Cloud } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Website",
      description: "Modern online store with product filtering, cart, and payment system.",
      lang: "JavaScript",
      icon: <ShoppingCart size={24} />,
      github: "https://github.com/nikhilraj-13",
      demo: "https://portfolio-ni.vercel.app",
      stars: 10,
      forks: 4
    },
    {
      id: 2,
      name: "Portfolio Website",
      description: "Personal portfolio to showcase my design and coding projects.",
      lang: "React",
      icon: <Layout size={24} />,
      github: "https://github.com/nikhilraj-13",
      demo: "https://portfolio-ni.vercel.app",
      stars: 15,
      forks: 3
    },
    {
      id: 3,
      name: "Weather App",
      description: "Responsive app showing real-time weather data using API integration.",
      lang: "API",
      icon: <Cloud size={24} />,
      github: "https://github.com/nikhilraj-13",
      demo: "https://portfolio-ni.vercel.app",
      stars: 8,
      forks: 2
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">FEATURED WORK</h2>
          <p className="projects-subtitle">
            A showcase of my recent projects demonstrating expertise in full-stack 
            development, modern frameworks, and creative problem-solving.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-stats">
                  <div className="stat-item">
                    <Star size={14} />
                    <span>{project.stars}</span>
                  </div>
                  <div className="stat-item">
                    <GitFork size={14} />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-lang">{project.lang}</div>
              
              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-code">
                  <Github size={18} /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-demo">
                  <ExternalLink size={18} /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
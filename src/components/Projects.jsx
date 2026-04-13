import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Youtube, X } from 'lucide-react';
import './Projects.css';

const Projects = ({
  limit = 3,
  showViewAllButton = true,
  viewAllTo = '/allProjects',
  title = 'Featured Work',
  subtitle = 'A showcase of my recent projects demonstrating expertise in full-stack development, modern frameworks, and creative problem-solving.',
}) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: "Life of a Developer",
      tech: ["React", "Tailwind CSS"],
      description: "“Life of a Developer” is an interactive storytelling web experience that humorously captures the journey of becoming a software developer.",
      image: "https://images.unsplash.com/photo-1557821552-1710514109b4?auto=format&fit=crop&q=80&w=800",
      demo: "#",
      github: "#",
      youtube: "#"
    },
    {
      id: 2,
      name: "Portfolio Website",
      tech: ["React", "CSS"],
      description: "Personal portfolio to showcase my design and coding projects using creative and modern web features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      demo: "https://nikhil-raj-13-portfolio.vercel.app/",
      github: "https://github.com/nikhilraj-13/Portfolio",
      youtube: ""
    },
    {
      id: 3,
      name: "Weather App",
      tech: ["API", "JavaScript"],
      description: "Responsive app showing real-time weather data using API integration, completely built from scratch.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
      demo: "#",
      github: "https://github.com/nikhilraj-13",
      youtube: ""
    }
  ];

  const visibleProjects = typeof limit === 'number' ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="section projects-section">
      <div className="container projects-container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">
            {subtitle}
          </p>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.name} className="project-image" />
                <div className="project-overlay" onClick={() => setSelectedProject(project)} style={{cursor: 'pointer'}}>
                  <span className="view-details-btn">View Details</span>
                </div>
              </div>
              <div className="project-content project-content-line">
                <h3 className="project-name mb-0">{project.name}</h3>
                <div className="project-techs-container">
                  {project.tech.map((t, index) => (
                    <span key={index} className="project-tech-text tech-badge">{t}</span>
                  ))}
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
              View All
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

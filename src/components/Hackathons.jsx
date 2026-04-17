import React, { useState } from 'react';
import { Trophy, Calendar, Users, X, LayoutGrid, Medal, Code2, ExternalLink, FileText } from 'lucide-react';
import './Hackathons.css';

const Hackathons = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedHackathon, setSelectedHackathon] = useState(null);

    const categories = [
        { id: 'all', label: 'All', icon: <LayoutGrid size={18} /> },
        { id: 'winners', label: 'Winners', icon: <Trophy size={18} /> },
        { id: 'finalists', label: 'Finalists', icon: <Medal size={18} /> },
    ];

    const hackathons = [
        {
            id: 1,
            name: "Smart City Hackathon",
            organizer: "TechFest 2024",
            date: "March 2024",
            location: "Bangalore, India",
            teamSize: 4,
            position: "1st Place",
            category: "winners",
            prize: "₹50,000",
            problem: "Create an innovative solution for urban traffic management using IoT and AI.",
            solution: "Developed an AI-powered traffic prediction system that analyzes real-time data from sensors and cameras to optimize traffic flow and reduce congestion by 40%.",
            techStack: ["React", "Node.js", "TensorFlow", "Python", "MongoDB"],
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            github: "#",
            demo: "#",
            certificate: "#"
        },
        {
            id: 2,
            name: "Code-A-Thon",
            organizer: "CodeFest 2023",
            date: "November 2023",
            location: "Online",
            teamSize: 2,
            position: "Finalist",
            category: "finalists",
            prize: "Top 10",
            problem: "Build a working prototype to solve educational accessibility issues within 24 hours.",
            solution: "Created an AI tutoring platform that provides personalized learning paths for students with visual impairments using voice recognition and text-to-speech.",
            techStack: ["React", "Firebase", "Web Speech API", "Node.js"],
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
            github: "#",
            demo: "#",
            certificate: "#"
        },
        {
            id: 3,
            name: "HealthTech Innovation",
            organizer: "MedHack 2024",
            date: "January 2024",
            location: "Hyderabad, India",
            teamSize: 3,
            position: "2nd Place",
            category: "winners",
            prize: "₹30,000",
            problem: "Develop a solution to improve healthcare accessibility in rural areas.",
            solution: "Built a telemedicine platform connecting rural patients with urban doctors using low-bandwidth video streaming and offline-first architecture.",
            techStack: ["React Native", "Node.js", "WebRTC", "SQLite"],
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
            github: "#",
            demo: "#",
            certificate: "#"
        },
        {
            id: 4,
            name: "AI/ML Challenge",
            organizer: "DataHack Summit",
            date: "August 2023",
            location: "Online",
            teamSize: 1,
            position: "3rd Place",
            category: "winners",
            prize: "₹15,000",
            problem: "Predict stock market trends using historical data and sentiment analysis.",
            solution: "Implemented a hybrid ML model combining LSTM neural networks with sentiment analysis from social media to predict market movements with 78% accuracy.",
            techStack: ["Python", "TensorFlow", "Pandas", "NLTK", "Scikit-learn"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            github: "#",
            demo: "#",
            certificate: "#"
        }
    ];

    const filteredHackathons = selectedCategory === 'all' 
        ? hackathons 
        : hackathons.filter(h => h.category === selectedCategory);

    return (
        <section id="hackathons" className="section hackathons-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Hackathons</h2>
                    <p className="section-subtitle">Competing, innovating, and winning at coding competitions.</p>
                </div>

                <div className="hackathon-stats">
                    <div className="stat-card">
                        <Trophy size={32} />
                        <span className="stat-number">4+</span>
                        <span className="stat-label">Hackathons</span>
                    </div>
                    <div className="stat-card">
                        <Medal size={32} />
                        <span className="stat-number">3</span>
                        <span className="stat-label">Wins</span>
                    </div>
                    <div className="stat-card">
                        <span style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)'}}>₹</span>
                        <span className="stat-number">95K+</span>
                        <span className="stat-label">Prize Money</span>
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="hackathon-categories">
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

                <div className="hackathons-grid">
                    {filteredHackathons.map((hackathon) => (
                        <div key={hackathon.id} className="hackathon-card">
                            <div className="hackathon-image-container" onClick={() => setSelectedHackathon(hackathon)}>
                                <img src={hackathon.image} alt={hackathon.name} className="hackathon-image" />
                                <div className="hackathon-overlay">
                                    <span className="view-details-text">View Details</span>
                                </div>
                                <div className={`position-badge ${hackathon.category}`}>{hackathon.position}</div>
                            </div>
                            <div className="hackathon-content">
                                <h3 className="hackathon-name">{hackathon.name}</h3>
                                <p className="hackathon-organizer">{hackathon.organizer}</p>
                                <div className="hackathon-meta">
                                    <span><Calendar size={14} /> {hackathon.date}</span>
                                    <span><Users size={14} /> {hackathon.teamSize} members</span>
                                </div>
                                <div className="hackathon-tech">
                                    {hackathon.techStack.slice(0, 4).map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                    {hackathon.techStack.length > 4 && (
                                        <span className="tech-tag">+{hackathon.techStack.length - 4}</span>
                                    )}
                                </div>
                                <div className="prize-badge">{hackathon.prize}</div>
                                <div className="hackathon-actions">
                                    {hackathon.github && (
                                        <a href={hackathon.github} target="_blank" rel="noopener noreferrer" className="action-btn btn-github">
                                            <Code2 size={16} /> Code
                                        </a>
                                    )}
                                    {hackathon.demo && (
                                        <a href={hackathon.demo} target="_blank" rel="noopener noreferrer" className="action-btn btn-demo">
                                            <ExternalLink size={16} /> Demo
                                        </a>
                                    )}
                                    {hackathon.certificate && (
                                        <a href={hackathon.certificate} target="_blank" rel="noopener noreferrer" className="action-btn btn-cert">
                                            <FileText size={16} /> Cert
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedHackathon && (
                <div className="modal-backdrop" onClick={() => setSelectedHackathon(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedHackathon(null)}>
                            <X size={18} />
                        </button>
                        <h2>{selectedHackathon.name}</h2>
                        <p><strong>Problem:</strong> {selectedHackathon.problem}</p>
                        <p><strong>Solution:</strong> {selectedHackathon.solution}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hackathons;
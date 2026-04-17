import React, { useState } from 'react';
import { Award, FileText, ExternalLink, X, LayoutGrid, BookOpen, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Certificates.css';

const Certificates = ({
    limit = null,
    showViewAllButton = true,
    viewAllTo = '/allCertificates',
    title = 'Certifications',
    subtitle = 'Credentials and achievements from courses and hackathons.',
}) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedCert, setSelectedCert] = useState(null);
    const navigate = useNavigate();

    const categories = [
        { id: 'all', label: 'All', icon: <LayoutGrid size={18} /> },
        { id: 'course', label: 'Course', icon: <BookOpen size={18} /> },
        { id: 'hackathons', label: 'Hackathons', icon: <Trophy size={18} /> },
    ];

    // TODO: Replace with your actual certificate data
    const certificatesData = {
        course: [
            {
                id: 'c1',
                title: "Full Stack Web Development",
                issuer: "Udemy",
                date: "2024",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
                link: "/certificates/web-dev.pdf",
                description: "Completed comprehensive coursework in Full Stack Web Development covering modern front-end and back-end technologies."
            },
            {
                id: 'c2',
                title: "React.js Basic to Advanced",
                issuer: "Coursera",
                date: "2023",
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
                link: "/certificates/react.pdf",
                description: "An intensive certification program covering the React ecosystem, components, state management, and modern hooks."
            },
            {
                id: 'c3',
                title: "Problem Solving (Basic)",
                issuer: "HackerRank",
                date: "2023",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
                link: "/certificates/hackerrank.pdf",
                description: "Demonstrated strong foundational knowledge in problem solving, algorithms, and logical reasoning."
            }
        ],
        hackathons: [
            {
                id: 'h1',
                title: "Smart City Hackathon - Winner",
                issuer: "TechFest 2024",
                date: "2024",
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
                link: "#",
                description: "First place winner for developing an innovative smart city traffic management solution."
            },
            {
                id: 'h2',
                title: "Code-A-Thon Participant",
                issuer: "CodeFest 2023",
                date: "2023",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
                link: "#",
                description: "Participated in 24-hour coding competition, built a working prototype within the time limit."
            }
        ]
    };

    // Get all certificates for 'All' category
    const allCertificates = Object.values(certificatesData).flat();
    
    const visibleCertificates = selectedCategory === 'all' 
        ? (limit ? allCertificates.slice(0, limit) : allCertificates)
        : (limit ? certificatesData[selectedCategory]?.slice(0, limit) : certificatesData[selectedCategory]) || [];

    return (
        <section id="certificates" className="section certificates-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        {title}
                    </h2>
                    <p className="section-subtitle">
                        {subtitle}
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="certificate-categories">
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

                <div className="certificates-grid">
                    {visibleCertificates.map((cert) => (
                        <div key={cert.id} className="certificate-card">
                            <div className="cert-image-container">
                                <img src={cert.image} alt={cert.title} className="cert-image" />
                                <div className="cert-overlay" onClick={() => setSelectedCert(cert)} style={{cursor: 'pointer'}}>
                                    <span className="view-details-btn">View Details</span>
                                </div>
                            </div>
                            <div className="cert-content cert-content-line">
                                <h3 className="cert-title mb-0">{cert.title}</h3>
                                <span className="tech-badge">{cert.issuer}</span>
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

            {selectedCert && (
                <div className="modal-backdrop" onClick={() => setSelectedCert(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <span className="modal-title">CERTIFICATE EXPLORER</span>
                            <button className="modal-close" onClick={() => setSelectedCert(null)}>
                                <X size={18} />
                            </button>
                        </div>
                        
                        <div className="modal-image-container">
                            <img src={selectedCert.image} alt={selectedCert.title} className="modal-image" />
                        </div>
                        
                        <div className="modal-body">
                            <div className="modal-info">
                                <h2 className="modal-project-name">{selectedCert.title}</h2>
                                <p className="modal-project-desc">{selectedCert.description}</p>
                                <div className="modal-techs">
                                    <span className="tech-badge">{selectedCert.issuer}</span>
                                    <span className="tech-badge">{selectedCert.date}</span>
                                </div>
                            </div>
                            
                            <div className="modal-actions">
                                {selectedCert.link && (
                                    <a href={selectedCert.link} target="_blank" rel="noopener noreferrer" className="modal-btn btn-demo-cyan">
                                        <ExternalLink size={18} /> View Certificate
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

export default Certificates;

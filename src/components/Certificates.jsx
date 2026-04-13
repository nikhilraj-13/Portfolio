import React, { useState } from 'react';
import { Award, FileText, ExternalLink, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Certificates.css';

const Certificates = ({
    limit = 3,
    showViewAllButton = true,
    viewAllTo = '/allCertificates',
    title = 'Certifications',
    subtitle = 'Credentials and achievements.',
}) => {
    const [selectedCert, setSelectedCert] = useState(null);
    const navigate = useNavigate();

    const certificates = [
        {
            id: 1,
            title: "Full Stack Web Development",
            issuer: "Udemy",
            date: "2024",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
            link: "/certificates/web-dev.pdf", // Place files in public/certificates/
            description: "Completed comprehensive coursework in Full Stack Web Development covering modern front-end and back-end technologies. Learned to build scalable web applications."
        },
        {
            id: 2,
            title: "React.js Basic to Advanced",
            issuer: "Coursera",
            date: "2023",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
            link: "/certificates/react.pdf",
            description: "An intensive certification program covering the React ecosystem, components, state management, and modern hooks in intricate detail."
        },
        {
            id: 3,
            title: "Problem Solving (Basic)",
            issuer: "HackerRank",
            date: "2023",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
            link: "/certificates/hackerrank.pdf",
            description: "Demonstrated strong foundational knowledge in problem solving, algorithms, and logical reasoning through rigorous coding assessments."
        }
    ];

    const visibleCertificates = typeof limit === 'number' ? certificates.slice(0, limit) : certificates;

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

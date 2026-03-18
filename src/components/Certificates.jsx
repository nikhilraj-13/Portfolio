import React from 'react';
import { Award, FileText } from 'lucide-react';
import './Certificates.css';

const Certificates = () => {
    // Placeholder data - user can update this array
    const certificates = [
        {
            id: 1,
            title: "Full Stack Web Development",
            issuer: "Udemy",
            date: "2024",
            link: "/certificates/web-dev.pdf" // Place files in public/certificates/
        },
        {
            id: 2,
            title: "React.js Basic to Advanced",
            issuer: "Coursera",
            date: "2023",
            link: "/certificates/react.pdf"
        },
        {
            id: 3,
            title: "Problem Solving (Basic)",
            issuer: "HackerRank",
            date: "2023",
            link: "/certificates/hackerrank.pdf"
        }
    ];

    return (
        <section id="certificates" className="section certificates-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Certifications
                    </h2>
                    <p className="section-subtitle">
                        Credentials and achievements.
                    </p>
                </div>

                <div className="certificates-grid">
                    {certificates.map((cert) => (
                        <div key={cert.id} className="certificate-card">
                            <div className="cert-bg-icon">
                                <Award size={64} />
                            </div>

                            <div className="cert-icon-container">
                                <Award size={24} />
                            </div>

                            <h3 className="cert-title">
                                {cert.title}
                            </h3>
                            <p className="cert-details">
                                {cert.issuer} • {cert.date}
                            </p>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-link"
                            >
                                <FileText size={16} />
                                View Certificate
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;

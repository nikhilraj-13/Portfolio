
import React from 'react';
import './Education.css';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            id: 1,
            institution: 'Swaminarayan University',
            degree: 'Bachelor of Engineering in Computer Engineering',
            duration: '2025 - 2029',
            location: 'Gujarat, India',
            description: 'Pursuing Bachelor of Engineering in Computer Engineering. Learning core engineering principles, advanced computing, and software development.',
        },
        {
            id: 2,
            institution: 'LCS College',
            degree: 'Higher Secondary Education (Class XII)',
            duration: '2023 - 2025',
            location: 'Darbhanga, Bihar',
            description: 'Completed higher secondary education with a focus on Science (Physics, Chemistry, Mathematics).',
        },
        {
            id: 3,
            institution: 'DAV Public School',
            degree: 'Secondary Education (Class X)',
            duration: '2020 - 2023',
            location: 'Darbhanga, Bihar',
            description: 'Completed secondary education with a strong foundation in mathematics and science.',
        },
    ];

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title" data-aos="fade-up">Education</h2>
                    <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                        My academic journey
                    </p>
                </div>

                <div className="education-grid">
                    {educationData.map((item, index) => (
                        <div
                            key={item.id}
                            className="education-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="card-header">
                                <div className="icon-wrapper">
                                    <GraduationCap size={24} />
                                </div>
                                <div className="header-text">
                                    <h3 className="institution">{item.institution}</h3>
                                    <span className="degree">{item.degree}</span>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="education-info">
                                    <div className="info-row">
                                        <Calendar size={16} className="info-icon" />
                                        <span>{item.duration}</span>
                                    </div>
                                    <div className="info-row">
                                        <MapPin size={16} className="info-icon" />
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                                <p className="education-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

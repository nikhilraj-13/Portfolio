
import React from 'react';
import './About.css';
import { User, Code, Server, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title" data-aos="fade-up">About Me</h2>
                    <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                        Get to know more about me and what I do
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-text" data-aos="fade-right">
                        <h3 className="about-heading">
                            I'm <span className="text-highlight">NIKHIL RAJ</span>, a passionate developer based in India.
                        </h3>
                        <p>
                            I am currently pursuing my Bachelor's degree in Computer Science and Engineering.
                            My journey in web development started with a curiosity for how things work on the internet,
                            which has now evolved into a passion for building robust and scalable web applications.
                        </p>
                        <p>
                            I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have a keen eye for
                            detail when it comes to UI/UX design. I love solving complex problems and turning ideas into reality
                            through code.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">1+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-cards" data-aos="fade-left">
                        <div className="about-card">
                            <Code className="card-icon" size={32} />
                            <h4>Frontend Dev</h4>
                            <p>Building responsive and interactive user interfaces using React, Tailwind, and modern CSS.</p>
                        </div>
                        <div className="about-card">
                            <Server className="card-icon" size={32} />
                            <h4>Backend Dev</h4>
                            <p>Creating robust APIs and server-side logic using Node.js, Express, and MongoDB.</p>
                        </div>
                        <div className="about-card">
                            <Zap className="card-icon" size={32} />
                            <h4>Problem Solving</h4>
                            <p>Approaching challenges with a logical mindset and finding efficient solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

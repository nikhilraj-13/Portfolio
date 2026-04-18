import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, ChevronDown, Code, Twitter, Youtube, ExternalLink } from 'lucide-react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {

    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const fullText = "Aspiring Full Stack Developer";
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    useEffect(() => {
        let timer;

        if (isDeleting) {
            timer = setTimeout(() => {
                setText(prev => prev.slice(0, -1));
            }, deletingSpeed);
        } else {
            timer = setTimeout(() => {
                setText(fullText.slice(0, text.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && text === fullText) {
            setTimeout(() => setIsDeleting(true), pauseTime);
            return;
        } else if (isDeleting && text === '') {
            setTimeout(() => setIsDeleting(false), 0);
            return;
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, fullText]);

    const [imageError, setImageError] = useState(0); // 0: primary, 1: secondary (github), 2: final fallback
    const profileImageUrl = "https://res.cloudinary.com/dkiez6yqc/image/upload/v1770272960/TmlraGlsX3NmZndidg=="; // Guessed public URL format
    const githubUrl = "https://github.com/nikhilraj-13.png";
    const fallbackUrl = "https://ui-avatars.com/api/?name=Nikhil+Raj&background=6366f1&color=fff&size=512";

    const getImageUrl = () => {
        if (imageError === 0) return profileImageUrl;
        if (imageError === 1) return githubUrl;
        return fallbackUrl;
    };

    const handleImageError = () => {
        setImageError(prev => prev + 1);
    };

    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text-content">
                    <h1 className="hero-title">
                        Hi, I'm <br />
                        <span className="text-violet">NIKHIL RAJ</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        <span className="typing-text">{text}</span><span className="cursor">|</span>
                    </h2>

                    <p className="hero-text">
                        I build accessible, pixel-perfect, and performant web experiences.
                    </p>

                    <div className="cta-group">
                        <div className="cta-buttons">
                            <button
                                onClick={() => {
                                    // TODO: Open resume modal
                                    console.log('Open resume modal');
                                }}
                                className="btn-secondary"
                            >
                                <FileText size={20} />
                                View Resume
                            </button>

                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="btn-secondary"
                            >
                                Contact Me
                            </Link>
                        </div>

                        <div className="social-links">
                            <a
                                href="https://github.com/nikhilraj-13"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                                aria-label="GitHub Profile"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nikhilraj--13k/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn linkedin"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://leetcode.com/u/nikhilraj_13/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn leetcode"
                                aria-label="LeetCode Profile"
                            >
                                <Code size={24} />
                            </a>
                            <a
                                href="https://x.com/nikhilraj_13_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn twitter"
                                aria-label="Twitter Profile"
                            >
                                <Twitter size={24} />
                            </a>
                            <a
                                href="https://www.youtube.com/@Nikhilraj-1307"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn youtube"
                                aria-label="YouTube Channel"
                            >
                                <Youtube size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="profile-container">
                    <img
                        src={getImageUrl()}
                        alt="Nikhil Raj"
                        className="profile-img"
                        onError={handleImageError}
                    />
                    <div className="profile-overlay"></div>
                </div>

                {/* <Link to="about" smooth={true} duration={500} className="scroll-indicator">
                    <ChevronDown size={32} />
                </Link> */}
            </div>
        </section>
    );
};

export default Hero;

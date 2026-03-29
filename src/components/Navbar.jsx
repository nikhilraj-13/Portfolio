import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);

    // Handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            // Close mobile menu on scroll
            if (isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    // Handle click outside events
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },

        { name: 'Contact', to: 'contact' },
    ];

    return (
        <div className="navbar-container" ref={navRef}>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="logo-link group"
                >
                    <span className="logo-text">
                        NR<span className="logo-dot">.</span>
                    </span>
                    <div className="logo-glow" />
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links-desktop">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="nav-link"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="nav-separator" />

                    <button
                        onClick={toggleTheme}
                        className="theme-toggle"
                    >
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle-container">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="mobile-toggle-btn"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="mobile-nav-link"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;

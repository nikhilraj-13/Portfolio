import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, Phone, Loader2, Youtube } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Service ID, Template ID, Public Key from .env
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const isPlaceholder = (val) => !val || val.includes('your_');

        console.log("EmailJS Config Check:", {
            serviceId: isPlaceholder(serviceId) ? "Placeholder/Missing" : "Set",
            templateId: isPlaceholder(templateId) ? "Placeholder/Missing" : "Set",
            publicKey: isPlaceholder(publicKey) ? "Placeholder/Missing" : "Set"
        });

        if (isPlaceholder(serviceId) || isPlaceholder(templateId) || isPlaceholder(publicKey)) {
            alert("EmailJS configuration is incomplete or using placeholders. Please update your .env file and restart the server.");
            console.error("Missing or placeholder env vars:", { serviceId, templateId, publicKey });
            setIsSubmitting(false);
            return;
        }

        emailjs.sendForm(serviceId, templateId, formRef.current, {
            publicKey: publicKey,
        })
            .then((result) => {
                console.log("EmailJS Success:", result.text);
                alert("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.error("EmailJS Error:", error);
                alert("Failed to send message. Check console for details.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Get In Touch
                    </h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to say hi?
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info-card">
                        <h3 className="contact-card-title">
                            Contact Information
                        </h3>

                        <div className="contact-links">
                            <a href="mailto:nikhil0001007@gmail.com" className="contact-link-item">
                                <div className="contact-icon-box">
                                    <Mail size={24} />
                                </div>
                                <span>nikhil0001007@gmail.com</span>
                            </a>

                            <a href="https://github.com/nikhilraj-13" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                                <div className="contact-icon-box gray">
                                    <Github size={24} />
                                </div>
                                <span>github.com/nikhilraj-13</span>
                            </a>

                            <a href="https://www.linkedin.com/in/nikhilraj--13k/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                                <div className="contact-icon-box">
                                    <Linkedin size={24} />
                                </div>
                                <span>linkedin.com/in/nikhilraj--13k</span>
                            </a>

                            <a href="tel:+918252799973" className="contact-link-item">
                                <div className="contact-icon-box">
                                    <Phone size={24} />
                                </div>
                                <span>+91 8252799973 / +91 79707 16641</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-card">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="form-input form-textarea"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

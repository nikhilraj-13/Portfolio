import React from 'react';
import './Skills.css';

const SkillCategory = ({ title, skills, iconColorClass, iconBgClass, children }) => (
    <div className="skill-section-mb">
        <h3 className="skill-category-title">{title}</h3>
        <div className="skill-tags">
            {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                    <div className="skill-icon-3d">
                        <img src={skill.logo} alt={skill.name} className="skill-img" />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const skillData = {
        languages: [
            { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
            { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
            { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
        ],
        frontend: [
            { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'Framer Motion', logo: 'https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png' } // Fallback/Alternative
        ],
        tools: [
            { name: 'Git & GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
            { name: 'Vite', logo: 'https://vitejs.dev/logo.svg' },
            { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
        ]
    };

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">
                        The technologies and tools I use to bring ideas to life.
                    </p>
                </div>

                <div className="skills-grid">
                    <div className="skill-card">
                        <div className="skill-icon-container blue">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <SkillCategory title="Languages" skills={skillData.languages} />
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon-container purple">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                        </div>
                        <SkillCategory title="Frontend" skills={skillData.frontend} />
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon-container green">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <SkillCategory title="Tools & Devops" skills={skillData.tools} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

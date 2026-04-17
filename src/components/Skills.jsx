import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
    const [filter, setFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'All Skills' },
        { id: 'languages', label: 'Languages' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'tools', label: 'Tools & DevOps' },
    ];

    const skills = [
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'languages' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'languages' },
        { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', category: 'languages' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'frontend' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'frontend' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'backend' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'backend' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'tools' },
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'tools' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'tools' },
    ];

    const filteredSkills = filter === 'all' ? skills : skills.filter(s => s.category === filter);

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">
                        The technologies and tools I use to bring ideas to life.
                    </p>
                </div>

                {/* Filter Bar */}
                <div className="skills-filter-bar">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`skills-filter-tab ${filter === cat.id ? 'active' : ''}`}
                            onClick={() => setFilter(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="skills-constellation">
                    {filteredSkills.map((skill) => (
                        <div key={skill.name} className="skill-orb">
                            <div className="orb-content">
                                <img src={skill.logo} alt={skill.name} className="orb-img" />
                            </div>
                            <span className="orb-label">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

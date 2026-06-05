import { useEffect, useRef, useState } from 'react'
import './Experience.css'

function Experience() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    const experiences = [
        {
            type: 'Internship',
            title: 'Full Stack Developer & Teams Lead',
            organization: 'Magna Teck',
            period: '3 Months',
            description:
                'Responsible for a development team creating an ERP system for the multi-site management of a vocational training center. Full-stack development in PHP and design of a scalable database including registration management, course scheduling, and financial tracking.',
            technologies: ['PHP', 'Tailwind CSS', 'MySQL', 'Git', 'GitHub'],
            achievements: [
                'Implemented user authentication and authorization, then led the team delivering a centralized ERP system.',
                'Architected a scalable relational database supporting multi-center management and high data integrity.',
                'Coordinated project tasks using Agile/Scrum practices and Jira, ensuring timely delivery of project milestones.',
                'Built real-time financial analytics dashboards to monitor budgets, expenses, and operational performance.',
            ],
        },
    ]

    return (
        <section id="experience" className="section experience" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">
                    Academic projects, personal initiatives, and freelance work showcasing my growth as a developer
                </p>

                <div className={`experience-grid ${isVisible ? 'visible' : ''}`}>
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.title}
                            className="experience-card"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="experience-type">{exp.type}</div>
                            <h3 className="experience-title">{exp.title}</h3>
                            <div className="experience-meta">
                                <span className="experience-org">{exp.organization}</span>
                                <span className="experience-period">{exp.period}</span>
                            </div>
                            <p className="experience-description">{exp.description}</p>

                            <div className="experience-technologies">
                                {exp.technologies.map((tech) => (
                                    <span key={tech} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="experience-achievements">
                                <h4>Key Achievements:</h4>
                                <ul>
                                    {exp.achievements.map((achievement) => (
                                        <li key={achievement}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`learning-journey ${isVisible ? 'visible' : ''}`}>
                    <h3>Continuous Learning</h3>
                    <p>
                        As a passionate developer, I'm constantly learning and improving my skills through:
                    </p>
                    <div className="learning-items">
                        <div className="learning-item">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Online courses and tutorials</span>
                        </div>
                        <div className="learning-item">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            <span>Contributing to open-source projects</span>
                        </div>
                        <div className="learning-item">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            <span>Building personal projects</span>
                        </div>
                        <div className="learning-item">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <span>Participating in developer communities</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience

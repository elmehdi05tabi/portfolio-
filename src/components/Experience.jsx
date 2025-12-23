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

    // TODO: Replace with your actual experience
    const experiences = [
        {
            type: 'Academic Project',
            title: 'Full Stack E-Commerce Development',
            organization: 'University Project',
            period: '2023 - 2024',
            description:
                'Developed a complete e-commerce platform as part of final year project, implementing both frontend and backend functionalities.',
            technologies: ['React', 'Laravel', 'MySQL', 'REST API'],
            achievements: [
                'Implemented user authentication and authorization',
                'Created admin dashboard for product management',
                'Integrated payment gateway',
                'Achieved 95% project grade',
            ],
        },
        {
            type: 'Personal Project',
            title: 'Social Media Platform',
            organization: 'Self-Learning',
            period: '2023',
            description:
                'Built a social networking application to practice full stack development skills and learn new technologies.',
            technologies: ['React', 'PHP', 'MySQL', 'JavaScript'],
            achievements: [
                'Implemented real-time features',
                'Created responsive UI/UX design',
                'Deployed on cloud hosting',
                'Gained 100+ test users',
            ],
        },
        {
            type: 'Freelance',
            title: 'Portfolio & Business Websites',
            organization: 'Various Clients',
            period: '2022 - Present',
            description:
                'Developed custom websites for small businesses and individual clients, focusing on responsive design and user experience.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
            achievements: [
                'Completed 5+ client projects',
                'Maintained 100% client satisfaction',
                'Improved SEO rankings for clients',
                'Ongoing maintenance and support',
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

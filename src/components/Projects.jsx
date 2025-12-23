import { useEffect, useRef, useState } from 'react'
import './Projects.css'

function Projects() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
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

    // TODO: Replace with your actual projects
    const projects = [
        {
            title: 'Training Center Management',
            description:
                'Built a PHP-based system to manage trainees, grades, and evaluations, with efficient data organization using MySQL and CRUD operations.',
            technologies: ['php', 'MySQL', 'html', 'css','JavaScript'],
            features: [
                'MVC architecture for clean code organization and maintainability',
                'Trainee management (create, update, delete records)',
                'Grades and evaluations management',
                'Secure database interaction using MySQL',
                'CRUD operations with structured backend logic',
            ],
            github: 'https://github.com/elmehdi05tabi/gestion-centre-formation.git', // TODO: Add your GitHub repo link
            demo: '#', // TODO: Add your live demo link (if available)
        },
        {
            title: 'Mini Social Network Application',
            description:
                'Built a mini social network with Laravel featuring user profiles, post creation, secure access policies, and relational data management between profiles and publications.',
            technologies: ['Laravel', 'Blade', 'MySQL'],
            features: [
                'User profile creation and management',
                'Create, edit, and delete publications (posts)',
                'Secure authentication and authorization',
                'Laravel security policies for access control',
                'Relationship (join) between profiles and publications',
                'Data validation for user inputs',
            ],
            github: 'https://github.com/elmehdi05tabi/social_network.git',
            demo: '#',
        },
        {
            title: 'Car Rental',
            description:
                'I built a car rental frontend application using React and Sass. The platform allows users to browse available cars, view detailed information, and filter cars by category or price. The application features a responsive design, reusable React components, and a clean, modern user interface styled with Sass.',
            technologies: ['React','Scss'],
            features: [
                'Car listing with detailed information',
                'Filter cars by category and price',
                'Responsive design for all screen sizes',
                'Reusable React components',
                'State management for user interactions',
                'Modern UI styled with Sass (SCSS)',
                'Clean and intuitive user experience'
            ],
            github: 'https://github.com/elmehdi05tabi/car-rental.git',
            demo: 'https://elmehdi05tabi.github.io/car-rental',
        },
        {
            title: 'Portfolio Website',
            description:
                'A modern, responsive portfolio website built with React showcasing projects and skills.',
            technologies: ['React', 'CSS', 'Vite'],
            features: [
                'Responsive design',
                'Smooth animations',
                'Contact form',
                'Project showcase',
                'SEO optimized',
            ],
            github: '#',
            demo: '#',
        },
    ]

    return (
        <section id="projects" className="section projects" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    Here are some of my recent projects showcasing my full stack development skills
                </p>

                <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="project-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        className="project-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="View on GitHub"
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                    {project.demo !== '#' && (
                                        <a
                                            href={project.demo}
                                            className="project-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="View Live Demo"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-technologies">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-features">
                                <h4>Key Features:</h4>
                                <ul>
                                    {project.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

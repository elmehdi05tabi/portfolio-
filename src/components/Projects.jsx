import { useEffect, useRef, useState } from 'react'
import './Projects.css'

const projects = [
      {
    title: 'Azlag Shop',
    eyebrow: 'Full-Stack E-Commerce Platform',
    description:
        'Modern e-commerce platform built for Moroccan businesses, featuring product management, secure image uploads, multilingual support, shopping cart functionality, order management, responsive design, and an optimized customer experience.',
    technologies: [
        'Laravel',
        'MySQL',
        'JavaScript',
        'Responsive UI'
    ],
    image: '/project-covers/azlagshop.png',
    github: '#',
    demo: 'https://azlagshop.com',
},
    {
        title: 'Ana Watches',
        eyebrow: 'E-commerce / Watch Brand',
        description:
            'A refined e-commerce experience for a watch collection with multilingual navigation and elegant product presentation.',
        technologies: ['Express.js','MongoDB', 'E-commerce', 'Responsive UI'],
        image: '/project-covers/anawatches.png',
        github: '#',
        demo: 'https://anawatches.vercel.app/',
    },
    {
        title: 'Training Center Management',
        eyebrow: 'PHP / MySQL Platform',
        description:
            'A management system for trainees, grades, evaluations, and structured CRUD workflows.',
        technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        image: '/project-covers/training-center.png',
        github: 'https://github.com/elmehdi05tabi/gestion-centre-formation.git',
        demo: '#',
    },
    {
        title: 'Mini Social Network',
        eyebrow: 'Laravel Application',
        description:
            'A social experience with profiles, publications, authentication, policies, and relational data.',
        technologies: ['Laravel', 'Blade', 'MySQL'],
        image: '/project-covers/social-network.png',
        github: 'https://github.com/elmehdi05tabi/social_network.git',
        demo: '#',
    },
    {
        title: 'Car Rental',
        eyebrow: 'React / SCSS Interface',
        description:
            'A responsive rental interface with car browsing, filtering, details, and reusable components.',
        technologies: ['React', 'SCSS'],
        image: '/project-covers/car-rental.png',
        github: 'https://github.com/elmehdi05tabi/car-rental.git',
        demo: 'https://elmehdi05tabi.github.io/car-rental',
    },
    {
        title: 'Portfolio Website',
        eyebrow: 'React / Vite Portfolio',
        description:
            'A modern personal website presenting skills, selected work, motion, and contact flow.',
        technologies: ['React', 'CSS', 'Vite'],
        image: '/project-covers/portfolio.png',
        github: 'https://github.com/elmehdi05tabi/portfolio-.git',
        demo: 'https://elmehdi-seven.vercel.app/',
    },
]

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
            { threshold: 0.12 }
        )

        const node = sectionRef.current
        if (node) {
            observer.observe(node)
        }

        return () => {
            if (node) {
                observer.unobserve(node)
            }
        }
    }, [])

    return (
        <section id="projects" className="section projects" ref={sectionRef}>
            <div className="container">
                <div className="projects-heading">
                    <p className="projects-kicker">Selected Work</p>
                    <h2>Projects as visual stories</h2>
                    <p>
                        Each project is presented like a digital poster: polished, readable, and
                        focused on the product experience.
                    </p>
                </div>

                <div className={`projects-showcase ${isVisible ? 'visible' : ''}`}>
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="project-poster"
                            style={{ '--delay': `${index * 120}ms` }}
                        >
                            <a
                                className="project-media"
                                href={project.demo !== '#' ? project.demo : project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${project.title}`}
                            >
                                <img src={project.image} alt={`${project.title} project cover`} />
                                <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                            </a>

                            <div className="project-body">
                                <div>
                                    <p className="project-eyebrow">{project.eyebrow}</p>
                                    <h3>{project.title}</h3>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-actions">
                                    {project.github !== '#' && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    )}
                                    {project.demo !== '#' && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                            Live demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

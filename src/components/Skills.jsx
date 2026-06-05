import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBootstrap,
    faCss3Alt,
    faDocker,
    faGitAlt,
    faGithub,
    faGitlab,
    faHtml5,
    faJira,
    faJs,
    faLaravel,
    faNodeJs,
    faPhp,
    faPython,
    faReact,
    faSass,
} from '@fortawesome/free-brands-svg-icons'
import {
    faCode,
    faDatabase,
    faDiagramProject,
    faLaptopCode,
    faLayerGroup,
    faLeaf,
    faNetworkWired,
    faServer,
    faTerminal,
} from '@fortawesome/free-solid-svg-icons'
import './Skills.css'

const skillCategories = [
    {
        title: 'Frontend',
        description: 'Interfaces responsive, clean UI, component-driven development.',
        accent: 'cyan',
        icon: faLaptopCode,
        skills: [
            { name: 'HTML5', icon: faHtml5 },
            { name: 'CSS3', icon: faCss3Alt },
            { name: 'JavaScript', icon: faJs },
            { name: 'React', icon: faReact },
            { name: 'Bootstrap', icon: faBootstrap },
            { name: 'SCSS', icon: faSass },
        ],
    },
    {
        title: 'Backend',
        description: 'APIs, server logic, authentication, architecture, and scalable services.',
        accent: 'gold',
        icon: faServer,
        skills: [
            { name: 'C', icon: faCode },
            { name: 'Python', icon: faPython },
            { name: 'PHP', icon: faPhp },
            { name: 'Laravel', icon: faLaravel },
            { name: 'Node.js', icon: faNodeJs },
            { name: 'Express.js', icon: faServer },
            { name: 'REST API', icon: faNetworkWired },
            { name: 'Microservices', icon: faDiagramProject },
            { name: 'RabbitMQ', icon: faLayerGroup },
        ],
    },
    {
        title: 'Database',
        description: 'Data modeling, relational schemas, queries, and document databases.',
        accent: 'green',
        icon: faDatabase,
        skills: [
            { name: 'MySQL', icon: faDatabase },
            { name: 'MongoDB', icon: faLeaf },
        ],
    },
    {
        title: 'DevOps & Tools',
        description: 'Version control, containers, collaboration, and delivery workflow.',
        accent: 'rose',
        icon: faTerminal,
        skills: [
            { name: 'Git', icon: faGitAlt },
            { name: 'GitHub', icon: faGithub },
            { name: 'GitLab', icon: faGitlab },
            { name: 'Docker', icon: faDocker },
            { name: 'Jira', icon: faJira },
        ],
    },
]

const competencies = [
    'Responsive Web Design',
    'RESTful API Development',
    'Version Control',
    'Database Design',
    'Debugging',
    'Agile Workflow',
]

function Skills() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.16 }
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
        <section id="skills" className="section skills" ref={sectionRef}>
            <div className="container">
                <div className="skills-heading">
                    <p className="skills-kicker">Technical Stack</p>
                    <h2>Skills built for real products</h2>
                    <p>
                        A focused toolkit for building clean interfaces, reliable backends,
                        structured databases, and modern delivery workflows.
                    </p>
                </div>

                <div className={`skills-grid ${isVisible ? 'visible' : ''}`}>
                    {skillCategories.map((category, index) => (
                        <article
                            key={category.title}
                            className={`skill-panel ${category.accent}`}
                            style={{ '--delay': `${index * 110}ms` }}
                        >
                            <div className="skill-panel-head">
                                <span className="skill-panel-icon" aria-hidden="true">
                                    <FontAwesomeIcon icon={category.icon} />
                                </span>
                                <div>
                                    <h3>{category.title}</h3>
                                    <p>{category.description}</p>
                                </div>
                            </div>

                            <div className="tech-grid" aria-label={`${category.title} technologies`}>
                                {category.skills.map((skill) => (
                                    <div className="tech-card" key={skill.name} title={skill.name}>
                                        <FontAwesomeIcon icon={skill.icon} aria-hidden="true" />
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <div className={`skills-strip ${isVisible ? 'visible' : ''}`}>
                    {competencies.map((competency) => (
                        <span key={competency}>{competency}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills

import { useEffect, useRef, useState } from 'react'
import './Skills.css'

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

    const skillCategories = [
        {
            title: 'Frontend',
            icon: '🎨',
            skills: ['HTML', 'CSS', 'JavaScript', 'React','Bootstrap','Scss'],
        },
        {
            title: 'Backend',
            icon: '⚙️',
            skills: ['PHP', 'Laravel', 'Python'],
        },
        {
            title: 'Database',
            icon: '🗄️',
            skills: ['MySQL'],
        },
        {
            title: 'Tools',
            icon: '🛠️',
            skills: ['Git', 'GitHub', 'Jira'],
        },
        {
            title: 'Concepts',
            icon: '💡',
            skills: ['MVC', 'CRUD', 'Authentication', 'REST API'],
        },
    ]

    return (
        <section id="skills" className="section skills" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className={`skills-grid ${isVisible ? 'visible' : ''}`}>
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="skill-category"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.title}</h3>
                            </div>
                            <div className="category-skills">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="skill-badge">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`skills-additional ${isVisible ? 'visible' : ''}`}>
                    <h3>Additional Competencies</h3>
                    <div className="competencies-list">
                        <div className="competency-item">
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
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Responsive Web Design</span>
                        </div>
                        <div className="competency-item">
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
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>RESTful API Development</span>
                        </div>
                        <div className="competency-item">
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
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Version Control (Git)</span>
                        </div>
                        <div className="competency-item">
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
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Database Design & Management</span>
                        </div>
                        <div className="competency-item">
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
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Problem Solving & Debugging</span>
                        </div>
                        <div className="competency-item">
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
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Agile Development Practices</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills

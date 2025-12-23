import { useEffect, useRef, useState } from 'react'
import './Education.css'

function Education() {
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

    // TODO: Replace with your actual education details
    const education = [
        {
            degree: 'IT Development Technician',
            school: 'CMC CASA-SETTAT',
            period: '2024 - 2026',
            description: 'Specialized in Web Development and Software Engineering',
            achievements: [
                'Focus on Full Stack Development',
                'Completed multiple web development projects',
                'Strong foundation in programming fundamentals',
            ],
        },
        {
            degree: 'High School Diploma',
            school: 'High School Ibn Abad Settat',
            period: '2022 - 2023',
            description: 'High School Diploma – Physical Sciences',
            achievements: [
            ],
        },
    ]

    const certifications = []

    return (
        <section id="education" className="section education" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div className={`education-timeline ${isVisible ? 'visible' : ''}`}>
                    {education.map((edu, index) => (
                        <div
                            key={edu.degree}
                            className="timeline-item"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-period">{edu.period}</div>
                                <h3 className="timeline-title">{edu.degree}</h3>
                                <h4 className="timeline-subtitle">{edu.school}</h4>
                                <p className="timeline-description">{edu.description}</p>
                                <ul className="timeline-achievements">
                                    {edu.achievements.map((achievement) => (
                                        <li key={achievement}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {certifications.length > 0 && (
                    <div className={`certifications ${isVisible ? 'visible' : ''}`}>
                        <h3 className="certifications-title">Certifications & Training</h3>
                        <div className="certifications-grid">
                            {certifications.map((cert, index) => (
                                <div
                                    key={cert}
                                    className="certification-badge"
                                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                                >
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
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                    </svg>
                                    <span>{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Education

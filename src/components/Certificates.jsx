import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import {
    faBrain,
    faCode,
    faDatabase,
    faDownload,
    faFilePdf,
} from '@fortawesome/free-solid-svg-icons'
import './Certificates.css'

const certificates = [
    {
        title: 'SQL: A Practical Introduction for Querying Databases',
        issuer: 'IBM via Coursera',
        date: 'April 2026',
        icon: faDatabase,
        status: 'Verified certificate',
        file: '/certificate/Coursera TV36AKA70AOO (1).pdf',
        downloadName: 'El-Mehdi-Tabi-IBM-SQL-Practical-Introduction.pdf',
        description:
            'Practical training in SQL fundamentals, relational databases, structured queries, filtering, joins, and data handling for backend applications.',
    },
    {
        title: 'AI Fundamentals',
        issuer: 'Google via Coursera',
        date: 'March 2026',
        icon: faBrain,
        status: 'Verified certificate',
        file: '/certificate/Coursera HTRSKU02ALQZ (1).pdf',
        downloadName: 'El-Mehdi-Tabi-Google-AI-Fundamentals.pdf',
        description:
            'A foundation in artificial intelligence concepts, responsible AI, machine learning basics, and the practical ways AI can support modern digital products.',
    },
    {
        title: 'Claude Code in Action',
        issuer: 'Anthropic Education',
        date: 'April 2026',
        icon: faCode,
        status: 'Completion certificate',
        file: '/certificate/certificate-3bz8m98xpo8z-1777581881 (1).pdf',
        downloadName: 'El-Mehdi-Tabi-Claude-Code-in-Action.pdf',
        description:
            'Hands-on training with Claude Code for AI-assisted development workflows, project navigation, implementation support, debugging, and code iteration.',
    },
    {
        title: 'Advanced React',
        issuer: 'Meta',
        date: 'In progress',
        icon: faReact,
        status: 'Course in progress',
        pendingLabel: 'In progress',
        description:
            'Currently deepening React skills with advanced component patterns, hooks, state management, reusable UI architecture, and production-focused frontend practices.',
    },
]

function Certificates() {
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
        <section id="certificates" className="section certificates" ref={sectionRef}>
            <div className="container">
                <div className="certificates-heading">
                    <p className="certificates-kicker">Validated Learning</p>
                    <h2>Certificates</h2>
                    <p>
                        Recent training that strengthens my work across databases, artificial
                        intelligence, and AI-assisted software development.
                    </p>
                </div>

                <div className={`certificates-grid ${isVisible ? 'visible' : ''}`}>
                    {certificates.map((certificate, index) => (
                        <article
                            key={certificate.title}
                            className={`certificate-card ${certificate.file ? '' : 'pending'}`}
                            style={{ '--delay': `${index * 120}ms` }}
                        >
                            <div className="certificate-top">
                                <span className="certificate-icon" aria-hidden="true">
                                    <FontAwesomeIcon icon={certificate.icon} />
                                </span>
                                <span className="certificate-number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <div className="certificate-body">
                                <p className="certificate-issuer">{certificate.issuer}</p>
                                <h3>{certificate.title}</h3>
                                <p className="certificate-description">{certificate.description}</p>
                            </div>

                            <div className="certificate-footer">
                                <div>
                                    <span className="certificate-date">{certificate.date}</span>
                                    <span className="certificate-status">{certificate.status}</span>
                                </div>

                                {certificate.file ? (
                                    <a
                                        className="certificate-download"
                                        href={encodeURI(certificate.file)}
                                        download={certificate.downloadName}
                                        title={`Download ${certificate.title} certificate`}
                                    >
                                        <FontAwesomeIcon icon={faDownload} aria-hidden="true" />
                                        <span>Download PDF</span>
                                    </a>
                                ) : (
                                    <span className="certificate-download unavailable">
                                        <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
                                        <span>{certificate.pendingLabel || 'File pending'}</span>
                                    </span>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certificates

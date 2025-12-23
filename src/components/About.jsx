import { useEffect, useRef, useState } from 'react'
import './About.css'

function About() {
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

    return (
        <section id="about" className="section about" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className={`about-content ${isVisible ? 'visible' : ''}`}>
                    <div className="about-text">
                        <p className="about-intro">
                            Hello! I'm <span className="text-gradient">El Mehdi Tabi</span>, a passionate{' '}
                            <strong>Full Stack Developer</strong> dedicated to creating modern, efficient,
                            and scalable web applications.
                        </p>

                        <p>
                            {/* TODO: Customize this section with your personal story */}
                            I'm currently pursuing my studies in web development, where I've developed
                            a strong foundation in both frontend and backend technologies. My journey
                            in programming started with a curiosity about how websites work, and it
                            quickly evolved into a passion for building complete web solutions.
                        </p>

                        <p>
                            I specialize in creating responsive, user-friendly interfaces with{' '}
                            <span className="highlight">React</span> and building robust backend systems
                            with <span className="highlight">Laravel</span> and{' '}
                            <span className="highlight">PHP</span>. I'm constantly learning and staying
                            up-to-date with the latest web technologies and best practices.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <div className="highlight-icon">🎓</div>
                                <div className="highlight-content">
                                    <h4>Education</h4>
                                    <p>Computer Science Student</p>
                                    {/* TODO: Add your university/school name */}
                                    <p className="highlight-detail">Focused on Web Development</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">💡</div>
                                <div className="highlight-content">
                                    <h4>Passion</h4>
                                    <p>Building Modern Web Apps</p>
                                    <p className="highlight-detail">Clean code & user experience</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">🎯</div>
                                <div className="highlight-content">
                                    <h4>Career Goal</h4>
                                    <p>Full Stack Developer Role</p>
                                    <p className="highlight-detail">Seeking internship opportunities</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

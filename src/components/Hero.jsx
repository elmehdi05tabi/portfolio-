import { useEffect, useState } from 'react'
import './Hero.css'
import img from './me.jpeg'
function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-particles">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 4}s`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="container hero-container">
                <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
                    <div className="hero-image-wrapper">
                        {/* TODO: Replace with your professional photo */}
                        {/* Place your photo in /public/profile.jpg */}
                        <div className="hero-image">
                            <div className="image-placeholder">
                                <img src={img} alt="My Photo" />
                            </div>
                            <div className="image-glow"></div>
                        </div>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="text-gradient">El Mehdi Tabi</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        Full Stack Developer
                    </h2>

                    <p className="hero-description">
                        Passionate about building <span className="highlight">modern</span> and{' '}
                        <span className="highlight">scalable</span> web applications
                    </p>

                    <div className="hero-cta">
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection('projects')}
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
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            View Projects
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => scrollToSection('contact')}
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
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Contact Me
                        </button>
                    </div>

                    <div className="hero-scroll">
                        <div className="scroll-indicator">
                            <span>Scroll Down</span>
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
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Hero.css'
import img from './me.png'

const socialLinks = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/el-mehdi-tabi-03b80428a/',
        icon: faLinkedinIn,
        variant: 'linkedin',
    },
    {
        label: 'GitHub',
        href: 'https://github.com/elmehdi05tabi',
        icon: faGithub,
        variant: 'github',
    },
    {
        label: 'WhatsApp',
        href: 'https://wa.me/212610962163',
        icon: faWhatsapp,
        variant: 'whatsapp',
    },
    {
        label: 'Email',
        href: 'mailto:elmehditabi0@gmail.com',
        icon: faEnvelope,
        variant: 'email',
    },
]

const cvLinks = [
    {
        label: 'CV FR',
        href: '/El_Mehdi_Tabi_CV_FR.pdf',
        downloadName: 'El_Mehdi_Tabi_CV_FR.pdf',
    },
    {
        label: 'CV EN',
        href: '/CV_El_MehdiTabi_EN.docx.pdf',
        downloadName: 'El_Mehdi_Tabi_CV_EN.pdf',
    },
]

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
        <section id="home" className={`hero ${isVisible ? 'visible' : ''}`}>
            <div className="hero-stage" aria-hidden="true">
                <span className="hero-line hero-line-one"></span>
                <span className="hero-line hero-line-two"></span>
                <span className="hero-noise"></span>
            </div>

            <div className="container hero-container">
                <div className="hero-copy">
                    <p className="hero-kicker">Portfolio / Full Stack Developer</p>
                    <h1 className="hero-title">
                        <span>El Mehdi</span>
                        <span>Tabi</span>
                    </h1>
                    <p className="hero-description">
                        I develop reliable full-stack web applications with modern interfaces,
                        secure back-end logic, and clean code.
                    </p>

                    <div className="hero-actions">
                        <button className="hero-button primary" onClick={() => scrollToSection('projects')}>
                            Voir mes projets
                        </button>
                        <div className="hero-cv-options" aria-label="Download CV">
                            {cvLinks.map((cv) => (
                                <a
                                    key={cv.label}
                                    className="hero-button ghost cv-option"
                                    href={cv.href}
                                    download={cv.downloadName}
                                >
                                    <FontAwesomeIcon icon={faDownload} aria-hidden="true" />
                                    {cv.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hero-socials" aria-label="Social links">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                className={`hero-social-link ${link.variant}`}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                title={link.label}
                            >
                                <FontAwesomeIcon icon={link.icon} aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hero-portrait-wrap">
                    <div className="hero-portrait">
                        <img src={img} alt="El Mehdi Tabi" />
                    </div>
                    <div className="hero-signature">
                        <span>Based in Morocco</span>
                        <strong>Available for web projects</strong>
                    </div>
                </div>
            </div>

            <button className="hero-scroll" onClick={() => scrollToSection('projects')} aria-label="Scroll to projects">
                <span></span>
            </button>
        </section>
    )
}

export default Hero

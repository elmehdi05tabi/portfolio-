import { useEffect, useRef, useState } from 'react'
import './About.css'

const highlights = [
    { value: '01', label: 'Full stack mindset', detail: 'Frontend, backend, database, and delivery.' },
    { value: '02', label: 'Product focus', detail: 'Clean interfaces built around real user flows.' },
    { value: '03', label: 'Growth driven', detail: 'Actively building projects and seeking internship opportunities.' },
]

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
            { threshold: 0.18 }
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
        <section id="about" className="section about" ref={sectionRef}>
            <div className="container">
                <div className={`about-layout ${isVisible ? 'visible' : ''}`}>
                    <div className="about-heading">
                        <p className="about-kicker">About Me</p>
                        <h2>Developer with a product eye</h2>
                    </div>

                    <div className="about-copy">
                        <p className="about-intro">
                            I am <strong>El Mehdi Tabi</strong>, a Full Stack Developer focused on
                            building modern web applications with React, Laravel, PHP, MySQL, and
                            practical UI motion.
                        </p>
                        <p>
                            My work connects clean visual interfaces with reliable backend logic. I
                            enjoy turning an idea into a usable product: clear pages, structured data,
                            secure flows, and responsive experiences that feel polished on every screen.
                        </p>
                        <p>
                            I am currently studying IT development at CMC CASA-SETTAT and looking for
                            opportunities where I can contribute, learn fast, and ship real projects.
                        </p>
                    </div>
                </div>

                <div className={`about-highlights ${isVisible ? 'visible' : ''}`}>
                    {highlights.map((item, index) => (
                        <article className="highlight-item" key={item.label} style={{ '--delay': `${index * 120}ms` }}>
                            <span>{item.value}</span>
                            <h3>{item.label}</h3>
                            <p>{item.detail}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About

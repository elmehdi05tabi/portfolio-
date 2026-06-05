import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
    const [activeSection, setActiveSection] = useState('home')
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('portfolioTheme')
        if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })
    const [showIntro, setShowIntro] = useState(() => {
        return sessionStorage.getItem('portfolioIntroPlayed') !== 'true'
    })

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('portfolioTheme', theme)
    }, [theme])

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'skills', 'experience', 'education', 'certificates', 'about']
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (!showIntro) return

        document.body.classList.add('intro-lock')
        const timer = window.setTimeout(() => {
            sessionStorage.setItem('portfolioIntroPlayed', 'true')
            setShowIntro(false)
            document.body.classList.remove('intro-lock')
        }, 2600)

        return () => {
            window.clearTimeout(timer)
            document.body.classList.remove('intro-lock')
        }
    }, [showIntro])

    return (
        <div className={`app ${showIntro ? 'intro-active' : 'intro-complete'}`}>
            {showIntro && (
                <div className="intro-loader" aria-label="Portfolio introduction">
                    <div className="intro-mark">
                        <span>El Mehdi</span>
                        <strong>Tabi</strong>
                    </div>
                    <div className="intro-progress"></div>
                </div>
            )}
            <Navbar
                activeSection={activeSection}
                theme={theme}
                onThemeToggle={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
            />
            <main>
                <Hero />
                <Projects />
                <Skills />
                <Experience />
                <Education />
                <Certificates />
                <About />
            </main>
            <Footer />
        </div>
    )
}

export default App

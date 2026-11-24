import { useRef, useState } from 'react'

const projects = [
    {
        title: 'Acoustic Measurement Instrument',
        image: '/portfolio/project-acoustic-meter.jpg',
        tags: ['KiCad', 'ngspice', 'OPA2365', 'ESP32', 'Python HIL'],
        description:
            'Portable acoustic measurement instrument I designed and built: OPA2365 preamp with four switchable gains, a 4th-order Sallen-Key anti-alias filter and an ESP32 ADC on a hand-routed 2-layer PCB. Traced an 8.6 dB response error to the ESP32 ADC swapping sample pairs; the fix brought measured response within 0.37 dB of calculation, verified by a Python hardware-in-the-loop test.',
        github: 'https://github.com/jhuang0701/Portable-Acoustic-Measurement-System',
        liveDemo: null,
    },
    {
        title: '3-Phase FOC BLDC Motor Driver with Onboard IMU',
        image: '/portfolio/project-foc-motor-driver-2.png',
        tags: ['KiCad', '4-layer PCB', 'STM32G474', 'DRV8353', 'FOC'],
        description:
            '4-layer motor driver PCB designed in KiCad for a self-balancing robot, driving a 3-phase BLDC motor via field-oriented control. Features dual current-sensing and an onboard IMU for real-time balance control.',
        github: 'https://github.com/jhuang0701/Power-Reference-Board',
        liveDemo: null,
    },
    {
        title: 'ChatTFT',
        image: '/portfolio/project-chattft.jpeg',
        tags: ['Python', 'PostgreSQL', 'pgvector', 'RAG', 'LLM eval'],
        description:
            'AI analytics platform on Llama 3.3 70B with a RAG pipeline over 10K+ chunks (Supabase pgvector), an LLM-as-judge eval framework and prompt A/B testing. Served 400+ users, whose win rates rose 40%+, and is officially approved for the Riot Games API.',
        github: 'https://github.com/jhuang0701/tft-meta-analytics',
        liveDemo: 'https://chattft.streamlit.app',
    },
    {
        title: 'Pan-Tilt Scanner Controller',
        image: null,
        tags: ['KiCad', 'STM32F103', 'Stepper drivers', 'Power regulation'],
        description:
            'KiCad-designed two-axis stepper controller built around an STM32F103 microcontroller, with dual Pololu A4988 driver interfaces and regulated 5 V and 3.3 V power rails.',
        github: 'https://github.com/jhuang0701/Pan-Tilt-Scanner',
        liveDemo: null,
    },
    {
        title: 'Quality Inspector Login',
        image: '/portfolio/project-quality-inspector.jpeg',
        tags: ['Python', 'PyQt5', 'Excel'],
        description:
            'PyQt5 desktop app built for QA inspectors at S&C Electric to log inspections with more speed and traceability, writing records directly to a shared Excel log. Deployed on the company portal and used in production.',
        github: 'https://github.com/jhuang0701/Quality-Inspector-Login',
        liveDemo: null,
    },
    {
        title: 'Warm Wheels',
        image: '/portfolio/project-warmwheels.png',
        tags: ['Embedded C++', 'Arduino', 'State machines'],
        description:
            'Embedded control system for a pulley-driven Hot Wheels launcher. Embedded C++ firmware on an Arduino Uno Rev3 with real-time state machine logic for motor control synchronization.',
        github: null,
        liveDemo: null,
    },
]

function Chevron({ direction }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            {direction === 'left' ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
        </svg>
    )
}

function ProjectCard({ project, dragged }) {
    const [showPhoto, setShowPhoto] = useState(false)
    const blockIfDragged = (e) => dragged && e.preventDefault()

    return (
        <div
            data-card
            className="group snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-lg border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
        >
            {project.image && (
                <div
                    className={`overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 [@media(hover:hover)]:group-hover:max-h-48 [@media(hover:hover)]:group-hover:opacity-100 ${
                        showPhoto ? 'max-h-48 opacity-100' : ''
                    }`}
                >
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover pointer-events-none" loading="lazy" draggable="false" />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span key={tag} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-slate-400 mb-6 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={blockIfDragged}
                            className="text-sm font-medium text-white border border-slate-700 rounded-full px-4 py-2 hover:border-blue-500 transition-colors"
                        >
                            GitHub
                        </a>
                    )}
                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={blockIfDragged}
                            className="text-sm font-medium text-white bg-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 transition-colors"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.image && (
                        <button
                            type="button"
                            onClick={() => setShowPhoto((v) => !v)}
                            aria-expanded={showPhoto}
                            className="[@media(hover:hover)]:hidden text-sm font-medium text-slate-300 border border-slate-700 rounded-full px-4 py-2"
                        >
                            {showPhoto ? 'Hide photo' : 'Show photo'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
    const trackRef = useRef(null)
    const isDown = useRef(false)
    const startX = useRef(0)
    const startScroll = useRef(0)
    const [dragged, setDragged] = useState(false)

    const scrollByCard = (direction) => {
        const track = trackRef.current
        if (!track) return
        const card = track.querySelector('[data-card]')
        const step = card ? card.getBoundingClientRect().width + 24 : 320
        track.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' })
    }

    const onPointerDown = (e) => {
        const track = trackRef.current
        if (!track || e.pointerType !== 'mouse') return
        isDown.current = true
        setDragged(false)
        startX.current = e.clientX
        startScroll.current = track.scrollLeft
        track.setPointerCapture(e.pointerId)
    }

    const onPointerMove = (e) => {
        if (!isDown.current) return
        const track = trackRef.current
        if (!track) return
        const dx = e.clientX - startX.current
        if (Math.abs(dx) > 5) setDragged(true)
        track.scrollLeft = startScroll.current - dx
    }

    const onPointerUp = (e) => {
        isDown.current = false
        const track = trackRef.current
        if (!track) return
        try {
            track.releasePointerCapture(e.pointerId)
        } catch {
            // pointer was not captured
        }
    }

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4 text-center text-white">Projects</h2>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    Analog front ends, PCBs, embedded firmware and the test software that proves they work.
                </p>

                <div className="relative max-w-6xl mx-auto">
                    <button
                        type="button"
                        onClick={() => scrollByCard('prev')}
                        aria-label="Previous project"
                        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-slate-900/90 border border-slate-700 text-white hover:border-blue-500 transition-colors"
                    >
                        <Chevron direction="left" />
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollByCard('next')}
                        aria-label="Next project"
                        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-slate-900/90 border border-slate-700 text-white hover:border-blue-500 transition-colors"
                    >
                        <Chevron direction="right" />
                    </button>

                    <div
                        ref={trackRef}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                        onPointerLeave={onPointerUp}
                        className="flex items-start gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {projects.map((project) => (
                            <ProjectCard key={project.title} project={project} dragged={dragged} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

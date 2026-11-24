const projects = [
    {
        title: 'Acoustic Measurement Instrument',
        image: null,
        tags: ['KiCad', 'ngspice', 'OPA2365', 'ESP32', 'Python HIL'],
        description:
            'A portable acoustic measurement instrument I designed and built: electret microphone bias network, OPA2365 preamp with four switchable gains, a 4th-order Sallen-Key anti-alias filter (-3 dB at 25.5 kHz) and an ESP32 ADC at 80 kSPS on a hand-routed 2-layer mixed-signal PCB. Root-caused an 8.6 dB response error to the ESP32 ADC swapping every sample pair; the fix brought the measured response within 0.37 dB of calculation through 25 kHz. A Python hardware-in-the-loop test sweeps the board from 1 to 55 kHz against a Monte Carlo tolerance band, and an end-to-end test on real sound tracked the inverse-square law (-5.46 dB per doubling vs -6.02 dB expected).',
        github: 'https://github.com/jhuang0701/Portable-Acoustic-Measurement-System',
        liveDemo: null,
    },
    {
        title: '3-Phase FOC BLDC Motor Driver with Onboard IMU',
        image: '/portfolio/project-foc-motor-driver-2.png',
        tags: ['KiCad', '4-layer PCB', 'STM32G474', 'DRV8353', 'FOC'],
        description:
            "A 4-layer motor driver PCB designed in KiCad from schematic through DRC-clean layout, targeting a self-balancing single-wheel robot. Takes a 6S battery input (22.2V nominal) and drives a 3-phase BLDC motor via field-oriented control, with dual current-sensing (independent hardware overcurrent protection separate from the precision current feedback used in the FOC loop) and an onboard IMU for real-time balance control. Uses hardware dead-time PWM generation to drive all 6 gate signals independently, and isolates the MCU's analog supply rail from the digital supply to keep switching noise out of current-sense measurements. STM32G474RET6, DRV8353HRTAT gate driver, ICM-42688-P IMU (SPI), designed for 15A continuous / 30A peak phase current.",
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
            'A two-axis stepper controller board designed in KiCad around an STM32F103 microcontroller, with dual Pololu A4988 driver interfaces and regulated 5 V and 3.3 V power rails.',
        github: null,
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

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4 text-center text-white">Projects</h2>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    Analog front ends, PCBs, embedded firmware and the test software that proves they work.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="rounded-lg border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                        >
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                            ) : (
                                <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-blue-900/60 via-slate-900 to-slate-950">
                                    <svg viewBox="0 0 120 40" className="w-40 text-blue-400/80" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                        <path d="M0 20 Q10 2 20 20 T40 20 T60 20 T80 20 T100 20 T120 20" />
                                    </svg>
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-slate-400 mb-6">{project.description}</p>
                                <div className="flex gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
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
                                            className="text-sm font-medium text-white bg-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 transition-colors"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

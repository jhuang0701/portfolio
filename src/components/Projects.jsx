const projects = [
    {
        title: 'ChatTFT',
        image: '/portfolio/project-chattft.jpeg',
        description:
            'AI analytics platform integrating Llama 3.3 70B via Groq with a production RAG pipeline over 10K+ chunks. Serves 300+ users, improved win rates 40%+, and is officially Riot Games API approved.',
        github: 'https://github.com/jhuang0701',
        liveDemo: 'https://chattft.streamlit.app',
    },
    {
        title: 'Quality Inspector Login',
        image: '/portfolio/project-quality-inspector.jpeg',
        description:
            'PyQt5 desktop app built for QA inspectors at S&C Electric to log inspections with more speed and traceability, writing records directly to a shared Excel log. Deployed on the company portal and used in production.',
        github: 'https://github.com/jhuang0701/Quality-Inspector-Login',
        liveDemo: null,
    },
    {
        title: '3-Phase FOC BLDC Motor Driver with Onboard IMU',
        image: '/portfolio/project-foc-motor-driver-2.png',
        description:
            "A 4-layer motor driver PCB designed in KiCad from schematic through DRC-clean layout, targeting a self-balancing single-wheel robot. Takes a 6S battery input (22.2V nominal) and drives a 3-phase BLDC motor via field-oriented control, with dual current-sensing (independent hardware overcurrent protection separate from the precision current feedback used in the FOC loop) and an onboard IMU for real-time balance control. Uses hardware dead-time PWM generation to drive all 6 gate signals independently, and isolates the MCU's analog supply rail from the digital supply to keep switching noise out of current-sense measurements. STM32G474RET6, DRV8353HRTAT gate driver, ICM-42688-P IMU (SPI), 15A continuous / 30A peak phase current.",
        github: 'https://github.com/jhuang0701/Power-Reference-Board',
        liveDemo: null,
    },
    {
        title: 'Warm Wheels',
        image: '/portfolio/project-warmwheels.png',
        description:
            'Embedded control system for a pulley-driven Hot Wheels launcher. Embedded C++ firmware on an Arduino Uno Rev3 with real-time state machine logic for motor control synchronization.',
        github: 'https://github.com/jhuang0701',
        liveDemo: null,
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4 text-center text-white">Projects</h2>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    A couple of things I've built at the intersection of software and hardware.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="rounded-lg border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-slate-400 mb-6">{project.description}</p>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-white border border-slate-700 rounded-full px-4 py-2 hover:border-blue-500 transition-colors"
                                    >
                                        GitHub
                                    </a>
                                    {project.liveDemo ? (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-white bg-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 transition-colors"
                                        >
                                            Live Demo
                                        </a>
                                    ) : (
                                        <span className="text-sm font-medium text-slate-500 rounded-full px-4 py-2 border border-slate-800">
                                            Live Demo (N/A)
                                        </span>
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

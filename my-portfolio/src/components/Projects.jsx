const projects = [
    {
        title: 'ChatTFT',
        description:
            'Full-stack AI analytics platform integrating Llama 3.3 70B via Groq with a production RAG pipeline. 300+ users, Riot Games API approved.',
        github: 'https://github.com/jhuang0701',
        liveDemo: 'https://chattft.streamlit.app',
    },
    {
        title: 'Warm Wheels',
        description:
            'Embedded control system for a pulley-driven Hot Wheels launcher. Embedded C++ firmware with real-time state machine logic on Arduino.',
        github: 'https://github.com/jhuang0701',
        liveDemo: null,
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4 text-center text-white">Projects</h2>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    A couple of things I've built at the intersection of software and hardware.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 hover:border-blue-500/50 transition-all duration-300"
                        >
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
                    ))}
                </div>
            </div>
        </section>
    )
}

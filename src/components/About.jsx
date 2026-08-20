const techStack = [
    'Python',
    'C++',
    'Embedded C++',
    'JavaScript',
    'React',
    'Verilog',
    'MATLAB',
    'Groq API / RAG',
]

export default function About() {
    return (
        <section id="about-me" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">About Me</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">Electrical Engineering Student</h3>
                        <p className="text-slate-400 mb-6">
                            I'm a second-year EE student at the University of Waterloo with a long-standing interest
                            in power systems and renewable energy. I split my time between QA automation, embedded
                            firmware, and leading the WATBots electrical subteam of 20+ engineers.
                        </p>
                        <p className="text-slate-400 mb-8">
                            Outside of engineering I'm usually playing chess (top 1% on chess.com), on a basketball
                            court, gaming, or working out. I'm always looking for ways to bridge hardware and
                            software into systems that actually ship.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {techStack.map((name) => (
                                <span
                                    key={name}
                                    className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm"
                                >
                                    {name}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <a href="mailto:j664huan@uwaterloo.ca">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                                    Get In Touch
                                </button>
                            </a>
                            <a href="/portfolio/Resume_JonathanHuang.pdf" download>
                                <button className="border border-slate-700 hover:border-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
                            <img
                                src="/portfolio/headshot.jpg"
                                alt="Jonathan Huang"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

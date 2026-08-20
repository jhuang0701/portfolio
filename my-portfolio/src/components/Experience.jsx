import { useState } from 'react'

const companies = [
    {
        name: 'S&C Electric Company',
        link: 'https://www.sandc.com/',
        role: 'Assistant QA Engineer',
        description: 'Python automation, 60% faster retrieval, zero non-conformance escapes',
    },
    {
        name: 'WATBots',
        link: 'https://www.uwwatbots.com/',
        role: 'Electrical Subteam Lead',
        description: 'Embedded C++ firmware, ESP32/AM32 ESC control, 20+ engineers',
    },
    {
        name: 'Act First Safety',
        link: '#',
        role: 'Administrative Intern',
        description: 'Excel macro validation pipelines, 2,000+ contracts',
    },
]

export default function Experience() {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <section id="experience" className="py-20 bg-black">
            <div className="w-full px-8 md:px-12">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">My Experiences</h2>

                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
                    {companies.map((company, index) => (
                        <a
                            key={company.name}
                            href={company.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="absolute inset-0 rounded-lg bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div
                                className={`relative rounded-lg border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm transition-all duration-300 flex items-center justify-center text-center group-hover:border-blue-500/50 group-hover:shadow-lg ${
                                    hoveredIndex === index ? 'h-32 w-64 md:h-36 md:w-72 scale-110' : 'h-24 w-48 md:h-28 md:w-56'
                                }`}
                            >
                                <span className="text-white font-semibold text-sm md:text-base">{company.name}</span>
                            </div>

                            <div
                                className={`absolute -bottom-24 left-1/2 -translate-x-1/2 w-48 rounded-lg border border-blue-500/30 bg-slate-900/95 p-3 backdrop-blur-sm transition-all duration-300 ${
                                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                                }`}
                            >
                                <div className="text-xs text-blue-400 font-semibold mb-1">{company.role}</div>
                                <div className="text-xs text-slate-300">{company.description}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

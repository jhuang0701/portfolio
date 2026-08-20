import { useState, useEffect } from 'react'

const navItems = ['Home', 'About Me', 'Experience', 'Projects']

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${
                isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-white">
                    Jonathan.
                </a>

                <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {isMobileMenuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 12h16M4 6h16M4 18h16" />}
                    </svg>
                </button>

                <ul className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md shadow-md py-4 md:hidden">
                        <ul className="flex flex-col items-center space-y-4">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-white hover:text-blue-400 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

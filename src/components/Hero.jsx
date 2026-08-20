import { useState, useEffect } from 'react'

const interests = [
    'Power Systems',
    'Embedded Firmware',
    'QA Automation',
    'Machine Learning',
    'Renewable Energy',
    'Full Stack Development',
    'Circuit Design',
]

export default function Hero() {
    const [currentInterestIndex, setCurrentInterestIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(100)

    useEffect(() => {
        const currentInterest = interests[currentInterestIndex]

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentInterest.substring(0, displayText.length + 1))
                setTypingSpeed(50)

                if (displayText === currentInterest) {
                    setTypingSpeed(1000)
                    setIsDeleting(true)
                }
            } else {
                setDisplayText(currentInterest.substring(0, displayText.length - 1))
                setTypingSpeed(30)

                if (displayText === '') {
                    setIsDeleting(false)
                    setCurrentInterestIndex((currentInterestIndex + 1) % interests.length)
                }
            }
        }, typingSpeed)

        return () => clearTimeout(timer)
    }, [currentInterestIndex, displayText, isDeleting, typingSpeed])

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: "url('/portfolio/toronto-skyline.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Hi I&apos;m Jonathan</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                    Nice to meet you! I&apos;m a current Electrical Engineering student at the University of Waterloo.
                </p>

                <div className="text-xl md:text-2xl text-white mb-12">
                    <span>I&apos;m passionate about </span>
                    <span className="inline-block text-blue-400 font-semibold">
                        {displayText}
                        <span className="animate-blink">|</span>
                    </span>
                </div>
            </div>
        </section>
    )
}

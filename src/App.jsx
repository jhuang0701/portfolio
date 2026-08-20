import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-gradient-black-gray text-white">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Footer />
        </div>
    )
}

export default App
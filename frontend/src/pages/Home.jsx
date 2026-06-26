import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import NowLearning from "@/components/portfolio/NowLearning";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Achievements from "@/components/portfolio/Achievements";
import Goals from "@/components/portfolio/Goals";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <NowLearning />
                <Projects />
                <Education />
                <Achievements />
                <Goals />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

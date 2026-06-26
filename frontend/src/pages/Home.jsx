import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import NowLearning from "@/components/portfolio/NowLearning";
import Roadmap from "@/components/portfolio/Roadmap";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Achievements from "@/components/portfolio/Achievements";
import Goals from "@/components/portfolio/Goals";
import ComingNext from "@/components/portfolio/ComingNext";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import SideRail from "@/components/portfolio/SideRail";
import { skills } from "@/data/portfolio";

export default function Home() {
    const marqueeItems = skills.flatMap((g) => g.items).slice(0, 16);

    return (
        <div className="relative min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background overflow-x-hidden">
            <ScrollProgress />
            <Navbar />
            <SideRail />
            <main>
                <Hero />
                <Marquee items={marqueeItems} speed={50} />
                <About />
                <Skills />
                <NowLearning />
                <Roadmap />
                <Projects />
                <Education />
                <Achievements />
                <Goals />
                <ComingNext />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

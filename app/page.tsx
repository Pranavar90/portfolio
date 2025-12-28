
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProfessionalJourney } from "@/components/sections/ProfessionalJourney";
import { Experience } from "@/components/sections/Experience";
import { Projects, ProjectsMobile } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-between">
            <Navbar />

            <Hero />
            <About />
            <ProfessionalJourney />

            {/* Experience Timeline */}
            <Experience />

            {/* Projects - Layout varies by device */}
            <Projects />
            <ProjectsMobile />

            <Certifications />
            <Contact />
        </main>
    );
}

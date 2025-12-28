"use client";

import { Section } from "@/components/ui/Section";
import { ArrowUpRight, Mail } from "lucide-react";
import { useCursor } from "@/hooks/use-cursor";
import { useState, useEffect, useRef } from "react";

export function Contact() {
    const { setCursorType } = useCursor();
    const [pixelsTraveled, setPixelsTraveled] = useState(0);
    const lastPosition = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (lastPosition.current) {
                const dx = e.clientX - lastPosition.current.x;
                const dy = e.clientY - lastPosition.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                setPixelsTraveled(prev => Math.floor(prev + distance));
            }
            lastPosition.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <Section id="contact" className="min-h-[60vh] flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-8">
                Let's build the future.
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mb-12">
                Open to opportunities in Applied AI, Computer Vision, and Robotics.
            </p>

            <div className="flex flex-col md:flex-row gap-6">
                <a
                    href="mailto:apranav@gitam.in"
                    className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform"
                    onMouseEnter={() => setCursorType("hover")}
                    onMouseLeave={() => setCursorType("default")}
                >
                    <Mail className="w-5 h-5" />
                    Get in Touch
                </a>
                <a
                    href="/resume_pranav.pdf"
                    download="resume_pranav.pdf"
                    target="_blank"
                    className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
                    onMouseEnter={() => setCursorType("hover")}
                    onMouseLeave={() => setCursorType("default")}
                >
                    Download Resume
                    <ArrowUpRight className="w-5 h-5" />
                </a>
            </div>

            <footer className="absolute bottom-6 w-full flex flex-col items-center gap-2 text-center text-sm text-muted-foreground/40">
                <div>© 2025 Pranav A R. All Rights Reserved.</div>

                {/* Mouse Distance Counter */}
                <div className="font-mono text-xs tracking-widest opacity-60 mt-2 lowercase">
                    your mouse traveled "{pixelsTraveled.toLocaleString()}" pixels
                </div>
            </footer>
        </Section>
    );
}

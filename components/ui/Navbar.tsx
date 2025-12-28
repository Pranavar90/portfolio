"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, Home } from "lucide-react"; // Import Home icon

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            // Reverted to original layout: h-20, flex items-center justify-between, px-6 md:px-12
            className={cn(
                "fixed top-0 inset-x-0 z-50 h-20 transition-all duration-300 flex items-center justify-between px-6 md:px-12"
            )}
        >
            {/* Home Icon Button (Matching style of Social Links) */}
            <a
                href="#hero"
                className="text-white/80 hover:text-white hover:scale-110 transition-all"
                title="Home"
            >
                <Home className="w-5 h-5" />
            </a>

            <div className="flex items-center gap-6">
                {/* Social Links */}
                <div className="flex items-center gap-4 border-r border-white/20 pr-6 mr-2 hidden md:flex">
                    <a
                        href="https://github.com/Pranavar90"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white hover:scale-110 transition-all"
                        title="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pranav-ar-1b8925265/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white hover:scale-110 transition-all"
                        title="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="/resume_pranav.pdf"
                        target="_blank"
                        className="text-white/80 hover:text-white hover:scale-105 transition-all flex items-center gap-2 text-sm font-semibold"
                        title="Resume"
                    >
                        <span className="hidden lg:inline">Resume</span>
                    </a>
                </div>

                {/* Navigation Items */}
                <ul className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="text-sm font-bold text-white/70 hover:text-accent transition-colors uppercase tracking-widest"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}

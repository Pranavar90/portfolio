"use client";

import { Section } from "@/components/ui/Section";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export function Certifications() {
    const certs = [
        { name: "AI Infrastructure & Operations", iso: "Nvidia", year: "2024" },
        { name: "Visual Perception for Self-Driving Cars", iso: "University of Toronto", year: "2023" },
        { name: "Modern Robotics: Mechanics, Planning, Control", iso: "Northwestern University", year: "2023" },
        { name: "Deep Neural Networks & Regularization", iso: "DeepLearning.AI", year: "2023" },
        { name: "Machine Learning with Python", iso: "IBM AI Engineering", year: "2023" },
    ];

    return (
        <Section id="certifications" className="min-h-[60vh]">
            <div className="max-w-5xl w-full mx-auto">
                <h3 className="text-sm uppercase tracking-widest text-accent mb-12">Credentials</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certs.map((cert, i) => (
                        // Reduced padding back to p-6 (was p-8) and removed extra whitespace
                        <div key={i} className="flex items-start gap-5 p-6 border border-white/5 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group cursor-default">
                            <div className="p-2.5 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                                <ShieldCheck className="w-6 h-6 text-accent" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg md:text-xl font-bold text-white mb-1">{cert.name}</h4>
                                <p className="text-sm text-muted-foreground">{cert.iso} • {cert.year}</p>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export function Experience() {
    const experiences = [
        {
            year: "Sep 2025 - Present",
            company: "TechBharat AI",
            role: "AI Researcher (Part-time)",
            description: "Designed Computer Vision Systems and optimized object detection and re-identification pipelines using YOLO, focusing on real-world deployment.",
        },
        {
            year: "Jul 2025 - Present",
            company: "University of Kerala",
            role: "Research Intern",
            description: "Developed end-to-end deep learning pipeline for large-scale geospatial and time-series data, integrating satellite imagery to analyze regional risk patterns.",
        },
        {
            year: "Jun 2024 - Jul 2024",
            company: "Indian Institute of Space Science and Technology",
            role: "Research Intern",
            description: "Depth-Based FER: Worked at CVVR Lab using PointNet and CNNs for Facial Expression Recognition on depth data.",
        },
        {
            year: "May 2024 - June 2025",
            company: "AeroGitam",
            role: "President",
            description: "Led UAV and LiDAR projects, organized technical events, and managed cross-functional team collaborations. Integrated LiDAR cameras in Python.",
        },
        {
            year: "May 2023 - Jul 2023",
            company: "Indian Institute of Space Science and Technology",
            role: "Intern",
            description: "LiDAR Processing: Developed integration and preprocessing techniques for depth perception and point cloud extraction with Intel LiDAR cameras.",
        },
    ];

    return (
        <Section id="experience">
            <div className="max-w-4xl w-full mx-auto">
                <h3 className="text-sm uppercase tracking-widest text-accent mb-16">Experience</h3>

                <div className="relative border-l border-white/10 ml-0 md:ml-6 pl-8 md:pl-16 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Timeline Interaction Point */}
                            <span className="absolute -left-[41px] md:-left-[73px] top-2 -translate-y-1/2 h-4 w-4 rounded-full border border-accent bg-background" />

                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-2">
                                <span className="text-sm font-mono text-accent whitespace-nowrap">{exp.year}</span>
                                <h4 className="text-2xl font-bold text-white">{exp.company}</h4>
                            </div>
                            <p className="text-lg font-medium text-muted-foreground mb-4">{exp.role}</p>
                            <p className="text-muted-foreground/80 max-w-2xl">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

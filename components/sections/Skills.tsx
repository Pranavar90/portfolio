"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

export function Skills() {
    const domains = [
        {
            category: "Core AI/ML",
            skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "OpenCV"],
            color: "from-blue-600 via-blue-500 to-indigo-600"
        },
        {
            category: "Computer Vision",
            skills: ["YOLO (v5,v8,v11)", "Segmentation", "Object Tracking", "Re-ID", "3D Vision"],
            color: "from-purple-600 via-purple-500 to-pink-600"
        },
        {
            category: "Geospatial & Tools",
            skills: ["ArcGIS", "QGIS", "GeoPandas", "GDAL", "Google Earth Engine"],
            color: "from-emerald-600 via-emerald-500 to-teal-600"
        },
        {
            category: "Deployment & MLOps",
            skills: ["Docker", "FastAPI", "AWS (EC2, S3)", "Git/GitHub", "Linux"],
            color: "from-orange-600 via-orange-500 to-red-600"
        },
    ];

    return (
        <Section id="skills" className="min-h-screen">
            <div className="max-w-6xl w-full mx-auto">
                <h3 className="text-sm uppercase tracking-widest text-accent mb-12">Expertise</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {domains.map((domain, i) => (
                        <Card
                            key={i}
                            className="p-8 group relative overflow-hidden min-h-[280px] flex flex-col justify-between border-white/5 bg-white/5 hover:bg-white/10"
                            tiltStrength={5}
                        >
                            {/* Persistent colored glow at the bottom - subtle but visible */}
                            <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${domain.color} opacity-20 blur-[80px]`} />

                            {/* Dynamic Gradient Background on Hover - vivid */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            {/* Top Border Accent - Always visible */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.color}`} />

                            <div className="relative z-10">
                                <h4 className={`text-3xl font-bold text-white mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${domain.color} transition-colors`}>
                                    {domain.category}
                                </h4>

                                <div className="flex flex-wrap gap-3">
                                    {domain.skills.map((skill, j) => (
                                        <span
                                            key={j}
                                            className="px-4 py-2 text-sm md:text-base border border-white/10 rounded-full bg-black/40 text-muted-foreground group-hover:border-white/30 group-hover:text-white transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}

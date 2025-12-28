"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export function ProfessionalJourney() {
    return (
        <Section id="journey" className="min-h-screen bg-muted/5 relative overflow-hidden">
            {/* Subtle grain texture */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

            <div className="max-w-6xl w-full mx-auto relative z-10 px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Section Title */}
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
                            Professional Journey
                        </h2>
                        <div className="w-24 h-0.5 bg-accent" />
                    </div>

                    {/* Body Text */}
                    <p className="text-lg md:text-xl leading-relaxed text-muted-foreground/90 max-w-4xl">
                        I am an engineering graduate with strong hands-on experience in deep learning, data engineering, and intelligent systems development. My work focuses on building end-to-end machine learning pipelines, particularly for time-series and spatiotemporal prediction problems, with an emphasis on data integrity, model reliability, and scalable execution. I have implemented deep learning models using Python and TensorFlow, supported by structured data processing, automated workflows, and reproducible experimentation practices.

                        In addition to software and data-centric work, I have practical experience with UAV systems, including multirotor architecture, propulsion and power considerations, sensor integration, and simulation-based validation. This exposure has strengthened my ability to reason about complex systems that span hardware, software, and data, and to apply disciplined engineering approaches to problem solving. I am comfortable translating abstract requirements into implementable solutions and validating them through testing and analysis.

                        Overall, I bring a strong analytical mindset, attention to detail, and a focus on building robust, well-governed systems suited for enterprise and risk-aware environments. I am motivated by roles that require technical depth, accountability, and the ability to deliver dependable solutions at scale.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
}

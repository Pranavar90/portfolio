"use client";

import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    const sentence = "I am a Computer Science undergraduate and AI Researcher with core expertise in Deep Learning and Applied Machine Learning. I build end-to-end ML pipelines, optimizing for real-world deployment in Computer Vision and Geospatial domains.";
    const words = sentence.split(" ");

    return (
        <Section id="about" className="bg-muted/5 min-h-screen flex flex-col justify-center py-20">
            <div className="max-w-7xl w-full mx-auto flex flex-col gap-32">

                {/* Part 1: Identity / Bio & New Portrait */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <div className="order-2 md:order-1">
                        <h3 className="text-sm uppercase tracking-widest text-accent mb-8">About / Identity</h3>
                        <div className="flex flex-wrap gap-x-2 text-2xl md:text-4xl leading-tight font-medium text-muted-foreground">
                            {words.map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, filter: "blur(10px)" }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.5 }}
                                    className={cn(i > 15 ? "text-white" : "")}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="mt-8 text-lg text-muted-foreground/60"
                        >
                            <p>Visakhapatnam, India • student @ Gitam University</p>
                        </motion.div>
                    </div>

                    {/* Right: Identity Image (Updated to "WhatsApp Image") */}
                    <div className="order-1 md:order-2 flex justify-center items-center">
                        <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                            <Image
                                src="/images/about-portrait-new-2.jpg"
                                alt="Identity"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                    </div>
                </div>

                {/* Part 2: FPV Section & Drone Flat Lay */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left: Full Size Drone Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                    >
                        <Image
                            src="/images/WhatsApp Image 2025-12-27 at 4.10.45 PM.jpeg"
                            alt="FPV Drone Hardware"
                            fill
                            className="object-cover"
                            style={{ objectFit: "contain", backgroundColor: "#000" }}
                        />
                    </motion.div>

                    {/* Right: Text */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-white mb-6">FPV Pilot & Hardware Enthusiast</h3>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                            Beyond the code, I design, build, and fly high-speed FPV drones, RC Aircrafts and UAVs. This hands-on hardware experience informs my approach to embedded AI and robotics.
                        </p>
                    </div>
                </div>

            </div>
        </Section>
    );
}

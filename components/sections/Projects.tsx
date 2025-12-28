"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { useCursor } from "@/hooks/use-cursor";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const titleOpacity = useTransform(x, [0, -200], [1, 0]);
    const titleScale = useTransform(x, [0, -200], [1, 0.95]);

    useEffect(() => {
        if (!carousel.current) return;

        const updateWidth = () => {
            if (carousel.current) {
                setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
            }
        };

        const resizeObserver = new ResizeObserver(() => {
            updateWidth();
        });

        resizeObserver.observe(carousel.current);

        // Also recalculate after a delay for any delayed layout logic
        const timer = setTimeout(updateWidth, 100);

        return () => {
            resizeObserver.disconnect();
            clearTimeout(timer);
        };
    }, []);

    const projects = [
        {
            title: "Citizen Facility Monitoring",
            tech: "OpenCV, YOLO, CCTV Analysis",
            desc: "Enterprise-grade computer vision system to analyze customer flow, staff activity, and operational efficiency through automated analytics.",
            image: "bg-neutral-900"
        },
        {
            title: "UAV Terrain Mapping",
            tech: "LiDAR, Raspberry Pi, Intel Realsense",
            desc: "UAV system with LiDAR for terrain mapping and point cloud acquisition, integrated with customized hardware stack.",
            bgImage: "/images/drone-build.jpg"
        },
        {
            title: "Geospatial Risk Prediction",
            tech: "Deep Learning, Satellite Imagery",
            desc: "Deep learning pipeline leveraging satellite data for risk prediction and regional analysis.",
            bgImage: "/images/geo-map.png"
        },
        {
            title: "Depth-Based FER",
            tech: "PointNet, CNN, AffectNet",
            desc: "Facial Expression Recognition using Depth data and PointClouds, trained on AffectNet for robust emotion classification.",
            image: "bg-neutral-900"
        },
        {
            title: "Digital AI Twin",
            tech: "Predictive Analytics, RL",
            desc: "AI-powered digital twin platform using reinforcement learning to personalize student experiences.",
            image: "bg-neutral-900"
        }
    ];

    return (
        <section id="projects" className="relative h-screen flex items-center bg-neutral-900/0 hidden md:block overflow-hidden w-full">
            <motion.div
                ref={carousel}
                className="cursor-grab active:cursor-grabbing w-full"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    dragElastic={0.1}
                    style={{ x }}
                    className="flex items-center gap-24 px-[10vw]"
                >
                    {/* Title Block - Now side-by-side with cards */}
                    <motion.div
                        style={{ opacity: titleOpacity, scale: titleScale }}
                        className="flex-shrink-0 w-[500px]"
                    >
                        <h3 className="text-sm uppercase tracking-widest text-accent mb-4">Selected Work</h3>
                        <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[0.9]">Featured<br />Projects</h2>
                        <div className="h-1.5 w-24 bg-accent mb-8" />
                        <p className="text-muted-foreground text-xl italic uppercase tracking-wider flex items-center gap-3">
                            Drag to explore <span className="text-2xl">&rarr;</span>
                        </p>
                    </motion.div>

                    {/* Project Cards */}
                    <div className="flex gap-12 py-10">
                        {projects.map((project, i) => (
                            <ProjectCard key={i} project={project} />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

function ProjectCard({ project }: { project: any }) {
    const { setCursorType } = useCursor();

    return (
        <Card
            className={`min-w-[450px] h-[550px] flex flex-col justify-end p-10 group relative overflow-hidden`}
            onClick={() => { }}
        >
            {/* Background Image logic */}
            {project.bgImage && (
                <div
                    className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.bgImage})` }}
                />
            )}
            {/* Gradient overlay to ensure text readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-white w-6 h-6" />
            </div>
            <div className="relative z-20">
                <span className="text-xs font-mono text-accent mb-2 block">{project.tech}</span>
                <div className="overflow-hidden">
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:translate-y-0 transition-transform">{project.title}</h3>
                </div>
                <p className="text-white/70 line-clamp-3 text-sm leading-relaxed">{project.desc}</p>
            </div>
        </Card>
    )
}

export function ProjectsMobile() {
    const projects = [
        {
            title: "Citizen Facility Monitoring",
            tech: "OpenCV, YOLO, CCTV Analysis",
            desc: "Enterprise-grade computer vision system to analyze customer flow, staff activity, and operational efficiency through automated analytics.",
            image: "bg-gradient-to-br from-blue-900 to-slate-900"
        },
        {
            title: "UAV Terrain Mapping",
            tech: "LiDAR, Raspberry Pi, Intel Realsense",
            desc: "UAV system with LiDAR for terrain mapping and point cloud acquisition.",
            bgImage: "/images/drone-build.jpg"
        },
        {
            title: "Geospatial Risk Prediction",
            tech: "Deep Learning, Satellite Imagery",
            desc: "Deep learning pipeline leveraging satellite data for risk prediction and regional analysis.",
            bgImage: "/images/geo-map.png"
        },
        {
            title: "Depth-Based FER",
            tech: "PointNet, CNN, AffectNet",
            desc: "Facial Expression Recognition using Depth data and PointClouds.",
            image: "bg-gradient-to-br from-orange-900 to-slate-900"
        },
    ];

    return (
        <section id="projects-mobile" className="py-20 px-6 block md:hidden">
            <div className="mb-12">
                <h3 className="text-sm uppercase tracking-widest text-accent mb-4">Selected Work</h3>
                <h2 className="text-5xl font-bold text-white mb-6">Featured<br />Projects</h2>
                <div className="h-1 w-20 bg-accent" />
            </div>
            <div className="flex flex-col gap-8">
                {projects.map((project, i) => (
                    <Card key={i} className={`min-h-[400px] flex flex-col justify-end p-6 relative overflow-hidden group`}>
                        {project.bgImage && (
                            <div
                                className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
                                style={{ backgroundImage: `url(${project.bgImage})` }}
                            />
                        )}
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent" />

                        <div className="relative z-20">
                            <span className="text-xs font-mono text-accent mb-2 block">{project.tech}</span>
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-white/70">{project.desc}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}

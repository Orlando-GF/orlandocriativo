"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects, ProjectCategory, type Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Variantes para a Animação da Watermark
const watermarkVariants = {
    initial: {
        rotate: -15,
        scale: 0.85,
        opacity: 0.12,
        x: 20,
        y: 20
    },
    hover: {
        rotate: 0,
        scale: 1.1,
        opacity: 0.35,
        x: 0,
        y: 0,
    }
} as const;

export default function PortfolioGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState<ProjectCategory | "TODOS">("TODOS");

    const filteredProjects = activeCategory === "TODOS"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section id="trabalhos" className="border-t-2 border-foreground bg-background py-16 sm:py-24" ref={containerRef}>
            <div className="max-w-[1400px] mx-auto">
                <div className="px-6 md:px-12 mb-20 md:mb-32 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
                    <div>
                        <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-black uppercase tracking-tighter leading-[0.85] italic">
                            Trabalhos<br />Recentes
                        </h2>
                        <div className="h-2 w-32 bg-primary mt-6" />
                    </div>

                    <div className="flex flex-wrap gap-4 font-black uppercase text-sm border-2 border-foreground p-2 shadow-[4px_4px_0px_0px_oklch(0_0_0)]">
                        {(["TODOS", "WEBSITES", "IDENTIDADE VISUAL"] as const).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground" : "hover:bg-foreground hover:text-background"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 px-6 md:px-12">
                    <motion.div style={{ y: y1 }} className="flex flex-col gap-12 md:gap-20 mt-0 md:mt-40">
                        {filteredProjects.filter((_, i) => i % 2 === 0).map((project) => (
                            <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} />
                        ))}
                    </motion.div>

                    <motion.div style={{ y: y2 }} className="flex flex-col gap-12 md:gap-20">
                        {filteredProjects.filter((_, i) => i % 2 !== 0).map((project) => (
                            <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const styles = project.customStyles;

    return (
        <div className="group relative">
            <div className="absolute inset-0 bg-foreground translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 border-4 border-foreground transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6" />

            <Link href={`/projeto/${project.slug}`}>
                <motion.div
                    className="relative flex min-h-[400px] md:h-[500px] flex-col overflow-hidden border-4 border-foreground p-8 md:p-12 transition-all duration-300 bg-background"
                    initial="initial"
                    whileHover="hover"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >

                    <motion.div
                        variants={watermarkVariants}
                        className="absolute -right-4 -bottom-4 z-10 w-64 h-64 md:w-80 md:h-80 pointer-events-none opacity-25 group-hover:opacity-30 group-hover:grayscale transition-all duration-500"
                    >
                        <Image
                            src={project.icon}
                            alt={`Marca d'água de ${project.title}`}
                            width={320}
                            height={320}
                            className={`w-full h-full object-contain ${styles?.watermark || ''}`}
                        />
                    </motion.div>

                    {/* Tag e Seta — topo do card */}
                    <div className="relative z-20 flex justify-between items-start">
                        <span className="inline-block border-2 border-foreground bg-foreground text-background px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
                            {project.category}{" // "}{(index + 1).toString().padStart(2, '0')}
                        </span>
                        <div className="w-14 h-14 border-4 border-foreground bg-background text-foreground flex items-center justify-center transition-all duration-300 hover:rotate-45 hover:bg-primary hover:!border-primary hover:text-primary-foreground cursor-pointer">
                            <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* Título e rodapé — fundo do card */}
                    <div className="relative z-20 mt-auto">
                        <span className={`text-xs font-bold uppercase tracking-[0.4em] mb-4 block ${styles?.metadata || 'opacity-80'}`}>Projeto Selecionado</span>
                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter italic transition-transform duration-300 group-hover:translate-x-4">
                            {project.title.split(' ').map((word: string, i: number) => (
                                <span
                                    key={i}
                                    className="block"
                                    style={{ color: project.titleColors?.[i] || 'inherit' }}
                                >
                                    {word}
                                </span>
                            ))}
                        </h3>

                        <div className={`mt-8 flex items-center gap-4 ${styles?.metadata || 'opacity-50'}`}>
                            <div className="h-[1px] flex-1 bg-current" />
                            <span className="text-[10px] font-mono tracking-widest leading-none">P.MAX_VER_3.0</span>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </div>
    );
}

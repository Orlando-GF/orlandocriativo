"use client";

import { useRef, use } from "react";
import { projects, type ProjectAsset } from "@/data/projects";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: PageProps) {
    const { slug } = use(params);
    const project = projects.find((p) => p.slug === slug);
    const projectIndex = projects.findIndex((p) => p.slug === slug);

    if (!project || !project.caseStudy) {
        notFound();
    }

    const { caseStudy } = project;

    return (
        <main
            className="relative min-h-screen p-6 md:p-12 selection:bg-primary selection:text-primary-foreground bg-background text-foreground"
            style={{ "--project-accent": project.accentColor } as React.CSSProperties}
        >
            <div className="max-w-[1400px] mx-auto">
                <nav className="mb-20 flex justify-between items-center relative z-50">
                    <Link
                        href="/#trabalhos"
                        className="group flex items-center gap-4 text-xl font-black uppercase tracking-tighter transition-colors hover:text-primary"
                    >
                        <ArrowLeft className="w-8 h-8 transition-transform group-hover:-translate-x-2" />
                        Voltar
                    </Link>
                    <span className="text-sm font-mono opacity-80 uppercase tracking-widest hidden md:block">
                        PROJ_ID // {project.slug.toUpperCase()}
                    </span>
                </nav>

                <header className="mb-20 lg:mb-32">
                    <div className="mb-12 inline-block border-2 border-foreground px-4 py-1 text-xs font-black uppercase tracking-[0.25em]">
                        {project.category} // {(projectIndex + 1).toString().padStart(2, '0')}
                    </div>
                    <h1 className="text-[17vw] lg:text-[13vw] font-black uppercase italic leading-[0.75] tracking-tighter relative z-40 break-words mix-blend-difference text-white dark:mix-blend-normal hover:scale-[1.02] transition-transform duration-700">
                        {project.title.split(' ').map((word, i) => (
                            <span
                                key={i}
                                className="block"
                                style={{ color: project.titleColors?.[i] || 'inherit' }}
                            >
                                {word}
                            </span>
                        ))}
                    </h1>
                </header>

                {/* Narrative Stream */}
                <section className="max-w-7xl mb-24 lg:mb-40 z-30 relative">
                    <h2 className="text-sm font-mono uppercase tracking-[0.3em] opacity-50 mb-8">O Que Foi Feito</h2>
                    <p className="text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight selection:bg-foreground selection:text-background">
                        {caseStudy.description}
                    </p>
                </section>

                {/* Staggered Fragment Concept & Narrative */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 lg:mb-40 relative z-30">
                    <div className="lg:col-span-7">
                        <section>
                            <h2 className="text-sm font-mono uppercase tracking-[0.3em] opacity-50 mb-6">O Conceito</h2>
                            <p className="text-2xl md:text-4xl opacity-80 leading-snug font-medium">
                                {caseStudy.concept}
                            </p>
                        </section>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-end">
                        <section
                            className="border-l-[6px] pl-6 md:pl-10 py-8 bg-foreground/5 relative overflow-hidden group hover:bg-foreground/10 transition-colors"
                            style={{ borderColor: 'var(--project-accent)' }}
                        >
                            <div className="absolute inset-0 bg-[var(--project-accent)]/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 pointer-events-none" />
                            <h2 className="text-sm font-mono uppercase tracking-[0.3em] mb-4 relative z-10 font-bold" style={{ color: 'var(--project-accent)' }}>A Narrativa</h2>
                            <p className="text-xl md:text-2xl italic font-medium opacity-95 relative z-10 leading-relaxed">
                                &quot;{caseStudy.narrative}&quot;
                            </p>
                        </section>
                    </div>
                </div>

                {/* Tech & Scope Data Board */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-24 py-16 border-y-4 border-foreground/10 relative z-30">
                    <section className="lg:col-span-5">
                        <h2 className="text-sm font-mono uppercase tracking-[0.3em] opacity-50 mb-8">Stack & Tech</h2>
                        <ul className="text-2xl md:text-3xl font-black uppercase italic space-y-4 tracking-tighter">
                            {caseStudy.techDetails.technologies.map((tech, i) => (
                                <li key={i} className="hover:text-[var(--project-accent)] transition-colors cursor-default hover:translate-x-2 duration-300">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="lg:col-span-3">
                        <h2 className="text-sm font-mono uppercase tracking-[0.3em] opacity-50 mb-8">Color System</h2>
                        <div className="flex flex-col gap-6">
                            {caseStudy.techDetails.colors.map((color) => (
                                <div key={color.hex} className="flex items-center gap-4 group cursor-default">
                                    <div
                                        className="w-12 h-12 md:w-16 md:h-16 shrink-0 border-2 border-foreground/20 shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500"
                                        style={{ backgroundColor: color.hex }}
                                        title={color.name}
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-bold uppercase tracking-widest text-sm lg:text-base group-hover:text-[var(--project-accent)] transition-colors">
                                            {color.name}
                                        </span>
                                        <span className="font-mono text-xs opacity-50">
                                            HEX: {color.hex.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {project.link && (
                        <div className="lg:col-span-4 flex items-center justify-start lg:justify-end mt-8 lg:mt-0">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-6 bg-foreground text-background px-10 py-8 text-2xl lg:text-3xl font-black uppercase tracking-tighter transition-colors duration-300 overflow-hidden hover:bg-[var(--project-accent)] hover:text-white w-full md:w-auto justify-center"
                            >
                                <span className="relative z-10 transition-colors">
                                    {project.category.includes("IDENTIDADE") ? "INSTAGRAM // VIEW" : "Project // Live"}
                                </span>
                                <ExternalLink className="w-8 h-8 lg:w-10 lg:h-10 transform group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500 relative z-10" />
                                <div className="absolute inset-x-0 h-[2px] bg-white/20 animate-scanline pointer-events-none z-0 opacity-20" />
                            </a>
                        </div>
                    )}
                </div>

                {/* Overlapping/Full Width Gallery */}
                <div className="flex flex-col gap-32 lg:gap-48 relative z-20 mb-20 lg:mb-32">
                    {caseStudy.gallery.map((asset, index) => (
                        <GalleryItem key={index} asset={asset} index={index} projectTitle={project.title} accentColor={project.accentColor} />
                    ))}
                </div>

                <div className="mt-40 mb-20 flex flex-col items-center justify-center gap-8 opacity-40">
                    <div className="h-[4px] w-full max-w-2xl bg-foreground" />
                    <span className="text-[12px] md:text-sm font-mono tracking-widest uppercase text-center">
                        End_of_case_study V1.0
                    </span>
                </div>
            </div>
        </main>
    );
}

function GalleryItem({ asset, index, projectTitle, accentColor }: { asset: ProjectAsset, index: number, projectTitle: string, accentColor: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const isEven = index % 2 === 0;

    // Parallax suavizado: offsets reduzidos para não afastar tanto da borda superior.
    const y = useTransform(scrollYProgress, [0, 1], [isEven ? 20 : 40, isEven ? -20 : -40]);
    const rotate = useTransform(scrollYProgress, [0, 1], [isEven ? -1 : 1, isEven ? 1 : -1]);

    return (
        <motion.div
            ref={ref}
            style={{ y, rotate }}
            className={`relative group z-0 will-change-transform ${isEven ? 'lg:pr-24 lg:-ml-12' : 'lg:pl-24 lg:-mr-12'}`}
        >
            <div className="relative z-10">
                <div className="absolute inset-0 bg-foreground translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 transition-transform duration-700 group-hover:translate-x-12 group-hover:translate-y-12 -z-10" />
                <div className="relative overflow-hidden aspect-video w-full flex items-center justify-center border-[1px] border-foreground/30 shadow-2xl bg-white">
                    {asset.type === "image" ? (
                        <Image
                            src={asset.url}
                            alt={asset.caption || projectTitle}
                            width={1200}
                            height={900}
                            priority={index === 0}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                        />
                    ) : (
                        <video
                            src={asset.url}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay" />
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
                        style={{ backgroundColor: accentColor }}
                    />
                </div>
            </div>

            {asset.caption && (
                <div className="mt-16 lg:mt-24 flex items-center gap-4 relative z-20 lg:pl-8">
                    <div className="w-12 h-[2px] bg-foreground opacity-30" />
                    <p className="text-sm font-mono uppercase tracking-widest opacity-70">
                        {asset.caption}
                    </p>
                </div>
            )}
        </motion.div>
    );
}

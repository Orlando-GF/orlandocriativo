"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PortfolioGrid from "@/components/portfolio-grid";
import HeroGraphic from "@/components/hero-graphic";
import CookieBanner from "@/components/cookie-banner";
import LegalPanel from "@/components/legal-panel";
import ScrollToTop from "@/components/scroll-to-top";

export default function HomeContent() {
    const footerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: footerScroll } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    });

    const ocScale = useTransform(footerScroll, [0, 1], [0.8, 1.2]);
    const ocOpacity = useTransform(footerScroll, [0, 0.8, 1], [0.05, 0.1, 0.2]);

    // Gestão de Transparência Legal (Side Panels)
    const [legalType, setLegalType] = useState<"privacidade" | "termos" | "lgpd" | null>(null);
    const [isLegalOpen, setIsLegalOpen] = useState(false);

    const openLegal = (type: "privacidade" | "termos" | "lgpd") => {
        setLegalType(type);
        setIsLegalOpen(true);
    };

    return (
        <div className="overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">

            <CookieBanner onOpenLegal={openLegal} />

            <LegalPanel
                isOpen={isLegalOpen}
                onClose={() => setIsLegalOpen(false)}
                type={legalType}
            />

            <ScrollToTop />

            <div className="fixed inset-0 pointer-events-none z-50">
                <div className="max-w-[1400px] mx-auto h-full relative">
                    <HeroGraphic />
                </div>
            </div>

            <div className="relative min-h-screen min-h-[100dvh] flex flex-col bg-background">
                <div className="relative z-10 flex flex-col h-full pointer-events-none">

                    <nav className="border-b-2 border-foreground bg-background/80 backdrop-blur-md pointer-events-auto">
                        <div className="max-w-[1400px] mx-auto w-full flex shrink-0 items-center justify-between p-6">
                            <span className="text-xl font-black uppercase tracking-tighter">Orlando Criativo</span>
                            <div className="hidden gap-8 font-bold uppercase sm:flex">
                                <a href="#trabalhos" className="hover:underline underline-offset-4">Trabalhos</a>
                                <a href="#sobre" className="hover:underline underline-offset-4">Sobre</a>
                                <a href="#contato" className="hover:underline underline-offset-4">Contato</a>
                            </div>
                        </div>
                    </nav>

                    {/* Hero Content Wrapper */}
                    <section className="flex flex-1 flex-col pointer-events-none z-10">
                        <div className="max-w-[1400px] mx-auto w-full flex flex-1 flex-col justify-between p-6 pt-12 pb-16">
                            <h1
                                className="font-black uppercase tracking-tighter leading-[0.82] shrink-0"
                                style={{ fontSize: "clamp(3.5rem, min(14.5vw, 22dvh), 18rem)" }}
                            >
                                Design<br />Sem<br />Limites<span className="text-primary relative inline-block">.</span>
                            </h1>

                            <div className="flex-1 min-h-[4rem]" />

                            <div className="flex flex-col items-start gap-4 pointer-events-auto sm:flex-row sm:items-end flex-wrap mt-auto">
                                <div
                                    className="border-4 border-foreground bg-background p-4 sm:p-6 max-w-[22rem] shadow-[4px_4px_0px_0px_oklch(0_0_0)]"
                                >
                                    <p className="font-black uppercase leading-snug tracking-tight text-base sm:text-lg">
                                        Estética brutalista elevada ao máximo para marcas que não têm medo de se destacar.
                                    </p>
                                </div>
                                <motion.a
                                    href="#trabalhos"
                                    whileHover={{ y: -8, x: -8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="relative shrink-0 inline-flex items-center justify-center border-4 border-foreground bg-primary px-8 sm:px-12 h-16 sm:h-20 text-lg sm:text-xl font-black uppercase text-primary-foreground shadow-[4px_4px_0px_0px_oklch(0_0_0)] hover:shadow-[12px_12px_0px_0px_oklch(0_0_0)]"
                                >
                                    Explorar Projetos
                                </motion.a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* ─── CONTEÚDO ABAIXO DO HERO (scroll normal) ───────────────────── */}
            <main className="relative z-10 bg-background">

                {/* Portfolio */}
                <PortfolioGrid />

                <section id="sobre" className="relative border-t-2 border-foreground bg-foreground text-background overflow-hidden">
                    <div className="absolute top-4 left-4 text-[10px] font-mono opacity-20 select-none tracking-widest hidden md:block">
                        COORD_SYS_V.R // 23.44.11
                    </div>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-8 opacity-10 hidden md:flex">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="text-[10px] font-mono">+</div>
                        ))}
                    </div>

                    <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 relative z-10">
                        <div className="border-b-2 border-background p-12 md:border-b-0 md:border-r-2 flex flex-col justify-center">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] bg-background text-foreground px-2 py-1">SEC_03</span>
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-50">Metodologia Industrial</span>
                            </div>

                            <h2 className="text-5xl sm:text-7xl font-black uppercase italic mb-8 leading-none">
                                Como eu<br />Trabalho
                            </h2>
                            <div className="space-y-6 text-xl font-medium opacity-90">
                                <p>
                                    Designs memoráveis não nascem de templates. Eles nascem de uma análise profunda do seu negócio.
                                </p>
                                <p>
                                    Trabalho lado a lado com{" "}
                                    <span className="inline-block bg-primary text-primary-foreground px-2 py-3 mt-1 font-black not-italic rotate-[-1deg] border-2 border-background">
                                        Lojas Locais, Marcas e Empreendedores
                                    </span>{" "}
                                    para criar ambientes digitais que comunicam autoridade extrema desde o primeiro segundo.
                                </p>
                            </div>
                        </div>

                        <div id="contato" className="relative p-12 flex flex-col items-start justify-center gap-8 bg-background text-foreground overflow-hidden">
                            <div className="relative z-10 w-full text-left">
                                <h3 className="text-4xl font-black uppercase mb-4 leading-tight">Pronto para<br />elevar sua marca?</h3>
                                <p className="text-xl max-w-sm mb-12">Me chame no Instagram ou WhatsApp para discutirmos o próximo nível do seu projeto.</p>

                                <div className="flex flex-wrap gap-x-8 gap-y-12">
                                    <div className="group relative inline-block">
                                        {/* Sombra Sólida */}
                                        <div className="absolute inset-0 bg-foreground translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5" />

                                        <motion.a
                                            href="https://instagram.com/orlando.criativo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -4, x: -4 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="relative inline-flex h-16 items-center justify-center border-4 border-foreground bg-primary px-12 text-xl font-black uppercase text-primary-foreground"
                                        >
                                            Mande uma DM
                                        </motion.a>
                                    </div>

                                    <div className="group relative inline-block">
                                        {/* Sombra Sólida */}
                                        <div className="absolute inset-0 bg-foreground translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5" />

                                        <motion.a
                                            href="https://wa.me/5577991431111"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -4, x: -4 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="relative inline-flex h-16 items-center justify-center border-4 border-foreground bg-foreground px-12 text-xl font-black uppercase text-background hover:bg-background hover:text-foreground transition-colors"
                                        >
                                            WhatsApp
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="border-t-2 border-foreground bg-background overflow-hidden" ref={footerRef}>
                    <div className="max-w-[1400px] mx-auto w-full px-12 pb-12">
                        <div className="relative flex justify-center overflow-visible text-center py-28 md:py-40">
                            <motion.div
                                style={{ scale: ocScale, opacity: ocOpacity }}
                                className="text-[20vw] font-black uppercase tracking-tighter leading-[0.7] pb-[0.05em] whitespace-nowrap select-none"
                            >
                                OC_2026
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t-2 border-foreground pt-12">
                            <div className="flex flex-col gap-4">
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-50 text-foreground">Localização</span>
                                <span className="text-xl font-black uppercase leading-tight">Barreiras - Bahia // Brasil</span>
                            </div>

                            <div className="flex flex-col gap-4">
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-50 text-foreground">Social</span>
                                <div className="flex flex-col gap-2">
                                    <a
                                        href="https://instagram.com/orlando.criativo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-black uppercase hover:text-primary transition-colors underline underline-offset-4"
                                    >
                                        @orlando.criativo
                                    </a>
                                    <a
                                        href="https://wa.me/5577991431111"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-black uppercase hover:text-primary transition-colors underline underline-offset-4"
                                    >
                                        +55 77 99143.1111
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-50 text-foreground">Transparência</span>
                                <div className="flex flex-col items-start gap-2 text-xl font-black uppercase underline underline-offset-4 text-left">
                                    <button onClick={() => openLegal("privacidade")} className="hover:text-primary transition-colors">Privacidade</button>
                                    <button onClick={() => openLegal("termos")} className="hover:text-primary transition-colors">Termos</button>
                                    <button onClick={() => openLegal("lgpd")} className="hover:text-primary transition-colors">LGPD</button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 items-start md:items-end text-left md:text-right">
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-50 text-foreground">Status de Engenharia</span>
                                <div className="flex flex-col md:items-end gap-1 font-black uppercase text-xl">
                                    <span>Orlando Criativo &copy; 2026</span>
                                    <span className="text-primary font-black">CORE_ENGINE // OC_V3.0</span>
                                </div>
                            </div>
                        </div>

                        {/* Régua Técnica de Fechamento */}
                        <div className="mt-20 flex items-center gap-4 opacity-20">
                            <div className="h-[2px] flex-1 bg-foreground" />
                            <span className="text-[10px] font-mono tracking-widest">END_OF_TRANSMISSION_V3</span>
                            <div className="h-[2px] w-20 bg-foreground" />
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}

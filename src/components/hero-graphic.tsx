"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function HeroGraphic() {
    const text = "ORLANDO CRIATIVO • DESIGN BRUTALISTA • ";
    const { scrollY } = useScroll();

    // 1. DEPTH STACK: Cada camada tem sua própria física

    // O Anel de Texto sobe ACELERADO (Parallax Negativo)
    const textRingY = useTransform(scrollY, [0, 800], [0, -350]);

    // A Seta Central desce (Parallax Positivo) para criar profundidade 3D
    const arrowY = useTransform(scrollY, [0, 800], [0, 120]);

    // Linhas de Mira (Efeito sutil para manter a base técnica)
    const gridY = useTransform(scrollY, [0, 800], [0, -50]);

    // 2. METAMORFOSE DE ESCALA E OPACIDADE
    // O selo "encolhe" e fica mais transparente quando o usuário entra no portfólio (após 100vh)
    const dynamicScale = useTransform(scrollY, [0, 600, 1500], [1, 0.6, 0.5]);
    const dynamicOpacity = useTransform(scrollY, [0, 600, 1500], [0.25, 0.12, 0.08]);

    // Molas Pesadas (Física Brutalista Robusta)
    const springConfig = { stiffness: 60, damping: 20 };
    const smoothTextY = useSpring(textRingY, springConfig);
    const smoothArrowY = useSpring(arrowY, springConfig);
    const smoothGridY = useSpring(gridY, springConfig);

    // Suavização da Metamorfose
    const smoothScale = useSpring(dynamicScale, springConfig);
    const smoothOpacity = useSpring(dynamicOpacity, springConfig);

    return (
        <motion.div
            className="absolute right-[-100px] top-[350px] hidden lg:block pointer-events-none z-50"
            style={{
                y: 0,
                scale: smoothScale,
                opacity: smoothOpacity
            }}
        >
            <svg
                width="600"
                height="600"
                viewBox="0 0 400 400"
                className="text-foreground overflow-visible"
                aria-labelledby="hero-title hero-desc"
                role="img"
            >
                <title id="hero-title">Orlando Criativo Hero Graphic</title>
                <desc id="hero-desc">Seta mecânica e anel de texto rotativo representando o design brutalista e técnico da marca.</desc>
                <defs>
                    <path
                        id="circlePath"
                        d="M 200, 200 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                    />
                </defs>

                {/* --- CAMADA 1: Linhas de Mira (Fundo) --- */}
                <motion.g style={{ y: smoothGridY }}>
                    <line x1="200" y1="100" x2="200" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
                    <line x1="100" y1="200" x2="300" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
                </motion.g>

                {/* --- CAMADA 2: Anel de Texto (Sobe) --- */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                    style={{
                        transformOrigin: "200px 200px",
                        y: smoothTextY
                    }}
                >
                    <text
                        className="font-black uppercase tracking-[0.2em] fill-current"
                        fontSize="18"
                    >
                        <textPath href="#circlePath" startOffset="0%">
                            {text}{text}
                        </textPath>
                    </text>
                </motion.g>

                {/* --- CAMADA 3: Seta Mecânica (Desce/Mergulha) --- */}
                <motion.g
                    transform="translate(200, 200)"
                    style={{ y: smoothArrowY }}
                >
                    {/* Corpo da Seta Outlined */}
                    <path
                        d="M-25,-75 L25,-75 L25,-10 L75,-10 L0,75 L-75,-10 L-25,-10 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    />

                    {/* Ponto de Precisão Pulsante */}
                    <motion.circle
                        cy="35"
                        r="10"
                        className="fill-primary"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Mira interna da seta */}
                    <line x1="-30" y1="35" x2="30" y2="35" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="0" y1="-20" x2="0" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                </motion.g>
            </svg>
        </motion.div>
    );
}

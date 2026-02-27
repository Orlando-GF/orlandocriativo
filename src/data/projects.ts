export type ProjectCategory = "WEBSITES" | "IDENTIDADE VISUAL";

export interface ProjectAsset {
    type: "image" | "video";
    url: string;
    caption?: string;
}

export interface CaseStudy {
    description: string;
    concept: string;
    techDetails: {
        colors: { hex: string; name: string }[];
        typography: string[];
        technologies: string[];
    };
    narrative: string;
    gallery: ProjectAsset[];
}

export interface Project {
    slug: string;
    title: string;
    category: ProjectCategory;
    link?: string;
    color: string;
    accentColor: string; // Cor de destaque para o estudo de caso
    titleColors?: string[];
    icon: string;
    caseStudy?: CaseStudy;
    customStyles?: {
        metadata?: string; // Classes para textos auxiliares
        watermark?: string; // Filtros CSS para a imagem do ícone
    };
}

export const projects: Project[] = [
    {
        slug: "tabacaria-skybox",
        title: "Skybox Tabacaria",
        category: "WEBSITES",
        link: "https://www.tabacariaskybox.com.br/",
        color: "bg-dot-grid text-white",
        accentColor: "#a6fe00",

        icon: "/img/tabacariaskybox/icone_skybox.webp",
        customStyles: {
            metadata: "opacity-80",
            watermark: "brightness-125"
        },
        caseStudy: {
            description: "Uma vitrine digital disruptiva para o mercado de tabacaria de luxo. O projeto prioriza uma navegação por camadas e uma estética 'noir' que reflete a exclusividade dos produtos oferecidos.",
            concept: "Exploramos o contraste entre o breu absoluto do background e o brilho ácido do Neon Green. A interface foi desenhada para emular a sensação de um lounge privado, utilizando tipografia minimalista e transições fluidas que acompanham o olhar do usuário.",
            techDetails: {
                colors: [
                    { hex: "#a6fe00", name: "Verde Neon" },
                    { hex: "#000000", name: "Preto Absoluto" },
                    { hex: "#1a1a1a", name: "Cinza Carbono" }
                ],
                typography: ["Geist Sans", "Inter"],
                technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma"]
            },
            narrative: "Onde o luxo encontra a obscuridade. Cada detalhe foi desenhado para elevar a percepção de exclusividade, transformando uma marca em um símbolo de status e mistério.",
            gallery: [
                { type: "image", url: "/img/tabacariaskybox/tela_pc.webp", caption: "Interface principal com foco em produtos premium" },
                { type: "image", url: "/img/tabacariaskybox/tela_responsiva.webp", caption: "Experiência mobile totalmente responsiva" },
            ]
        }
    },
    {
        slug: "andre-gomez-imoveis",
        title: "André Gomez Imóveis",
        category: "WEBSITES",
        link: "https://andregomezimoveis.pages.dev/",
        color: "bg-[#0029ff] text-white",
        accentColor: "#0029ff",
        icon: "/img/andregomezimoveis/icone_andre.png",
        customStyles: {
            metadata: "opacity-60"
        },
        caseStudy: {
            description: "Engenharia de conversão aplicada ao mercado imobiliário. Transformamos a busca por imóveis em uma jornada de descoberta visual, eliminando o ruído convencional das plataformas de listagem.",
            concept: "Baseado no princípio de 'Trust-First Design'. O uso estratégico do Royal Blue estabelece uma base de segurança, enquanto o layout modular permite uma hierarquia de informações clara, focando na fotografia de alta qualidade e em micro-interações que facilitam o contato direto.",
            techDetails: {
                colors: [
                    { hex: "#0029ff", name: "Azul Real" },
                    { hex: "#ffcc00", name: "Amarelo de Atenção" },
                    { hex: "#ffffff", name: "Branco Puro" }
                ],
                typography: ["Outfit", "Inter"],
                technologies: ["React", "Supabase", "Tailwind CSS", "Vercel"]
            },
            narrative: "Construindo autoridade através do design. Cada elemento visual foi arquitetado para transformar a busca por um imóvel em uma experiência de segurança e realização pessoal.",
            gallery: [
                { type: "image", url: "/img/andre_grid.webp", caption: "Sistema de filtragem inteligente de imóveis" },
                { type: "image", url: "/img/andre_page.webp", caption: "Página de detalhes do imóvel focada em leads" },
            ]
        }
    },
    {
        slug: "moeda-de-ouro",
        title: "Moeda de Ouro",
        category: "WEBSITES",
        link: "https://moedadeouro.com/",
        color: "bg-[#bf0000] text-white",
        accentColor: "#bf0000",
        icon: "/img/moedadeouro/icone_moedadeouro.svg",
        customStyles: {
            metadata: "opacity-60"
        },
        caseStudy: {
            description: "Uma experiência de alta joalharia transposta para o digital. O foco absoluto está na curadoria estética e na criação de um ambiente que exala preciosidade e atenção aos detalhes.",
            concept: "'The Red Velvet Experience'. Utilizamos o vermelho profundo como uma textura visual que serve de palco para o brilho do ouro. A diagramação clássica, inspirada em editoriais de moda de luxo, utiliza tipografia serifada para ancorar a marca em um território de tradição e sofisticação.",
            techDetails: {
                colors: [
                    { hex: "#bf0000", name: "Vermelho Rubi" },
                    { hex: "#d4af37", name: "Ouro Clássico" },
                    { hex: "#111111", name: "Grafite" }
                ],
                typography: ["Playfair Display", "Montserrat"],
                technologies: ["Next.js", "E-Commerce API", "Tailwind", "Stripe"]
            },
            narrative: "A estética da eternidade. Redefinimos o conceito de luxo digital para que cada joia seja sentida como uma herança visual, conectando tradição e desejo em um único olhar.",
            gallery: [
                { type: "image", url: "/img/moeda_logo.webp", caption: "Aplicação da marca em ambiente digital luxuoso" },
                { type: "image", url: "/img/moeda_checkout.webp", caption: "Fluxo de compra simplificado e elegante" },
            ]
        }
    },
    {
        slug: "amefit",
        title: "AmeFit",
        category: "WEBSITES",
        link: "https://amefit.pages.dev/BIO/",
        color: "bg-[#ff5500] text-white",
        accentColor: "#ff5500",
        icon: "/img/amefit/icone_amefit.webp",
        customStyles: {
            metadata: "opacity-60"
        },
        caseStudy: {
            description: "Movimento e energia capturados em pixels. Uma landing page de alta conversão desenhada para projetar a vitalidade e o dinamismo de um estilo de vida ativo e focado em resultados.",
            concept: "'Kinetic Design'. A interface utiliza planos inclinados, tipografia de impacto (Bebas Neue) e um laranja vibrante para criar uma sensação de aceleração constante. Cada seção foi projetada para impulsionar o scroll do usuário, refletindo o ritmo intenso dos treinos de alta performance.",
            techDetails: {
                colors: [
                    { hex: "#ff5500", name: "Laranja Energético" },
                    { hex: "#000000", name: "Preto Profundo" },
                    { hex: "#f8f8f8", name: "Branco Neve" }
                ],
                typography: ["Bebas Neue", "Roboto"],
                technologies: ["HTML5", "CSS3 / Tailwind", "Figma", "JavaScript"]
            },
            narrative: "Energia em estado bruto. Projetamos uma identidade que respira movimento, transformando o esforço físico em uma jornada estética de autossuperação e vitalidade.",
            gallery: [
                { type: "image", url: "/img/amefit_hero.webp", caption: "Seção hero com alta carga visual e energia" },
                { type: "image", url: "/img/amefit_cta.webp", caption: "Chamadas para ação estrategicamente posicionadas" },
            ]
        }
    },
    {
        slug: "mikaele-gil-braz",
        title: "Mikaele Gil Braz",
        category: "IDENTIDADE VISUAL",
        link: "https://www.instagram.com/mikaelegilbraz/",
        color: "bg-[#0a0a0a] text-white",
        accentColor: "#3f72af",
        icon: "/img/mikaelegilbraz/icone.webp",
        customStyles: {
            metadata: "opacity-60"
        },
        caseStudy: {
            description: "Tradução visual da neuropsicologia clínica. Um equilíbrio delicado entre o rigor científico e o acolhimento humano, desenhado para transmitir autoridade e empatia simultaneamente.",
            concept: "'Intellectual Empathy'. A paleta de azuis estratificados representa as camadas da psique humana. O design limpo e as amplas áreas de respiro (whitespace) foram pensados para reduzir a carga cognitiva do visitante, criando um ambiente digital que é, ao mesmo tempo, um consultório de alto nível e um espaço de cura.",
            techDetails: {
                colors: [
                    { hex: "#112d4e", name: "Marinho Profundo" },
                    { hex: "#3f72af", name: "Azul Real" },
                    { hex: "#dbe2ef", name: "Azul Nuvem" }
                ],
                typography: ["Geist Sans", "Inter"],
                technologies: ["Adobe Illustrator", "Figma", "Digital Branding", "Neuro-Design"]
            },
            narrative: "A ciência do acolhimento. Criamos uma ponte visual entre a complexidade da mente e a clareza do cuidado humano, transformando a clínica em um porto seguro para a alma.",
            gallery: [
                { type: "image", url: "/img/mikaelegilbraz/logo_quadro_1.webp", caption: "Aplicação da marca em ambiente clínico sofisticado" },
                { type: "image", url: "/img/mikaelegilbraz/mockup_quadro_2.webp", caption: "Identidade visual completa e papelaria premium" },
            ]
        }
    }
];

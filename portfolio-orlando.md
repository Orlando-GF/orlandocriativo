# Plano de Implementação: Portfolio Orlando Criativo

Este plano detalha a criação da landing page para **orlandocriativo.com.br**, focando em autoridade para empresas locais através de um design brutalista industrial impactante.

## Design Commitment: Industrial Brutalism (90/10)

- **Topological Choice:** Rompendo o grid tradicional. Conteúdo comprimido em áreas de alta tensão visual.
- **Risk Factor:** Uso de tipografia gigantesca (outline) e interatividade 3D agressiva.
- **Cliché Liquidation:** **PURPLE BAN ✅**. Substituiremos o roxo clichê pelo **Laranja Industrial (oklch(0.7 0.2 45))** para evocar energia e construção técnica.
- **Interatividade:** Implementação de um fundo interativo que reage ao mouse, inspirado no efeito do Antigravity (Three.js/Fiber).

## Proposed Changes

### [Component] Home Page (Hero)
- **H1:** "ORLANDO_CRIATIVO" em fonte sans-serif ultra-bold em modo outline.
- **Interactive Background:** Canvas Three.js com partículas ou malha distorcida por mouse.

### [Component] Portfolio Section (Cards)
#### [NEW] `src/components/portfolio-grid.tsx`
- Grid assimétrico para os 4 projetos:
    1. Tabacaria Skybox
    2. André Gomez Imóveis
    3. Moeda de Ouro
    4. AmeFit (Bio)
- Hover 3D (Tilt) com bordas de 4px e sombras sólidas (offset 8px).

### [Component] Authority/Process Section
- "Como eu trabalho": Texto direto, sem clichês como "elevate" ou "seamless".
- Foco em resultados de conversão para terapeutas e lojas de roupa.

## Tasks

1. [ ] Configurar Three.js/React-Three-Fiber para o efeito interativo.
2. [ ] Criar componentes de Card Brutalista para os projetos linkados.
3. [ ] Implementar Navbar fixa com efeito industrial (bordas grossas).
4. [ ] Desenvolver Landing Page completa integrando as seções.
5. [ ] Otimização Final (Lighthouse + UX Audit).

## Verification Plan
- **Acessibilidade:** Verificação de contraste do Laranja Industrial.
- **Performance:** Garantir que o Three.js não prejudique o Core Web Vitals (FPS check).

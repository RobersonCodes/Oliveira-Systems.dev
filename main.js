/* ═══════════════════════════════════════════
   OLIVEIRA SYSTEMS v3 — main.js
   i18n · animations · counters · interactions
═══════════════════════════════════════════ */

const TRANSLATIONS = {
  pt: {
    nav_about:"Sobre", nav_services:"Serviços", nav_projects:"Projetos", nav_stack:"Stack", nav_contact:"Falar comigo", footer_contact:"Contato",
    hero_badge:"SISTEMA OPERACIONAL",
    hero_h1a:"Do banco de dados", hero_h1b:"à tela: sistemas", hero_h1c:"que não falham.",
    hero_sub:"Backend resiliente, interfaces que funcionam de verdade e monitoramento ativo — construído por quem entende o sistema de ponta a ponta, da query ao clique.",
    hero_btn1:"Ver projetos →", hero_btn2:"Falar comigo",
    meta1:"UPTIME MÉDIO", meta2:"SISTEMAS EM PRODUÇÃO", meta3:"LATÊNCIA P95",
    panel_status:"STATUS", panel_uptime:"UPTIME", panel_incidents:"INCIDENTS", panel_build:"BUILD", panel_build_v:"OK",
    float1_title:"Em produção agora", float1_sub:"Guardian Recovery · 99.9% uptime",
    float2_title:"Minha Loja", float2_sub:"E-commerce full-stack · 28 testes",
    about_label:"SOBRE",
    about_h2:"Engenharia que continua funcionando quando tudo dá errado.",
    about_lead:"Sou Roberson de Oliveira, engenheiro full-stack focado em sistemas completos — do banco de dados à interface — que sobrevivem a picos de carga, falhas de rede e o caos real de produção.",
    about_p1:"Com base em Java, Node.js e React, projeto aplicações com monitoramento ativo, recuperação automática e interfaces que não escondem a complexidade do usuário.",
    about_p2:"A Oliveira Systems existe para um propósito simples: sistemas completos que não acordam você de madrugada.",
    about_divider:"aberto para trabalho remoto & clientes globais",
    skills_label:"PROFICIÊNCIA", skills_h2:"Profundidade técnica do banco de dados à interface",
    skills_g1:"Backend & APIs", skills_g2:"Dados & Infraestrutura", skills_g3:"Frontend & Mobile",
    counters_label:"IMPACTO", counters_h2:"Métricas, não promessas",
    c1_label:"Soluções entregues", c2_label:"Endpoints de API", c3_label:"Especialidades técnicas", c4_label:"Commits no GitHub",
    services_label:"SERVIÇOS", services_h2:"O que a Oliveira Systems entrega",
    services_sub:"Soluções full-stack end-to-end para performance, segurança e escala real.",
    svc1_h:"Sistemas personalizados", svc1_p:"Aplicações sob medida com separação de responsabilidades, da camada de dados à superfície da API.",
    svc2_h:"Desenvolvimento de APIs", svc2_p:"APIs RESTful projetadas para clareza, segurança e integração perfeita com qualquer frontend ou serviço.",
    svc3_h:"Segurança & Auth", svc3_p:"JWT, rotas protegidas, validação de entrada e padrões de segurança enterprise.",
    svc4_h:"Arquitetura escalável", svc4_p:"Sistemas projetados para crescer — camadas limpas, código manutenível, prontos para requisitos futuros.",
    svc5_h:"Monitoramento & Recovery", svc5_p:"Health checks em tempo real, alertas automáticos e recuperação operacional sem intervenção manual.",
    svc6_h:"Interfaces & Frontend", svc6_p:"React e interfaces modernas conectadas diretamente à mesma API que serve o backend — sem gambiarra entre as camadas.",
    projects_label:"PROJETOS", projects_h2:"Sistemas reais, arquitetura profissional",
    projects_sub:"Cada projeto reflete comprometimento com profundidade técnica, código limpo e padrões prontos para produção, do backend à interface.",
    p1_h:"Sistema de Saúde Municipal", p1_p:"API completa de gestão de saúde pública — pacientes, consultas, unidades de saúde e triagem com IA.",
    p2_h:"Guardian Recovery", p2_p:"Plataforma enterprise de monitoramento — health checks em tempo real, incidentes automáticos e recuperação operacional.",
    p3_h:"Minha Loja", p3_p:"E-commerce full-stack reescrito — checkout real via Stripe, avaliações verificadas no backend e 28 testes automatizados.",
    p4_h:"ViaLivre AI", p4_p:"App mobile nativo que aprende suas rotas e avisa o melhor horário de saída, com mapa, histórico e notificações push.",
    p5_h:"Oliveira Apply AI", p5_p:"SaaS que automatiza busca e aplicação a vagas com IA — onboarding, busca multi-fonte e pagamento real via Stripe.",
    p6_h:"TireMax ERP", p6_p:"ERP multi-tenant para redes de borracharias, com automação de atendimento via WhatsApp e painel SuperAdmin.",
    p7_h:"SAFEHER", p7_p:"PWA acadêmico para apoio ao cumprimento de medidas protetivas, com geofencing, IA e modo de segurança discreto.",
    p8_h:"CRM Comercial de Campo", p8_p:"CRM para representantes de campo de marcas multinacionais — sell out, funil de vendas e exportação fiel a Excel, 100% offline.",
    p9_h:"AI Funnel Pro", p9_p:"Landing page SaaS futurista com hero 3D em Three.js, glassmorphism e motion design cinematográfico.",
    p10_h:"Barbermem", p10_p:"Site institucional premium para barbearia real, com agendamento direto via WhatsApp, planos e galeria.",
    p11_h:"Gerenciador de Tarefas", p11_p:"Aplicação desktop em Java Swing com login via BCrypt, arquitetura MVC e persistência em MySQL via JDBC.",
    p12_h:"Task Manager API", p12_p:"API REST em arquitetura de camadas, com Prisma, validação Zod, 29 testes automatizados, Docker e CI.",
    view_case:"Ver estudo de caso →",
    stack_label:"STACK TECNOLÓGICA", stack_h2:"Tecnologias usadas em sistemas de produção",
    stack_sub:"Ferramentas, frameworks e padrões aplicados em projetos reais, do banco de dados à interface.",
    stack_c1:"APIs enterprise, arquitetura robusta e aplicações escaláveis de alta performance.",
    stack_c2:"APIs REST rápidas, integrações e sistemas JavaScript modernos.",
    stack_c3:"Tipagem estática de ponta a ponta, do backend ao frontend, prevenindo bugs antes da produção.",
    stack_c4:"Modelagem type-safe de dados sobre MySQL e PostgreSQL, com migrações versionadas.",
    stack_c5:"Modelagem relacional e persistência de dados para aplicações reais.",
    stack_c6:"Interfaces modernas, componentizadas e conectadas diretamente à API.",
    stack_c7:"Apps mobile nativos para Android e iOS a partir de uma única base de código.",
    stack_c8:"Autenticação stateless, RBAC e proteção contra abuso para APIs e sistemas distribuídos.",
    stack_c9:"Testes automatizados cobrindo services e rotas críticas antes de cada deploy.",
    stack_c10:"Versionamento profissional e pipelines de CI que testam e constroem a cada push.",
    contact_label:"CONTATO", contact_h2:"Vamos construir algo que não cai.",
    contact_p:"Disponível para projetos remotos, contratos estratégicos e parcerias de longo prazo com empresas e equipes globais.",
    contact_btn1:"Enviar e-mail", contact_info:"Baseado no Brasil · Disponível globalmente",
    footer_desc:"Engenharia full-stack, monitoramento e interfaces modernas para times que exigem qualidade e confiabilidade.",
    footer_nav:"Navegação", footer_tech:"Tecnologias", footer_connect:"Redes",
    footer_copy:"© 2026 Oliveira Systems — Todos os direitos reservados.",
    footer_status:"Sistemas operacionais",
  },
  en: {
    nav_about:"About", nav_services:"Services", nav_projects:"Projects", nav_stack:"Stack", nav_contact:"Get in touch", footer_contact:"Contact",
    hero_badge:"OPERATING SYSTEM",
    hero_h1a:"From the database", hero_h1b:"to the screen:", hero_h1c:"systems that don't fail.",
    hero_sub:"Resilient backend, interfaces that actually work, and active monitoring — built by someone who understands the system end to end, from the query to the click.",
    hero_btn1:"View projects →", hero_btn2:"Get in touch",
    meta1:"AVERAGE UPTIME", meta2:"SYSTEMS IN PRODUCTION", meta3:"P95 LATENCY",
    panel_status:"STATUS", panel_uptime:"UPTIME", panel_incidents:"INCIDENTS", panel_build:"BUILD", panel_build_v:"OK",
    float1_title:"In production now", float1_sub:"Guardian Recovery · 99.9% uptime",
    float2_title:"Minha Loja", float2_sub:"Full-stack e-commerce · 28 tests",
    about_label:"ABOUT",
    about_h2:"Engineering that keeps running when everything else fails.",
    about_lead:"I'm Roberson de Oliveira, a full-stack engineer focused on complete systems — from the database to the interface — that survive load spikes, network failures, and the real chaos of production.",
    about_p1:"Built on Java, Node.js, and React, I design applications with active monitoring, automated recovery, and interfaces that don't hide complexity from the user.",
    about_p2:"Oliveira Systems exists for one simple purpose: complete systems that don't wake you up at 3am.",
    about_divider:"open to remote work & global clients",
    skills_label:"PROFICIENCY", skills_h2:"Technical depth from database to interface",
    skills_g1:"Backend & APIs", skills_g2:"Data & Infrastructure", skills_g3:"Frontend & Mobile",
    counters_label:"IMPACT", counters_h2:"Metrics, not promises",
    c1_label:"Solutions delivered", c2_label:"API endpoints", c3_label:"Technical specialties", c4_label:"GitHub commits",
    services_label:"SERVICES", services_h2:"What Oliveira Systems delivers",
    services_sub:"End-to-end full-stack solutions built for performance, security, and real-world scale.",
    svc1_h:"Custom systems", svc1_p:"Tailored applications built with clean separation of concerns, from data layer to API surface.",
    svc2_h:"API development", svc2_p:"RESTful APIs designed for clarity, security, and seamless integration with any frontend or third-party service.",
    svc3_h:"Security & auth", svc3_p:"JWT-based authentication, protected routes, input validation, and enterprise-grade security patterns.",
    svc4_h:"Scalable architecture", svc4_p:"Systems designed to grow — clean layers, maintainable codebase, ready for future requirements.",
    svc5_h:"Monitoring & recovery", svc5_p:"Real-time health checks, automated alerting, and operational recovery without manual intervention.",
    svc6_h:"Interfaces & frontend", svc6_p:"React and modern interfaces connected directly to the same API that serves the backend — no patchwork between layers.",
    projects_label:"PROJECTS", projects_h2:"Real systems, professional architecture",
    projects_sub:"Each project reflects a commitment to technical depth, clean code, and production-ready patterns, from backend to interface.",
    p1_h:"Municipal Health System", p1_p:"Comprehensive public-health management API — patients, appointments, health units, and AI-assisted triage.",
    p2_h:"Guardian Recovery", p2_p:"Enterprise monitoring platform — real-time service health checks, automated incident creation, and operational recovery.",
    p3_h:"Minha Loja", p3_p:"Rewritten full-stack e-commerce — real Stripe checkout, backend-verified reviews, and 28 automated tests.",
    p4_h:"ViaLivre AI", p4_p:"Native mobile app that learns your routes and alerts you to the best time to leave, with maps, history, and push notifications.",
    p5_h:"Oliveira Apply AI", p5_p:"A SaaS that automates job search and applications with AI — onboarding, multi-source search, and real Stripe billing.",
    p6_h:"TireMax ERP", p6_p:"Multi-tenant ERP for tire shop chains, with WhatsApp service automation and a SuperAdmin panel.",
    p7_h:"SAFEHER", p7_p:"An academic PWA supporting compliance with protective orders, with geofencing, AI, and a discreet safety mode.",
    p8_h:"Field Sales CRM", p8_p:"CRM for field representatives of multinational brands — sell out tracking, sales pipeline, and faithful Excel export, 100% offline.",
    p9_h:"AI Funnel Pro", p9_p:"Futuristic SaaS landing page with a 3D Three.js hero, glassmorphism, and cinematic motion design.",
    p10_h:"Barbermem", p10_p:"Premium institutional website for a real barbershop, with direct WhatsApp booking, plans, and gallery.",
    p11_h:"Task Manager (Desktop)", p11_p:"Java Swing desktop app with BCrypt-based login, MVC architecture, and MySQL persistence via JDBC.",
    p12_h:"Task Manager API", p12_p:"Layered-architecture REST API with Prisma, Zod validation, 29 automated tests, Docker, and CI.",
    view_case:"View case study →",
    stack_label:"TECH STACK", stack_h2:"Technologies used to build production systems",
    stack_sub:"Tools, frameworks, and patterns applied across real projects, from database to interface.",
    stack_c1:"Enterprise-grade APIs, robust architecture, and scalable high-performance applications.",
    stack_c2:"Fast REST APIs, integrations, and modern JavaScript systems.",
    stack_c3:"End-to-end static typing, from backend to frontend, catching bugs before production.",
    stack_c4:"Type-safe data modeling over MySQL and PostgreSQL, with versioned migrations.",
    stack_c5:"Relational modeling and data persistence for real-world applications.",
    stack_c6:"Modern, componentized interfaces connected directly to the API.",
    stack_c7:"Native mobile apps for Android and iOS from a single codebase.",
    stack_c8:"Stateless authentication, RBAC, and abuse protection for APIs and distributed systems.",
    stack_c9:"Automated tests covering critical services and routes before every deploy.",
    stack_c10:"Professional versioning and CI pipelines that test and build on every push.",
    contact_label:"CONTACT", contact_h2:"Let's build something that doesn't go down.",
    contact_p:"Open to remote contracts, freelance projects, and long-term partnerships with global teams.",
    contact_btn1:"Send an email", contact_info:"Based in Brazil · Available globally",
    footer_desc:"Full-stack engineering, monitoring, and modern interfaces for teams that demand quality and reliability.",
    footer_nav:"Navigation", footer_tech:"Technologies", footer_connect:"Connect",
    footer_copy:"© 2026 Oliveira Systems — All rights reserved.",
    footer_status:"Systems operational",
  }
};

let currentLang = localStorage.getItem("os_lang") || "pt";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("os_lang", lang);
  const t = Object.assign({}, TRANSLATIONS[lang], (window.PAGE_TRANSLATIONS && window.PAGE_TRANSLATIONS[lang]) || {});
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll(".lang-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang));
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
}

document.addEventListener("DOMContentLoaded", () => {

  const menuBtn  = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));
    document.querySelectorAll(".nav-links a").forEach(l =>
      l.addEventListener("click", () => navLinks.classList.remove("active")));
  }

  document.querySelectorAll(".lang-btn").forEach(btn =>
    btn.addEventListener("click", () => setLang(btn.dataset.lang)));
  setLang(currentLang);

  const bar = document.getElementById("scrollBar");
  if (bar) {
    window.addEventListener("scroll", () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      bar.style.width = pct + "%";
    }, { passive: true });
  }

  document.querySelectorAll(
    ".hero-copy,.panel-wrap,.service-card,.project-card,.stack-card,.contact-inner,.footer-brand,.footer-col,.skill-row,.counter-card,.startup-copy,.startup-banner,.case-card,.card,.project-card-sm,.gallery-item"
  ).forEach(el => {
    el.classList.add("reveal");
    revealObs.observe(el);
  });

  const skillSection = document.querySelector(".skills-section");
  if (skillSection) {
    const sObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll(".skill-fill").forEach(f => { f.style.width = f.dataset.w; });
        sObs.disconnect();
      }
    }, { threshold: 0.25 });
    sObs.observe(skillSection);
  }

  const counterSection = document.querySelector(".counters-section");
  if (counterSection) {
    const targets = { c1: 12, c2: 80, c3: 14, c4: 320 };
    let fired = false;
    const cObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !fired) {
        fired = true;
        Object.entries(targets).forEach(([id, end]) => {
          const el = document.getElementById(id);
          if (!el) return;
          let cur = 0;
          const step = Math.ceil(end / 55);
          const timer = setInterval(() => {
            cur = Math.min(cur + step, end);
            el.textContent = cur + "+";
            if (cur >= end) clearInterval(timer);
          }, 28);
        });
        cObs.disconnect();
      }
    }, { threshold: 0.3 });
    cObs.observe(counterSection);
  }

  const modal    = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-modal");
  document.querySelectorAll(".zoomable-image").forEach(img =>
    img.addEventListener("click", () => { modal.classList.add("active"); modalImg.src = img.src; }));
  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));

  function fixOrphanGridItem(selector) {
    const grid = document.querySelector(selector);
    if (!grid) return;
    const items = Array.from(grid.children);
    items.forEach(item => item.classList.remove("grid-orphan"));
    if (items.length === 0) return;
    const cols = new Set(items.map(item => Math.round(item.getBoundingClientRect().left)));
    const colCount = cols.size;
    if (colCount > 1 && items.length % colCount === 1) {
      items[items.length - 1].classList.add("grid-orphan");
    }
  }
  function runOrphanFix() {
    fixOrphanGridItem(".projects-grid");
  }
  window.addEventListener("load", runOrphanFix);
  window.addEventListener("resize", () => { clearTimeout(window._orphanT); window._orphanT = setTimeout(runOrphanFix, 150); });
  if (modal) modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("active"); });
});

const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); }),
  { threshold: 0.1 }
);

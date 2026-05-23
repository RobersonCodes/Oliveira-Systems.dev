/* ═══════════════════════════════════════════
   OLIVEIRA SYSTEMS — main.js v3
   i18n · animations · counters · interactions
═══════════════════════════════════════════ */

const TRANSLATIONS = {
  pt: {
    nav_about:"Sobre", nav_services:"Serviços", nav_projects:"Projetos", nav_stack:"Stack", nav_contact:"Falar Comigo",
    hero_badge:"Disponível para novos projetos",
    hero_h1a:"Sistemas backend", hero_h1b:"construídos para escalar.",
    hero_sub:"APIs enterprise, arquitetura limpa e integração com IA — engenhados com precisão para times que exigem confiabilidade.",
    hero_btn1:"Ver Projetos", hero_btn2:"Iniciar Conversa",
    stat1_title:"REST APIs", stat1_sub:"Arquitetura escalável",
    stat2_title:"IA Aplicada", stat2_sub:"Automação inteligente",
    stat3_title:"Performance", stat3_sub:"Backend otimizado",
    about_label:"Sobre",
    about_h2:"Engenhando software que performa em qualquer escala.",
    about_lead:"Sou Roberson de Oliveira, engenheiro backend focado em sistemas robustos, APIs REST limpas e soluções com IA para negócios que precisam de confiabilidade.",
    about_p1:"Com base em Java e Node.js, projeto aplicações seguras, manuteníveis e prontas para crescer — aplicando padrões enterprise desde o início.",
    about_p2:"A Oliveira Systems é meu compromisso com tecnologia que resolve problemas reais: sistemas confiáveis, bem estruturados e construídos para o longo prazo.",
    about_divider:"aberto para trabalho remoto & clientes globais",
    skills_label:"Proficiência", skills_h2:"Profundidade técnica em todo o stack backend",
    skills_g1:"Backend & APIs", skills_g2:"Dados & Infraestrutura",
    services_label:"Serviços", services_h2:"O que a Oliveira Systems entrega",
    services_sub:"Soluções backend end-to-end para performance, segurança e escala real.",
    svc1_h:"Sistemas Personalizados", svc1_p:"Aplicações sob medida com separação de responsabilidades, da camada de dados à superfície da API.",
    svc2_h:"Desenvolvimento de APIs", svc2_p:"APIs RESTful projetadas para clareza, segurança e integração perfeita com qualquer frontend ou serviço.",
    svc3_h:"Segurança & Auth", svc3_p:"JWT, rotas protegidas, validação de entrada e padrões de segurança enterprise.",
    svc4_h:"Arquitetura Escalável", svc4_p:"Sistemas projetados para crescer — camadas limpas, código manutenível, prontos para requisitos futuros.",
    svc5_h:"Integração com IA", svc5_p:"Incorporando inteligência em produtos: automação, triagem inteligente e fluxos orientados a dados.",
    svc6_h:"Integrações", svc6_p:"Conectando sistemas via APIs confiáveis — serviços de terceiros, dados governamentais e ferramentas internas.",
    counters_label:"Impacto", counters_h2:"Números que falam",
    c1_label:"Projetos Entregues", c2_label:"Endpoints de API", c3_label:"Tecnologias Dominadas", c4_label:"Commits no GitHub",
    projects_label:"Projetos", projects_h2:"Sistemas reais, arquitetura profissional",
    projects_sub:"Cada projeto reflete comprometimento com profundidade backend, código limpo e padrões prontos para produção.",
    p1_h:"Sistema de Saúde Municipal", p1_p:"API completa de gestão de saúde pública — pacientes, consultas, unidades de saúde e triagem com IA.",
    p2_h:"Guardian Recovery", p2_p:"Plataforma enterprise de monitoramento — health checks em tempo real, incidentes automáticos e recuperação operacional.",
    p3_h:"Minha Loja", p3_p:"E-commerce full-stack — autenticação JWT, painel administrativo, catálogo, favoritos e arquitetura em camadas.",
    p4_h:"ViaLivre AI", p4_p:"Solução inteligente de mobilidade urbana com IA para análise de rotas e recomendação de horários.",
    view_case:"Ver estudo de caso →",
    stack_label:"Stack Tecnológica", stack_h2:"Tecnologias usadas em sistemas de produção",
    stack_sub:"Ferramentas, frameworks e padrões aplicados em projetos reais.",
    contact_label:"Contato", contact_h2:"Vamos construir algo excepcional.",
    contact_p:"Aberto a contratos remotos, projetos freelance e parcerias de longo prazo com times globais.",
    contact_btn1:"Enviar E-mail", contact_info:"Baseado no Brasil · Disponível globalmente",
    footer_desc:"Engenharia backend, REST APIs e integração com IA para times que exigem qualidade e confiabilidade.",
    footer_nav:"Navegação", footer_tech:"Tecnologias", footer_connect:"Redes",
    footer_copy:"© 2026 Oliveira Systems — Todos os direitos reservados.",
    footer_status:"Sistemas operacionais",
  },
  en: {
    nav_about:"About", nav_services:"Services", nav_projects:"Projects", nav_stack:"Stack", nav_contact:"Get in Touch",
    hero_badge:"Available for new projects",
    hero_h1a:"Backend systems", hero_h1b:"built to scale.",
    hero_sub:"Enterprise-grade APIs, clean architecture, and AI integration — engineered with precision for teams that demand reliability.",
    hero_btn1:"View Projects", hero_btn2:"Start a Conversation",
    stat1_title:"REST APIs", stat1_sub:"Scalable architecture",
    stat2_title:"AI Applied", stat2_sub:"Intelligent automation",
    stat3_title:"Performance", stat3_sub:"Optimized backend",
    about_label:"About",
    about_h2:"Engineering software that performs at every scale.",
    about_lead:"I'm Roberson de Oliveira, a backend engineer focused on building robust systems, clean REST APIs, and AI-powered solutions for businesses that need reliability.",
    about_p1:"With a foundation in Java and Node.js, I architect applications that are secure, maintainable, and ready to grow — applying enterprise-grade patterns from day one.",
    about_p2:"Oliveira Systems is my commitment to delivering technology that solves real problems: systems that are trustworthy, well-structured, and built for the long run.",
    about_divider:"open to remote work & global clients",
    skills_label:"Proficiency", skills_h2:"Technical depth across the full backend stack",
    skills_g1:"Backend & APIs", skills_g2:"Data & Infrastructure",
    services_label:"Services", services_h2:"What Oliveira Systems delivers",
    services_sub:"End-to-end backend solutions built for performance, security, and real-world scale.",
    svc1_h:"Custom Systems", svc1_p:"Tailored applications built with clean separation of concerns, from data layer to API surface.",
    svc2_h:"API Development", svc2_p:"RESTful APIs designed for clarity, security, and seamless integration with any frontend or third-party service.",
    svc3_h:"Security & Auth", svc3_p:"JWT-based authentication, protected routes, input validation, and enterprise-grade security patterns.",
    svc4_h:"Scalable Architecture", svc4_p:"Systems designed to grow — clean layers, maintainable codebase, ready for future requirements.",
    svc5_h:"AI Integration", svc5_p:"Embedding intelligence into products: automated decision-making, smart triage, and data-driven workflows.",
    svc6_h:"Integrations", svc6_p:"Connecting systems through reliable APIs — third-party services, government data sources, and internal tools.",
    counters_label:"Impact", counters_h2:"Numbers that speak",
    c1_label:"Projects Delivered", c2_label:"API Endpoints", c3_label:"Technologies Mastered", c4_label:"GitHub Commits",
    projects_label:"Projects", projects_h2:"Real systems, professional architecture",
    projects_sub:"Each project reflects a commitment to backend depth, clean code, and production-ready patterns.",
    p1_h:"Municipal Health System", p1_p:"Comprehensive public-health management API — patients, appointments, health units, and AI-assisted triage.",
    p2_h:"Guardian Recovery", p2_p:"Enterprise monitoring platform — real-time service health checks, automated incident creation, and operational recovery.",
    p3_h:"Minha Loja", p3_p:"Full-stack e-commerce — JWT authentication, admin dashboard, product catalog, favorites, and layered architecture.",
    p4_h:"ViaLivre AI", p4_p:"Intelligent urban-mobility platform using AI for route analysis and schedule recommendations.",
    view_case:"View case study →",
    stack_label:"Tech Stack", stack_h2:"Technologies used to build production systems",
    stack_sub:"Tools, frameworks, and patterns applied across real projects.",
    contact_label:"Contact", contact_h2:"Let's build something exceptional.",
    contact_p:"Open to remote contracts, freelance projects, and long-term partnerships with global teams.",
    contact_btn1:"Send an Email", contact_info:"Based in Brazil · Available globally",
    footer_desc:"Backend engineering, REST APIs, and AI integration for teams that demand quality and reliability.",
    footer_nav:"Navigation", footer_tech:"Technologies", footer_connect:"Connect",
    footer_copy:"© 2026 Oliveira Systems — All rights reserved.",
    footer_status:"Systems operational",
  }
};

let currentLang = localStorage.getItem("os_lang") || "pt";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("os_lang", lang);
  const t = TRANSLATIONS[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll(".lang-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang));
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
}

document.addEventListener("DOMContentLoaded", () => {

  // Mobile nav
  const menuBtn  = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));
    document.querySelectorAll(".nav-links a").forEach(l =>
      l.addEventListener("click", () => navLinks.classList.remove("active")));
  }

  // Lang buttons
  document.querySelectorAll(".lang-btn").forEach(btn =>
    btn.addEventListener("click", () => setLang(btn.dataset.lang)));
  setLang(currentLang);

  // Scroll progress bar
  const bar = document.getElementById("scrollBar");
  if (bar) {
    window.addEventListener("scroll", () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      bar.style.width = pct + "%";
    }, { passive: true });
  }

  // Scroll reveal
  document.querySelectorAll(
    ".hero-content,.hero-panel,.service-card,.project-card,.stack-card,.contact-inner,.footer-brand,.footer-col,.skill-row,.counter-card"
  ).forEach(el => {
    el.classList.add("reveal");
    revealObs.observe(el);
  });

  // Cursor glow
  const glow = document.querySelector(".cursor-glow");
  if (glow && window.matchMedia("(hover: hover)").matches) {
    window.addEventListener("mousemove", e => {
      glow.style.left = e.clientX + "px";
      glow.style.top  = e.clientY + "px";
    }, { passive: true });
  }

  // Typewriter
  const typeTarget = document.getElementById("typeText");
  if (typeTarget) {
    const lines = [
      "> Build: SUCCESS ✓",
      "> Deploying API v2.4...",
      "> JWT: VERIFIED ✓",
      "> DB connected: MySQL",
      "> Uptime: 99.9% ✓",
      "> All systems: ONLINE",
    ];
    let li = 0, ci = 0;
    function type() {
      if (li >= lines.length) { li = 0; typeTarget.textContent = ""; }
      if (ci < lines[li].length) {
        typeTarget.textContent += lines[li][ci++];
        setTimeout(type, 36);
      } else { ci = 0; li++; setTimeout(type, 1100); }
    }
    type();
  }

  // Skill bars
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

  // Counters
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

  // Image modal
  const modal    = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-modal");
  document.querySelectorAll(".zoomable-image").forEach(img =>
    img.addEventListener("click", () => { modal.classList.add("active"); modalImg.src = img.src; }));
  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  if (modal) modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("active"); });

  // Brand watermark parallax
  const wm = document.querySelector(".brand-watermark");
  if (wm) {
    window.addEventListener("scroll", () => {
      wm.style.transform = `translate(-50%, -50%) rotate(${window.scrollY * 0.015}deg)`;
    }, { passive: true });
  }
});

const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); }),
  { threshold: 0.1 }
);

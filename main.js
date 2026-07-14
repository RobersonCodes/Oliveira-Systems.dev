/* ═══════════════════════════════════════════
   OLIVEIRA SYSTEMS v3 — main.js
   i18n · animations · counters · interactions
═══════════════════════════════════════════ */

const TRANSLATIONS = {
  pt: {
    skip_link:"Pular para o conteúdo",
    nav_about:"Sobre", nav_services:"Serviços", nav_projects:"Projetos", nav_trust:"Confiança", nav_stack:"Stack", nav_contact:"Orçamento", footer_contact:"Contato",
    hero_badge:"ABERTA PARA NOVOS PROJETOS",
    hero_h1a:"Sites e sistemas sob medida", hero_h1b:"que fazem seu negócio", hero_h1c:"vender mais.",
    hero_sub:"A Oliveira Systems constrói sites, sistemas e aplicações para negócios que precisam de mais clientes e menos dor de cabeça — do primeiro pixel ao banco de dados. Backend resiliente, interfaces que convertem e monitoramento ativo 24/7.",
    hero_btn1:"Solicitar orçamento grátis →", hero_btn2:"Falar no WhatsApp agora",
    hero_trust:"Resposta em até 24h úteis · Sem compromisso · Orçamento sem custo",
    wa_menu_title:"Sobre o que você quer falar?",
    wa_topic_orcamento:"💰 Orçamento", wa_topic_web:"🌐 Desenvolvimento Web", wa_topic_sistemas:"🖥️ Sistemas",
    wa_topic_saas:"🚀 SaaS", wa_topic_apis:"🔌 APIs", wa_topic_ia:"🤖 Inteligência Artificial",
    meta1:"UPTIME MÉDIO", meta2:"SISTEMAS EM PRODUÇÃO", meta3:"LATÊNCIA P95",
    panel_status:"STATUS", panel_uptime:"UPTIME", panel_incidents:"INCIDENTS", panel_build:"BUILD", panel_build_v:"OK",
    float1_title:"Em produção agora", float1_sub:"Guardian Recovery · 99.9% uptime",
    float2_title:"Minha Loja", float2_sub:"E-commerce full-stack · 28 testes",
    about_label:"SOBRE",
    about_h2:"Engenharia que continua funcionando quando tudo dá errado.",
    about_lead:"A Oliveira Systems é uma empresa de engenharia de software full-stack — do banco de dados à interface — especializada em sistemas que sobrevivem a picos de carga, falhas de rede e o caos real de produção. À frente do time técnico está Roberson de Oliveira, engenheiro responsável por cada projeto entregue.",
    about_p1:"Com base em Java, Node.js e React, projetamos aplicações com monitoramento ativo, recuperação automática e interfaces que não escondem a complexidade do usuário.",
    about_p2:"A Oliveira Systems existe para um propósito simples: sistemas completos que não acordam você de madrugada.",
    about_divider:"aberto para trabalho remoto & clientes globais",
    skills_label:"PROFICIÊNCIA", skills_h2:"Profundidade técnica do banco de dados à interface",
    skills_g1:"Backend & APIs", skills_g2:"Dados & Infraestrutura", skills_g3:"Frontend & Mobile",
    counters_label:"IMPACTO", counters_h2:"Métricas, não promessas",
    c1_label:"Soluções entregues", c2_label:"Endpoints de API", c3_label:"Especialidades técnicas", c4_label:"Commits no GitHub",
    services_label:"SERVIÇOS", services_h2:"O que a Oliveira Systems entrega",
    services_sub:"Soluções full-stack end-to-end para performance, segurança e escala real.",
    svc_problem_label:"PROBLEMA", svc_result_label:"RESULTADO",
    svc1_h:"Sistemas personalizados", svc1_p:"Aplicação sob medida com separação de responsabilidades, da camada de dados à superfície da API.",
    svc1_problem:"Planilhas e sistemas genéricos não aguentam o crescimento do seu negócio.",
    svc1_chip1:"Escala sem retrabalho", svc1_chip2:"Sem licença por usuário", svc1_chip3:"Você é dono do código",
    svc1_result:"Um sistema que cresce junto com a empresa, sem virar gargalo.",
    svc2_h:"Desenvolvimento de APIs", svc2_p:"APIs RESTful projetadas para clareza, segurança e integração perfeita com qualquer frontend ou serviço.",
    svc2_problem:"Sistemas que não conversam entre si geram retrabalho manual e erro humano.",
    svc2_chip1:"Documentação clara", svc2_chip2:"Fácil de integrar", svc2_chip3:"Pronta para escalar",
    svc2_result:"Seus sistemas trocam dados automaticamente, sem planilha no meio.",
    svc3_h:"Segurança & Auth", svc3_p:"JWT, rotas protegidas, validação de entrada e padrões de segurança enterprise.",
    svc3_problem:"Uma falha de segurança pode custar a confiança de anos com seus clientes.",
    svc3_chip1:"Dados protegidos", svc3_chip2:"Acesso por perfil", svc3_chip3:"Alinhado à LGPD",
    svc3_result:"Você dorme tranquilo sabendo que os dados estão protegidos.",
    svc4_h:"Arquitetura escalável", svc4_p:"Sistemas projetados para crescer — camadas limpas, código manutenível, prontos para requisitos futuros.",
    svc4_problem:"Sistema que funciona hoje mas trava quando o negócio cresce custa caro para refazer.",
    svc4_chip1:"Sem reescrever do zero", svc4_chip2:"Suporta mais usuários", svc4_chip3:"Manutenção mais barata",
    svc4_result:"Seu sistema aguenta o sucesso do seu negócio.",
    svc5_h:"Monitoramento & Recovery", svc5_p:"Health checks em tempo real, alertas automáticos e recuperação operacional sem intervenção manual.",
    svc5_problem:"Sistema fora do ar sem ninguém saber é vendas perdidas em silêncio.",
    svc5_chip1:"Alertas automáticos", svc5_chip2:"Menos tempo fora do ar", svc5_chip3:"Histórico de incidentes",
    svc5_result:"Problemas são resolvidos antes do cliente perceber.",
    svc6_h:"Interfaces & Frontend", svc6_p:"React e interfaces modernas conectadas diretamente à mesma API que serve o backend — sem gambiarra entre as camadas.",
    svc6_problem:"Interface lenta ou confusa faz o cliente desistir antes de comprar ou pedir orçamento.",
    svc6_chip1:"Carregamento rápido", svc6_chip2:"Design responsivo", svc6_chip3:"Conversão maior",
    svc6_result:"Visitante vira lead com menos cliques e menos atrito.",
    ctaband1_h:"Não sabe qual serviço encaixa no seu projeto?", ctaband1_p:"Conte o que você precisa e recebemos um diagnóstico gratuito com o melhor caminho — sem compromisso.",
    ctaband2_h:"Gostou do que viu nos projetos?", ctaband2_p:"Seu projeto pode ser o próximo case de sucesso. Vamos conversar sobre ele.",
    ctaband_btn1:"Solicitar orçamento →", ctaband_btn2:"Falar no WhatsApp",
    case_cta_h:"Quer um projeto assim para o seu negócio?", case_cta_p:"Conte o que você precisa e recebemos um diagnóstico gratuito com o melhor caminho — sem compromisso.",
    projects_label:"PROJETOS", projects_h2:"Sistemas reais, arquitetura profissional",
    projects_sub:"Cada projeto reflete comprometimento com profundidade técnica, código limpo e padrões prontos para produção, do backend à interface.",
    badge_legend:"O selo <b>Cliente Real</b> marca projetos pagos para negócios reais. Os demais selos (Enterprise, Featured, ERP...) indicam o tipo e estágio de projetos autorais e de portfólio.",
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
    trust_label:"CONFIANÇA", trust_h2:"Por que empresas confiam na Oliveira Systems",
    trust_sub:"Sem depoimentos fabricados, sem números inflados — só o que dá para verificar.",
    trust_clients_label:"SISTEMAS CONSTRUÍDOS DO ZERO", trust_real_client_tag:"cliente real",
    trust1_h:"Código auditável", trust1_p:"Todo projeto tem repositório público no GitHub — você pode ver o código antes de contratar, não só confiar na nossa palavra.",
    trust2_h:"Comunicação direta", trust2_p:"Sem central de atendimento, sem intermediário. Você fala direto com quem constrói o seu sistema, do orçamento à entrega.",
    trust3_h:"Stack usada em produção real", trust3_p:"Java, Node.js, React e PostgreSQL rodando hoje em sistemas de saúde pública, ERPs multi-tenant e e-commerces com pagamento real.",
    trust4_h:"Resposta em até 24h úteis", trust4_p:"Todo contato — formulário, e-mail ou WhatsApp — recebe retorno em até 24h úteis, com prazo e escopo claros.",
    trust_soon:"📋 Depoimentos de clientes em coleta. Quer ser um dos primeiros case studies em destaque? <a href=\"#contact\">Fale com a gente →</a>",
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
    process_label:"COMO FUNCIONA", process_h2:"Do primeiro contato ao sistema no ar",
    process1_h:"Briefing gratuito", process1_p:"Você conta o que precisa pelo formulário, WhatsApp ou e-mail. Sem custo, sem compromisso.",
    process2_h:"Diagnóstico e proposta", process2_p:"Em até 24h úteis você recebe um diagnóstico do que precisa ser feito, prazo estimado e valor fechado.",
    process3_h:"Desenvolvimento acompanhado", process3_p:"Você acompanha o progresso e testa entregas parciais — não só o resultado final no fim do prazo.",
    process4_h:"Entrega e suporte", process4_p:"Sistema no ar, com um período de suporte incluso para ajustes e correções.",
    faq_label:"DÚVIDAS FREQUENTES", faq_h2:"Antes de pedir orçamento",
    faq1_q:"Quanto tempo leva um projeto?", faq1_a:"Depende do escopo — sites institucionais costumam ficar prontos em 1 a 3 semanas; sistemas mais complexos (ERPs, SaaS) variam de 4 a 12 semanas. Você recebe um prazo estimado já no diagnóstico inicial, antes de fechar.",
    faq2_q:"Quanto custa?", faq2_a:"Cada projeto tem um valor fechado, calculado depois do diagnóstico gratuito — não cobramos por hora nem descobrimos o preço no meio do caminho. Pedir o orçamento não tem custo nem compromisso.",
    faq3_q:"Preciso já ter identidade visual e conteúdo prontos?", faq3_a:"Não. Ajudamos a organizar o que for necessário durante o briefing — mas se você já tiver logo, textos ou referências, isso agiliza o processo.",
    faq4_q:"E se eu precisar de ajustes depois da entrega?", faq4_a:"Todo projeto sai com um período de suporte incluso para correções e pequenos ajustes. Depois disso, manutenção contínua pode ser contratada à parte.",
    faq5_q:"Vocês atendem negócios pequenos, não só empresas de tecnologia?", faq5_a:"Sim — boa parte dos projetos do portfólio são para negócios locais, como barbearia, borracharia e loja, não só sistemas enterprise. O processo é o mesmo, adaptado ao tamanho do projeto.",
    faq6_q:"Como funciona o pagamento?", faq6_a:"Varia por projeto — normalmente uma entrada no início e o restante dividido nas entregas ou na conclusão. Os detalhes ficam combinados na proposta, antes de começar.",
    lead_label:"MATERIAL GRATUITO", lead_h2:"10 sinais de que seu site está perdendo clientes",
    lead_p:"Checklist gratuito para donos de negócio identificarem, em 5 minutos, os erros mais comuns que afastam clientes — antes mesmo de pedir um orçamento.",
    lead_item1:"O site demora mais de 3 segundos para carregar no celular",
    lead_item2:"Não existe nenhum botão de WhatsApp visível",
    lead_item3:"O visitante não sabe o que fazer nos primeiros 5 segundos",
    lead_more:"+ 7 sinais no checklist completo",
    lead_name_label:"Nome", lead_email_label:"E-mail", lead_btn:"Quero o checklist grátis →",
    lead_note:"Enviamos por e-mail em até 24h úteis. Sem spam, cancele quando quiser. <a href=\"privacidade.html\" target=\"_blank\">Política de Privacidade</a>.",
    contact_label:"ORÇAMENTO", contact_h2:"Vamos construir algo que vende.",
    contact_p:"Preencha os dados abaixo — a gente responde em até 24h úteis com um diagnóstico inicial e os próximos passos.",
    form_name:"Nome", form_company:"Empresa", form_email:"E-mail", form_whatsapp:"WhatsApp",
    form_goal:"Objetivo do projeto", form_goal_ph:"Ex: preciso de um site novo para minha barbearia, com agendamento pelo WhatsApp",
    form_consent:"Autorizo o contato pelos dados informados, conforme a <a href=\"privacidade.html\" target=\"_blank\">Política de Privacidade</a>.",
    form_submit:"Solicitar orçamento →",
    form_trust1:"⚡ Resposta em até 24h úteis", form_trust2:"🔒 Seus dados não são compartilhados", form_trust3:"✅ Sem compromisso",
    contact_alt_h:"Prefere outro canal?", contact_btn_wa:"WhatsApp direto",
    contact_btn1:"Enviar e-mail", contact_info:"Baseado no Brasil · Disponível globalmente",
    footer_desc:"Engenharia full-stack, monitoramento e interfaces modernas para times que exigem qualidade e confiabilidade.",
    footer_nav:"Navegação", footer_tech:"Tecnologias", footer_connect:"Redes",
    footer_copy:"© 2026 Oliveira Systems — Todos os direitos reservados. <a href=\"privacidade.html\">Política de Privacidade</a>",
    footer_status:"Sistemas operacionais",
  },
  en: {
    skip_link:"Skip to content",
    nav_about:"About", nav_services:"Services", nav_projects:"Projects", nav_trust:"Trust", nav_stack:"Stack", nav_contact:"Get a quote", footer_contact:"Contact",
    hero_badge:"OPEN FOR NEW PROJECTS",
    hero_h1a:"Custom websites and systems", hero_h1b:"built to make your business", hero_h1c:"sell more.",
    hero_sub:"Oliveira Systems builds websites, systems, and applications for businesses that need more customers and less headache — from the first pixel to the database. Resilient backend, interfaces that convert, and active 24/7 monitoring.",
    hero_btn1:"Request a free quote →", hero_btn2:"Chat on WhatsApp now",
    hero_trust:"Response within 24 business hours · No commitment · Free quote",
    wa_menu_title:"What would you like to talk about?",
    wa_topic_orcamento:"💰 Quote", wa_topic_web:"🌐 Web Development", wa_topic_sistemas:"🖥️ Systems",
    wa_topic_saas:"🚀 SaaS", wa_topic_apis:"🔌 APIs", wa_topic_ia:"🤖 Artificial Intelligence",
    meta1:"AVERAGE UPTIME", meta2:"SYSTEMS IN PRODUCTION", meta3:"P95 LATENCY",
    panel_status:"STATUS", panel_uptime:"UPTIME", panel_incidents:"INCIDENTS", panel_build:"BUILD", panel_build_v:"OK",
    float1_title:"In production now", float1_sub:"Guardian Recovery · 99.9% uptime",
    float2_title:"Minha Loja", float2_sub:"Full-stack e-commerce · 28 tests",
    about_label:"ABOUT",
    about_h2:"Engineering that keeps running when everything else fails.",
    about_lead:"Oliveira Systems is a full-stack software engineering company — from the database to the interface — specialized in systems that survive load spikes, network failures, and the real chaos of production. Leading the technical team is Roberson de Oliveira, the engineer accountable for every project delivered.",
    about_p1:"Built on Java, Node.js, and React, we design applications with active monitoring, automated recovery, and interfaces that don't hide complexity from the user.",
    about_p2:"Oliveira Systems exists for one simple purpose: complete systems that don't wake you up at 3am.",
    about_divider:"open to remote work & global clients",
    skills_label:"PROFICIENCY", skills_h2:"Technical depth from database to interface",
    skills_g1:"Backend & APIs", skills_g2:"Data & Infrastructure", skills_g3:"Frontend & Mobile",
    counters_label:"IMPACT", counters_h2:"Metrics, not promises",
    c1_label:"Solutions delivered", c2_label:"API endpoints", c3_label:"Technical specialties", c4_label:"GitHub commits",
    services_label:"SERVICES", services_h2:"What Oliveira Systems delivers",
    services_sub:"End-to-end full-stack solutions built for performance, security, and real-world scale.",
    svc_problem_label:"PROBLEM", svc_result_label:"RESULT",
    svc1_h:"Custom systems", svc1_p:"A tailored application built with clean separation of concerns, from data layer to API surface.",
    svc1_problem:"Spreadsheets and generic systems can't keep up as your business grows.",
    svc1_chip1:"Scales without rework", svc1_chip2:"No per-user licensing", svc1_chip3:"You own the code",
    svc1_result:"A system that grows with the company instead of becoming a bottleneck.",
    svc2_h:"API development", svc2_p:"RESTful APIs designed for clarity, security, and seamless integration with any frontend or third-party service.",
    svc2_problem:"Systems that don't talk to each other create manual rework and human error.",
    svc2_chip1:"Clear documentation", svc2_chip2:"Easy to integrate", svc2_chip3:"Built to scale",
    svc2_result:"Your systems exchange data automatically, no spreadsheet in between.",
    svc3_h:"Security & auth", svc3_p:"JWT-based authentication, protected routes, input validation, and enterprise-grade security patterns.",
    svc3_problem:"A single security failure can cost years of trust with your customers.",
    svc3_chip1:"Protected data", svc3_chip2:"Role-based access", svc3_chip3:"Privacy-law aligned",
    svc3_result:"You sleep easy knowing the data is protected.",
    svc4_h:"Scalable architecture", svc4_p:"Systems designed to grow — clean layers, maintainable codebase, ready for future requirements.",
    svc4_problem:"A system that works today but chokes as the business grows is expensive to rebuild.",
    svc4_chip1:"No rewrite from scratch", svc4_chip2:"Handles more users", svc4_chip3:"Cheaper to maintain",
    svc4_result:"Your system can handle your business's success.",
    svc5_h:"Monitoring & recovery", svc5_p:"Real-time health checks, automated alerting, and operational recovery without manual intervention.",
    svc5_problem:"A system down with nobody noticing is lost sales happening in silence.",
    svc5_chip1:"Automated alerts", svc5_chip2:"Less downtime", svc5_chip3:"Incident history",
    svc5_result:"Problems get fixed before the customer ever notices.",
    svc6_h:"Interfaces & frontend", svc6_p:"React and modern interfaces connected directly to the same API that serves the backend — no patchwork between layers.",
    svc6_problem:"A slow or confusing interface makes customers give up before buying or requesting a quote.",
    svc6_chip1:"Fast load times", svc6_chip2:"Responsive design", svc6_chip3:"Higher conversion",
    svc6_result:"Visitors turn into leads with fewer clicks and less friction.",
    ctaband1_h:"Not sure which service fits your project?", ctaband1_p:"Tell us what you need and get a free diagnosis of the best path forward — no strings attached.",
    ctaband2_h:"Liked what you saw in the projects?", ctaband2_p:"Your project could be the next success story. Let's talk about it.",
    ctaband_btn1:"Request a quote →", ctaband_btn2:"Chat on WhatsApp",
    case_cta_h:"Want a project like this for your business?", case_cta_p:"Tell us what you need and get a free diagnosis of the best path forward — no strings attached.",
    projects_label:"PROJECTS", projects_h2:"Real systems, professional architecture",
    projects_sub:"Each project reflects a commitment to technical depth, clean code, and production-ready patterns, from backend to interface.",
    badge_legend:"The <b>Real Client</b> tag marks paid projects for real businesses. The other tags (Enterprise, Featured, ERP...) indicate the type and stage of original portfolio projects.",
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
    trust_label:"TRUST", trust_h2:"Why businesses trust Oliveira Systems",
    trust_sub:"No fabricated testimonials, no inflated numbers — only what you can verify.",
    trust_clients_label:"SYSTEMS BUILT FROM SCRATCH", trust_real_client_tag:"real client",
    trust1_h:"Auditable code", trust1_p:"Every project has a public GitHub repository — you can see the code before hiring, not just take our word for it.",
    trust2_h:"Direct communication", trust2_p:"No call center, no middleman. You talk directly with whoever builds your system, from quote to delivery.",
    trust3_h:"Stack proven in real production", trust3_p:"Java, Node.js, React, and PostgreSQL running today in public health systems, multi-tenant ERPs, and e-commerces with real payments.",
    trust4_h:"Response within 24 business hours", trust4_p:"Every contact — form, email, or WhatsApp — gets a reply within 24 business hours, with a clear timeline and scope.",
    trust_soon:"📋 Client testimonials in progress. Want to be one of our first featured case studies? <a href=\"#contact\">Get in touch →</a>",
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
    process_label:"HOW IT WORKS", process_h2:"From first contact to a live system",
    process1_h:"Free briefing", process1_p:"Tell us what you need via the form, WhatsApp, or email. No cost, no commitment.",
    process2_h:"Diagnosis and proposal", process2_p:"Within 24 business hours you get a diagnosis of what needs to be done, an estimated timeline, and a fixed price.",
    process3_h:"Development with visibility", process3_p:"You follow the progress and test partial deliveries — not just the final result at the deadline.",
    process4_h:"Delivery and support", process4_p:"The system goes live, with a support window included for adjustments and fixes.",
    faq_label:"FREQUENTLY ASKED QUESTIONS", faq_h2:"Before you request a quote",
    faq1_q:"How long does a project take?", faq1_a:"It depends on scope — institutional websites are usually ready in 1 to 3 weeks; more complex systems (ERPs, SaaS) range from 4 to 12 weeks. You get an estimated timeline in the initial diagnosis, before committing.",
    faq2_q:"How much does it cost?", faq2_a:"Every project has a fixed price, calculated after the free diagnosis — we don't bill by the hour or reveal the price midway through. Requesting a quote costs nothing and carries no commitment.",
    faq3_q:"Do I need to already have branding and content ready?", faq3_a:"No. We help organize what's needed during the briefing — but if you already have a logo, copy, or references, that speeds things up.",
    faq4_q:"What if I need adjustments after delivery?", faq4_a:"Every project ships with a support window included for fixes and small adjustments. After that, ongoing maintenance can be contracted separately.",
    faq5_q:"Do you work with small businesses, not just tech companies?", faq5_a:"Yes — a good part of the portfolio is for local businesses, like barbershops, tire shops, and stores, not just enterprise systems. The process is the same, scaled to the project's size.",
    faq6_q:"How does payment work?", faq6_a:"It varies by project — usually a deposit upfront and the remainder split across deliveries or on completion. Details are agreed on in the proposal, before starting.",
    lead_label:"FREE RESOURCE", lead_h2:"10 signs your website is losing you customers",
    lead_p:"A free checklist for business owners to spot, in 5 minutes, the most common mistakes that drive customers away — before you even ask for a quote.",
    lead_item1:"The site takes more than 3 seconds to load on mobile",
    lead_item2:"There's no visible WhatsApp button anywhere",
    lead_item3:"Visitors don't know what to do in the first 5 seconds",
    lead_more:"+ 7 more signs in the full checklist",
    lead_name_label:"Name", lead_email_label:"Email", lead_btn:"Send me the free checklist →",
    lead_note:"We'll email it within 24 business hours. No spam, unsubscribe anytime. <a href=\"privacidade.html\" target=\"_blank\">Privacy Policy</a>.",
    contact_label:"GET A QUOTE", contact_h2:"Let's build something that sells.",
    contact_p:"Fill in the details below — we'll reply within 24 business hours with an initial diagnosis and next steps.",
    form_name:"Name", form_company:"Company", form_email:"Email", form_whatsapp:"WhatsApp",
    form_goal:"Project goal", form_goal_ph:"E.g. I need a new website for my shop, with WhatsApp booking",
    form_consent:"I consent to being contacted using the details provided, per the <a href=\"privacidade.html\" target=\"_blank\">Privacy Policy</a>.",
    form_submit:"Request a quote →",
    form_trust1:"⚡ Response within 24 business hours", form_trust2:"🔒 Your data is never shared", form_trust3:"✅ No commitment",
    contact_alt_h:"Prefer another channel?", contact_btn_wa:"WhatsApp direct",
    contact_btn1:"Send an email", contact_info:"Based in Brazil · Available globally",
    footer_desc:"Full-stack engineering, monitoring, and modern interfaces for teams that demand quality and reliability.",
    footer_nav:"Navigation", footer_tech:"Technologies", footer_connect:"Connect",
    footer_copy:"© 2026 Oliveira Systems — All rights reserved. <a href=\"privacidade.html\">Privacy Policy</a>",
    footer_status:"Systems operational",
  }
};

const WA_NUMBER = "5551991640903";
const WA_MESSAGES = {
  pt: {
    orcamento:"Olá! Vim pelo site da Oliveira Systems e gostaria de solicitar um orçamento.",
    web:"Olá! Tenho interesse em um site novo para o meu negócio. Podemos conversar?",
    sistemas:"Olá! Preciso de um sistema personalizado para minha empresa. Podemos conversar?",
    saas:"Olá! Tenho uma ideia de SaaS e gostaria de conversar sobre o desenvolvimento.",
    apis:"Olá! Preciso de uma API ou integração para o meu sistema. Podemos conversar?",
    ia:"Olá! Tenho interesse em automação/IA aplicada ao meu negócio. Podemos conversar?",
  },
  en: {
    orcamento:"Hi! I came from the Oliveira Systems website and I'd like to request a quote.",
    web:"Hi! I'm interested in a new website for my business. Can we talk?",
    sistemas:"Hi! I need a custom system for my company. Can we talk?",
    saas:"Hi! I have a SaaS idea and would like to discuss development.",
    apis:"Hi! I need an API or integration for my system. Can we talk?",
    ia:"Hi! I'm interested in AI/automation for my business. Can we talk?",
  }
};
function buildWaLink(topic) {
  const msgs = WA_MESSAGES[currentLang] || WA_MESSAGES.pt;
  const text = msgs[topic] || msgs.orcamento;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
function refreshWhatsappLinks() {
  document.querySelectorAll(".js-whatsapp-link").forEach(a => {
    a.setAttribute("href", buildWaLink(a.dataset.waTopic || "orcamento"));
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });
}

let currentLang = localStorage.getItem("os_lang") || "pt";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("os_lang", lang);
  const t = Object.assign({}, TRANSLATIONS[lang], (window.PAGE_TRANSLATIONS && window.PAGE_TRANSLATIONS[lang]) || {});
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
  });
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
    b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
  });
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  refreshWhatsappLinks();
}

document.addEventListener("DOMContentLoaded", () => {

  const menuBtn  = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("active");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav-links a").forEach(l =>
      l.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
      }));
  }

  const waFloatBtn = document.getElementById("waFloatBtn");
  const waMenu = document.getElementById("waMenu");
  if (waFloatBtn && waMenu) {
    waFloatBtn.addEventListener("click", e => {
      e.preventDefault();
      const open = waMenu.classList.toggle("open");
      waFloatBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    waMenu.querySelectorAll(".js-whatsapp-link").forEach(l =>
      l.addEventListener("click", () => waMenu.classList.remove("open")));
    document.addEventListener("click", e => {
      if (!waMenu.contains(e.target) && !waFloatBtn.contains(e.target)) {
        waMenu.classList.remove("open");
        waFloatBtn.setAttribute("aria-expanded", "false");
      }
    });
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

console.log(
  "%c// OLIVEIRA SYSTEMS %c— sistema operacional",
  "color:#5fe8c6; font-family:monospace; font-weight:700; font-size:13px;",
  "color:#7c8a8f; font-family:monospace; font-size:13px;"
);
console.log(
  "%cCurioso pra ver como isso foi construído? Código aberto: %cgithub.com/RobersonCodes",
  "color:#eef1f2; font-family:monospace; font-size:12px;",
  "color:#5fe8c6; font-family:monospace; font-size:12px;"
);
console.log(
  "%cRecrutador ou dev por aqui? roberson_sl@hotmail.com",
  "color:#7c8a8f; font-family:monospace; font-size:12px;"
);

# Oliveira Systems

Site institucional da Oliveira Systems, um estúdio de engenharia digital voltado
à criação de produtos SaaS, sistemas empresariais e experiências digitais
modernas, escaláveis e orientadas a resultados.

## Principais seções

- **Hero:** apresentação da marca e proposta central.
- **Manifesto:** visão da Oliveira Systems sobre produtos digitais.
- **História:** contexto sobre evolução de empresas e processos.
- **Produtos:** TireMax ERP, Oliveira Apply AI e Milwaukee Connect.
- **Cases:** seleção dos produtos desenvolvidos pela Oliveira Systems.
- **Contato:** chamada para desenvolvimento de novos projetos.

## Tecnologias

- Next.js 16 com App Router e Turbopack
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lenis

## Requisitos

- Node.js 20.9.0 ou superior
- npm compatível com a versão instalada do Node.js

## Instalação local

Clone ou copie o projeto, acesse sua pasta e instale as dependências travadas no
`package-lock.json`:

```bash
npm ci
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000).

## Comandos

```bash
# Ambiente de desenvolvimento
npm run dev

# Análise estática com ESLint
npm run lint

# Verificação de tipos sem gerar arquivos
npx tsc --noEmit

# Build otimizado de produção
npm run build

# Executar o build localmente
npm run start
```

## Estrutura resumida

```text
app/
  layout.tsx          Layout raiz, idioma e metadata
  page.tsx            Composição da página principal
  globals.css         Estilos e preferências globais
components/
  animations/         Infraestrutura e efeitos de movimento
  layout/             Navbar e Footer
  sections/           Seções da página
  ui/                 Componentes visuais reutilizáveis
public/
  images/             Imagens estáticas
  videos/             Vídeos estáticos
```

## Acessibilidade

O projeto inclui navegação mobile por teclado, link para pular ao conteúdo,
estados de foco visíveis e suporte a `prefers-reduced-motion`. Com movimento
reduzido ativo, o smooth scroll e o cursor personalizado são desativados e as
animações não essenciais são simplificadas.

## Deploy na Vercel

1. Publique o repositório em um provedor Git.
2. Importe o repositório na Vercel.
3. Mantenha o framework detectado como Next.js.
4. Use `npm run build` como comando de build, caso a detecção automática não o
   preencha.
5. Valide o domínio e eventuais variáveis de ambiente antes de promover o
   deployment para produção.

Este projeto não depende atualmente de variáveis de ambiente para gerar a página
principal.

## Propriedade

Projeto proprietário da Oliveira Systems. Nenhuma licença de código aberto foi
declarada. Todos os direitos reservados.

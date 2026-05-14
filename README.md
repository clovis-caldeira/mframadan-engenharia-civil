# MFRAMADAN Engenharia Civil — Landing Page

Landing page profissional para a engenheira civil **Marivalda Nascimento** (CREA-SP 5071239135), apresentando os serviços da **MFRAMADAN Engenharia Civil**.

### Demo online

- **Produção (Vercel):** https://mframadan.vercel.app/
- **Mirror (GitHub Pages):** https://clovis-caldeira.github.io/mframadan-engenharia-civil/

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)]()
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://mframadan.vercel.app/)

---

## Sobre

Site institucional de página única (one-page) construído com **HTML5, CSS3 e JavaScript puro**, focado em conversão (CTA para WhatsApp). Sem build step, sem dependências externas — basta abrir o `index.html`.

### Serviços apresentados

- Emissão de ART
- Laudos Técnicos
- Responsabilidade Técnica para Empresas
- Acompanhamento de Obras
- Consultorias
- Projetos

## Stack

- HTML5 semântico
- CSS3 moderno (custom properties, grid, flexbox, animações)
- JavaScript vanilla (ES6+, IntersectionObserver, sem libs)
- Tipografia: Inter + Playfair Display (Google Fonts)
- Ícones SVG inline

## Design System

| Token         | Valor       | Uso                      |
| ------------- | ----------- | ------------------------ |
| `--brand-800` | `#0b2545`   | Azul corporativo (cartão) |
| `--brand-600` | `#1d4ed8`   | CTA principal             |
| `--brand-300` | `#60a5fa`   | Destaques claros          |
| `--ink-900`   | `#0a0f1c`   | Texto principal           |
| `--ink-500`   | `#718096`   | Texto secundário          |
| `--whatsapp`  | `#25d366`   | Botão WhatsApp            |

## Estrutura

```
Engcivil/
├── index.html          # Página principal
├── css/styles.css      # Design system + estilos
├── js/main.js          # Menu, scroll, form -> WhatsApp
├── assets/favicon.svg  # Favicon
└── README.md
```

## Como rodar localmente

Abra o `index.html` direto no navegador — não precisa de servidor.

Se quiser servir via HTTP (recomendado para evitar warnings de CORS):

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Acesse `http://localhost:8000`.

## Funcionalidades

- Design responsivo (mobile-first, breakpoints 720px e 1024px)
- Menu mobile com hamburguer animado
- Animações de scroll com IntersectionObserver
- Botão flutuante de WhatsApp com pulso
- Formulário que abre conversa pré-preenchida no WhatsApp
- Máscara automática para telefone
- Smooth scroll respeitando header fixo
- Suporte a `prefers-reduced-motion`
- SEO básico (Open Graph, meta tags, semântica)

## Deploy

Pode ser hospedada gratuitamente em:

- **GitHub Pages** — Settings → Pages → branch `main` / root
- **Netlify** — arraste a pasta no painel
- **Vercel** — `vercel deploy` na raiz
- **Cloudflare Pages** — conecte o repositório

## Contato

- **Eng. Marivalda Nascimento** · CREA-SP 5071239135
- WhatsApp: [(11) 98952-0479](https://wa.me/5511989520479)
- E-mail: mari17andrade@hotmail.com

---

© MFRAMADAN Engenharia Civil. Todos os direitos reservados.

 Arena 61 — Site Institucional

 Equipe
- Ana Clara Axer — Desenvolvimento front-end / QA
- Caio Marcio — Design / Conteúdo

 Descrição do negócio
Arena 61 é um centro esportivo dedicado a práticas como vôlei de praia, futvôlei e aluguel de campo society. O site apresenta serviços, localização e canais de contato para clientes, atletas e parceiros.

 Objetivos do site
- Divulgar serviços e planos oferecidos.
- Facilitar contato rápido via WhatsApp e redes sociais.
- Exibir localização via Google Maps embed.
- Ser acessível, responsivo e modular para fácil manutenção.

 Wireframe (Figma)
Protótipo e wireframes (Parte 1):  
https://www.figma.com/design/nLstb3G7zgzlXO5XVPN7BG/Untitled?node-id=0-1&t=Cd1zIuBoB9CWcPC9-1

 Estrutura do projeto
c:\Users\Ana Clara\Downloads\arena61
- index.html
- servicos.html
- contato.html
- componentes/
  - header.html
  - footer.html
  - (outros componentes)
- css/
  - style.css
  - responsive.css
  - componentes.css
- js/
  - componentes.js
  - script.js (opcional)
- img/
- README.md

 Melhorias implementadas (Parte 2)
- Componentes modularizados
  - header.html e footer.html extraídos; carregamento via `js/componentes.js` para evitar duplicação e facilitar atualizações.
- Acessibilidade
  - Skip link (.skip-link) para pular ao conteúdo.
  - Foco visível para elementos interativos (`:focus`).
  - Uso de estrutura semântica (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
  - Fonte base >= 16px.
- Responsividade
  - Mobile-first com `responsive.css`: utilitários de grid/containers e breakpoints.
  - Map + painel de contato com layout fluido e comportamento responsivo (flexbox/grid).
- Integrações externas
  - Google Maps embed para localização.
  - Link direto para WhatsApp (wa.me).
  - Link para Instagram.

 Otimizações recentes (metadados e favicon)

- Metadados SEO adicionados em todas as páginas:
  - meta description
  - meta keywords
  - meta author
- Favicon incluído: img/favicon.png (referenciado no head de cada página)
- Teste local recomendado via servidor (Live Server / python -m http.server) para validar fetchs e favicon.

 Justificativas técnicas
- Modularização com componentes reduz duplicação, melhora manutenção e facilita mudanças globais no layout.
- Abordagem mobile-first e utilitários CSS tornam o layout previsível e adaptável.
- Boas práticas de acessibilidade iniciais (skip-link, foco visível) aumentam a usabilidade para navegação por teclado.
- Uso de embeds (Maps, WhatsApp) evita a necessidade de backend para contatos básicos.

 Desafios encontrados e soluções
- Componentes não carregavam: resolvido com `js/componentes.js` que trata erros e injeta HTML nos containers.
- iframe malformado: corrigido src e removido HTML aninhado.
- CSS incompleto com placeholders: regras finalizadas para `.localizacao-wrapper` e `.contato-actions` e responsividade ajustada.

 Testes e validação
- Abra projeto via servidor local (ex.: Live Server / `python -m http.server 5500`) para garantir fetchs e embeds.
- Verificar DevTools → Console/Network para 200 OK em `componentes/header.html` e `componentes/footer.html`.
- Rodar Lighthouse / axe para auditoria de acessibilidade; ajustar contraste/labels conforme recomendado.

 Plano de melhorias / próximos passos
Prioritárias
1. Implementar formulário de contato com validação e ARIA-live para mensagens.
2. Auditoria de contraste (meta ≥ 4.5:1) e ajustes de tokens de cor.
3. Adicionar testes automatizados básicos (loader de componentes, ausência de erros no console).

Secundárias
1. Converter ícones para SVGs otimizados.
2. Criar versão mobile do menu (se necessário) e testes cross-browser.
3. Integrar envio de formulário (backend simples ou serviço de terceiros).

 Rubrica / Autoavaliação (resumo)
- Interatividade: Básica (links e integrações funcionais) — melhorar com feedbacks dinâmicos e formulários.
- Acessibilidade: Parcial (semântica e foco visível implementados) — faltam labels completos e ARIA em componentes interativos.
- Responsividade: Boa base (mobile-first), precisa de ajustes finos em imagens/alturas fixas.
- Modularidade: Implementada (header/footer), expandir para outros blocos reutilizáveis.

 Como rodar localmente
1. Abra o terminal na pasta do projeto:
   cd "c:\Users\Ana Clara\Downloads\arena61"
2. Inicie um servidor local (recomendado):
   - Python: `python -m http.server 5500`  
   - Ou use Live Server do VS Code.
3. Abra http://localhost:5500 no navegador.

 Contato / Observações
- Atualizar nomes e papéis no topo quando necessário.
- Incluir link do protótipo Figma e evidências de testes no repositório antes da entrega final.

 Reflexão Individual

 Ana Clara Axer — Desenvolvimento front‑end / QA
Aprendizados técnicos: avancei em HTML semântico, CSS responsivo, uso de Flexbox/Grid e debugging com DevTools. Aprendi a modularizar componentes e usar fetch para carregar HTML dinamicamente.  
Desafio mais difícil: resolver carregamento assíncrono dos componentes e casos de CORS/404; aprendi tratamento de erros e testes locais.  
O que agora domino melhor: organização de CSS e componentes reutilizáveis, além de testes rápidos para garantir que o console esteja limpo.  
Aprendizados de processo: colaboração com o parceiro foi eficiente via tarefas divididas e revisão de código; desafio maior foi sincronizar merges — resolvido com commits menores e mensagens claras.  
Se voltasse atrás: documentaria mais cedo as decisões e criaria testes básicos desde o início.

 Caio Marcio — Design / Conteúdo
Aprendizados técnicos: melhorei o design responsivo, selecção de cores e a inclusão de metadados (SEO/favicons). Ganhei prática em otimização de imagens e organização de layout mobile‑first.  
Desafio mais difícil: equilibrar design visual com acessibilidade (contraste, foco visível e navegação por teclado).  
O que agora domino melhor: criação de wireframes e tradução do visual para CSS responsivo, mantendo consistência em componentes.  
Aprendizados de processo: comunicação constante com a dupla acelerou iterações; funcionou bem dividir prototipação (Figma) e implementação.  
Se voltasse atrás: integraria os testes de acessibilidade mais cedo no fluxo e faria checkpoints regulares de contraste.

# Reflexão da dupla

 Evolução do projeto
- O site evoluiu de um protótipo estático (Parte 1) para uma versão modular, acessível e responsiva.  
- Principais mudanças: extração de components (header/footer), CSS responsivo e utilitários, correção do iframe do mapa, carregamento dinâmico de componentes com tratamento de erro e inclusão de metadados/favicon.  
- O resultado atende bem à proposta inicial: apresenta serviços, localização e meios de contato de forma clara e acessível, com código mais fácil de manter.

 Feedbacks recebidos
- Aprendizado com avaliações: reforço na importância de acessibilidade, contrastes e testes cross‑browser.  
- Feedback mais útil: identificar issues de parsing (iframe), duplicação de header/footer e necessidade de fallback ao carregar componentes.  
- Aplicação das sugestões: priorizaremos ARIA/labels e auditoria de contraste e adicionaremos testes locais antes da entrega final.

 Relevância para o negócio
- Valor entregue: site funcional e responsivo melhora a presença online, facilita reservas e contato imediato (WhatsApp/Instagram) e mostra localização (Google Maps).  
- Apresentação ao dono: destacar facilidade de contato, manutenção simples (componentes) e performance móvel — tudo com custo baixo de hospedagem.  
- Uso em portfólio: sim — o projeto demonstra habilidades práticas em HTML/CSS responsivo, modularização e integrações front‑end, além de preocupações com acessibilidade.

 Conhecimentos a Aprofundar
- Aprofundar em acessibilidade (WCAG, ARIA e testes com axe).
- Estudar animações CSS avançadas e melhores práticas de performance.
- Aprender consumo/manipulação de APIs (fetch, axios) e integração com backend.
- Adotar testes automatizados (E2E e unitários) para garantir estabilidade.
- Explorar React/Vue e ferramentas modernas de build (Vite, webpack).

 Aplicação em Disciplinas Futuras
- Usar as práticas de acessibilidade e testes em projetos escolares e portfólios para aumentar qualidade e inclusão.
- Aplicar habilidades em consumo de APIs e validação para integrar funcionalidades dinâmicas (ex.: reservas, pagamentos).

- Reutilizar conhecimento de frameworks e ferramentas modernas em trabalhos maiores, acelerando desenvolvimento e mantendo escalabilidade.

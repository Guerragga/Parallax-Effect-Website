# NieR: Automata — Parallax Experience

Projeto front-end inspirado em **NieR: Automata**, criado originalmente como estudo de efeito parallax e posteriormente refatorado para funcionar como uma peça de portfólio mais profissional.

## Objetivo

Demonstrar fundamentos sólidos de front-end sem depender de frameworks:

- HTML semântico;
- CSS responsivo;
- design system com tokens;
- JavaScript nativo;
- efeito parallax performático;
- acessibilidade básica alinhada à WCAG 2.2 AA;
- suporte a `prefers-reduced-motion`;
- organização visual e responsividade para desktop, tablet e mobile.

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

A versão atual não depende de GSAP, React, Vue ou outro framework. Isso reduz o peso do projeto e deixa a implementação mais transparente para avaliação técnica.

## Destaques da refatoração

- reconstrução completa da estrutura semântica da página;
- navegação fixa com estados visuais;
- hero com efeito parallax preservado;
- seções editoriais para visão geral, personagens, trilha sonora e recepção;
- cards e layout responsivo;
- tabela adaptada para telas pequenas;
- foco visível e link de salto para teclado;
- `loading="lazy"` em imagens fora da dobra;
- remoção de posicionamentos absolutos frágeis;
- respeito à preferência de movimento reduzido;
- remoção da dependência externa do GSAP.

## Estrutura

```text
.
├── gif/
├── img/
├── index.html
├── script.js
├── style.css
├── LICENSE
└── README.md
```

## Executando localmente

Como o projeto é estático, você pode abrir o `index.html` diretamente no navegador. Para uma experiência mais próxima de produção, use um servidor HTTP local.

Com Python:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Acessibilidade

O projeto inclui:

- landmarks e headings semânticos;
- skip link;
- foco visível;
- textos alternativos;
- contraste elevado;
- áreas de interação adequadas;
- navegação por teclado;
- `prefers-reduced-motion`.

## Performance

O parallax usa `requestAnimationFrame` e eventos de scroll passivos. Imagens de conteúdo abaixo da dobra utilizam carregamento preguiçoso.

> Observação: alguns assets originais ainda são pesados. A otimização física das imagens para WebP/AVIF é uma melhoria futura recomendada.

## Créditos

Projeto de estudo sem fins comerciais inspirado em **NieR: Automata**. Os direitos dos personagens, nomes e artes pertencem aos respectivos detentores.

## Autor

Desenvolvido por [Guerragga](https://github.com/Guerragga).

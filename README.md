# Portfolio Website

Portfolio pessoal desenvolvido com Nuxt, Sanity e TailwindCSS por Marcus Beladona.

## Stack

- Nuxt 4
- Vue 3
- Sanity CMS
- TailwindCSS v4
- DaisyUI
- Nuxt Image
- Nuxt Icon
- Nuxt i18n
- Splide
- Vercel

---

# Estrutura Geral

```txt
app/
├── assets/
│   ├── css/
│   └── icons/
│
├── components/
│   ├── app/
│   │   └── Componentes de layout
│   │
│   ├── block/
│   │   └── Componentes do Sanity
│   │
│   └── vue/
│       └── Componentes reutilizáveis
│
├── composables/
│   └── useSanityLanguage.ts
│
├── layouts/
│   └── default.vue
│
├── middleware/
│   └── locale-cleanup.global.ts
│
├── pages/
│   ├── index.vue
│   ├── about.vue
│   └── cases/
│       ├── index.vue
│       └── [slug].vue
│
├── i18n/
│   └── locales/
│       ├── en-US.json
│       └── pt-BR.json
│
├── public/
│   ├── img/
│   ├── favicon.ico
│   └── robots.txt
│
└── app.vue
```

---

# Funcionamento Geral

O site é dividido em três camadas principais:

## 1. Nuxt

Responsável por:

- Rotas
- Renderização
- Layouts
- Componentes

---

## 2. Sanity

Responsável por:

- Cases
- Artigos

---

## 3. i18n

Responsável pelas traduções da interface.
Usado em todos os textos estáticos.

Configuração:

```ts
@nuxtjs/i18n
```

Idiomas disponíveis:

- English (en-US)
- Português (pt-BR)

Estratégia atual:

```ts
strategy: 'no_prefix'
```

URLs:

```txt
/
```

e não:

```txt
/pt
/en
```

O idioma é detectado automaticamente pelo navegador e armazenado em cookie.

---

# Sanity

Configuração atual:

```ts
dataset: production
```

---

# Imagens

O módulo está integrado ao Sanity:

```vue
<NuxtImg />
<SanityImg />
```

Benefícios:

- Lazy loading
- Otimização automática
- Conversão de formatos
- Responsividade
- correção de URL automática

---

# Composable de Idioma

Arquivo:

```txt
composables/useSanityLanguage.ts
```

Objetivo:

Mapear o idioma atual do site para consultas no Sanity.

Sempre verificar este arquivo caso:

- Traduções do CMS parem de funcionar
- Campos localizados retornem vazios

---

# Middleware

Arquivo:

```txt
middleware/locale-cleanup.global.ts
```

Executado globalmente.

Responsável por:

- Limpeza de locale inválido
- Correção de idioma
- Controle de cookies relacionados ao i18n

Verificar primeiro caso ocorram problemas de idioma.

---

# Estilos

Arquivo principal:

```txt
app/assets/css/main.css
```

Tecnologias:

- TailwindCSS v4
- DaisyUI

Evitar CSS global desnecessário.

Prioridade:

1. Tailwind Utilities
2. DaisyUI
3. CSS customizado

---

# Ícones

Módulo:

```ts
@nuxt/icon
```

Ícones Locais:

```txt
app/assets/icons/
```

Uso:

```vue
<Icon name="ph:arrow-right" />
```

Biblioteca principal:

```txt
Phosphor Icons
```

---

# Desenvolvimento

Instalar dependências:

```bash
npm install
```

Executar ambiente local:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

Generate:

```bash
npm run generate
```

---

# Deploy

Plataforma:

```txt
Vercel
```

Fluxo:

```txt
Git Push
↓
GitHub
↓
Vercel Build
↓
Deploy
```

---

# Observações de auditoria

1. Verificar `nuxt.config.ts`.
2. Confirmar conexão com o Sanity.
3. Revisar `useSanityLanguage.ts`.
5. Conferir repositório do Sanity: sn-studio
6. Rodar:

```bash
npm install
npm run dev
```

6. Revisar traduções em:

```txt
i18n/locales/
```

7. Conferir se o deploy da Vercel continua conectado ao repositório.

Se algo parecer quebrado, normalmente o problema estará em:

- Mudança de schema do Sanity
- Campos localizados
- Middleware de idioma
- Queries GROQ
- Dependências atualizadas
````

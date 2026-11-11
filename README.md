# ResguardaIt.lat

Sitio web de ResguardaIt construido con **Astro 5 + Tailwind CSS 4**, desplegado en **Cloudflare Pages**.

---

## Estructura del proyecto

```
resguardait/
├── public/                 # Archivos estáticos (se copian tal cual)
│   ├── animacion/
│   │   └── index.html      # Animación de marca completa  →  /animacion/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/         # Piezas reutilizables de UI
│   │   ├── BrandAnimation.astro    # Animación del hero (solo CSS)
│   │   ├── CTA.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Icon.astro
│   │   ├── PricingCard.astro
│   │   ├── Section.astro
│   │   └── ServiceCard.astro
│   ├── layouts/            # Plantillas de página
│   │   ├── BaseLayout.astro    # HTML base + SEO + header/footer
│   │   └── BlogPost.astro      # Plantilla de artículo
│   ├── content/
│   │   └── blog/           # Artículos en Markdown
│   ├── pages/              # Cada archivo = una URL
│   │   ├── index.astro         →  /
│   │   ├── servicios.astro     →  /servicios
│   │   ├── precios.astro       →  /precios
│   │   ├── casos.astro         →  /casos
│   │   ├── contacto.astro      →  /contacto
│   │   ├── 404.astro           →  /404
│   │   └── blog/
│   │       ├── index.astro     →  /blog
│   │       └── [...slug].astro →  /blog/mi-articulo
│   ├── styles/global.css   # Tailwind + variables de marca
│   ├── content.config.ts   # Esquema del blog
│   └── consts.ts           # ⭐ Textos, servicios, planes y casos
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── wrangler.jsonc          # Despliegue: Cloudflare publica dist/ como sitio estático
```

**Regla clave:** casi todo el contenido editable vive en `src/consts.ts`. Cambiar un servicio, un plan o el correo de contacto no requiere tocar el HTML.

---

## Desarrollo local

Requiere Node 18 o superior.

```bash
npm install       # instala dependencias
npm run dev       # servidor local en http://localhost:4321
npm run build     # genera el sitio estático en dist/
npm run preview   # previsualiza el build
```

---

## Antes de publicar

- [ ] `src/consts.ts` → correo real, WhatsApp y precios de los planes
- [ ] `src/pages/contacto.astro` → reemplazar `https://formspree.io/f/TU_ID` por tu endpoint real
- [ ] `src/pages/casos.astro` → sustituir los casos de ejemplo por clientes reales
- [ ] `public/favicon.svg` → tu logo definitivo
- [ ] Añadir una imagen `og-image.png` en `public/` y referenciarla en `BaseLayout.astro`

---

## Deploy en Cloudflare Pages + GitHub

### 1. Subir el proyecto a GitHub

```bash
cd resguardait
git init
git add .
git commit -m "Estructura inicial del sitio"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/resguardait.git
git push -u origin main
```

### 2. Conectar Cloudflare Pages

1. Panel de Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Autoriza GitHub y selecciona el repositorio `resguardait`
3. Configura el build:

   | Campo | Valor |
   |---|---|
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node version | `20` (variable `NODE_VERSION`) |

4. **Save and Deploy**

### 3. Apuntar el dominio

En el proyecto de Pages → **Custom domains** → **Set up a custom domain** → `resguardait.lat`.
Como el dominio ya está en Cloudflare, los registros DNS se crean solos. Repite para `www.resguardait.lat` si quieres esa variante.

> Elimina el `index.html` antiguo del despliegue anterior para que no haya dos versiones compitiendo por la misma ruta.

### A partir de aquí

Cada `git push` a `main` publica automáticamente. Las ramas generan URLs de preview, así que puedes revisar cambios antes de que lleguen a producción.

> `wrangler.jsonc` le indica a Cloudflare qué publicar: la carpeta `dist/` como sitio estático, con la página 404 del sitio. El campo `name` debe coincidir con el nombre del Worker en el panel.

---

## Añadir un artículo al blog

Crea `src/content/blog/mi-articulo.md`:

```markdown
---
title: "Título del artículo"
description: "Resumen breve para Google y redes sociales."
pubDate: 2026-08-10
tags: ["dominios"]
draft: false
---

Contenido en Markdown.
```

El archivo aparece automáticamente en `/blog` y su URL es `/blog/mi-articulo`.
Usa `draft: true` para escribirlo sin publicarlo.

---

## Animación de marca

Son dos piezas independientes:

- **Hero** — `src/components/BrandAnimation.astro`, usado en `src/pages/index.astro`. Es solo CSS: un ciclo de 9.6 s en bucle que escala con el ancho de su contenedor. Las alertas y sus textos están en el array `alerts` del propio componente. Con `prefers-reduced-motion` muestra la ilustración fija.
- **Página completa** — `public/animacion/index.html`, servida tal cual en `/animacion/`. Son las cuatro escenas (28 s) con pausa y salto entre escenas. Lleva `noindex`, no pasa por el build y carga sus fuentes desde Google Fonts. Se puede compartir el enlace o incrustar con `<iframe src="/animacion/">`.

---

## Añadir una página nueva

Crea el archivo en `src/pages/`. Por ejemplo `src/pages/nosotros.astro`:

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import Section from '@/components/Section.astro';
---

<BaseLayout title="Nosotros" description="Quiénes somos.">
  <Section title="Nosotros">
    <p class="mt-6">Contenido…</p>
  </Section>
</BaseLayout>
```

Luego añádela al menú en el array `NAV` de `src/consts.ts`.

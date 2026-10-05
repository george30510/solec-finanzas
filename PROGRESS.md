# Solec Finanzas — Progreso del proyecto

Cliente: Lizeth Solórzano Lecona
Marca del sitio: Solec Finanzas (solecfinanzas.com).
Comercial: $3,000 MXN año 1 ($1,000 diseño + $2,000 servicio anual) / $2,000 MXN año renovación.
Repo: https://github.com/george30510/solec-finanzas
Producción: https://liz-solec.netlify.app
Última actualización: 2026-10-04

> Este archivo es la **fuente de verdad** del estado técnico. Actualizarlo al cerrar cada sesión de trabajo (qué se hizo, qué se decidió, qué sigue). El doc "Solec Finanzas — Estado técnico" del proyecto Cuadrado Circular en Claude solo apunta aquí.

## Notas para Claude Code

- El sitio real vive en `site/` (Next.js 14 App Router + TypeScript). El demo estático viejo está en `legacy/index.html`, no se usa.
- Estilos: CSS custom properties en `site/app/globals.css` (no usar clases utilitarias de Tailwind aunque esté configurado). Cambios de paleta se hacen en `:root`.
- Fuentes: Fraunces (display) + Public Sans (cuerpo) vía `next/font/google`.
- El nombre correcto de la clienta es **Lizeth**, no Lizet.
- Referencia visual vigente: mockups de ChatGPT aprobados + diseño en Claude Design (artifact "Solec Finanzas — Home", `Main-Trimmed.dc.html` = home final de 10 secciones). Respetar esos, no el demo viejo.

## Flujo de trabajo con Netlify (importante)

- Repo conectado a Netlify con **deploy automático en cada push a `main`**.
- Jorge quiere **minimizar el número de deploys**: agrupar cambios en un solo commit/push.
- Probar en local (`npm run dev` en `site/`) antes de subir.
- **Config correcta en Netlify UI** (Project configuration → Developer settings → Build settings): Runtime = **Next.js**, Base directory = **site**, Build command y Publish directory en blanco. `netlify.toml` en la raíz tiene `base = "site"`.
- Historial del bug (4 oct 2026): el sitio nunca tuvo el Next.js Runtime instalado, por lo que Netlify servía "Published" pero con 404. Se corrigió activando el Runtime y poniendo Base directory = `site`.

## Estado actual

- **Home de 10 secciones implementado y en producción** (`site/app/page.tsx`): Hero → Tres Caminos (mini) → La Pregunta → Arquitectura Financiera → Tres Caminos completo → Filosofía → Recurso Gratuito → Sobre Lizeth (teaser) → Alianzas → Cierre.
- Paleta vigente: azul marino `#15314A` + blanco hueso `#FAF8F1` + verde `#2F6B4F` como acento (beige `#EFE8D8`/`#D9CFB8` de apoyo).
- Nav: Inicio · Personas y Familias · Patrimonio · Empresas · Arquitectura Financiera · Sobre Lizeth · botón "Conversemos" (hamburguesa en móvil; en local, lote 1).
- Fotos reales en `site/public/images/`: hero, Sobre Lizeth, La Pregunta (oficina), Empresas (equipo). **Faltan** las de las cards Personas y Familias y Patrimonio (hoy placeholders).
- Tras el deploy corregido, Jorge reportó ver errores en el sitio live. **Auditoría hecha el 4 oct 2026** (sitio live a 1280 y 390 px vs `Main-Trimmed.dc.html` y los mockups de `Imagenes/`). Lote 1 de correcciones **hecho en local, sin commit ni push** (ver "Sesión 4 oct 2026").
- Mockup del hero aprobado: `Imagenes/ChatGPT Image 18 sept 2026, 01_55_53 p.m..PNG` (foto horizontal a ancho completo, texto a la izquierda). Hoja de 14 secciones: `ChatGPT Image 17 sept 2026, 06_58_07 p.m..PNG`.

## Sesión 4 oct 2026 — auditoría y lote 1 (sin push)

**Hecho (solo en local, pendiente de revisar y push):**
- Hero rehecho como el mockup: foto horizontal `lizeth-solorzano-hero-tratada.jpg` a ancho completo con degradado claro a la izquierda; en móvil el texto va arriba y la foto debajo (4:3). Tagline en dos líneas.
- Nav: menú hamburguesa en móvil/tablet (< 1120 px) con `aria-expanded`, cierre con Escape y al navegar; añadido "Inicio"; nav compacto en móvil (sin subtítulo, 70 px de alto); links con área táctil mayor.
- Gutters: el `.container` dentro de `section/header/footer` ya no duplica el padding (en móvil el contenido medía 262 px; ahora 350 px). Aplica también a páginas internas.
- "Sobre Lizeth": foto 4:5 + título + 3 párrafos + botón (antes miniatura de 120 px).
- Alianzas: fila de nombres (Seguros Monterrey/New York Life, AXA, Sura, MAPFRE, Plan Seguro) sin logos, como `Main-Trimmed`. Las cifras de Gallup salieron del home (el contenido sigue abajo, en "Contenido disponible").
- Checklist: etiquetas asociadas (`htmlFor`/`id`), botón y campos deshabilitados con nota "Disponible muy pronto." (aún no hay PDF, backend ni aviso de privacidad).
- Títulos: el h2 de Arquitectura Financiera no tenía tamaño de fuente (se veía diminuto); numerales 01–05 con contraste legible; encabezado de "Una estrategia diferente…" alineado al grid.
- `scroll-margin-top` global para que el nav fijo no tape las anclas; foco visible (`:focus-visible`).
- Botones/CTAs en **verde** `--verde-cta:#0B5443` (nav, hero, "Conocer más" rellenos, "Conoce Arquitectura", "Sobre Lizeth", form, WhatsApp), como en los mockups. El azul marino queda para texto, hub del diagrama, cierre y footer. Para ajustar el tono, cambiar solo `--verde-cta` en `:root`.
- Íconos de línea propios (en `components/icons.tsx`) en los círculos de "La pregunta" (Ingresos, Protección, Patrimonio, Retiro, Legado) y en los 5 nodos del diagrama de Arquitectura Financiera (ahora pentágono con anillo punteado).

**Decidido:**
- Checklist deshabilitado hasta tener PDF, destino de datos y aviso de privacidad (fase aparte).
- Alianzas en texto, sin logos de terceros.
- "Perspectiva Financiera" fuera del nav hasta que exista la página.
- No quitar Tailwind en este lote: `@tailwind base` aporta el reset (preflight) del que depende todo el layout; quitarlo exige reemplazarlo por un reset propio y revisar todas las páginas.
- Los 3 "Conocer más" siguen yendo a `/contacto` (el ancla del diseño solo saltaría a la fila de arriba). Cambiar cuando existan las páginas internas.

**Sigue / por decidir:**
- Datos que faltan de Lizeth: URLs reales de Instagram/TikTok/Facebook (hoy `#`), número de WhatsApp (`/contacto` tiene `href="#"`), y páginas de Aviso de privacidad y Términos y condiciones (están en el mockup del footer).
- Favicon (hoy 404 en `/favicon.ico`).
- Vista previa local: `npm run dev` en `site/`. En el entorno de Claude no hay acceso a Google Fonts, así que la verificación de build usó las mismas fuentes desde npm.

## Dirección de marca (vigente)

- Marca personal al frente: el sitio lidera con el nombre y la foto de Lizeth.
- Toda su gama de servicios visible, organizada en tres segmentos: Personas y Familias, Patrimonio, Empresas.
- Cliente principal real: empresas que contratan seguros colectivos, pero la clienta quiere los tres segmentos visibles.
- La clienta pidió tonos más claros que los del demo original.

## Sitemap (ampliado)

Inicio, Personas y Familias, Patrimonio, Empresas, Arquitectura Financiera, Perspectiva Financiera (blog), Sobre Lizeth, Contacto. Más allá de las 4 páginas cotizadas originalmente (Inicio, Soluciones, Nosotros, Contacto).

- El contenido recortado del home (de 14 a 10 secciones) migra a las páginas que corresponden; no se elimina.
- La ruta vieja `/soluciones` sigue en el código: decidir si se elimina o redirige.
- Pendiente de decidir con Itsel: si las páginas adicionales entran en el alcance cotizado o se posicionan como upsell.

## Contenido disponible (del dossier ejecutivo — fuente de contenido, no de estilo)

- Metodología de 5 pasos del dossier: Diagnóstico → Análisis → Diseño de la estrategia → Implementación → Acompañamiento. (El home usa la versión de Arquitectura Financiera: Diagnóstico, Metas, Protección, Construcción, Proyección.)
- Red de aliados: New York Life Seguros Monterrey, AXA, Plan Seguro, Sura, Mapfre (mencionar en texto, sin logos de terceros).
- Estadística: Gallup Workplace Q12 Meta-Analysis (11th Edition, 2024) — +23% rentabilidad, +18% productividad, -78% ausentismo en organizaciones con equipos más comprometidos.

## Pendientes (por prioridad)

1. Revisar el lote 1 en local (`npm run dev`), aprobar y hacer un solo commit + push a `main`.
2. Regenerar en Gemini las 2 fotos faltantes en horizontal 4:3 (Familia, Patrimonio), con personas de rasgos mexicanos.
3. Confirmar que el home está aprobado para pedir el anticipo.
4. Construir páginas internas: Patrimonio, Empresas, Arquitectura Financiera, Perspectiva Financiera, Sobre Lizeth; portar Personas y Familias (ya diseñada en Claude Design).
5. Resolver el destino de `/soluciones`.
6. Reemplazar los CTAs temporales (`/contacto`, anclas) por las páginas reales.

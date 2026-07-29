# Solec Finanzas — Progreso del proyecto

Cliente: Lizeth Solórzano Lecona
Marca del sitio: Solec Finanzas (solecfinanzas.com) — marca corporativa, distinta de su marca personal "LS" (previsión financiera y beneficios corporativos), que no se usa en este sitio.
Comercial: $3,000 MXN año 1 ($1,000 diseño + $2,000 servicio anual) / $2,000 MXN año renovación.

## Estado actual

- **Paso 3 (demo de 1 página) — aprobado en dirección visual**, pendiente aprobación final de Lizeth y anticipo del 50%.
- Archivo: `solec-demo.html` (standalone, sin backend).

## Sistema de diseño (ya validado, no tocar sin razón)

- **Paleta**: blanco hueso `#FAF8F3`, beige cálido `#EDE6D6`, beige arena `#C9BBA0`, verde salvia `#6F8567`, verde pino `#2B3A2A`, tinta `#232821`. Sin dorado, sin morado/magenta de Cuadrado Circular.
- **Tipografía**: Fraunces (display/serif) + Public Sans (cuerpo). Versalitas trackeadas para eyebrows/labels.
- **Firma visual**: "el sendero" — línea SVG que se dibuja progresivamente con el scroll, con un punto que la recorre.
- **Otros elementos de marca**: numerales fantasma detrás de bloques de servicio, íconos de línea propios (no librería), animaciones reveal-on-scroll con stagger, ilustración de línea del Ángel de la Independencia + Torre New York Life (sin fotografía real en el demo).
- **Responsive**: en el hero, el bloque de color diagonal se vuelve sólido (sin diagonal) debajo de 760px para evitar que el texto quede mitad en verde mitad en blanco.

## Corrección pendiente

- El nombre correcto de la clienta es **Lizeth**, no Lizet — corregir en todo el copy del demo y del sitio completo.

## Insight clave del cliente (post-demo)

Su cliente principal real es **empresas que contratan seguros colectivos** (B2B), no individuos. El sitio debe proyectar autoridad corporativa; su semblanza/foto debe aparecer pero sin que el sitio se sienta de marca personal dirigida a clientes individuales.

## Contenido nuevo disponible (de su dossier ejecutivo — usar como fuente de contenido, NO de estilo visual)

- Metodología real de 5 pasos: Diagnóstico → Análisis → Diseño de la estrategia → Implementación → Acompañamiento.
- Red de aliados: New York Life Seguros Monterrey, AXA, Plan Seguro, Sura, Mapfre (mencionar en texto, no reproducir logos de terceros).
- Estadística citada: Gallup Workplace Q12 Meta-Analysis (11th Edition, 2024) — +23% rentabilidad, +18% productividad, -78% ausentismo en organizaciones con equipos más comprometidos.
- Foto profesional real de Lizeth disponible — usar en la página Nosotros, no en Inicio.

## Estructura propuesta para el sitio completo (en definición)

4 páginas cotizadas: **Inicio, Soluciones (renombrada de "Servicios"), Nosotros, Contacto.**

- Inicio: hero corporativo (problema/autoridad primero) → metodología (resumen) → preview Soluciones (Empresas primero, Personas después) → aliados + estadística Gallup → teaser de Lizeth con link a Nosotros → contacto.
- Soluciones: página madre + sub-páginas por ramo (empezando por Gastos Médicos Mayores, que la clienta pidió explorar a detalle), usando una plantilla reutilizable — no diseño custom por ramo. Da link compartible por ramo, ideal para prospección B2B, y SEO.
- Nosotros: metodología completa, filosofía de trabajo, red de aliados, semblanza y foto de Lizeth.
- Contacto: formulario, WhatsApp, oficina en Torre New York Life / Reforma.

**Pendiente de decidir con Itsel**: si las sub-páginas por ramo entran en el alcance ya cotizado o se posicionan como upsell (son páginas adicionales a las 4 originales, aunque el esfuerzo de diseño extra es bajo por ser plantilla).

## Siguiente paso

Cerrar el sitemap completo y arrancar la construcción del sitio en Next.js/Supabase, siguiendo el stack habitual de CC.

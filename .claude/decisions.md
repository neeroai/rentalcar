---
title: "Architecture Decisions - miami-car"
summary: "ADRs de decisiones técnicas y de producto para rentatelo.com"
version: "2.0"
date: "2026-03-10"
updated: "2026-03-26"
---

# Architecture Decisions

## ADR-001: specs/ como Research Areas (no features de código)

**Date**: 2026-03-10 | **Status**: Superseded por ADR-006

Usar specs/ para áreas de research de negocio. Superado cuando el repo pasó de research a implementación activa.

---

## ADR-002: research-map.md en lugar de codebase-map.md

**Date**: 2026-03-10 | **Status**: Superseded

Superado — el repo ahora tiene código real. Se mantiene research-map.md para referencia a docs/.

---

## ADR-003: Remover framer-motion → CSS @keyframes

**Date**: 2026-03-25 | **Status**: Accepted

### Context

framer-motion v12 causaba un dual-React-instance problem con Next.js 16 + `serverExternalPackages`. El prerender de `/_global-error` crasheaba con `TypeError: Cannot read properties of null (reading 'useContext')`.

### Decision

Eliminar toda dependencia de framer-motion. Reemplazar con CSS `@keyframes fade-up` en globals.css y clases `.animate-fade-up/d1/d2`. Usar `key={stepIndex}` en host-tools.tsx para replay de animación en remount.

### Rationale

- Zero nuevas dependencias
- Respeta `prefers-reduced-motion` via CSS
- Build limpio sin dual-React issue
- CSS animations son suficientes para micro-interactions de este scope

### Consequences

- No hay layout animations (no se necesitan en este MVP)
- `motion-ui.tsx` mantiene el nombre histórico pero ya no usa motion

---

## ADR-004: NODE_ENV=production para builds

**Date**: 2026-03-25 | **Status**: Accepted

### Context

El shell del desarrollador tiene `NODE_ENV=development` exportado. Next.js detecta esto y emite `⚠ You are using a non-standard "NODE_ENV" value` causando crashes en prerender.

### Decision

Siempre buildear con `NODE_ENV=production bun run build`. No modificar el shell global.

### Rationale

- El shell puede tener NODE_ENV por otros proyectos (Neero polyrepo)
- Prefijo en el comando es explícito y portable

---

## ADR-005: Unsplash para imágenes del MVP

**Date**: 2026-03-26 | **Status**: Accepted (temporal)

### Context

MVP necesita imágenes reales de autos y destinos para validar el diseño. Sin flota real de Fredy Lopez disponible aún.

### Decision

Usar Unsplash via `images.unsplash.com` (ya en `remotePatterns`). Fotos seleccionadas con temática Florida/Orlando (palmeras, autos, cielos tropicales). Verificar IDs activos antes de usar.

### Consequences

- **Positivo**: Cero costo, cero setup, calidad alta
- **Negativo**: No reflejan la flota real; deben reemplazarse en producción
- **Acción futura**: Reemplazar con fotos reales de la flota de Fredy + CDN propio

---

## ADR-006: Website implementado con mock data primero

**Date**: 2026-03-25 | **Status**: Accepted

### Context

El cliente (Fredy Lopez) necesita ver un demo funcional del producto antes de aprobar el backend completo. Construir Supabase + auth + pagos primero prolonga el time-to-demo.

### Decision

Implementar todas las páginas con `src/data/mock.ts` (Vehicle[] hardcodeado). Diseñar el schema de tipos en `src/lib/types.ts` para que la migración a Supabase sea mecánica (swap `vehicles` array → DB query).

### Rationale

- Demo en días, no semanas
- Valida UX antes de invertir en backend
- `Vehicle` type es el contrato entre mock y DB real

### Consequences

- Toda la lógica de negocio está en el cliente (no hay auth real, no hay pagos)
- El demo es suficiente para presentar a Fredy Lopez
- Migración a backend: cada `vehicles` import → Supabase query

---

## ADR-007: Fluid Typography con CSS clamp()

**Date**: 2026-03-26 | **Status**: Accepted

### Context

La tipografía usaba breakpoints estáticos (`text-4xl md:text-5xl`) causando saltos abruptos. El target (familias turistas, móvil-first) necesita legibilidad fluida.

### Decision

CSS custom properties en `:root` con `clamp()`: `--text-h1: clamp(2rem, 1.5rem + 2.5vw, 3.5rem)`. Utility classes `.text-fluid-h1/h2/h3/h4` aplicadas en SectionHeading, heroes, y CTAs.

### Rationale

- Escala suave entre 375px y 1440px sin JS
- Compatible con Tailwind v4 (CSS-first)
- Zero dependencias adicionales

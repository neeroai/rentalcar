---
title: "Session Log - miami-car"
version: "2.0"
updated: "2026-03-27"
---

# Session Log

## 2026-03-27 — Orlando asset alignment + default dev port

**Commit base**: `59e74d5` — repo con cambios locales adicionales no committeados

### Operaciones

| Operación | Archivo                          | Detalle                                                                 |
| --------- | -------------------------------- | ----------------------------------------------------------------------- |
| Added     | `src/data/assets.ts`             | Catálogo central de imágenes editoriales y de flota con metadata de origen |
| Modified  | `src/data/mock.ts`               | Flota mock alineada a Orlando: economy, compact-suv, minivan, three-row-suv, premium |
| Modified  | `src/lib/types.ts`               | `AssetImage` y categorías de vehículo actualizadas                      |
| Modified  | `app/page.tsx`                   | Home Orlando-first con imágenes y copy alineados al buyer LATAM         |
| Modified  | `app/search/page.tsx`            | Search con categorías nuevas y contexto Orlando                         |
| Modified  | `app/vehicle/[slug]/page.tsx`    | Detail con galerías basadas en `AssetImage[]`                           |
| Added     | `docs/image-sourcing-orlando.md` | Política de sourcing visual, licencias y prompts IA                     |
| Modified  | `.claude/status.md`              | Tracking actualizado con default local `3010`                           |
| Modified  | `.claude/codebase-map.md`        | Mapa operativo actualizado con assets y puerto local por defecto        |

### Defaults operativos

- Puerto local por defecto del repo: `3010`
- URL preferida: `http://127.0.0.1:3010`
- Evitar `3005` para este proyecto; ya generó cruces entre sesiones
- No matar listeners en `3000` sin confirmar que pertenecen a este repo

## 2026-03-26 — UI Enrichment + Fotos Florida/Orlando

**Commit**: `59e74d5` — feat(ui): enrich homepage with Unsplash images and fluid typography

### Operaciones

| Operación | Archivo                          | Detalle                                                                                                       |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Modified  | `app/globals.css`                | Fluid type tokens, .text-fluid-h1/h2/h3/h4, .bg-dots, .section-gradient-down, card hover lift, :focus-visible |
| Modified  | `src/components/motion-ui.tsx`   | HomeHeroIntro → full-width bg image (BMW + palmeras), overlay, white text                                     |
| Modified  | `app/page.tsx`                   | Experience cards → image cards; How-it-works → step images; Trust signals → gradient + icons; Make → monogram |
| Modified  | `app/booking/confirmed/page.tsx` | Vehicle thumbnail aspect-16/9 + host avatar 24×24                                                             |
| Modified  | `app/how-it-works/page.tsx`      | Hero bg image, step images, CTA bg image (Miami skyline)                                                      |
| Modified  | `src/components/site-chrome.tsx` | SectionHeading h2 → .text-fluid-h2                                                                            |
| Moved     | `media/` → `docs/`               | proposals/ y orlando/ ahora en docs/                                                                          |

### Fotos Unsplash usadas

| ID                           | Lugar                                  |
| ---------------------------- | -------------------------------------- |
| `1555215695-3004980ad54e`    | Hero homepage (BMW + palmeras FL)      |
| `1514214246283-d427a95c5d2f` | Browse destino Orlando                 |
| `1506905925346-21bda4d32df4` | Browse destino Miami                   |
| `1494976388531-d1058494cdd8` | Hero how-it-works                      |
| `1568605117036-5fe5e7bab0b7` | Step 1: Elige tu auto                  |
| `1544636331-e26879cd4d9b`    | Step 2: Conecta con host               |
| `1449965408869-eaa3f722e40d` | Step 3: Disfruta el viaje              |
| `1533106497176-45ae19e68ba2` | CTA final how-it-works (Miami skyline) |
| `1519641471654-76ce0107ad1b` | Experience: Familias                   |
| `1552519507-da3b142c6e3d`    | Experience: Ejecutivo                  |
| `1502877338535-766e1452684a` | Experience: Convertibles               |
| `1549924231-f129b911e442`    | Experience: Económico                  |

---

## 2026-03-25 — Website MVP + Build Fix

**Commits**: `4c8b56d` — feat: initial website setup for Miami/Orlando car rental

### Decisiones clave

- framer-motion removido → CSS @keyframes (ADR-003)
- NODE_ENV=production requerido para builds (ADR-004)
- `app/global-error.tsx` creado como minimal "use client" sin hooks
- Mock data en `src/data/mock.ts` como fuente de verdad temporal (ADR-006)

---

## 2026-03-22 — Research Orlando Completo

14 archivos, ~5,400 líneas. Ahora en `docs/orlando/`.
Hallazgo clave: Orlando = #1 mercado car rental mundial (GOAA), 75.33M visitantes 2024.

---

## 2026-03-10 — Setup Inicial del Repo

Propuesta comercial, estructura base, tracking files.
Cliente: Fredy Lopez — aprobó propuesta Neero $8,500 vs TENET $10,000.

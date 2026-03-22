---
title: "Codebase Map"
updated: "2026-03-22 05:00"
---

# Codebase Map

One-shot orientation for this repo during setup phase.

---

## Primary Data Flow

Business context and references
-> `media/` (commercial and visual source material)
-> `specs/` (research drafts and market analysis)
-> project config files at repo root (website setup)
-> future implementation in `app/`, `src/`, and `components/`

---

## Module Map

| Module | Path | Purpose | Entry File |
| ------ | ---- | ------- | ---------- |
| website-setup | `/` | Base project configuration | `package.json` |
| agent-context | `.claude/` | Session context and rules | `CLAUDE.md` |
| commercial-media | `media/` | Reference assets and proposals | `media/proposals/00-miami-car-rental-overview.md` |
| research-specs | `specs/` | Market and business research | `specs/00-inventario-general.md` |

---

## Shared Infrastructure

| Layer | Path | Purpose |
| ----- | ---- | ------- |
| Package manager | `package.json` | Bun scripts and dependencies |
| Type system | `tsconfig.json` | TypeScript compiler rules |
| Formatting | `biome.json` | Lint and format policy |
| Framework | `next.config.ts` | Next.js runtime config |
| Styling | `tailwind.config.ts` | Tailwind content scanning |
| Deployment | `vercel.json` | Vercel build settings |

---

## Specs Quick Reference

| Area | File |
| ---- | ---- |
| Inventario | `specs/00-inventario-general.md` |
| Mercado Miami | `specs/01-mercado-miami.md` |
| Competencia | `specs/03-competencia.md` |
| Precios | `specs/05-estrategia-precios.md` |
| Go-to-market | `specs/08-go-to-market.md` |

Maintenance: update when implementation folders are added or the repo stops being setup-only.

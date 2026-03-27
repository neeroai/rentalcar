---
title: "Project Status - miami-car"
date: "2026-03-10"
updated: "2026-03-27"
---

# Project Status — 2026-03-27

## Overview

| Area                    | Estado | Detalle                                              |
| ----------------------- | ------ | ---------------------------------------------------- |
| Propuesta comercial     | DONE   | Aprobada por Fredy Lopez                             |
| Research Miami          | DONE   | 12 specs completados en docs/                        |
| Research Orlando        | DONE   | 14 specs completados en docs/orlando/                |
| Website MVP (demo)      | DONE   | Next.js 16, mock data, deploy Vercel                 |
| UI enrichment           | DONE   | Orlando-first image system, warm palette, asset catalog |
| Backend / DB real       | TODO   | Supabase, auth, reservas reales                      |
| Pagos                   | TODO   | Stripe integration                                   |
| WhatsApp host messaging | TODO   | Twilio/Meta API                                      |

## Current Phase

**Website demo implementado.** Stack completo con mock data alineado a Orlando/LATAM. El default local para dev es `http://127.0.0.1:3010`; evitar `3005` para no cruzar sesiones.

## Last Commit

`59e74d5` — feat(ui): enrich homepage with Unsplash images and fluid typography (2026-03-26)

Nota: el working tree ya contiene cambios locales posteriores para alinear imágenes, categorías y mock data Orlando-first; esos cambios todavía no están committeados.

## Milestones Completados

| Milestone                                       | Fecha      |
| ----------------------------------------------- | ---------- |
| Propuesta comercial (8 docs proposals/)         | 2026-03-07 |
| Setup repo base: CLAUDE.md, config, tooling     | 2026-03-10 |
| Research Miami completo (12 specs)              | 2026-03-22 |
| Research Orlando completo (14 specs)            | 2026-03-22 |
| Website MVP: todas las páginas con mock data    | 2026-03-25 |
| Fix build: framer-motion out, CSS animations in | 2026-03-25 |
| UI enrichment: Unsplash, fluid type, gradients  | 2026-03-26 |
| Orlando-first assets + mock fleet alignment     | 2026-03-27 |

## Upcoming Milestones

- Supabase schema + auth (vehicles, hosts, bookings, users)
- Search con filtros reales (DB queries)
- Checkout + Stripe
- Host dashboard funcional
- WhatsApp notifications para hosts
- Deploy producción con dominio rentatelo.com

## Risks

| Riesgo                          | Severidad | Mitigación                                    |
| ------------------------------- | --------- | --------------------------------------------- |
| Mock data no refleja data real  | Medium    | Schema diseñado para migrar sin friction      |
| SEO sin SSG (todo dinámico)     | Medium    | Evaluar ISR/SSG para páginas de vehículos     |
| Stock placeholders aún no definitivos | Medium    | Curar assets locales o reemplazar con fotos reales de flota |

## Stack

| Layer      | Tech                                                         |
| ---------- | ------------------------------------------------------------ |
| Framework  | Next.js 16.2.1 (Turbopack, App Router)                       |
| UI         | React 19, Tailwind CSS v4, lucide-react                      |
| Language   | TypeScript strict                                            |
| Runtime    | Bun                                                          |
| Deploy     | Vercel (neeroai/rentalcar)                                   |
| Animations | CSS @keyframes (framer-motion removed)                       |
| Images     | next/image + asset metadata curado (`src/data/assets.ts`)    |
| i18n       | ES/EN via `src/i18n/dictionaries.ts`                         |
| Data       | Mock (`src/data/mock.ts`) + catálogo visual (`src/data/assets.ts`) |
| Local dev  | `http://127.0.0.1:3010` por defecto; evitar `3005`           |

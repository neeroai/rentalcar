---
title: "Task List - miami-car"
date: "2026-03-10"
updated: "2026-03-26"
---

# Task List

## Completado

- [x] Propuesta comercial Fredy Lopez (8 docs) (2026-03-07)
- [x] Setup repo: CLAUDE.md, AGENTS.md, config, tooling (2026-03-10)
- [x] Research Miami completo (12 specs en docs/) (2026-03-22)
- [x] Research Orlando completo (14 specs en docs/orlando/) (2026-03-22)
- [x] Website MVP: todas las rutas con mock data (2026-03-25)
- [x] Fix prerender crash: `/_global-error`, `/_not-found` (2026-03-25)
- [x] Remover framer-motion → CSS @keyframes animations (2026-03-25)
- [x] UI enrichment: hero Unsplash, experience cards con foto (2026-03-26)
- [x] UI enrichment: how-it-works step images + CTA background (2026-03-26)
- [x] Fluid typography: clamp() tokens + .text-fluid-h1/h2/h3/h4 (2026-03-26)
- [x] Trust signals: gradient + icons; browse-by-make monogram (2026-03-26)
- [x] Booking confirmed: vehicle thumbnail + host avatar (2026-03-26)
- [x] Reemplazar fotos desierto por fotos Florida/Orlando (2026-03-26)
- [x] Mover media/ → docs/ (2026-03-26)

## Próximo — Backend Real

- [ ] Diseñar schema Supabase: `vehicles`, `hosts`, `bookings`, `users`
- [ ] Auth: Supabase Auth (email + magic link)
- [ ] Search: queries reales con filtros (ciudad, fechas, categoría, precio)
- [ ] Vehicle detail: datos reales desde DB
- [ ] Checkout + Stripe payment intent
- [ ] Host dashboard: mis vehículos, reservas, earnings
- [ ] WhatsApp notifications para hosts (Twilio/Meta API)

## Próximo — Contenido Real

- [ ] Reemplazar mock vehicles con flota real de Fredy Lopez
- [ ] Fotos reales de la flota (no Unsplash)
- [ ] Precios reales basados en research Orlando (ver docs/orlando/03-inteligencia-precios.md)
- [ ] Hosts reales: Fredy + equipo

## Próximo — Deploy Producción

- [ ] Dominio rentatelo.com
- [ ] Variables de entorno en Vercel (Supabase keys, Stripe keys)
- [ ] Analytics (Vercel Analytics o Plausible)
- [ ] SEO: metadata real, sitemap dinámico, OG images

## Deuda Técnica

- [ ] `site-chrome.tsx` mezcla server y client — separar en server/client boundaries
- [ ] Imágenes Unsplash en producción → reemplazar con CDN propio o Cloudinary
- [ ] Agregar dominio de producción a `allowedDevOrigins` en next.config.ts

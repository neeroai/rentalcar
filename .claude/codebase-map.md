---
title: "Codebase Map"
updated: "2026-03-27"
---

# Codebase Map

Orientación rápida para Next.js 16 App Router — demo Orlando-first para rentatelo.com.

---

## Primary Data Flow

```
src/data/assets.ts (editorial assets + vehicle galleries)
  → src/data/mock.ts (Vehicle[])
  → app/page.tsx (homepage, featured)
  → app/search/page.tsx (filtered listings)
  → app/vehicle/[slug]/page.tsx (detail)
  → app/checkout/page.tsx → app/booking/confirmed/page.tsx
```

---

## App Router — Páginas

| Route                 | File                              | Descripción                            |
| --------------------- | --------------------------------- | -------------------------------------- |
| `/`                   | `app/page.tsx`                    | Homepage: hero, listings, how-it-works |
| `/search`             | `app/search/page.tsx`             | Search + filtros + grid + contexto Orlando |
| `/vehicle/[slug]`     | `app/vehicle/[slug]/page.tsx`     | Vehicle detail con galerías y checkout |
| `/checkout`           | `app/checkout/page.tsx`           | Checkout con addons y resumen          |
| `/booking/confirmed`  | `app/booking/confirmed/page.tsx`  | Confirmación con thumbnail y host      |
| `/how-it-works`       | `app/how-it-works/page.tsx`       | Marketing page: hero img + steps + CTA |
| `/host`               | `app/host/page.tsx`               | Host landing con earnings calculator   |
| `/host/list-your-car` | `app/host/list-your-car/page.tsx` | Host onboarding wizard                 |
| `/account/trips`      | `app/account/trips/page.tsx`      | Viajes del usuario                     |
| `/account/messages`   | `app/account/messages/page.tsx`   | Inbox de mensajes                      |
| `/account/wishlist`   | `app/account/wishlist/page.tsx`   | Wishlist del usuario                   |
| `/_not-found`         | `app/not-found.tsx`               | 404 page                               |
| `/_global-error`      | `app/global-error.tsx`            | Error boundary (client, own html/body) |

---

## Componentes — src/components/

| Archivo                    | Exports principales                                                                                                                   | Notas                             |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `motion-ui.tsx`            | `HomeHeroIntro`, `VehicleCard`                                                                                                        | "use client", CSS animations only |
| `site-chrome.tsx`          | `SiteHeader`, `SiteFooter`, `SearchHeroForm`, `SectionHeading`, `PageIntro`, `ReviewHighlight`, `BookingSummaryStrip`, `AccountShell` | Mezcla server+client              |
| `host-tools.tsx`           | `EarningsCalculator`, `HostOnboardingWizard`                                                                                          | "use client", wizard mock         |
| `locale-toggle.tsx`        | `LocaleToggle`                                                                                                                        | "use client", cookie-based        |
| `mobile-filter-drawer.tsx` | `MobileFilterDrawer`                                                                                                                  | "use client", search filters      |

---

## Data / Types / Utils

| Path                       | Descripción                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| `src/data/assets.ts`       | Catálogo de imágenes editoriales y de flota con `src`, `alt` y metadata     |
| `src/data/mock.ts`         | Array `vehicles: Vehicle[]` — mock data Orlando-first                       |
| `src/lib/types.ts`         | `Vehicle`, `AssetImage`, `Host`, `Trip`, `MessageThread`, `SearchFilters`   |
| `src/lib/utils.ts`         | `formatCurrency`, `createQueryString`, `getVehicleBySlug`                   |
| `src/lib/i18n.ts`          | `getLocale()`, `getDictionary(locale)`                                      |
| `src/i18n/dictionaries.ts` | Strings ES/EN para toda la UI                                               |

---

## Styling — app/globals.css

| Sección           | Contenido                                                   |
| ----------------- | ----------------------------------------------------------- |
| `:root` tokens    | Colores, sombras, `--text-h1..h4` clamp() fluid type tokens |
| Layout            | `.page-grid` (max-w-86rem, padding-inline)                  |
| Cards             | `.card`, `.card-alt` con hover lift `translateY(-2px)`      |
| Tipografía fluida | `.text-fluid-h1/h2/h3/h4` usando var(--text-\*)             |
| Backgrounds       | `.bg-dots` (radial gradient), `.section-gradient-down`      |
| Botones           | `.btn-primary`, `.btn-success`, `.btn-outline`              |
| Animaciones       | `@keyframes fade-up`, `.animate-fade-up/d1/d2`              |
| Focus             | `:focus-visible` global ring                                |
| Reduced motion    | `prefers-reduced-motion` desactiva todas las animaciones    |

---

## Config Files

| Archivo          | Notas clave                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------ |
| `next.config.ts` | `typedRoutes`, `optimizePackageImports: lucide-react`, remotePatterns para imágenes remotas |
| `app/layout.tsx` | DM Sans via `next/font/google`, `--font-dm-sans` CSS var                                  |
| `biome.json`     | Lint + format (no eslint/prettier)                                                         |
| `vercel.json`    | Deploy settings                                                                            |

---

## Docs de Referencia

| Path              | Contenido                                             |
| ----------------- | ----------------------------------------------------- |
| `docs/proposals/` | 8 docs comerciales para Fredy Lopez (READ-ONLY)       |
| `docs/orlando/`   | 14 specs de research Orlando (completados 2026-03-22) |
| `docs/`           | `spec.md`, `plan.md`, `decisions.md`, `image-sourcing-orlando.md` |

---

## Design System (Quick Ref)

| Token         | Valor     |
| ------------- | --------- |
| Primary       | `#168F8A` |
| Primary hover | `#11706D` |
| Primary light | `#DFF5F3` |
| Primary soft  | `#EEF8F7` |
| Secondary     | `#F0B576` |
| Foreground    | `#1F2724` |
| Muted         | `#6D756F` |
| Border        | `#DED3C2` |
| Font          | DM Sans   |

---

## Notas de Arquitectura

- **No hay backend real** — todo usa `src/data/mock.ts`
- **Locale**: cookie `locale` (es|en), detectada server-side en `getLocale()`
- **Images**: `next/image` + catálogo `src/data/assets.ts`; evitar URLs sueltas en páginas
- **Animations**: CSS puro — framer-motion fue removido completamente (dual-React issue)
- **Build**: `NODE_ENV=production bun run build` (NODE_ENV=development en shell rompe el build)
- **Dev local**: usar `bun run dev -- --hostname 127.0.0.1 --port 3010`

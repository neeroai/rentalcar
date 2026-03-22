# CLAUDE.md - miami-car

Version: 2.0 | Date: 2026-03-22 | Updated: 2026-03-22

---

## SESSION_START (MANDATORY — read in order)

| Step | Action |
| ---- | ------ |
| 1 | Read `.claude/codebase-map.md` |
| 2 | Read `.claude/status.md` L1-30 |
| 3 | Read `AGENTS.md` |
| 4 | STOP — do not explore broadly unless task requires it |

---

## WHAT/WHY/HOW

| Dimension | Content |
| --------- | ------- |
| WHAT | Setup base de website para car rental en Miami |
| WHY | Preparar el repo para futura implementacion comercial de Neero SAS |
| HOW | Configuracion inicial de stack, tooling, deploy y contexto operativo |

---

## Overview

| Atributo | Valor |
| -------- | ----- |
| Cliente | Fredy Lopez |
| Tipo | Website setup |
| Fase | Configuracion inicial, sin desarrollo |
| Stack objetivo | Next.js 15, React 19, TypeScript, Bun |
| Deploy objetivo | Vercel |

---

## Estructura del Repo

```text
miami-car/
├── media/               <- Referencias comerciales y visuales
│   └── proposals/       <- Material comercial versionado
├── specs/               <- Research previo como contexto
├── .claude/             <- Tracking y contexto operativo
├── package.json         <- Scripts y dependencias base
├── tsconfig.json        <- TypeScript
├── biome.json           <- Lint y formatting
├── next.config.ts       <- Configuracion Next.js
├── tailwind.config.ts   <- Configuracion Tailwind
├── postcss.config.js    <- Plugin Tailwind/PostCSS
└── vercel.json          <- Configuracion de despliegue
```

---

## Working Rules

- No desarrollar producto en esta fase.
- Mantener `media/` y `specs/` como contexto de referencia.
- No exponer secretos ni crear `.env` reales.
- Si se va a modificar material comercial existente, pedir aprobacion explicita.

---

## Current Objective

Dejar el repo listo para:

- inicializacion en GitHub
- primer commit de configuracion
- futura implementacion del website sin rehacer setup base

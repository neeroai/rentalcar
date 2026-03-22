# AGENTS.md - miami-car

Version: 2.0 | Date: 2026-03-22

## 0) SESSION_START (do this first — always)

| Step | Action |
| ---- | ------ |
| 1 | Read `.claude/codebase-map.md` |
| 2 | Read `.claude/status.md` L1-30 |
| 3 | Read `CLAUDE.md` |

STOP: no explorar mas archivos sin una tarea concreta.

## Tipo de Repo

Website de car rental en fase de configuracion inicial.

No hay implementacion de producto todavia, pero el repo ya esta preparado como proyecto de codigo con configuracion base para Next.js, React, TypeScript y Bun.

| Directorio / Archivo | Descripcion |
| -------------------- | ----------- |
| `media/` | Material comercial y visual de referencia |
| `media/proposals/` | Propuestas comerciales versionadas, tratar como READ-ONLY |
| `specs/` | Research previo y drafts internos |
| `.claude/` | Tracking y contexto para agentes |
| archivos root config | Setup base del website |

## Convenciones

| Convencion | Detalle |
| ---------- | ------- |
| `media/proposals/` READ-ONLY | No modificar sin aprobacion explicita del usuario |
| Specs en draft | No completar research hasta confirmacion del cliente |
| Citation-first | Cada hallazgo de research debe tener fuente + URL + fecha |
| Setup-first | En esta fase solo configuracion, no desarrollo del sitio |

## Pitfalls

| Pitfall | Solucion |
| ------- | -------- |
| Inventar datos de mercado | Solo datos con URL + fecha. Sin fuente: placeholder explicito |
| Modificar material comercial | Pedir aprobacion y tratar `media/proposals/` como referencia protegida |
| Mezclar research con source code | `media/` y `specs/` son contexto; el website vive en la raiz y futuras carpetas de app |
| Asumir que ya existe implementacion | Verificar primero; hoy solo hay setup base |

## Contexto de Negocio

| Campo | Valor |
| ----- | ----- |
| Cliente | Fredy Lopez |
| Ubicacion | Miami, FL |
| Competidor | TENET Digital Services ($10,000) |
| Propuesta | Neero SAS ($8,500) |
| Ahorro cliente | $1,500 inicial + $25/mes operativo |
| Diferenciador | WhatsApp Flows nativo, sin Twilio, AI-Ready |

Referencia: `media/proposals/00-miami-car-rental-overview.md`

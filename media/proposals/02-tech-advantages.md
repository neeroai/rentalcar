---
title: "Ventajas Tecnicas - Neero vs TENET"
date: "2026-03-07"
updated: "2026-03-07"
status: "approved"
version: "1.0"
---

# Ventajas Tecnicas: Neero vs TENET Digital Services

## Comparativa Completa por Componente

| Componente             | TENET propone                 | Neero tiene                                                        | Ventaja Neero                                            |
| ---------------------- | ----------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------- |
| WhatsApp notifications | Twilio ($20-40/mes)           | WhatsApp Business API v23 en produccion (migue.ai, cobru.ai)       | Costo $0 mensajes de servicio desde Nov 2024; API propia |
| WhatsApp Flows         | No contemplado                | WhatsApp Flows v6 en produccion (cobru.ai)                         | Reserva nativa en WhatsApp sin abrir navegador           |
| CMS admin              | Payload CMS ($1,500 dev cost) | Supabase Admin + Next.js dashboard (drad, tip2025)                 | Sin licencia CMS, sin overhead, CRUD nativo              |
| Calendario             | Desarrollo custom ($2,500)    | Google Calendar integration produccion (migue.ai) + cron reminders | Codigo existente, semanas de ahorro en desarrollo        |
| Email                  | Resend generico               | Resend configurado en proyectos Neero                              | Mismo costo, configuracion lista                         |
| Database               | Supabase                      | Supabase produccion, schemas y patrones RLS probados               | Mismo costo, patrones de seguridad ya implementados      |
| Admin dashboard        | Desarrollo desde cero         | Patrones drad + tip2025: data tables, filtros, RBAC, exports       | Reutilizacion directa de componentes verificados         |
| Multi-language         | Desarrollo desde cero         | next-intl implementado en proyectos Neero                          | Patron establecido, sin curva de aprendizaje             |
| Auth admin             | Por definir                   | NextAuth.js 5 + Supabase Auth (tip2025)                            | RBAC probado en produccion                               |
| Deploy                 | Vercel                        | Vercel (standard Neero)                                            | Mismo                                                    |
| AI-Ready               | No                            | Vercel AI SDK 5.0, OpenAI, Anthropic listos                        | Diferenciador Fase 2: asistente conversacional           |

---

## Impacto en Costo Operativo Mensual

| Servicio             | TENET (estimado) | Neero | Diferencia  |
| -------------------- | ---------------- | ----- | ----------- |
| Hosting (Vercel Pro) | $20              | $20   | $0          |
| Supabase Pro         | $25              | $25   | $0          |
| WhatsApp (Twilio)    | $20-40           | $0    | -$20 a -$40 |
| Email (Resend)       | $10              | $10   | $0          |
| Dominio + SSL        | $5               | $5    | $0          |
| Total mensual        | ~$80-100         | ~$60  | -$20 a -$40 |

> Ahorro WhatsApp: mensajes de servicio (confirmaciones, recordatorios) son GRATIS desde noviembre 2024 con WhatsApp Business API directa. Twilio cobra por cada mensaje.

---

## Proyectos Neero con Codigo Reutilizable

| Proyecto | Componente                               | Archivo de referencia                   |
| -------- | ---------------------------------------- | --------------------------------------- |
| migue.ai | WhatsApp client, webhooks, templates     | `src/shared/infra/whatsapp/`            |
| migue.ai | Google Calendar sync                     | `src/shared/infra/google/calendar.ts`   |
| migue.ai | Cron reminders (24h antes)               | `app/api/cron/check-reminders/route.ts` |
| cobru.ai | WhatsApp Flows v6 (formularios nativos)  | `lib/whatsapp/flows/`                   |
| drad     | Dashboard: data tables, filtros, exports | `src/components/`                       |
| tip2025  | Admin RBAC, Supabase Auth                | `specs/` + auth modules                 |

---

## Por que Sin Twilio

TENET propone usar Twilio como capa intermedia para WhatsApp. Esto implica:

| Item                    | Twilio                      | WhatsApp Business API Directa (Neero) |
| ----------------------- | --------------------------- | ------------------------------------- |
| Costo mensajes servicio | $0.005 - $0.015 por mensaje | $0 (gratis desde Nov 2024)            |
| Dependencia             | Intermediario adicional     | API directa de Meta                   |
| Latencia                | Mayor (doble hop)           | Menor (directo)                       |
| WhatsApp Flows          | No soportado                | Soporte nativo                        |
| Mantenimiento           | 2 APIs que mantener         | 1 API                                 |

---

## Por que Sin Payload CMS

TENET incluye Payload CMS para el panel admin ($1,500 de costo de desarrollo).

| Item              | Payload CMS                          | Supabase + Next.js Admin (Neero)       |
| ----------------- | ------------------------------------ | -------------------------------------- |
| Costo licencia    | Open source pero custom ($1,500 dev) | $0 adicional                           |
| Overhead          | Sistema CMS separado                 | Admin nativo en mismo proyecto         |
| Curva aprendizaje | Alta (sistema propio)                | Baja (Next.js + Supabase ya conocidos) |
| Reutilizacion     | Ninguna desde proyectos Neero        | 100% patrones drad/tip2025             |
| Flexibilidad      | Limitada al CMS                      | Total (codigo propio)                  |

---

## Diferenciadores Exclusivos Neero

| Diferenciador        | Descripcion                                                     | Impacto en negocio                               |
| -------------------- | --------------------------------------------------------------- | ------------------------------------------------ |
| WhatsApp Flows (R18) | Formulario de reserva nativo en WhatsApp sin salir de la app    | Conversion mas alta; menos friccion para cliente |
| AI-Ready stack       | Vercel AI SDK 5.0 listo para asistente conversacional en Fase 2 | Escalabilidad futura sin reescritura             |
| Codigo en produccion | Integraciones probadas en 5+ proyectos reales, no prototipadas  | Menor riesgo de entrega                          |
| 1 semana mas rapido  | Reutilizacion directa reduce tiempo de desarrollo               | Go-live anticipado                               |

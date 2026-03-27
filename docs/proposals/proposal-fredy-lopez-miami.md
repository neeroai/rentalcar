---
title: "Propuesta Comercial - Plataforma de Reservas para Renta de Vehiculos"
client: "Fredy Lopez"
location: "Miami, FL"
date: "2026-03-07"
status: "draft"
version: "1.0"
owner: "Neero SAS"
confidential: true
---

# Propuesta Comercial: Plataforma de Reservas — Renta de Vehiculos Miami

**Preparada por:** Neero SAS para Fredy Lopez — Miami, FL — 2026-03-07

> Documento confidencial. No distribuir sin autorizacion de Neero SAS.

---

## 1. Resumen Ejecutivo

| Campo               | Detalle                                                           |
| ------------------- | ----------------------------------------------------------------- |
| Cliente             | Fredy Lopez — Miami, FL                                           |
| Problema            | Reservas manuales por WhatsApp; sin disponibilidad en tiempo real |
| Solucion            | Plataforma web + WhatsApp Flows + panel admin operativo           |
| Competidor evaluado | TENET Digital Services — $10,000 — 6 semanas                      |
| Propuesta Neero     | **$8,500** — 4-5 semanas — con mayor scope (R18 incluido)         |
| Ahorro primer ano   | **$1,740–$1,980** vs TENET (inversion + operativo)                |
| ROI primer ano      | **+73%** — payback en **7 meses**                                 |
| Timeline            | **5 semanas** (1 semana menos que TENET)                          |
| Diferenciador clave | Codigo en produccion en 5+ proyectos reales; sin Twilio; sin CMS  |

---

## 2. El Problema

El modelo actual de renta de vehiculos en Miami depende de:

| Dolor actual                      | Impacto en el negocio                                      |
| --------------------------------- | ---------------------------------------------------------- |
| Reservas manuales por WhatsApp    | Errores, doble-booking, tiempo operativo perdido           |
| Sin disponibilidad en tiempo real | Cliente llama para consultar; equipo responde manualmente  |
| Sin confirmaciones automaticas    | Cliente sin certeza; equipo sin trazabilidad               |
| Sin panel admin centralizado      | Informacion dispersa; entregas del dia sin vista unificada |
| Sin reportes exportables          | Decision ciega sin datos de ocupacion ni ingresos          |
| Gestion de flota fuera de sistema | Mantenimiento y bloqueos coordinados por mensajeria        |

> Un sistema de reservas online reduce entre 2 y 4 horas de gestion manual por dia en operaciones de tamano similar.

---

## 3. La Solucion Propuesta

Plataforma integral en 4 modulos:

| Modulo              | Que hace para el negocio                                                          |
| ------------------- | --------------------------------------------------------------------------------- |
| Sitio web publico   | Catalogo con fotos, precios, disponibilidad real; 4 idiomas (ES/EN/PT/FR)         |
| Sistema de reservas | Formulario web + WhatsApp Flows (reserva sin salir de WhatsApp)                   |
| Notificaciones      | Cliente y equipo reciben alertas automaticas (confirmacion, recordatorio, pickup) |
| Panel admin         | Flota, reservas, bloqueos, entregas del dia, exportacion CSV — sin desarrollador  |

---

## 4. Por Que Neero Gana

### Codigo en Produccion, No Promesas

| Proyecto | Componente reutilizado para este proyecto                  |
| -------- | ---------------------------------------------------------- |
| migue.ai | WhatsApp Business API v23, Google Calendar, cron reminders |
| cobru.ai | WhatsApp Flows v6 (formulario nativo en WhatsApp)          |
| drad     | Dashboard admin: data tables, filtros, exportacion         |
| tip2025  | RBAC, Supabase Auth, admin CRUD                            |

Estas integraciones estan en produccion. No son prototipos.

### Neero vs TENET: Comparativa Directa

| Componente             | TENET ($10,000)                | Neero ($8,500)                                          | Ventaja Neero                            |
| ---------------------- | ------------------------------ | ------------------------------------------------------- | ---------------------------------------- |
| WhatsApp notifications | Twilio ($20-40/mes)            | WhatsApp Business API directa — $0 mensajes de servicio | Ahorro $240-480/ano                      |
| WhatsApp Flows         | No incluido                    | Incluido (cobru.ai en produccion)                       | Reserva nativa en WhatsApp sin abrir web |
| Panel admin            | Payload CMS ($1,500 adicional) | Supabase + Next.js admin nativo (drad/tip2025)          | Sin licencias, sin overhead de CMS       |
| Timeline               | 6 semanas                      | 4-5 semanas                                             | 1 semana menos = go-live anticipado      |
| AI-Ready               | No                             | Vercel AI SDK 5.0 listo para Fase 2                     | Escalabilidad sin reescritura            |

> La semana ganada no es estimacion. Es codigo existente que no se escribe desde cero.

---

## 5. Alcance MVP — Requerimientos R1-R18

| ID  | Requerimiento                                                                | Prioridad | Modulo         |
| --- | ---------------------------------------------------------------------------- | --------- | -------------- |
| R1  | Sitio responsive multi-idioma (ES, EN, PT, FR)                               | MUST      | Sitio publico  |
| R2  | SEO: meta tags, sitemap, structured data                                     | MUST      | Sitio publico  |
| R3  | Catalogo: fotos, ficha tecnica, precios, filtros                             | MUST      | Sitio publico  |
| R4  | Calendario con disponibilidad real en tiempo real                            | MUST      | Reservas       |
| R5  | Bloqueo automatico de fechas al confirmar reserva                            | MUST      | Reservas       |
| R6  | Formulario: fecha/hora, aerolinea, vuelo, terminal, WhatsApp                 | MUST      | Reservas       |
| R7  | Notificaciones al cliente: confirmacion, recordatorio 24h, pickup            | MUST      | Notificaciones |
| R8  | Notificaciones al equipo: nueva reserva, resumen diario 7am, alerta 2h antes | MUST      | Notificaciones |
| R9  | Admin: lista reservas proximas/activas/completadas                           | MUST      | Panel admin    |
| R10 | Gestion de flota: agregar, editar, pausar vehiculos                          | MUST      | Panel admin    |
| R11 | Bloqueo manual de fechas (mantenimiento, offline)                            | MUST      | Panel admin    |
| R12 | Dashboard "Entregas de hoy" con datos de vuelo                               | MUST      | Panel admin    |
| R13 | Exportar reportes CSV por rango de fechas                                    | MUST      | Panel admin    |
| R14 | Editar precios y descripciones sin desarrollador                             | MUST      | Panel admin    |
| R15 | Botones "Reservar por WhatsApp" con mensaje prellenado                       | SHOULD    | Sitio publico  |
| R16 | Testimonios, seguros, politicas de renta                                     | SHOULD    | Sitio publico  |
| R17 | Call-to-actions estrategicos para conversion                                 | SHOULD    | Sitio publico  |
| R18 | WhatsApp Flows: formulario de reserva nativo en WhatsApp                     | SHOULD    | Reservas       |

> R18 es exclusivo Neero. TENET no lo contempla.

---

## 6. Stack Tecnico (Version Ejecutiva)

| Capa                 | Tecnologia               | Fuente de reutilizacion             |
| -------------------- | ------------------------ | ----------------------------------- |
| Framework            | Next.js 15 + React 19    | Todos los proyectos Neero           |
| Base de datos        | Supabase PostgreSQL      | migue.ai, cobru.ai, tip2025         |
| Autenticacion admin  | Supabase Auth + NextAuth | tip2025                             |
| WhatsApp             | Business API v23 + Flows | migue.ai (v23), cobru.ai (Flows v6) |
| Email                | Resend                   | Proyectos Neero                     |
| Cron jobs            | Vercel Cron Jobs         | migue.ai                            |
| Internationalizacion | next-intl                | Patron Neero establecido            |
| UI components        | shadcn/ui + Tailwind 4   | drad, tip2025                       |
| Deploy               | Vercel                   | Standard Neero                      |

### Base de Datos (Tablas Principales)

| Tabla             | Proposito                                            |
| ----------------- | ---------------------------------------------------- |
| vehicles          | Flota: nombre, modelo, categoria, precio/dia, fotos  |
| bookings          | Reservas: cliente, fechas, vuelo, aeropuerto, estado |
| blocked_dates     | Periodos bloqueados por vehiculo o toda la flota     |
| notifications_log | Trazabilidad de mensajes enviados (WhatsApp + Email) |

---

## 7. Inversion — Neero vs TENET

| Concepto                              | TENET       | Neero      | Ahorro     |
| ------------------------------------- | ----------- | ---------- | ---------- |
| Diseno UI/UX multi-idioma             | $2,000      | $1,800     | $200       |
| Desarrollo sitio web (Next.js + i18n) | $2,500      | $1,500     | $1,000     |
| Sistema de reservas + calendario      | $2,500      | $1,500     | $1,000     |
| Panel administracion                  | $1,500      | $800       | $700       |
| Notificaciones (WhatsApp + Email)     | $1,000      | $600       | $400       |
| Setup infraestructura + hosting ano 1 | $300        | $300       | $0         |
| Training + documentacion              | $200        | $200       | $0         |
| **TOTAL inversion inicial**           | **$10,000** | **$8,500** | **$1,500** |

> Neero incluye WhatsApp Flows nativos (R18) — feature que TENET no contempla — dentro del mismo precio.

### Costos Operativos Mensuales

| Servicio                     | TENET estimado | Neero    | Diferencia   |
| ---------------------------- | -------------- | -------- | ------------ |
| Hosting (Vercel Pro)         | $20            | $20      | $0           |
| Base de datos (Supabase Pro) | $25            | $25      | $0           |
| WhatsApp (Twilio)            | $20-40         | $0       | -$20 a -$40  |
| Email (Resend)               | $10            | $10      | $0           |
| Dominio + SSL                | $5             | $5       | $0           |
| **Total mensual**            | **~$80-100**   | **~$60** | **-$20-$40** |

> Mensajes de servicio de WhatsApp (confirmaciones, recordatorios) son GRATIS con API directa desde noviembre 2024. Twilio cobra por cada mensaje enviado.

---

## 8. ROI — Retorno de Inversion

### Supuestos Conservadores

| Parametro                         | Valor  | Notas                        |
| --------------------------------- | ------ | ---------------------------- |
| Reservas actuales por mes         | 20     | Estimado conservador         |
| Ticket promedio por reserva       | $400   | 5 dias x $80/dia             |
| Incremento de conversion estimado | 15%    | Benchmark booking online SMB |
| Reservas adicionales por mes      | 3      | 20 x 15%                     |
| Ingreso adicional mensual         | $1,200 | 3 reservas x $400            |

### Punto de Equilibrio

| Calculo                                         | Valor       |
| ----------------------------------------------- | ----------- |
| Inversion total                                 | $8,500      |
| Beneficio mensual (ingresos + ahorro operativo) | $1,225      |
| **Meses para recuperar inversion**              | **7 meses** |

### ROI Primer Ano

| Concepto                        | Valor       |
| ------------------------------- | ----------- |
| Inversion inicial               | -$8,500     |
| Ingresos adicionales (12 meses) | +$14,400    |
| Ahorro operativo (12 meses)     | +$300       |
| **ROI bruto primer ano**        | **+$6,200** |
| **ROI porcentual**              | **+73%**    |

> En el mes 8 la plataforma genera retorno positivo sobre la inversion.

---

## 9. Plan de Pagos

| Etapa                        | Porcentaje | Monto      | Hito                             |
| ---------------------------- | ---------- | ---------- | -------------------------------- |
| Anticipo (firma de contrato) | 40%        | $3,400     | Inicio inmediato de proyecto     |
| Mitad de proyecto (semana 3) | 30%        | $2,550     | Entrega de sistema de reservas   |
| Entrega final (pre go-live)  | 30%        | $2,550     | Aprobacion cliente + deploy prod |
| **Total**                    | **100%**   | **$8,500** | —                                |

---

## 10. Timeline: 5 Semanas

| Semana | Fase                   | Entregable                                     | Requerimientos      |
| ------ | ---------------------- | ---------------------------------------------- | ------------------- |
| 1      | Discovery + Diseno     | Wireframes aprobados + DB schema + infra lista | R1, R3, R17         |
| 2      | Sitio web publico      | URL staging con sitio en 4 idiomas             | R1, R2, R3, R15-R17 |
| 3      | Sistema de reservas    | Flujo completo: web + WhatsApp Flows funcional | R4, R5, R6, R18     |
| 4      | Admin + Notificaciones | Panel operativo + notificaciones activas       | R7-R14              |
| 5      | QA + Go-live           | Plataforma en produccion + equipo capacitado   | Todos               |

> TENET estima 6 semanas. La diferencia es codigo reutilizado de produccion, no estimacion optimista.

---

## 11. Garantias

| Garantia                  | Condicion                                                    |
| ------------------------- | ------------------------------------------------------------ |
| Soporte post-lanzamiento  | 30 dias de soporte tecnico incluidos sin costo adicional     |
| Bugs criticos             | Correccion sin costo en los 30 dias post-lanzamiento         |
| Training incluido         | 2 sesiones de capacitacion para el equipo que opera el admin |
| Documentacion             | Manual de uso del panel admin entregado al finalizar         |
| Disponibilidad del codigo | Codigo del proyecto entregado al cliente al finalizar        |

---

## 12. Proximos Pasos

Una sola accion requerida:

> **Aprobar propuesta y firmar contrato** — Neero inicia el proyecto en la semana siguiente a la firma y al anticipo del 40% ($3,400).

| Paso | Accion                          | Responsable   |
| ---- | ------------------------------- | ------------- |
| 1    | Firma de contrato               | Fredy Lopez   |
| 2    | Pago anticipo 40% ($3,400)      | Fredy Lopez   |
| 3    | Kickoff call — alinear detalles | Neero + Fredy |
| 4    | Inicio semana 1: Discovery      | Neero         |

**Contacto:** Neero SAS — Javier Polo

---

_Propuesta valida por 30 dias desde la fecha de emision._

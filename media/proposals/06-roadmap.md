---
title: "Roadmap - Plataforma Reservas Renta Vehiculos Miami"
date: "2026-03-07"
updated: "2026-03-07"
status: "approved"
version: "1.0"
---

# Roadmap: Plataforma Reservas Renta Vehiculos Miami

## Timeline MVP: 4-5 Semanas

| Semana | Fase                   | Actividades                                                | Requerimientos                      | Entregables                              |
| ------ | ---------------------- | ---------------------------------------------------------- | ----------------------------------- | ---------------------------------------- |
| 1      | Discovery + Diseno     | Wireframes, moodboard, paleta colores, flujos UX           | R1, R3, R17                         | Mockups aprobados + DB schema final      |
| 2      | Sitio web publico      | Landing, catalogo vehiculos, i18n 4 idiomas, SEO           | R1, R2, R3, R15, R16, R17           | Sitio publico deployado en staging       |
| 3      | Sistema de reservas    | Calendario, formulario reserva, bloqueo fechas, DB         | R4, R5, R6, R18                     | Reservas funcionales end-to-end          |
| 4      | Admin + notificaciones | Panel admin completo, WhatsApp/Email, crons reminders      | R7, R8, R9, R10, R11, R12, R13, R14 | Admin operativo + notificaciones activas |
| 5      | QA + Go-live           | Testing E2E, ajustes feedback, training, deploy produccion | Todos                               | Plataforma en produccion + manual admin  |

> TENET estima 6 semanas. Neero entrega en 4-5 por reutilizacion de codigo en produccion.

---

## Detalle por Semana

### Semana 1: Discovery + Diseno

| Actividad                | Descripcion                                             |
| ------------------------ | ------------------------------------------------------- |
| Kickoff call             | Alinear requerimientos, contenido, flujos con cliente   |
| Inventario de vehiculos  | Recibir lista de vehiculos, fotos, precios              |
| Wireframes sitio publico | Landing, catalogo, ficha vehiculo, formulario reserva   |
| Wireframes panel admin   | Dashboard, lista reservas, gestion flota                |
| DB schema final          | Definir tablas, relaciones, RLS policies                |
| Configuracion infra      | Vercel project, Supabase project, dominio, WhatsApp API |

Entregable: Wireframes aprobados por cliente + infra lista

---

### Semana 2: Sitio Web Publico

| Actividad                   | Requerimientos | Descripcion                                           |
| --------------------------- | -------------- | ----------------------------------------------------- |
| Layout base + design system | R1             | Tailwind 4 + shadcn/ui + paleta colores aprobada      |
| Configuracion next-intl     | R1             | Routing `/[locale]/`, archivos de traducciones        |
| Landing page                | R17            | Hero, CTAs, testimonios, seguros, politicas           |
| Catalogo vehiculos          | R3             | Grid con filtros categoria/precio, cards vehiculos    |
| Ficha tecnica vehiculo      | R3             | Fotos, specs, disponibilidad, CTA reservar            |
| SEO                         | R2             | Meta tags, OG, sitemap.xml, structured data (JSON-LD) |
| Botones WhatsApp            | R15            | CTA con mensaje prellenado por vehiculo               |

Entregable: URL staging con sitio publico funcional en 4 idiomas

---

### Semana 3: Sistema de Reservas

| Actividad                 | Requerimientos | Descripcion                                     |
| ------------------------- | -------------- | ----------------------------------------------- |
| API disponibilidad        | R4, R5         | Query Supabase fechas bloqueadas por vehiculo   |
| Componente calendario     | R4             | Datepicker con fechas disponibles/bloqueadas    |
| Formulario de reserva web | R6             | Todos los campos requeridos + validacion        |
| API bookings (POST)       | R5, R6         | Crear reserva + bloquear fechas automaticamente |
| WhatsApp Flows setup      | R18            | Configurar Flow en Meta Business Manager        |
| WhatsApp Flows formulario | R18            | Formulario reserva nativo en WhatsApp           |

Entregable: Flujo completo de reserva web + WhatsApp Flows funcional

---

### Semana 4: Admin + Notificaciones

| Actividad                     | Requerimientos | Descripcion                                           |
| ----------------------------- | -------------- | ----------------------------------------------------- |
| Auth admin                    | -              | Login protegido para panel admin                      |
| Lista reservas                | R9             | Tabla paginada proximas/activas/completadas + filtros |
| Dashboard "Entregas de hoy"   | R12            | Vista diaria con datos operativos completos           |
| Gestion de flota              | R10            | CRUD vehiculos desde UI                               |
| Bloqueo manual fechas         | R11            | Form agregar periodos bloqueados                      |
| Exportar reportes CSV         | R13            | Download CSV por rango de fechas                      |
| Edicion de contenido          | R14            | Precios y descripciones editables desde admin         |
| WhatsApp notificacion cliente | R7             | Confirmacion inmediata post-reserva                   |
| WhatsApp notificacion equipo  | R8             | Alerta nueva reserva al grupo operacional             |
| Email confirmacion            | R7             | Email via Resend post-reserva                         |
| Cron: recordatorio 24h        | R7             | Vercel Cron Job - reminder al cliente                 |
| Cron: resumen diario 7am      | R8             | Vercel Cron Job - lista entregas del dia              |
| Cron: alerta 2h antes entrega | R8             | Vercel Cron Job - alerta puntual pre-pickup           |

Entregable: Admin completo + todos los flujos de notificacion activos

---

### Semana 5: QA + Go-live

| Actividad                 | Descripcion                                              |
| ------------------------- | -------------------------------------------------------- |
| Testing E2E (Playwright)  | Flujos criticos: reserva completa, notificaciones, admin |
| Testing movil             | iPhone + Android + tablet en Chrome/Safari               |
| Core Web Vitals           | LCP < 3s, CLS < 0.1, FID < 100ms                         |
| Lighthouse audit          | Performance >= 85, SEO >= 90, Accessibility >= 90        |
| Ajustes feedback cliente  | Iteracion sobre feedback de semana 4                     |
| Carga de datos reales     | Vehiculos, precios, fotos en produccion                  |
| Training equipo admin     | 2 sesiones: uso panel + gestion flota                    |
| Documentacion             | Manual admin PDF entregado                               |
| Deploy produccion         | Dominio definitivo + SSL + Vercel produccion             |
| Monitoreo 48h post-launch | Verificar notificaciones, reservas, crons en prod        |

Entregable: Plataforma en produccion + equipo capacitado

---

## Fases Futuras

### Fase 2: Pagos + AI (Post-MVP)

| Feature                     | Descripcion                                       | Prerequisito           |
| --------------------------- | ------------------------------------------------- | ---------------------- |
| Pagos online                | Stripe o PayPal - cobro al reservar o deposito    | Cuenta merchant activa |
| Asistente conversacional AI | Bot WhatsApp con OpenAI para consultas y reservas | MVP estable            |
| Google Calendar sync        | Sincronizacion bidireccional de disponibilidad    | MVP estable            |
| Analytics dashboard         | Metricas de conversion, ocupacion, ingresos       | MVP con datos          |

### Fase 3: Escala (6+ meses)

| Feature         | Descripcion                                   |
| --------------- | --------------------------------------------- |
| App movil       | React Native + Expo para iOS y Android        |
| Multi-empresa   | Multi-tenant para operar varias flotas        |
| Integracion OTA | Expedia, Cars.com, Booking.com                |
| Loyalty program | Puntos y descuentos para clientes recurrentes |

---

## Razon de Velocidad vs TENET

| Componente           | TENET (estimado)        | Neero (real)                                 |
| -------------------- | ----------------------- | -------------------------------------------- |
| WhatsApp integration | Setup desde cero Twilio | Codigo portado de migue.ai (produccion)      |
| Calendario           | Desarrollo custom       | Patron de migue.ai (Google Calendar + crons) |
| Admin dashboard      | Desarrollo desde cero   | Componentes de drad + tip2025                |
| i18n                 | Evaluacion + setup      | next-intl ya configurado en proyectos Neero  |
| Auth admin           | Investigacion + setup   | Supabase Auth + NextAuth.js de tip2025       |
| **Timeline total**   | **6 semanas**           | **4-5 semanas**                              |

La semana ganada no es estimacion: es codigo existente que no se necesita escribir desde cero.

---
title: "Requerimientos - Plataforma Reservas Renta Vehiculos Miami"
date: "2026-03-07"
updated: "2026-03-07"
status: "approved"
version: "1.0"
source: "Propuesta TENET Digital Services (extraccion completa)"
---

# Requerimientos: Plataforma Reservas Renta Vehiculos Miami

## Requerimientos Funcionales

| ID  | Requerimiento                                                                                                | Prioridad | Fuente          |
| --- | ------------------------------------------------------------------------------------------------------------ | --------- | --------------- |
| R1  | Sitio web responsive multi-idioma (ES, EN, PT, FR)                                                           | MUST      | TENET spec      |
| R2  | SEO optimizado (meta tags, sitemap, structured data)                                                         | MUST      | TENET spec      |
| R3  | Catalogo de vehiculos con fotos, ficha tecnica, precios, categorias y filtros                                | MUST      | TENET spec      |
| R4  | Calendario interactivo con disponibilidad real en tiempo real                                                | MUST      | TENET spec      |
| R5  | Bloqueo automatico de fechas reservadas                                                                      | MUST      | TENET spec      |
| R6  | Formulario de reserva: fecha/hora llegada, aerolinea, vuelo, aeropuerto/terminal, WhatsApp, fecha devolucion | MUST      | TENET spec      |
| R7  | Notificaciones WhatsApp + Email al cliente (confirmacion, recordatorio 24h, instrucciones pickup)            | MUST      | TENET spec      |
| R8  | Notificaciones al equipo (nueva reserva, resumen diario, alertas proximas entregas)                          | MUST      | TENET spec      |
| R9  | Panel admin: ver reservas (proximas / activas / completadas)                                                 | MUST      | TENET spec      |
| R10 | Gestion de flota: agregar, editar, pausar vehiculos                                                          | MUST      | TENET spec      |
| R11 | Bloqueo manual de fechas (mantenimiento, reservas offline)                                                   | MUST      | TENET spec      |
| R12 | Dashboard "Entregas de hoy"                                                                                  | MUST      | TENET spec      |
| R13 | Exportar reportes (CSV / PDF)                                                                                | MUST      | TENET spec      |
| R14 | Actualizar precios y descripciones sin desarrollador                                                         | MUST      | TENET spec      |
| R15 | Botones "Reservar por WhatsApp" con mensaje prellenado                                                       | SHOULD    | TENET spec      |
| R16 | Seccion testimonios, informacion de seguros y politicas                                                      | SHOULD    | TENET spec      |
| R17 | Call-to-actions estrategicos para conversion                                                                 | SHOULD    | TENET spec      |
| R18 | WhatsApp Flows: formulario de reserva nativo en WhatsApp sin abrir navegador                                 | SHOULD    | Neero adicional |

> R18 es valor adicional que Neero aporta - TENET no lo contempla.

---

## Requerimientos No Funcionales

| Atributo      | Requerimiento                                                   |
| ------------- | --------------------------------------------------------------- |
| Idiomas       | 4 idiomas: ES, EN, PT, FR (next-intl)                           |
| Uptime        | 24/7 operacion sin intervencion manual                          |
| Performance   | LCP < 3 segundos, Core Web Vitals green                         |
| Mobile-first  | Perfecto en movil, tablet y desktop                             |
| Escalabilidad | Arquitectura preparada para Fase 2 (pagos) y Fase 3 (app movil) |
| Seguridad     | RLS en Supabase, autenticacion admin protegida                  |
| Mantenimiento | Panel admin sin codigo - cualquier cambio de contenido autonomo |

---

## Trazabilidad por Modulo

| Modulo              | Requerimientos cubiertos    |
| ------------------- | --------------------------- |
| Sitio web publico   | R1, R2, R3, R15, R16, R17   |
| Sistema de reservas | R4, R5, R6, R18             |
| Notificaciones      | R7, R8                      |
| Panel admin         | R9, R10, R11, R12, R13, R14 |

---

## Criterios de Completitud

| ID  | Criterio verificable                                                  |
| --- | --------------------------------------------------------------------- |
| R1  | Sitio carga en 4 idiomas con selector; contenido completo en cada uno |
| R2  | Lighthouse SEO score >= 90; sitemap.xml generado                      |
| R3  | Catalogo muestra vehiculos con fotos, precio y filtros funcionales    |
| R4  | Calendario bloquea fechas reservadas en tiempo real                   |
| R5  | Reserva en fecha bloqueada retorna error claro al usuario             |
| R6  | Formulario captura todos los campos y crea reserva en DB              |
| R7  | Cliente recibe WhatsApp de confirmacion < 2 min post-reserva          |
| R8  | Equipo recibe WhatsApp de nueva reserva inmediatamente                |
| R9  | Admin ve lista paginada de reservas filtrable por estado              |
| R10 | Admin agrega vehiculo desde UI; aparece en catalogo sin deploy        |
| R11 | Admin bloquea fechas manualmente; calendario las refleja              |
| R12 | Dashboard "hoy" lista entregas del dia con datos de vuelo             |
| R13 | Export CSV de reservas por rango de fechas descargable                |
| R14 | Admin actualiza precio; sitio refleja cambio sin desarrollador        |

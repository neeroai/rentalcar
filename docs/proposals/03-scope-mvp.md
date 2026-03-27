---
title: "Alcance MVP - Plataforma Reservas Renta Vehiculos Miami"
date: "2026-03-07"
updated: "2026-03-07"
status: "approved"
version: "1.0"
---

# Alcance MVP: Plataforma Reservas Renta Vehiculos Miami

## Definicion de MVP

El MVP cubre los 14 requerimientos MUST (R1-R14) del spec TENET mas R18 (WhatsApp Flows) como diferenciador Neero. Los 3 SHOULD (R15-R17) se incluyen por bajo costo de implementacion.

---

## Modulo 1: Sitio Web Publico

| ID  | Feature                         | Descripcion                                                | Criterio de exito                                  |
| --- | ------------------------------- | ---------------------------------------------------------- | -------------------------------------------------- |
| R1  | Multi-idioma (ES/EN/PT/FR)      | next-intl con selector de idioma, rutas `/[locale]/`       | Sitio completo en 4 idiomas con selector visible   |
| R2  | SEO optimizado                  | Meta tags, OG tags, sitemap.xml, robots.txt, JSON-LD       | Lighthouse SEO >= 90; sitemap indexado             |
| R3  | Catalogo vehiculos              | Grid/lista con fotos, categoria, precio/dia, ficha tecnica | Catalogo filtra por categoria, rango de precio     |
| R15 | Boton "Reservar por WhatsApp"   | Mensaje prellenado con vehiculo seleccionado               | Click abre WhatsApp con texto generado automatico  |
| R16 | Testimonios, seguros, politicas | Seccion estatica editable por admin                        | Seccion visible en landing; contenido actualizable |
| R17 | Call-to-actions conversion      | CTAs en posiciones estrategicas (hero, catalogo, footer)   | CTAs rastreables con analytics                     |

---

## Modulo 2: Sistema de Reservas

| ID  | Feature                         | Descripcion                                                                                    | Criterio de exito                                     |
| --- | ------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| R4  | Calendario disponibilidad       | Datepicker con fechas disponibles/bloqueadas en real time                                      | Fechas ocupadas no seleccionables                     |
| R5  | Bloqueo automatico de fechas    | Al confirmar reserva, bloquear fechas en DB                                                    | Fecha reservada bloqueada para otros usuarios < 1 min |
| R6  | Formulario de reserva           | Campos: fecha/hora llegada, aerolinea, vuelo, aeropuerto, terminal, WhatsApp, fecha devolucion | Reserva creada en DB con todos los datos              |
| R18 | WhatsApp Flows (reserva nativa) | Formulario de reserva dentro de WhatsApp sin abrir web                                         | Usuario completa reserva desde WhatsApp Flows         |

---

## Modulo 3: Notificaciones

| ID  | Feature                            | Descripcion                                                    | Criterio de exito                                      |
| --- | ---------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------ |
| R7  | Notificaciones WhatsApp al cliente | Confirmacion inmediata, recordatorio 24h, instrucciones pickup | Cliente recibe 3 mensajes en momentos correctos        |
| R7  | Email al cliente                   | Misma secuencia que WhatsApp via Resend                        | Email de confirmacion < 2 min post-reserva             |
| R8  | Notificacion equipo: nueva reserva | WhatsApp al grupo operacional al crear reserva                 | Equipo recibe alerta inmediata con datos de la reserva |
| R8  | Resumen diario equipo              | Cron job a las 7am con entregas del dia                        | Mensaje diario con lista de entregas programadas       |
| R8  | Alerta proximas entregas           | Cron job 2h antes de cada entrega                              | Alerta puntual antes de cada pickup                    |

---

## Modulo 4: Panel Admin

| ID  | Feature                     | Descripcion                                                | Criterio de exito                                |
| --- | --------------------------- | ---------------------------------------------------------- | ------------------------------------------------ |
| R9  | Vista reservas              | Tabla paginada: proximas / activas / completadas + filtros | Admin filtra por estado, fecha, vehiculo         |
| R10 | Gestion de flota            | CRUD vehiculos: agregar, editar, pausar/reactivar          | Vehiculo nuevo aparece en catalogo sin deploy    |
| R11 | Bloqueo manual de fechas    | Agregar periodos bloqueados (mantenimiento, offline)       | Fechas bloqueadas aparecen en calendario publico |
| R12 | Dashboard "Entregas de hoy" | Vista diaria con datos de vuelo, hora, cliente, vehiculo   | Lista completa con todos los datos operativos    |
| R13 | Exportar reportes           | CSV de reservas por rango de fechas                        | Archivo CSV descargable con datos completos      |
| R14 | Edicion de contenido        | Precios, descripciones, fotos desde panel admin            | Cambio de precio reflejado en sitio sin codigo   |

---

## Fuera del Alcance MVP (Fases Futuras)

| Feature                             | Fase   | Razon de exclusion                    |
| ----------------------------------- | ------ | ------------------------------------- |
| Pagos online (Stripe, PayPal)       | Fase 2 | Requiere cuenta merchant + KYC        |
| App movil nativa                    | Fase 3 | Costo adicional significativo         |
| Asistente conversacional AI         | Fase 2 | Stack listo, implementacion posterior |
| Loyalty / puntos cliente            | Fase 3 | Fuera de scope inicial                |
| Multi-empresa (multi-tenant)        | Fase 3 | Arquitectura diferente                |
| Integracion con OTA (Expedia, etc.) | Fase 3 | Integraciones de terceros complejas   |

---

## Supuestos y Dependencias

| Item                         | Supuesto / Requerimiento del cliente                       |
| ---------------------------- | ---------------------------------------------------------- |
| Cuenta WhatsApp Business API | Cliente provee o Neero ayuda a gestionar con Meta          |
| Dominio                      | Cliente tiene dominio o Neero ayuda a adquirir             |
| Fotos de vehiculos           | Cliente entrega fotos de cada vehiculo (minimo 3/vehiculo) |
| Contenido inicial            | Cliente entrega textos en ES; Neero traduce EN/PT/FR       |
| Cuenta Google Calendar       | Para sync de disponibilidad (opcional Fase 1)              |
| Datos de flota inicial       | Lista de vehiculos con precios para carga inicial          |

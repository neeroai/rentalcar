---
title: "Arquitectura Tecnica - Plataforma Reservas Renta Vehiculos Miami"
date: "2026-03-07"
updated: "2026-03-07"
status: "approved"
version: "1.0"
---

# Arquitectura Tecnica: Plataforma Reservas Renta Vehiculos Miami

## Stack Tecnologico

| Capa                 | Tecnologia                  | Version | Fuente de reutilizacion                          |
| -------------------- | --------------------------- | ------- | ------------------------------------------------ |
| Framework            | Next.js                     | 15.x    | Todos los proyectos Neero                        |
| Runtime              | React                       | 19.x    | Todos los proyectos Neero                        |
| Lenguaje             | TypeScript                  | 5.x     | Todos los proyectos Neero                        |
| Estilos              | Tailwind CSS                | 4.x     | drad, tip2025                                    |
| Componentes UI       | shadcn/ui                   | latest  | drad, tip2025                                    |
| Internationalizacion | next-intl                   | 3.x     | Patron Neero establecido                         |
| Database             | Supabase PostgreSQL         | 15.8    | migue.ai, cobru.ai, tip2025                      |
| Auth admin           | Supabase Auth + NextAuth.js | 5.x     | tip2025                                          |
| WhatsApp             | WhatsApp Business API v23   | v23     | migue.ai, cobru.ai (produccion)                  |
| WhatsApp Flows       | WhatsApp Flows v6           | v6      | cobru.ai (produccion)                            |
| Email                | Resend                      | latest  | Proyectos Neero                                  |
| Cron jobs            | Vercel Cron Jobs            | -       | migue.ai (`app/api/cron/`)                       |
| Calendar             | Google Calendar API         | v3      | migue.ai (`src/shared/infra/google/calendar.ts`) |
| Deploy               | Vercel (Edge + Serverless)  | -       | Standard Neero                                   |
| AI (Fase 2)          | Vercel AI SDK               | 5.0     | Disponible en stack Neero                        |

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── [locale]/                           # i18n routing (ES/EN/PT/FR)
│   │   ├── page.tsx                        # Landing publica (hero, CTAs, testimonios)
│   │   ├── vehiculos/
│   │   │   ├── page.tsx                    # Catalogo con filtros
│   │   │   └── [id]/page.tsx               # Ficha tecnica vehiculo
│   │   └── reservar/
│   │       └── [vehicleId]/page.tsx        # Flujo de reserva con calendario
│   ├── api/
│   │   ├── whatsapp/
│   │   │   ├── webhook/route.ts            # (Edge) ingestion WhatsApp eventos
│   │   │   └── send/route.ts               # Envio de mensajes
│   │   ├── bookings/
│   │   │   └── route.ts                    # GET (lista) POST (crear) reservas
│   │   ├── vehicles/
│   │   │   └── route.ts                    # GET (catalogo) POST/PUT/DELETE (admin)
│   │   ├── availability/
│   │   │   └── route.ts                    # GET disponibilidad por vehiculo y rango
│   │   └── cron/
│   │       ├── reminders/route.ts          # Recordatorios 24h antes de entrega
│   │       └── daily-summary/route.ts      # Resumen diario equipo 7am
│   └── (dashboard)/                        # Rutas admin (autenticadas)
│       ├── bookings/page.tsx               # Lista reservas proximas/activas/completadas
│       ├── vehicles/page.tsx               # Gestion de flota
│       ├── blocked-dates/page.tsx          # Bloqueo manual de fechas
│       ├── today/page.tsx                  # Dashboard entregas de hoy
│       └── reports/page.tsx               # Exportar reportes CSV
├── modules/
│   ├── booking/
│   │   ├── booking.service.ts              # Logica de negocio reservas
│   │   ├── booking.repository.ts           # Queries Supabase
│   │   └── booking.types.ts               # Tipos TypeScript
│   ├── vehicle/
│   │   ├── vehicle.service.ts              # Logica de negocio flota
│   │   ├── vehicle.repository.ts           # Queries Supabase
│   │   └── vehicle.types.ts               # Tipos TypeScript
│   ├── notification/
│   │   ├── whatsapp.service.ts             # Envio WhatsApp (de migue.ai)
│   │   ├── email.service.ts               # Envio Email Resend
│   │   └── templates/                     # Templates mensajes cliente/equipo
│   └── calendar/
│       └── calendar.service.ts            # Google Calendar sync (de migue.ai)
└── shared/
    ├── infra/
    │   ├── whatsapp/                       # (portado de migue.ai)
    │   │   ├── client.ts
    │   │   ├── webhook.ts
    │   │   └── flows/                     # WhatsApp Flows v6 (de cobru.ai)
    │   ├── db/
    │   │   └── supabase.ts                # Supabase client
    │   └── google/
    │       └── calendar.ts                # (portado de migue.ai)
    └── components/                        # UI compartida (de drad/tip2025)
```

---

## Database Schema (Supabase PostgreSQL)

### Tabla: vehicles

| Columna          | Tipo             | Descripcion                                  |
| ---------------- | ---------------- | -------------------------------------------- |
| id               | uuid PRIMARY KEY | ID del vehiculo                              |
| name             | text NOT NULL    | Nombre del vehiculo                          |
| model            | text NOT NULL    | Modelo                                       |
| year             | int4             | Ano del modelo                               |
| category         | text             | SUV, Sedan, Pickup, Van, etc.                |
| price_per_day    | numeric(10,2)    | Precio por dia en USD                        |
| photos           | text[]           | URLs de fotos (Supabase Storage)             |
| available        | boolean          | Activo en catalogo                           |
| description_i18n | jsonb            | Descripcion en 4 idiomas: {es, en, pt, fr}   |
| specs            | jsonb            | Ficha tecnica (pasajeros, transmision, etc.) |
| created_at       | timestamptz      | Fecha de creacion                            |
| updated_at       | timestamptz      | Ultima actualizacion                         |

### Tabla: bookings

| Columna           | Tipo             | Descripcion                                          |
| ----------------- | ---------------- | ---------------------------------------------------- |
| id                | uuid PRIMARY KEY | ID de la reserva                                     |
| vehicle_id        | uuid FK          | Referencia a vehicles                                |
| customer_name     | text NOT NULL    | Nombre del cliente                                   |
| customer_whatsapp | text NOT NULL    | WhatsApp con codigo pais (+1...)                     |
| customer_email    | text             | Email del cliente (opcional)                         |
| arrival_date      | date NOT NULL    | Fecha de llegada                                     |
| arrival_time      | time             | Hora de llegada estimada                             |
| airline           | text             | Aerolinea del vuelo                                  |
| flight_number     | text             | Numero de vuelo                                      |
| airport           | text             | Aeropuerto (MIA, FLL, etc.)                          |
| terminal          | text             | Terminal del aeropuerto                              |
| return_date       | date NOT NULL    | Fecha de devolucion                                  |
| status            | text             | pending / confirmed / active / completed / cancelled |
| notes             | text             | Notas internas del equipo                            |
| created_at        | timestamptz      | Fecha de creacion                                    |
| updated_at        | timestamptz      | Ultima actualizacion                                 |

### Tabla: blocked_dates

| Columna    | Tipo             | Descripcion                                   |
| ---------- | ---------------- | --------------------------------------------- |
| id         | uuid PRIMARY KEY | ID del bloqueo                                |
| vehicle_id | uuid FK          | Referencia a vehicles (null = todos)          |
| date_from  | date NOT NULL    | Inicio del bloqueo                            |
| date_to    | date NOT NULL    | Fin del bloqueo                               |
| reason     | text             | Motivo (mantenimiento, reserva offline, etc.) |
| created_at | timestamptz      | Fecha de creacion                             |

### Tabla: notifications_log

| Columna    | Tipo             | Descripcion                                                       |
| ---------- | ---------------- | ----------------------------------------------------------------- |
| id         | uuid PRIMARY KEY | ID del log                                                        |
| booking_id | uuid FK          | Referencia a bookings                                             |
| type       | text             | confirmation / reminder_24h / pickup_instructions / daily_summary |
| channel    | text             | whatsapp / email                                                  |
| recipient  | text             | Numero/email destino                                              |
| status     | text             | sent / failed                                                     |
| sent_at    | timestamptz      | Timestamp del envio                                               |

---

## Seguridad (Row Level Security)

| Tabla             | Politica publica        | Politica admin                 |
| ----------------- | ----------------------- | ------------------------------ |
| vehicles          | SELECT (available=true) | SELECT, INSERT, UPDATE, DELETE |
| bookings          | INSERT (crear reserva)  | SELECT, UPDATE, DELETE (todas) |
| blocked_dates     | SELECT                  | SELECT, INSERT, UPDATE, DELETE |
| notifications_log | -                       | SELECT (solo lectura)          |

---

## Integraciones Externas

| Servicio              | Uso                                     | Costo                               |
| --------------------- | --------------------------------------- | ----------------------------------- |
| WhatsApp Business API | Notificaciones cliente + equipo + Flows | $0 mensajes servicio desde Nov 2024 |
| Google Calendar API   | Sync disponibilidad (opcional)          | $0                                  |
| Resend                | Emails cliente                          | $10/mes (100k emails)               |
| Vercel Cron           | Reminders 24h + resumen diario          | Incluido en Vercel Pro              |
| Supabase Storage      | Fotos vehiculos                         | Incluido en Supabase Pro            |

---

## Escalabilidad Fases Futuras

| Fase   | Adicion                  | Stack requerido                          |
| ------ | ------------------------ | ---------------------------------------- |
| Fase 2 | Pagos online             | Stripe o PayPal (React SDK disponible)   |
| Fase 2 | Asistente conversacional | Vercel AI SDK 5.0 + OpenAI (ya en stack) |
| Fase 3 | App movil                | React Native + Expo                      |
| Fase 3 | Multi-empresa            | Multi-tenant schema en Supabase          |

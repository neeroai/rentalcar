---
title: "Research Map - miami-car"
date: "2026-03-10"
updated: "2026-03-10"
---

# Research Map

Orientacion rapida entre sesiones para el repo miami-car.
Este NO es un proyecto de codigo — es investigacion de marketing y business model.

## Estructura del Repo

| Path                                      | Tipo      | Descripcion                                          |
| ----------------------------------------- | --------- | ---------------------------------------------------- |
| proposals/                                | READ-ONLY | 8 documentos comerciales para Fredy Lopez            |
| proposals/00-miami-car-rental-overview.md | Propuesta | Resumen ejecutivo + indice de propuestas             |
| proposals/01-requirements.md              | Propuesta | Requerimientos R1-R17                                |
| proposals/02-tech-advantages.md           | Propuesta | Stack Neero vs TENET                                 |
| proposals/03-scope-mvp.md                 | Propuesta | Alcance MVP                                          |
| proposals/04-architecture.md              | Propuesta | Stack, DB schema, estructura                         |
| proposals/05-investment-roi.md            | Propuesta | Inversion, pagos, ROI                                |
| proposals/06-roadmap.md                   | Propuesta | Timeline 5 semanas                                   |
| specs/                                    | RESEARCH  | Areas de investigacion (bloqueadas hasta aprobacion) |
| specs/00-inventario-general.md            | Dashboard | Master index de research areas + status              |
| specs/01-mercado-miami.md                 | Research  | Tamano mercado, estacionalidad, turismo              |
| specs/02-modelo-negocio.md                | Research  | Revenue streams, costos, margen por vehiculo         |
| specs/03-competencia.md                   | Research  | Enterprise locales, independientes, gaps             |
| specs/04-segmentos-clientes.md            | Research  | Turistas (4 idiomas), residentes, empresas, LTV      |
| specs/05-estrategia-precios.md            | Research  | Precio/dia por categoria, dynamic pricing            |
| specs/06-canales-marketing.md             | Research  | Google Ads, SEO local, Instagram, WhatsApp, OTAs     |
| specs/07-proyecciones-financieras.md      | Research  | Ocupacion, ingresos mes 1-12, break-even             |
| specs/08-go-to-market.md                  | Research  | Lanzamiento, KPIs semana 1/mes 1/mes 3               |
| .claude/                                  | TRACKING  | Archivos de tracking entre sesiones                  |

## Flujo de Trabajo

```
proposals/ (referencia, NO modificar)
    |
    v
Cliente aprueba propuesta
    |
    v
specs/ (iniciar research en orden de prioridad)
    |
    v
.claude/status.md + todo.md (tracking de progreso)
```

## Orden de Prioridad Research

| Prioridad | Spec                        | Razon                                      |
| --------- | --------------------------- | ------------------------------------------ |
| 1 (High)  | 01-mercado-miami            | Contexto base para todo lo demas           |
| 2 (High)  | 02-modelo-negocio           | Revenue y costos — decision critica        |
| 3 (High)  | 07-proyecciones-financieras | Financieras — argumento de venta principal |
| 4 (Med)   | 03-competencia              | Diferenciacion                             |
| 5 (Med)   | 04-segmentos-clientes       | Targeting                                  |
| 6 (Med)   | 05-estrategia-precios       | Pricing strategy                           |
| 7 (Med)   | 08-go-to-market             | Plan de lanzamiento                        |
| 8 (Low)   | 06-canales-marketing        | Ultima prioridad                           |

## Reglas Criticas

| Regla                           | Detalle                                                 |
| ------------------------------- | ------------------------------------------------------- |
| NO inventar datos de mercado    | Solo datos verificados con fuentes citadas              |
| NO modificar proposals/         | Documentos de cliente, version-controlados              |
| NO confundir specs vs proposals | proposals = propuesta comercial, specs = research areas |
| Bloquear specs hasta aprobacion | No iniciar research sin confirmacion del cliente        |
| Citar fuentes en cada hallazgo  | URL + fecha de consulta obligatorio                     |

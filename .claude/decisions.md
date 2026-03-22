---
title: "Architecture Decisions - miami-car"
summary: "ADRs de estructura del repo de research/business model para car rental Miami"
version: "1.0"
date: "2026-03-10"
updated: "2026-03-10"
---

# Architecture Decisions

## ADR-001: specs/ como Research Areas (no features de codigo)

**Date**: 2026-03-10
**Status**: Accepted
**Deciders**: Javier Polo (Neero SAS)

### Context

Este repo NO es un proyecto de codigo. Es investigacion de marketing y business model para Fredy Lopez (car rental Miami). El template de docs-global/ asume specs/ para features de software.

### Decision

Usar specs/ para research areas de negocio (mercado, competencia, precios, financieras) en lugar de features de codigo.

### Rationale

- El repo tiene un solo tipo de contenido: research y documentacion comercial
- Los specs de negocio son el output natural de este tipo de investigacion
- Mantiene consistencia con la estructura Neero sin forzar patrones de codigo

### Consequences

**Positive**:

- Estructura clara y familiar para cualquier sesion futura
- Tracking de progreso de research por area
- Facil de expandir cuando cliente apruebe

**Negative**:

- Nombre "specs/" puede confundir si alguien espera codigo
- Requiere README y AGENTS.md claros sobre el tipo de repo

### Alternatives Considered

1. Usar docs/ en lugar de specs/ — Rechazado porque specs/ tiene el pattern de frontmatter + status que necesitamos
2. Flat structure sin subdirectorios — Rechazado, proposals/ ya existe como directorio

---

## ADR-002: research-map.md en Lugar de codebase-map.md

**Date**: 2026-03-10
**Status**: Accepted
**Deciders**: Javier Polo (Neero SAS)

### Context

El template de docs-global/ incluye codebase-map.md para orientacion de codigo entre sesiones. Este repo no tiene codigo.

### Decision

Crear .claude/research-map.md con la misma funcion que codebase-map.md pero orientado a research areas y documentos de negocio.

### Rationale

- El nombre debe reflejar el contenido semanticamente
- Misma funcion: orientacion rapida entre sesiones
- Evita confusion con repos de codigo

### Consequences

**Positive**:

- Semanticamente correcto para un repo de research
- Mantiene el patron de orientacion entre sesiones

**Negative**:

- Ligera desviacion del template estandar (intencional)

### Alternatives Considered

1. Omitir el archivo de orientacion — Rechazado, critico para continuidad entre sesiones
2. Renombrar a context-map.md — Menos descriptivo que research-map.md

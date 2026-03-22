# miami-car

Setup inicial de un website para car rental en Miami, FL.

Este repo queda preparado como base de configuracion para una futura implementacion con Next.js + React + TypeScript + Bun. En esta fase no se desarrolla producto, pantallas ni logica de negocio.

---

## Estado

| Campo | Valor |
| ----- | ----- |
| Tipo de repo | Website setup |
| Fase | Configuracion inicial |
| Stack objetivo | Next.js 15, React 19, TypeScript, Bun, Biome |
| Implementacion | Pendiente |

---

## Alcance de esta fase

- Configuracion base del proyecto
- Estructura de tooling y calidad
- Preparacion para despliegue en Vercel
- Contexto operativo para agentes

Fuera de alcance:

- Desarrollo del website
- UI, contenido o landing pages
- Integraciones, formularios o reservas

---

## Estructura actual

| Ruta | Tipo | Descripcion |
| ---- | ---- | ----------- |
| `media/` | Referencia | Material comercial y visual existente |
| `media/proposals/` | Referencia | Propuesta comercial versionada |
| `specs/` | Referencia | Research interno previo |
| `.claude/` | Operacion | Archivos de contexto y seguimiento |
| `package.json` | Config | Scripts y dependencias base |
| `tsconfig.json` | Config | Configuracion TypeScript |
| `biome.json` | Config | Lint y formatting |
| `next.config.ts` | Config | Configuracion Next.js |
| `tailwind.config.ts` | Config | Configuracion Tailwind |
| `postcss.config.js` | Config | Plugin PostCSS |
| `vercel.json` | Config | Build y deploy en Vercel |

---

## Notas

- `media/` y `specs/` se conservan como insumo de contexto, no como source code.
- No se ha corrido `bun install` todavia, por eso `bun.lock` no existe aun.
- No se ha desarrollado ninguna pagina o ruta del sitio.

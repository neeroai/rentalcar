# rentatelo.com prototype

Prototipo premium bilingüe ES/EN para `rentatelo.com`, un marketplace de renta de autos Orlando-first orientado a viajeros LATAM que llegan a Florida y quieren elegir el auto exacto, coordinar entregas a aeropuerto/hotel y reservar con mayor claridad operativa.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Playwright

## Rutas

- `/`
- `/search`
- `/vehicle/[slug]`
- `/checkout`
- `/booking/confirmed`
- `/how-it-works`
- `/host`
- `/host/list-your-car`
- `/account/trips`
- `/account/messages`
- `/account/wishlist`

## Scripts

- `npm run dev`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run test:e2e`

## Estructura

- `app/`: rutas y layout App Router
- `src/components/`: componentes del prototipo y motion UI
- `src/data/`: mock data tipada
- `src/i18n/`: diccionarios ES/EN
- `src/lib/`: utilidades, filtros, i18n y formatos
- `docs/`: spec, plan, decisiones y demo script
- `e2e/`: smoke tests de Playwright

## Decisiones clave

- Español por defecto con toggle real a inglés, sin prefijos de ruta.
- Wordmark temporal `rentatelo.com`, sin logo final.
- Estética “quiet luxury” con fotografía curada y motion sobria.
- Reserva web como CTA principal y coordinación tipo WhatsApp como apoyo.
- Todo el proyecto usa mocks locales; no hay backend, auth ni pagos reales.

## Correr el demo

1. `npm install`
2. `npm run dev`
3. Abrir `http://127.0.0.1:3000`

Para pruebas end-to-end, instalar navegadores si hace falta:

```bash
node ./node_modules/@playwright/test/cli.js install chromium
```

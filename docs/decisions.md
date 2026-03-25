# Decisiones cerradas

## Producto

- Orlando-first con soporte narrativo a Miami.
- ES/EN reales; no PT/FR en esta iteración.
- Reserva web prioritaria con coordinación posterior vía mensajes.

## UX

- Rutas limpias sin prefijos de locale.
- Hero full-bleed sin card principal flotante.
- Cards solo donde la interacción lo justifica: resultados, wishlist, related vehicles.

## Marca

- `rentatelo.com` como wordmark temporal.
- Quiet luxury: marfil, arena, grafito y un acento cálido.
- Fotografía curada de stock como placeholder.

## Arquitectura

- Mock data local en `src/data/`.
- Server Components por defecto.
- Client Components solo para motion, locale toggle, drawer de filtros y wizard.
- Navegación del funnel con `searchParams`, sin estado global complejo.

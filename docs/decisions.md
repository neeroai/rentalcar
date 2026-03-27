# Decisiones cerradas

## Producto

- Orlando-first con soporte narrativo a Miami.
- ES/EN reales; no PT/FR en esta iteración.
- Reserva web prioritaria con coordinación posterior vía mensajes.

## UX

- Rutas limpias sin prefijos de locale.
- Hero full-bleed sin card principal flotante.
- Cards solo donde la interacción lo justifica: resultados, wishlist, related vehicles.
- Search sin mapa fake; usar contexto de servicio/entrega en Orlando.

## Marca

- `rentatelo.com` como wordmark temporal.
- Travel/family bright: marfil cálido, arena, grafito y un acento teal.
- Stock real como base para héroes, contexto Orlando y escenas humanas.
- IA reservada como fallback para galerías mock de flota cuando falte exactitud por categoría.
- Orlando domina hero media, bloques editoriales y narrativa; Miami queda como soporte secundario.

## Flota Mock

- El funnel deja de empujar `convertible`, `business` y `luxury` como taxonomía principal.
- Las categorías activas pasan a `economy`, `compact-suv`, `minivan`, `three-row-suv` y `premium`.
- El mix mock se alinea al research Orlando: dominio de compact SUVs y minivans, premium solo como nicho secundario.

## Arquitectura

- Mock data local en `src/data/`.
- Server Components por defecto.
- Client Components solo para motion, locale toggle, drawer de filtros y wizard.
- Navegación del funnel con `searchParams`, sin estado global complejo.

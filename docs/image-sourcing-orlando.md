# Política de imágenes Orlando

## Buyer y contexto

- Buyer principal: familias LATAM que llegan a MCO.
- Buyer secundario: familias USA rumbo a Disney/Universal/Epic y viajeros de convención.
- Contextos visuales válidos: aeropuerto, lobby de hotel, resort, equipaje, child seats, valet, pickup coordinado, estadías en Lake Buena Vista e International Drive.

## Flota mock objetivo

| Categoría | Cantidad | Modelos guía |
| --- | ---: | --- |
| `economy` | 4 | Corolla, Elantra, Sentra, Camry |
| `compact-suv` | 5 | Rogue, RAV4, Sportage, CR-V, Tucson |
| `minivan` | 4 | Pacifica, Carnival, Sienna |
| `three-row-suv` | 2 | Explorer, Traverse |
| `premium` | 1 | Model Y |

## Regla de sourcing

1. Stock real primero para héroes, contexto y escenas humanas.
2. Misma lógica para search rail, host y how-it-works.
3. IA solo como fallback para fichas mock cuando falte una galería category-accurate.

## Reglas duras

- No usar imágenes de nieve, montaña, beach-party o Miami lifestyle como narrativa principal.
- No usar convertibles como imagen principal del funnel.
- No usar escenas que contradigan el modelo o la categoría mostrada.
- Epic puede aparecer en copy y contexto comercial, pero no implica uso libre de branding oficial del parque.

## Contrato técnico

- Todo asset nuevo debe incluir `src`, `alt`, `sourceType`, `sourceName` y `sourceUrl`.
- El catálogo editorial vive en `src/data/assets.ts`.
- La flota mock debe consumir galerías por categoría desde ese catálogo.

# Spec del prototipo

## Producto

- Nombre temporal: `rentatelo.com`
- Posicionamiento: marketplace premium de renta de autos, Orlando-first, con menciones secundarias a Miami.
- Audiencia principal: viajeros LATAM que llegan a MCO, familias rumbo a Disney/Universal/Epic, estadías en resort y viajeros de convención como segmento secundario.
- Conversión: reserva web como CTA principal; mensajería estilo WhatsApp como soporte posterior.

## Experiencia

- Idiomas: ES por defecto, EN real mediante toggle y cookie.
- Identidad: travel/family bright, superficies cálidas, gran fotografía editorial y una sola acción de color clara.
- Motion obligatoria:
  - reveal del hero
  - persistencia contextual en búsqueda y booking
  - hover/reveal en cards de vehículos

## Rutas y propósito

- `/`: landing Orlando-first con hero de llegada, búsqueda integrada, bloques editoriales y trust.
- `/search`: resultados con filtros, summary contextual y rail de zonas/entrega en vez de mapa fake.
- `/vehicle/[slug]`: ficha completa con galería inmersiva, host, delivery, políticas y rail de reserva.
- `/checkout`: resumen del viaje, datos del huésped, delivery, add-ons y pago mock.
- `/booking/confirmed`: confirmación tipo itinerario con siguientes pasos y mensajes.
- `/how-it-works`: explicación del flujo guest como historia de llegada a Orlando.
- `/host`: landing de captación host enfocada en demanda Orlando, claridad y calculator.
- `/host/list-your-car`: wizard mock multi-step alineado al nuevo sistema visual.
- `/account/trips`: viajes futuros e históricos.
- `/account/messages`: inbox mock de coordinación host-huésped.
- `/account/wishlist`: vehículos guardados.

## Datos mock

- 16 vehículos con categorías: `compact-suv`, `minivan`, `economy`, `three-row-suv` y `premium`.
- La mezcla prioriza Orlando real: 5 compact SUVs, 4 minivans, 4 economy, 2 SUVs 3 filas y 1 premium.
- Cada vehículo incluye `slug`, specs, precio, rating, viajes, delivery, airport pickup, instant book, imágenes trazables con metadata de origen, host, features, policies y reviews.
- Datos secundarios: `trips`, `messageThreads`, `checkoutAddons`, `wishlistedSlugs`.

## Restricciones

- Sin backend real
- Sin auth real
- Sin pagos reales
- Sin mapas reales
- Sin copy, marca o layout clonados de Turo
- No usar imágenes irrelevantes al producto o al contexto Orlando-first
- Usar stock real como base para héroes y contexto; dejar IA como fallback para galerías mock cuando haga falta exactitud por categoría
- No usar convertibles como categoría protagonista ni como imagen principal del funnel

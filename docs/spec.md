# Spec del prototipo

## Producto

- Nombre temporal: `rentatelo.com`
- Posicionamiento: marketplace premium de renta de autos, Orlando-first, con menciones secundarias a Miami.
- Audiencia principal: viajeros LATAM que llegan a MCO, familias rumbo a Disney/Universal, parejas en escapada premium y viajeros de negocio.
- Conversión: reserva web como CTA principal; mensajería estilo WhatsApp como soporte posterior.

## Experiencia

- Idiomas: ES por defecto, EN real mediante toggle y cookie.
- Identidad: quiet luxury, superficies calmas, gran fotografía, tipografía editorial y acento contenido.
- Motion obligatoria:
  - reveal del hero
  - sección sticky/scroll de conveniencia
  - hover/reveal en cards de vehículos

## Rutas y propósito

- `/`: landing de alto impacto con búsqueda, categorías, conveniencia y trust.
- `/search`: resultados con filtros, summary sticky y grid navegable.
- `/vehicle/[slug]`: ficha completa con galería, host, políticas y rail de reserva.
- `/checkout`: resumen, guest info, add-ons y pago mock.
- `/booking/confirmed`: confirmación con instrucciones y acceso a mensajes.
- `/how-it-works`: explicación del flujo guest.
- `/host`: landing de captación con beneficios y earnings calculator.
- `/host/list-your-car`: wizard mock multi-step.
- `/account/trips`: viajes futuros e históricos.
- `/account/messages`: inbox mock.
- `/account/wishlist`: vehículos guardados.

## Datos mock

- 16 vehículos con categorías: SUV, convertible, luxury, economy, van y business sedan.
- Cada vehículo incluye `slug`, specs, precio, rating, viajes, delivery, airport pickup, instant book, imágenes, host, features, policies y reviews.
- Datos secundarios: `trips`, `messageThreads`, `checkoutAddons`, `wishlistedSlugs`.

## Restricciones

- Sin backend real
- Sin auth real
- Sin pagos reales
- Sin mapas reales
- Sin copy, marca o layout clonados de Turo

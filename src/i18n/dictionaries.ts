import type { Locale } from "@/lib/types";

interface Dictionary {
  brand: string;
  nav: {
    search: string;
    howItWorks: string;
    host: string;
    trips: string;
    messages: string;
    wishlist: string;
    listYourCar: string;
  };
  actions: {
    search: string;
    exploreCars: string;
    becomeHost: string;
    contactHost: string;
    confirm: string;
    continue: string;
    startHosting: string;
    save: string;
    filters: string;
    viewTrip: string;
    switchLocale: string;
  };
  common: {
    perDay: string;
    seats: string;
    trips: string;
    instantBook: string;
    airportPickup: string;
    delivered: string;
    superhost: string;
    rating: string;
    backToSearch: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  home: {
    valueProps: { title: string; detail: string }[];
    categoriesTitle: string;
    categoriesSubtitle: string;
    convenienceTitle: string;
    convenienceSubtitle: string;
    trustTitle: string;
    trustSubtitle: string;
    howTitle: string;
    howSteps: { title: string; detail: string }[];
    finalTitle: string;
    finalSubtitle: string;
    browseByMake: string;
    browseByDestination: string;
    browseByExperience: string;
    popularSearches: string;
    trustTripsCount: string;
    trustHostsCount: string;
    trustRating: string;
  };
  search: {
    title: string;
    subtitle: string;
    noResults: string;
    resultsLabel: string;
    sortLabel: string;
    sorts: Record<string, string>;
    filters: {
      category: string;
      maxPrice: string;
      seats: string;
      transmission: string;
      delivery: string;
      airportPickup: string;
      instantBook: string;
      rating: string;
      apply: string;
      clear: string;
    };
    where: string;
    from: string;
    until: string;
    searchCta: string;
    noResultsSuggestion: string;
  };
  vehicle: {
    overview: string;
    includes: string;
    host: string;
    policies: string;
    reviews: string;
    related: string;
    bookCard: string;
    pickupOptions: string;
    allStarHost: string;
    instantBook: string;
    perDay: string;
    trips: string;
  };
  checkout: {
    title: string;
    subtitle: string;
    guestInfo: string;
    payment: string;
    protection: string;
    review: string;
  };
  confirmed: {
    title: string;
    subtitle: string;
    instructions: string;
    contact: string;
    calendar: string;
    continue: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: { title: string; detail: string }[];
    trustTitle: string;
  };
  host: {
    title: string;
    subtitle: string;
    calculator: string;
    benefits: string;
    listYourCar: string;
    wizardTitle: string;
  };
  account: {
    tripsTitle: string;
    messagesTitle: string;
    wishlistTitle: string;
  };
  footer: {
    tagline: string;
    note: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    brand: "rentatelo.com",
    nav: {
      search: "Buscar autos",
      howItWorks: "Cómo funciona",
      host: "Para hosts",
      trips: "Viajes",
      messages: "Mensajes",
      wishlist: "Guardados",
      listYourCar: "Pon tu auto",
    },
    actions: {
      search: "Buscar disponibilidad",
      exploreCars: "Explorar autos",
      becomeHost: "Conviértete en host",
      contactHost: "Contactar host",
      confirm: "Confirmar reserva",
      continue: "Continuar",
      startHosting: "Publicar mi auto",
      save: "Guardar",
      filters: "Filtros",
      viewTrip: "Ver viaje",
      switchLocale: "English",
    },
    common: {
      perDay: "/día",
      seats: "asientos",
      trips: "viajes",
      instantBook: "Reserva inmediata",
      airportPickup: "Recogida en aeropuerto",
      delivered: "Entrega disponible",
      superhost: "Host destacado",
      rating: "calificación",
      backToSearch: "Volver a resultados",
    },
    hero: {
      eyebrow: "Marketplace premium en Orlando",
      title:
        "Tu auto exacto para llegar a Orlando sin filas, sorpresas ni counters.",
      subtitle:
        "Reserva SUVs familiares, convertibles premium y sedanes ejecutivos con entrega a MCO, hoteles de International Drive o resorts cerca de Disney.",
      primaryCta: "Buscar disponibilidad",
      secondaryCta: "Ver cómo funciona",
    },
    home: {
      valueProps: [
        {
          title: "Elige el auto exacto",
          detail:
            "No reservas una categoría genérica. Ves el vehículo, el host y la experiencia completa.",
        },
        {
          title: "Recíbelo donde te convenga",
          detail:
            "MCO, lobby del hotel, Disney Springs o Universal: la entrega es parte del producto.",
        },
        {
          title: "Hosts y flotas con criterio",
          detail:
            "Perfiles curados, respuesta rápida y vehículos listos para viajes familiares o ejecutivos.",
        },
      ],
      categoriesTitle: "Curado para la forma en que se mueve Orlando.",
      categoriesSubtitle:
        "Desde minivans para parques hasta convertibles para un fin de semana premium.",
      convenienceTitle: "Del vuelo al volante con una experiencia más directa.",
      convenienceSubtitle:
        "Diseñado para viajeros LATAM que valoran claridad, rapidez y confianza desde el primer tap.",
      trustTitle: "Confianza visible, no promesas vacías.",
      trustSubtitle:
        "Hosts con historial, reglas claras y pickup explicado antes de pagar.",
      howTitle: "Cómo reservar en menos de tres minutos.",
      howSteps: [
        {
          title: "Busca por plan real",
          detail:
            "Fechas, hora, pickup y tipo de auto desde el primer viewport.",
        },
        {
          title: "Compara contexto completo",
          detail: "Precio, políticas, entrega y reputación antes de decidir.",
        },
        {
          title: "Confirma y coordina",
          detail:
            "Checkout claro, confirmación inmediata y contacto directo con tu host.",
        },
      ],
      finalTitle:
        "Un prototipo hecho para cerrar clientes, hosts e inversionistas.",
      finalSubtitle:
        "La experiencia prioriza conversión web con respaldo de WhatsApp, sin parecer un template de travel genérico.",
      browseByMake: "Explora por marca",
      browseByDestination: "Explora por destino",
      browseByExperience: "Explora por experiencia",
      popularSearches: "Búsquedas populares",
      trustTripsCount: "viajes completados",
      trustHostsCount: "hosts verificados",
      trustRating: "calificación promedio",
    },
    search: {
      title: "Resultados para Orlando y alrededores",
      subtitle:
        "Filtra por entrega, aeropuerto, precio y tipo de auto sin perder el contexto del viaje.",
      noResults:
        "No encontramos autos con esos filtros. Ajusta precio, categoría o pickup.",
      resultsLabel: "autos disponibles",
      sortLabel: "Ordenar",
      sorts: {
        recommended: "Recomendados",
        "price-low": "Precio más bajo",
        "price-high": "Precio más alto",
        rating: "Mejor calificados",
      },
      filters: {
        category: "Categoría",
        maxPrice: "Precio máximo / día",
        seats: "Asientos mínimos",
        transmission: "Transmisión",
        delivery: "Entrega disponible",
        airportPickup: "Pickup en aeropuerto",
        instantBook: "Reserva inmediata",
        rating: "Calificación mínima",
        apply: "Aplicar filtros",
        clear: "Limpiar",
      },
      where: "¿Dónde?",
      from: "Desde",
      until: "Hasta",
      searchCta: "Buscar",
      noResultsSuggestion: "Prueba con otra ciudad o fecha",
    },
    vehicle: {
      overview: "Resumen del vehículo",
      includes: "Lo que hace bien este auto",
      host: "Tu host",
      policies: "Políticas y protección",
      reviews: "Reseñas recientes",
      related: "También te puede servir",
      bookCard: "Resumen de reserva",
      pickupOptions: "Opciones de entrega y pickup",
      allStarHost: "All-Star Host",
      instantBook: "Reserva ya",
      perDay: "/día",
      trips: "viajes",
    },
    checkout: {
      title: "Checkout simple, claro y listo para demo.",
      subtitle:
        "Sin pagos reales. Todo está diseñado para transmitir confianza y secuencia operativa.",
      guestInfo: "Datos del viajero",
      payment: "Pago y garantía",
      protection: "Cobertura y políticas",
      review: "Revisar antes de confirmar",
    },
    confirmed: {
      title: "Reserva confirmada.",
      subtitle:
        "Tu host ya tiene la información del viaje y el punto de entrega quedó bloqueado.",
      instructions: "Instrucciones de pickup",
      contact: "Abrir mensajes con tu host",
      calendar: "Agregar al calendario",
      continue: "Ver mis viajes",
    },
    howItWorks: {
      title: "Cómo funciona rentatelo.com",
      subtitle:
        "Una experiencia hecha para viajeros que quieren claridad desde la reserva hasta la entrega.",
      steps: [
        {
          title: "1. Elige dónde te encuentras",
          detail:
            "Aeropuerto MCO, hotel o zona de parques. La experiencia se ajusta a ese contexto.",
        },
        {
          title: "2. Selecciona el auto exacto",
          detail:
            "Cada ficha muestra precio real, políticas, entrega, anfitrión y reseñas.",
        },
        {
          title: "3. Confirma y coordina",
          detail:
            "Recibes un resumen limpio, instrucciones y acceso directo al host.",
        },
      ],
      trustTitle: "Por qué se siente distinto",
    },
    host: {
      title: "Convierte tu flota en una experiencia premium de reserva.",
      subtitle:
        "Publica SUVs, minivans y autos premium con entrega en puntos clave de Orlando y Miami.",
      calculator: "Calculadora de ingresos",
      benefits: "Por qué publicar aquí",
      listYourCar: "Publicar mi auto",
      wizardTitle: "Sube tu auto en minutos",
    },
    account: {
      tripsTitle: "Mis viajes",
      messagesTitle: "Mensajes",
      wishlistTitle: "Mis favoritos",
    },
    footer: {
      tagline: "Marketplace premium para viajeros LATAM rumbo a Orlando.",
      note: "Prototype demo. No procesa pagos reales ni autenticación real.",
    },
  },
  en: {
    brand: "rentatelo.com",
    nav: {
      search: "Browse cars",
      howItWorks: "How it works",
      host: "For hosts",
      trips: "Trips",
      messages: "Messages",
      wishlist: "Saved",
      listYourCar: "List your car",
    },
    actions: {
      search: "Search availability",
      exploreCars: "Explore cars",
      becomeHost: "Become a host",
      contactHost: "Contact host",
      confirm: "Confirm booking",
      continue: "Continue",
      startHosting: "List my car",
      save: "Save",
      filters: "Filters",
      viewTrip: "View trip",
      switchLocale: "Español",
    },
    common: {
      perDay: "/day",
      seats: "seats",
      trips: "trips",
      instantBook: "Instant book",
      airportPickup: "Airport pickup",
      delivered: "Delivery available",
      superhost: "Top host",
      rating: "rating",
      backToSearch: "Back to results",
    },
    hero: {
      eyebrow: "Premium marketplace for Orlando trips",
      title:
        "Pick the exact car you want for Orlando, without counters or generic categories.",
      subtitle:
        "Book family SUVs, premium convertibles and executive sedans with delivery to MCO, International Drive hotels or resorts near Disney.",
      primaryCta: "Search availability",
      secondaryCta: "See how it works",
    },
    home: {
      valueProps: [
        {
          title: "Choose the exact car",
          detail:
            "You are not booking a generic class. You see the vehicle, the host and the full trip setup.",
        },
        {
          title: "Receive it where it helps",
          detail:
            "MCO, your hotel lobby, Disney Springs or Universal. Delivery is part of the product.",
        },
        {
          title: "Hosts and fleets with standards",
          detail:
            "Curated profiles, fast replies and vehicles prepared for family or business travel.",
        },
      ],
      categoriesTitle: "Curated for the way Orlando actually moves.",
      categoriesSubtitle:
        "From minivans for park days to premium convertibles for a high-end weekend.",
      convenienceTitle: "From the flight to the wheel with less friction.",
      convenienceSubtitle:
        "Designed for LATAM travelers who value clarity, speed and trust from the first tap.",
      trustTitle: "Visible trust, not empty marketing.",
      trustSubtitle:
        "Hosts with track record, clear rules and pickup details before checkout.",
      howTitle: "How to book in under three minutes.",
      howSteps: [
        {
          title: "Search around your real plan",
          detail:
            "Dates, pickup point, time and vehicle type from the first viewport.",
        },
        {
          title: "Compare with full context",
          detail: "Price, policies, delivery and reputation before you commit.",
        },
        {
          title: "Confirm and coordinate",
          detail:
            "Clear checkout, instant confirmation and direct access to your host.",
        },
      ],
      finalTitle: "A demo built to win clients, hosts and investors.",
      finalSubtitle:
        "The experience prioritizes web conversion with WhatsApp support, without looking like a generic travel template.",
      browseByMake: "Browse by make",
      browseByDestination: "Browse by destination",
      browseByExperience: "Browse by experience",
      popularSearches: "Popular searches",
      trustTripsCount: "trips completed",
      trustHostsCount: "verified hosts",
      trustRating: "average rating",
    },
    search: {
      title: "Results across Orlando and nearby stays",
      subtitle:
        "Filter by delivery, airport pickup, budget and car type without losing trip context.",
      noResults:
        "No vehicles matched those filters. Adjust price, category or pickup.",
      resultsLabel: "available cars",
      sortLabel: "Sort",
      sorts: {
        recommended: "Recommended",
        "price-low": "Lowest price",
        "price-high": "Highest price",
        rating: "Top rated",
      },
      filters: {
        category: "Category",
        maxPrice: "Max price / day",
        seats: "Minimum seats",
        transmission: "Transmission",
        delivery: "Delivery available",
        airportPickup: "Airport pickup",
        instantBook: "Instant book",
        rating: "Minimum rating",
        apply: "Apply filters",
        clear: "Reset",
      },
      where: "Where?",
      from: "From",
      until: "Until",
      searchCta: "Search",
      noResultsSuggestion: "Try a different city or date",
    },
    vehicle: {
      overview: "Vehicle overview",
      includes: "What this car is great at",
      host: "Your host",
      policies: "Protection and policies",
      reviews: "Recent reviews",
      related: "You may also like",
      bookCard: "Booking summary",
      pickupOptions: "Delivery and pickup options",
      allStarHost: "All-Star Host",
      instantBook: "Book now",
      perDay: "/day",
      trips: "trips",
    },
    checkout: {
      title: "A simple, calm checkout built for demos.",
      subtitle:
        "No real payment. Everything is designed to communicate trust and operational clarity.",
      guestInfo: "Guest details",
      payment: "Payment and guarantee",
      protection: "Protection and policies",
      review: "Review before confirming",
    },
    confirmed: {
      title: "Booking confirmed.",
      subtitle:
        "Your host already has the trip information and the delivery point is locked in.",
      instructions: "Pickup instructions",
      contact: "Open messages with your host",
      calendar: "Add to calendar",
      continue: "See my trips",
    },
    howItWorks: {
      title: "How rentatelo.com works",
      subtitle:
        "A rental flow made for travelers who want clarity from booking to handoff.",
      steps: [
        {
          title: "1. Start from your pickup point",
          detail:
            "MCO, your hotel or theme-park areas. The experience adapts to that context.",
        },
        {
          title: "2. Pick the exact car",
          detail:
            "Each page shows true price, policies, delivery options, host and reviews.",
        },
        {
          title: "3. Confirm and coordinate",
          detail:
            "You get a clean summary, instructions and direct access to the host.",
        },
      ],
      trustTitle: "Why it feels different",
    },
    host: {
      title: "Turn your fleet into a premium booking experience.",
      subtitle:
        "List SUVs, minivans and premium cars with delivery to the most relevant Orlando and Miami pickup points.",
      calculator: "Earnings calculator",
      benefits: "Why list here",
      listYourCar: "List my car",
      wizardTitle: "Upload your car in minutes",
    },
    account: {
      tripsTitle: "My trips",
      messagesTitle: "Messages",
      wishlistTitle: "My saved cars",
    },
    footer: {
      tagline: "Premium marketplace for LATAM travelers headed to Orlando.",
      note: "Prototype demo. No real payments or real authentication are enabled.",
    },
  },
};

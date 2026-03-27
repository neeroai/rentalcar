import type { AssetImage } from "@/lib/types";

function stockAsset(
  src: string,
  altEs: string,
  altEn: string,
  sourceName = "Unsplash",
): AssetImage {
  return {
    src,
    alt: {
      es: altEs,
      en: altEn,
    },
    sourceType: "stock",
    sourceName,
    sourceUrl: src,
  };
}

function aiAsset(src: string, altEs: string, altEn: string): AssetImage {
  return {
    src,
    alt: {
      es: altEs,
      en: altEn,
    },
    sourceType: "ai",
    sourceName: "Google Nano Banana 2",
    sourceUrl: src,
  };
}

export const editorialImages = {
  homeHero: aiAsset(
    "/images/editorial/home-hero.webp",
    "Familia latinoamericana de espaldas mirando el atardecer en Clearwater Beach con SUV al fondo",
    "Latin American family facing the Clearwater Beach sunset with SUV visible behind them",
  ),
  homeOrlando: aiAsset(
    "/images/editorial/home-orlando.webp",
    "Lake Eola Park en Orlando al golden hour con fuente iluminada y cisnes",
    "Lake Eola Park in Orlando at golden hour with lit fountain and swans",
  ),
  homeMiami: aiAsset(
    "/images/editorial/home-miami.webp",
    "Ocean Drive en Miami Beach al blue hour con neon Art Deco y palmeras",
    "Ocean Drive in Miami Beach at blue hour with Art Deco neon and palm trees",
  ),
  homeQuote: aiAsset(
    "/images/editorial/home-quote.webp",
    "Mujer viajera latinoamericana riendo frente a mural de Wynwood Miami",
    "Latin American woman traveler laughing in front of a Wynwood Miami mural",
  ),
  nightOperations: aiAsset(
    "/images/editorial/night-operations.webp",
    "Overseas Highway en los Florida Keys al atardecer desapareciendo en el horizonte oceánico",
    "Overseas Highway in the Florida Keys at dusk disappearing into the ocean horizon",
  ),
  searchHero: aiAsset(
    "/images/editorial/search-hero.webp",
    "SUV compacta en movimiento en la A1A costera con el Atlántico visible",
    "Compact SUV in motion on the coastal A1A highway with the Atlantic visible",
  ),
  searchZone: aiAsset(
    "/images/editorial/search-zone.webp",
    "Sedán eficiente en la entrada de Wekiwa Springs State Park entre robles centenarios",
    "Efficient sedan at the entrance of Wekiwa Springs State Park among ancient oaks",
  ),
  howHero: aiAsset(
    "/images/editorial/how-hero.webp",
    "Familia latinoamericana cargando minivan para road trip en Lake Buena Vista",
    "Latin American family loading a minivan for a road trip in Lake Buena Vista",
  ),
  howStepArrival: aiAsset(
    "/images/editorial/how-step-arrival.webp",
    "Host con SUV compacta en zona de pickup MCO con energía de bienvenida",
    "Host with compact SUV at MCO pickup zone with welcoming energy",
  ),
  howStepCompare: aiAsset(
    "/images/editorial/how-step-compare.webp",
    "Manos revisando opciones de vehículos en teléfono desde la playa de Clearwater",
    "Hands browsing vehicle options on phone from Clearwater Beach",
  ),
  howStepConfirm: aiAsset(
    "/images/editorial/how-step-confirm.webp",
    "Entrega de minivan frente a waterfront en Lake Buena Vista al inicio del road trip",
    "Minivan handoff at Lake Buena Vista waterfront at the start of the road trip",
  ),
  experienceMco: aiAsset(
    "/images/editorial/experience-mco.webp",
    "SUV compacta en MCO bajo cielo azul de Florida — el trip comienza",
    "Compact SUV at MCO under Florida blue sky — the trip begins",
  ),
  experienceParks: aiAsset(
    "/images/editorial/experience-parks.webp",
    "Minivan con puerta abierta y equipo de playa en Clearwater Beach",
    "Minivan with open door and beach gear at Clearwater Beach",
  ),
  experienceEpic: aiAsset(
    "/images/editorial/experience-epic.webp",
    "SUV en International Drive de Orlando al blue hour con luces de la noche",
    "SUV on International Drive Orlando at blue hour with night lights",
  ),
  roadtripA1A: aiAsset(
    "/images/editorial/roadtrip-a1a.webp",
    "Vista desde el tablero conduciendo por la A1A costera de Florida con el Atlántico a la derecha",
    "Dashboard POV driving the coastal Florida A1A with the Atlantic Ocean to the right",
  ),
} as const;

export const vehicleGalleryByCategory = {
  economy: [
    stockAsset(
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=80",
      "Sedán eficiente listo para moverse por Orlando",
      "Efficient sedan ready to move around Orlando",
    ),
    stockAsset(
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80",
      "Sedán cómodo para trayectos entre aeropuerto, hotel y parques",
      "Comfortable sedan for airport, hotel, and park transfers",
    ),
    stockAsset(
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1400&q=80",
      "Detalle lateral de un sedán de alquiler orientado a viajeros",
      "Side detail of a rental sedan built for travelers",
    ),
  ],
  "compact-suv": [
    stockAsset(
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",
      "SUV compacta para una llegada familiar a Orlando",
      "Compact SUV for a family arrival in Orlando",
    ),
    stockAsset(
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80",
      "SUV compacta con espacio para maletas y cochecitos",
      "Compact SUV with room for luggage and strollers",
    ),
    stockAsset(
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1400&q=80",
      "SUV compacta para hoteles, MCO y Lake Buena Vista",
      "Compact SUV for hotels, MCO, and Lake Buena Vista stays",
    ),
  ],
  minivan: [
    stockAsset(
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80",
      "Minivan preparada para grupos y equipaje grande",
      "Minivan prepared for groups and large luggage",
    ),
    stockAsset(
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",
      "Minivan lista para hoteles y parques en Orlando",
      "Minivan ready for Orlando hotels and theme parks",
    ),
    stockAsset(
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1400&q=80",
      "Detalle de una minivan familiar para reservas en Orlando",
      "Family minivan detail for Orlando bookings",
    ),
  ],
  "three-row-suv": [
    stockAsset(
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",
      "SUV de tres filas para grupos que llegan a Orlando",
      "Three-row SUV for groups arriving in Orlando",
    ),
    stockAsset(
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80",
      "SUV grande para equipaje y traslados hoteleros",
      "Large SUV for luggage-heavy hotel transfers",
    ),
    stockAsset(
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80",
      "SUV de tres filas orientada a familias multigeneracionales",
      "Three-row SUV aimed at multigenerational families",
    ),
  ],
  premium: [
    stockAsset(
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1400&q=80",
      "Vehículo premium para una llegada más silenciosa y tecnológica",
      "Premium vehicle for a quieter, more technology-led arrival",
    ),
    stockAsset(
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80",
      "Vehículo premium para convenciones o escapadas largas en Orlando",
      "Premium vehicle for conventions or longer Orlando stays",
    ),
    stockAsset(
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",
      "Toma editorial de un vehículo premium listo para entrega en resort",
      "Editorial shot of a premium vehicle ready for resort delivery",
    ),
  ],
} as const;

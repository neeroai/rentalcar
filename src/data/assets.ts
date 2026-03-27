import type { AssetImage } from '@/lib/types';

function stockAsset(
  src: string,
  altEs: string,
  altEn: string,
  sourceName = 'Unsplash'
): AssetImage {
  return {
    src,
    alt: {
      es: altEs,
      en: altEn,
    },
    sourceType: 'stock',
    sourceName,
    sourceUrl: src,
  };
}

export const editorialImages = {
  homeHero: stockAsset(
    'https://images.unsplash.com/photo-1707505175638-81b09e30cac8?auto=format&fit=crop&w=1800&q=80',
    'Paisaje de Orlando con lago, palmeras y cielo abierto para presentar el destino',
    'Orlando landscape with a lake, palm trees, and open sky to introduce the destination'
  ),
  homeOrlando: stockAsset(
    'https://images.unsplash.com/photo-1739648865093-8a517b3ea5dc?auto=format&fit=crop&w=1400&q=80',
    'Atardecer sobre Lake Eola en Orlando como imagen editorial del destino principal',
    'Sunset over Lake Eola in Orlando as the editorial image for the primary destination'
  ),
  homeMiami: stockAsset(
    'https://images.unsplash.com/photo-1748380606266-fc4bf7999f35?auto=format&fit=crop&w=1200&q=80',
    'Skyline real de Miami como extensión secundaria del viaje',
    'Actual Miami skyline used as a secondary extension of the trip'
  ),
  homeQuote: stockAsset(
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
    'Familia viajera preparando un trayecto en Orlando',
    'Traveling family preparing for an Orlando trip'
  ),
  nightOperations: stockAsset(
    'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=1600&q=80',
    'Operación nocturna de viajes y hoteles en Orlando',
    'Night-time Orlando travel and hotel operations'
  ),
  searchHero: stockAsset(
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80',
    'Vehículo listo para entrega en aeropuerto u hotel de Orlando',
    'Vehicle ready for airport or hotel delivery in Orlando'
  ),
  searchZone: stockAsset(
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80',
    'Auto eficiente para moverse entre MCO, hoteles y parques',
    'Efficient car for moving between MCO, hotels, and parks'
  ),
  hostHero: stockAsset(
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
    'Host preparando un vehículo para una entrega en Orlando',
    'Host preparing a vehicle for handoff in Orlando'
  ),
  howHero: stockAsset(
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1800&q=80',
    'Historia visual de una llegada a Orlando',
    'Visual story of an Orlando arrival'
  ),
  howStepArrival: stockAsset(
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    'Auto listo para pickup después de aterrizar en MCO',
    'Car ready for pickup after landing at MCO'
  ),
  howStepCompare: stockAsset(
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    'Vehículo eficiente para comparar opciones de viaje en Orlando',
    'Efficient vehicle for comparing Orlando trip options'
  ),
  howStepConfirm: stockAsset(
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    'Entrega coordinada para una familia que va a parques temáticos',
    'Coordinated handoff for a family heading to the theme parks'
  ),
  experienceMco: stockAsset(
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    'SUV familiar para llegadas MCO',
    'Family SUV for MCO arrivals'
  ),
  experienceParks: stockAsset(
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    'Minivan lista para días de parques y resorts',
    'Minivan ready for park days and resort stays'
  ),
  experienceEpic: stockAsset(
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    'Vehículo compacto para semanas de Epic y Universal',
    'Compact vehicle for Epic and Universal weeks'
  ),
} as const;

export const vehicleGalleryByCategory = {
  economy: [
    stockAsset(
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=80',
      'Sedán eficiente listo para moverse por Orlando',
      'Efficient sedan ready to move around Orlando'
    ),
    stockAsset(
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80',
      'Sedán cómodo para trayectos entre aeropuerto, hotel y parques',
      'Comfortable sedan for airport, hotel, and park transfers'
    ),
    stockAsset(
      'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1400&q=80',
      'Detalle lateral de un sedán de alquiler orientado a viajeros',
      'Side detail of a rental sedan built for travelers'
    ),
  ],
  'compact-suv': [
    stockAsset(
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80',
      'SUV compacta para una llegada familiar a Orlando',
      'Compact SUV for a family arrival in Orlando'
    ),
    stockAsset(
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80',
      'SUV compacta con espacio para maletas y cochecitos',
      'Compact SUV with room for luggage and strollers'
    ),
    stockAsset(
      'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1400&q=80',
      'SUV compacta para hoteles, MCO y Lake Buena Vista',
      'Compact SUV for hotels, MCO, and Lake Buena Vista stays'
    ),
  ],
  minivan: [
    stockAsset(
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80',
      'Minivan preparada para grupos y equipaje grande',
      'Minivan prepared for groups and large luggage'
    ),
    stockAsset(
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80',
      'Minivan lista para hoteles y parques en Orlando',
      'Minivan ready for Orlando hotels and theme parks'
    ),
    stockAsset(
      'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1400&q=80',
      'Detalle de una minivan familiar para reservas en Orlando',
      'Family minivan detail for Orlando bookings'
    ),
  ],
  'three-row-suv': [
    stockAsset(
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80',
      'SUV de tres filas para grupos que llegan a Orlando',
      'Three-row SUV for groups arriving in Orlando'
    ),
    stockAsset(
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80',
      'SUV grande para equipaje y traslados hoteleros',
      'Large SUV for luggage-heavy hotel transfers'
    ),
    stockAsset(
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80',
      'SUV de tres filas orientada a familias multigeneracionales',
      'Three-row SUV aimed at multigenerational families'
    ),
  ],
  premium: [
    stockAsset(
      'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1400&q=80',
      'Vehículo premium para una llegada más silenciosa y tecnológica',
      'Premium vehicle for a quieter, more technology-led arrival'
    ),
    stockAsset(
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80',
      'Vehículo premium para convenciones o escapadas largas en Orlando',
      'Premium vehicle for conventions or longer Orlando stays'
    ),
    stockAsset(
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80',
      'Toma editorial de un vehículo premium listo para entrega en resort',
      'Editorial shot of a premium vehicle ready for resort delivery'
    ),
  ],
} as const;

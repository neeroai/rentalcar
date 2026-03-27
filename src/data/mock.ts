import { vehicleGalleryByCategory } from '@/data/assets';
import type {
  CheckoutAddon,
  DeliveryOption,
  Host,
  LocalizedText,
  MessageThread,
  Policy,
  Trip,
  Vehicle,
  VehicleCategory,
} from '@/lib/types';

const l = (es: string, en: string): LocalizedText => ({ es, en });

const deliveryOptions: Record<string, DeliveryOption> = {
  mco: {
    label: l('Aeropuerto MCO', 'MCO Airport'),
    detail: l(
      'Entrega coordinada en garage C o terminal B según la llegada.',
      'Coordinated handoff in garage C or terminal B depending on arrival.'
    ),
    fee: 28,
  },
  disney: {
    label: l('Resorts Disney / Lake Buena Vista', 'Disney / Lake Buena Vista resorts'),
    detail: l(
      'Entrega en lobby o valet para familias que se mueven entre parques y hotel.',
      'Lobby or valet delivery for families moving between parks and hotels.'
    ),
    fee: 24,
  },
  universal: {
    label: l('Epic / Universal / I-Drive', 'Epic / Universal / I-Drive'),
    detail: l(
      'Hoteles del corredor Universal, Epic y International Drive.',
      'Hotels across the Universal, Epic, and International Drive corridor.'
    ),
    fee: 22,
  },
  downtown: {
    label: l('Downtown Orlando / Convention', 'Downtown Orlando / Convention'),
    detail: l(
      'Pensado para convenciones, estadías cortas y reuniones cerca de Orange County.',
      'Built for conventions, short stays, and meetings near Orange County.'
    ),
    fee: 26,
  },
  mia: {
    label: l('Miami como extensión', 'Miami extension'),
    detail: l(
      'Disponible solo como extensión secundaria para viajeros que combinan destinos.',
      'Available only as a secondary extension for travelers combining destinations.'
    ),
    fee: 65,
  },
};

const policies: Policy[] = [
  {
    title: l('Cancelación flexible hasta 48h', 'Flexible cancellation up to 48h'),
    detail: l(
      'Reembolso completo si cancelas hasta 48 horas antes del pickup.',
      'Full refund if you cancel up to 48 hours before pickup.'
    ),
  },
  {
    title: l('Kilometraje pensado para parques', 'Mileage built for park days'),
    detail: l(
      'Incluye 250 millas por día para moverte entre aeropuerto, hoteles y parques.',
      'Includes 250 miles per day for moving between airport, hotels, and theme parks.'
    ),
  },
  {
    title: l('Soporte y coordinación clara', 'Clear support and coordination'),
    detail: l(
      'Antes de confirmar ves host, punto de entrega, fees y cobertura demo.',
      'Before booking you see the host, handoff point, fees, and demo protection.'
    ),
  },
];

const hosts: Host[] = [
  {
    name: 'Camila Rivera',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    badge: l('Top host de llegadas MCO', 'Top host for MCO arrivals'),
    responseRate: '99%',
    responseTime: l('Responde en 5 min', 'Replies in 5 min'),
    bio: l(
      'Especialista en entregas a MCO, hoteles familiares y estadías en Lake Buena Vista.',
      'Specialist in MCO handoffs, family hotels, and Lake Buena Vista stays.'
    ),
    isSuperhost: true,
  },
  {
    name: 'Mariana Costa',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    badge: l('Especialista en minivans', 'Minivan specialist'),
    responseRate: '98%',
    responseTime: l('Responde en 7 min', 'Replies in 7 min'),
    bio: l(
      'Opera SUVs y minivans listas para cochecitos, maletas grandes y semanas de parques.',
      'Runs SUVs and minivans ready for strollers, larger luggage, and theme park weeks.'
    ),
    isSuperhost: true,
  },
  {
    name: 'Daniel Vega',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    badge: l('Cobertura convention + premium', 'Convention + premium coverage'),
    responseRate: '97%',
    responseTime: l('Responde en 9 min', 'Replies in 9 min'),
    bio: l(
      'Cubre hoteles premium, convenciones y entregas puntuales en Downtown Orlando.',
      'Covers premium hotels, conventions, and timed handoffs in Downtown Orlando.'
    ),
    isSuperhost: true,
  },
];

const categoryMeta: Record<
  VehicleCategory,
  {
    badge: [LocalizedText, LocalizedText];
    features: string[];
    intro: LocalizedText;
    highlights: [LocalizedText, LocalizedText];
  }
> = {
  economy: {
    badge: [l('Budget inteligente', 'Smart budget'), l('Fácil de estacionar', 'Easy to park')],
    features: ['Apple CarPlay', 'Rear camera', 'Fuel efficient', '2 suitcases'],
    intro: l(
      'El sedán eficiente para moverse entre aeropuerto, hotel y parques sin pagar de más.',
      'The efficient sedan for airport, hotel, and park transfers without overpaying.'
    ),
    highlights: [
      l(
        'Ideal para parejas o familias pequeñas que priorizan precio y claridad operativa.',
        'Ideal for couples or smaller families prioritizing price and operational clarity.'
      ),
      l(
        'Muy fuerte para estadías en International Drive, Universal y semanas ligeras de parques.',
        'Very strong for International Drive stays, Universal, and lighter park weeks.'
      ),
    ],
  },
  'compact-suv': {
    badge: [l('Favorita familiar', 'Family favorite'), l('Maletas + stroller', 'Luggage + stroller')],
    features: ['Apple CarPlay', 'Adaptive cruise', 'Rear camera', 'Stroller-friendly cargo'],
    intro: l(
      'La categoría core de Orlando para familias de 4 a 5 personas con equipaje real.',
      'The core Orlando category for 4 to 5-person families with real luggage.'
    ),
    highlights: [
      l(
        'Combina altura, equipaje y facilidad de manejo para MCO, Disney y Universal.',
        'Balances height, cargo, and easy driving across MCO, Disney, and Universal.'
      ),
      l(
        'La opción más consistente para viajeros LATAM que quieren resolver todo con un solo auto.',
        'The most consistent option for LATAM travelers who want one car to solve the whole trip.'
      ),
    ],
  },
  minivan: {
    badge: [l('Crítica para Orlando', 'Critical for Orlando'), l('7-8 pasajeros reales', 'True 7-8 seats')],
    features: ['Sliding doors', 'Tri-zone climate', 'USB in all rows', 'Large cargo area'],
    intro: l(
      'La categoría que más sentido hace para Disney, Universal y grupos con mucho equipaje.',
      'The category that makes the most sense for Disney, Universal, and luggage-heavy groups.'
    ),
    highlights: [
      l(
        'Pensada para cochecitos, maletas grandes y días seguidos de parques.',
        'Built for strollers, larger luggage, and consecutive park days.'
      ),
      l(
        'También es la más fuerte para semanas de Epic y estancias familiares largas.',
        'It is also the strongest fit for Epic season and longer family stays.'
      ),
    ],
  },
  'three-row-suv': {
    badge: [l('3 filas reales', 'True 3 rows'), l('Ideal para grupos', 'Best for groups')],
    features: ['Third-row seating', 'Large cargo area', 'Apple CarPlay', 'Comfort suspension'],
    intro: l(
      'La SUV grande para grupos que quieren más flexibilidad que una minivan.',
      'The larger SUV for groups wanting more flexibility than a minivan.'
    ),
    highlights: [
      l(
        'Funciona muy bien para familias multigeneracionales y estadías con mucho movimiento.',
        'Works very well for multigenerational families and busier stays.'
      ),
      l(
        'Buena alternativa para convenciones o viajes premium sin saltar a un precio extremo.',
        'A strong alternative for conventions or premium stays without jumping to extreme pricing.'
      ),
    ],
  },
  premium: {
    badge: [l('Nicho aspiracional', 'Aspirational niche'), l('Convenciones + hotel premium', 'Convention + premium hotel')],
    features: ['Panoramic roof', 'Quiet cabin', 'Premium audio', 'Fast charging'],
    intro: l(
      'Un premium secundario para viajeros tech, estadías largas o convenciones.',
      'A secondary premium pick for tech-forward travelers, longer stays, or conventions.'
    ),
    highlights: [
      l(
        'No domina la flota, pero sí ayuda a demostrar una oferta más completa y moderna.',
        'It does not dominate the fleet, but it helps show a fuller and more modern offer.'
      ),
      l(
        'Especialmente útil para Downtown Orlando, hoteles premium y reuniones con entrega puntual.',
        'Especially useful for Downtown Orlando, premium hotels, and timed meeting arrivals.'
      ),
    ],
  },
};

function makeReview(
  id: string,
  author: string,
  date: string,
  rating: number,
  es: string,
  en: string
) {
  return {
    id,
    author,
    date,
    rating,
    comment: l(es, en),
  };
}

function makeVehicle(
  vehicle: Omit<Vehicle, 'policies' | 'badges' | 'features' | 'highlights' | 'intro' | 'images'> & {
    badges?: LocalizedText[];
    features?: string[];
    highlights?: LocalizedText[];
    intro?: LocalizedText;
  }
): Vehicle {
  const meta = categoryMeta[vehicle.category];

  return {
    ...vehicle,
    badges: vehicle.badges ?? meta.badge,
    features: vehicle.features ?? meta.features,
    highlights: vehicle.highlights ?? meta.highlights,
    intro: vehicle.intro ?? meta.intro,
    images: [...vehicleGalleryByCategory[vehicle.category]],
    policies,
  };
}

export const vehicles: Vehicle[] = [
  makeVehicle({
    slug: 'toyota-corolla-mco-easy',
    city: 'orlando',
    make: 'Toyota',
    model: 'Corolla LE',
    year: 2025,
    category: 'economy',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePerDay: 56,
    rating: 4.93,
    tripsCount: 204,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    host: hosts[0],
    reviews: [
      makeReview(
        'r1',
        'Paula V.',
        '2026-02-14',
        5,
        'Muy fácil para movernos entre MCO, hotel y Universal sin gastar de más.',
        'Very easy for moving between MCO, our hotel, and Universal without overspending.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'hyundai-elantra-lake-buena',
    city: 'orlando',
    make: 'Hyundai',
    model: 'Elantra SE',
    year: 2025,
    category: 'economy',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePerDay: 58,
    rating: 4.91,
    tripsCount: 181,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.disney, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    host: hosts[0],
    reviews: [
      makeReview(
        'r2',
        'Juan D.',
        '2026-01-29',
        4.9,
        'Muy práctico para una semana de parques con presupuesto controlado.',
        'Very practical for a park week with a controlled budget.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'nissan-sentra-i-drive-hop',
    city: 'orlando',
    make: 'Nissan',
    model: 'Sentra SV',
    year: 2025,
    category: 'economy',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePerDay: 54,
    rating: 4.88,
    tripsCount: 165,
    deliveryOptions: [deliveryOptions.universal, deliveryOptions.mco],
    airportPickup: true,
    instantBook: true,
    host: hosts[0],
    reviews: [
      makeReview(
        'r3',
        'Sofia M.',
        '2026-02-02',
        4.8,
        'Cumplió perfecto para hotel en International Drive y días cortos de parque.',
        'Perfect fit for an International Drive hotel stay and shorter park days.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'toyota-camry-convention-link',
    city: 'orlando',
    make: 'Toyota',
    model: 'Camry LE',
    year: 2025,
    category: 'economy',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    pricePerDay: 68,
    rating: 4.95,
    tripsCount: 149,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.downtown],
    airportPickup: true,
    instantBook: true,
    host: hosts[2],
    badges: [l('Eficiente + más espacio', 'Efficient + more room'), l('Convention friendly', 'Convention friendly')],
    reviews: [
      makeReview(
        'r4',
        'Carlos R.',
        '2026-03-01',
        5,
        'Llegó puntual al hotel y fue excelente para convención más un día en parques.',
        'It arrived on time at the hotel and worked great for a convention plus one park day.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'nissan-rogue-family-lane',
    city: 'orlando',
    make: 'Nissan',
    model: 'Rogue S',
    year: 2025,
    category: 'compact-suv',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePerDay: 78,
    rating: 4.97,
    tripsCount: 212,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.disney, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    host: hosts[1],
    reviews: [
      makeReview(
        'r5',
        'Laura C.',
        '2026-02-21',
        5,
        'Muy balanceada para dos niños, cochecito y maletas.',
        'Very well balanced for two kids, a stroller, and luggage.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'toyota-rav4-orlando-arrival',
    city: 'orlando',
    make: 'Toyota',
    model: 'RAV4 XLE',
    year: 2025,
    category: 'compact-suv',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    pricePerDay: 84,
    rating: 4.98,
    tripsCount: 196,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.disney, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    host: hosts[1],
    reviews: [
      makeReview(
        'r6',
        'Marcela G.',
        '2026-02-10',
        5,
        'Nos resolvió todo el viaje desde MCO hasta Lake Buena Vista.',
        'It solved the whole trip from MCO to Lake Buena Vista.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'kia-sportage-park-hopper',
    city: 'orlando',
    make: 'Kia',
    model: 'Sportage LX',
    year: 2025,
    category: 'compact-suv',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePerDay: 79,
    rating: 4.92,
    tripsCount: 171,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.disney, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    host: hosts[1],
    reviews: [
      makeReview(
        'r7',
        'Natalia S.',
        '2026-02-03',
        4.9,
        'La entrega fue muy clara y el espacio funcionó perfecto para una familia de cuatro.',
        'The handoff was very clear and the space worked perfectly for a family of four.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'honda-crv-resort-run',
    city: 'orlando',
    make: 'Honda',
    model: 'CR-V EX',
    year: 2025,
    category: 'compact-suv',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePerDay: 82,
    rating: 4.96,
    tripsCount: 162,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.disney],
    airportPickup: true,
    instantBook: true,
    host: hosts[1],
    reviews: [
      makeReview(
        'r8',
        'Fernanda T.',
        '2026-02-27',
        5,
        'Muy cómoda para resort, compras y días largos de parque.',
        'Very comfortable for resort stays, shopping, and long park days.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'hyundai-tucson-epic-loop',
    city: 'orlando',
    make: 'Hyundai',
    model: 'Tucson SEL',
    year: 2025,
    category: 'compact-suv',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    pricePerDay: 86,
    rating: 4.94,
    tripsCount: 138,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.universal, deliveryOptions.disney],
    airportPickup: true,
    instantBook: true,
    host: hosts[1],
    badges: [l('Muy fuerte para Epic', 'Strong for Epic'), l('Hotel + parques', 'Hotel + parks')],
    reviews: [
      makeReview(
        'r9',
        'Diego P.',
        '2026-03-08',
        5,
        'Ideal para semana de Universal + Epic con equipaje moderado.',
        'Ideal for a Universal + Epic week with moderate luggage.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'kia-carnival-grandtour',
    city: 'orlando',
    make: 'Kia',
    model: 'Carnival LX',
    year: 2025,
    category: 'minivan',
    seats: 8,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePerDay: 108,
    rating: 4.96,
    tripsCount: 118,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.disney, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    host: hosts[1],
    reviews: [
      makeReview(
        'r10',
        'Claudia N.',
        '2026-02-18',
        5,
        'La mejor opción para tres niños, cochecito doble y maletas grandes.',
        'The best option for three kids, a double stroller, and large luggage.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'chrysler-pacifica-resort-loop',
    city: 'orlando',
    make: 'Chrysler',
    model: 'Pacifica Touring L',
    year: 2025,
    category: 'minivan',
    seats: 7,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePerDay: 112,
    rating: 4.98,
    tripsCount: 126,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.disney, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    host: hosts[1],
    reviews: [
      makeReview(
        'r11',
        'Valeria A.',
        '2026-02-24',
        5,
        'Muy superior para una familia grande que hace Disney, outlets y hotel.',
        'Much better for a large family doing Disney, outlets, and hotel transfers.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'toyota-sienna-park-transfer',
    city: 'orlando',
    make: 'Toyota',
    model: 'Sienna LE',
    year: 2025,
    category: 'minivan',
    seats: 8,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    pricePerDay: 118,
    rating: 4.99,
    tripsCount: 102,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.disney, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    host: hosts[1],
    reviews: [
      makeReview(
        'r12',
        'Ana M.',
        '2026-03-04',
        5,
        'Silenciosa, enorme y perfecta para una semana completa de parques.',
        'Quiet, roomy, and perfect for a full park week.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'chrysler-pacifica-epic-family',
    city: 'orlando',
    make: 'Chrysler',
    model: 'Pacifica Select',
    year: 2025,
    category: 'minivan',
    seats: 7,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePerDay: 114,
    rating: 4.94,
    tripsCount: 97,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.universal, deliveryOptions.disney],
    airportPickup: true,
    instantBook: true,
    host: hosts[1],
    badges: [l('Epic week ready', 'Epic week ready'), l('Favorita para grupos', 'Best for groups')],
    reviews: [
      makeReview(
        'r13',
        'María E.',
        '2026-03-10',
        4.9,
        'Muy buena para una semana enfocada en Universal y Epic.',
        'Very good for a week focused on Universal and Epic.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'ford-explorer-convention-drive',
    city: 'orlando',
    make: 'Ford',
    model: 'Explorer XLT',
    year: 2025,
    category: 'three-row-suv',
    seats: 7,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePerDay: 132,
    rating: 4.95,
    tripsCount: 91,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.downtown, deliveryOptions.disney],
    airportPickup: true,
    instantBook: true,
    host: hosts[2],
    reviews: [
      makeReview(
        'r14',
        'Sebastián H.',
        '2026-02-20',
        4.9,
        'Excelente para convención, hotel y un grupo familiar de seis.',
        'Excellent for a convention, hotel stay, and a family group of six.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'chevrolet-traverse-lake-buena',
    city: 'orlando',
    make: 'Chevrolet',
    model: 'Traverse LT',
    year: 2025,
    category: 'three-row-suv',
    seats: 7,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePerDay: 136,
    rating: 4.93,
    tripsCount: 84,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.disney, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    host: hosts[2],
    reviews: [
      makeReview(
        'r15',
        'Lucía F.',
        '2026-02-11',
        4.9,
        'Gran alternativa cuando no queríamos minivan pero sí mucha capacidad.',
        'A great alternative when we did not want a minivan but still needed real capacity.'
      ),
    ],
  }),
  makeVehicle({
    slug: 'tesla-model-y-lake-nona',
    city: 'orlando',
    make: 'Tesla',
    model: 'Model Y',
    year: 2025,
    category: 'premium',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Electric',
    pricePerDay: 148,
    rating: 4.97,
    tripsCount: 73,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.downtown, deliveryOptions.disney],
    airportPickup: true,
    instantBook: true,
    host: hosts[2],
    reviews: [
      makeReview(
        'r16',
        'Andrés B.',
        '2026-03-06',
        5,
        'Perfecto para convención y hotel premium, con entrega muy puntual.',
        'Perfect for a convention and premium hotel stay, with a very punctual handoff.'
      ),
    ],
  }),
];

export const pickupOptions = [
  { value: 'mco', label: l('MCO Airport', 'MCO Airport') },
  { value: 'disney', label: l('Disney resorts', 'Disney resorts') },
  { value: 'universal', label: l('Epic / Universal / I-Drive', 'Epic / Universal / I-Drive') },
  { value: 'downtown', label: l('Convention / Downtown', 'Convention / Downtown') },
  { value: 'mia', label: l('Miami extension', 'Miami extension') },
];

export const vehicleCategories = [
  { value: 'compact-suv', label: l('SUV compacta', 'Compact SUV') },
  { value: 'minivan', label: l('Minivan', 'Minivan') },
  { value: 'economy', label: l('Eficiente', 'Efficient') },
  { value: 'three-row-suv', label: l('SUV 3 filas', '3-row SUV') },
  { value: 'premium', label: l('Premium', 'Premium') },
] as const;

export const checkoutAddons: CheckoutAddon[] = [
  {
    id: 'child-seat',
    title: l('Silla infantil', 'Child seat'),
    detail: l('Instalada antes del pickup.', 'Installed before pickup.'),
    price: 18,
  },
  {
    id: 'stroller-guard',
    title: l('Protector para stroller y equipaje', 'Stroller and luggage setup'),
    detail: l(
      'Organización rápida del maletero para familias con cochecito.',
      'Quick trunk setup for families traveling with a stroller.'
    ),
    price: 14,
  },
  {
    id: 'express-delivery',
    title: l('Entrega express', 'Express delivery'),
    detail: l('Ventana reducida y handoff prioritario.', 'Reduced window and priority handoff.'),
    price: 24,
  },
];

export const trips: Trip[] = [
  {
    id: 'trip-upcoming-1',
    vehicleSlug: 'nissan-rogue-family-lane',
    status: 'upcoming',
    pickupLabel: l('MCO Terminal B · viernes 18 abril', 'MCO Terminal B · Friday Apr 18'),
    startDate: '2026-04-18',
    endDate: '2026-04-22',
    total: 472,
  },
  {
    id: 'trip-upcoming-2',
    vehicleSlug: 'tesla-model-y-lake-nona',
    status: 'upcoming',
    pickupLabel: l(
      'JW Marriott Orlando · martes 12 mayo',
      'JW Marriott Orlando · Tuesday May 12'
    ),
    startDate: '2026-05-12',
    endDate: '2026-05-15',
    total: 608,
  },
  {
    id: 'trip-completed-1',
    vehicleSlug: 'kia-carnival-grandtour',
    status: 'completed',
    pickupLabel: l(
      'Universal Endless Summer · marzo 2026',
      'Universal Endless Summer · March 2026'
    ),
    startDate: '2026-03-02',
    endDate: '2026-03-08',
    total: 754,
  },
];

export const messageThreads: MessageThread[] = [
  {
    id: 'thread-1',
    vehicleSlug: 'nissan-rogue-family-lane',
    hostName: hosts[1].name,
    hostAvatar: hosts[1].avatar,
    subject: l('Pickup en MCO confirmado', 'MCO pickup confirmed'),
    preview: l(
      'Te espero en garage C, fila 4. Te envío foto del punto exacto 20 min antes.',
      'I will meet you at garage C, row 4. I will send the exact handoff photo 20 minutes before arrival.'
    ),
    lastMessageAt: '2026-04-17T18:30:00.000Z',
    unread: 1,
  },
  {
    id: 'thread-2',
    vehicleSlug: 'tesla-model-y-lake-nona',
    hostName: hosts[2].name,
    hostAvatar: hosts[2].avatar,
    subject: l('Entrega en hotel', 'Hotel delivery'),
    preview: l(
      'Podemos dejar el auto con valet si prefieres una llegada más rápida.',
      'We can leave the car with valet if you prefer a faster arrival.'
    ),
    lastMessageAt: '2026-05-10T14:00:00.000Z',
    unread: 0,
  },
];

export const wishlistedSlugs = [
  'toyota-rav4-orlando-arrival',
  'chrysler-pacifica-resort-loop',
  'tesla-model-y-lake-nona',
];

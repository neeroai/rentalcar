import type {
  CheckoutAddon,
  DeliveryOption,
  Host,
  LocalizedText,
  MessageThread,
  Policy,
  Trip,
  Vehicle,
} from "@/lib/types";

const l = (es: string, en: string): LocalizedText => ({ es, en });

const deliveryOptions: Record<string, DeliveryOption> = {
  mco: {
    label: l("Aeropuerto MCO", "MCO Airport"),
    detail: l(
      "Entrega coordinada en garage C o terminal B.",
      "Coordinated handoff at garage C or terminal B.",
    ),
    fee: 28,
  },
  disney: {
    label: l("Resorts Disney", "Disney area resorts"),
    detail: l(
      "Entrega a lobby o valet en Lake Buena Vista.",
      "Lobby or valet delivery in Lake Buena Vista.",
    ),
    fee: 24,
  },
  universal: {
    label: l("Universal / I-Drive", "Universal / I-Drive"),
    detail: l(
      "Hoteles de International Drive y zona Universal.",
      "International Drive hotels and Universal area stays.",
    ),
    fee: 22,
  },
  brickell: {
    label: l("Brickell o Downtown Miami", "Brickell or Downtown Miami"),
    detail: l(
      "Disponible para viajeros que combinan Orlando y Miami.",
      "Available for travelers combining Orlando and Miami.",
    ),
    fee: 65,
  },
};

const policies: Policy[] = [
  {
    title: l(
      "Cancelación flexible hasta 48h",
      "Flexible cancellation up to 48h",
    ),
    detail: l(
      "Reembolso completo si cancelas hasta 48 horas antes del pickup.",
      "Full refund when canceled up to 48 hours before pickup.",
    ),
  },
  {
    title: l("Kilometraje amplio", "Generous mileage"),
    detail: l(
      "Incluye 250 millas por día para parques, reuniones o road trips cortos.",
      "Includes 250 miles per day for parks, meetings or short road trips.",
    ),
  },
  {
    title: l("Protección y asistencia", "Protection and support"),
    detail: l(
      "Cobertura demo y asistencia al viajero explicadas antes de confirmar.",
      "Demo protection and traveler support are explained before confirmation.",
    ),
  },
];

const hosts: Host[] = [
  {
    name: "Camila Rivera",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    badge: l("Top host en Orlando", "Top host in Orlando"),
    responseRate: "99%",
    responseTime: l("Responde en 5 min", "Replies in 5 min"),
    bio: l(
      "Especialista en entregas a MCO y hoteles familiares en Lake Buena Vista.",
      "Specialist in MCO and family-hotel handoffs across Lake Buena Vista.",
    ),
    isSuperhost: true,
  },
  {
    name: "Daniel Vega",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    badge: l("Flota ejecutiva", "Executive fleet"),
    responseRate: "97%",
    responseTime: l("Responde en 9 min", "Replies in 9 min"),
    bio: l(
      "Trabaja con viajeros de negocios, hoteles premium y entregas puntuales.",
      "Works with business travelers, premium hotels and timed arrivals.",
    ),
    isSuperhost: true,
  },
  {
    name: "Mariana Costa",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    badge: l("Especialista en familias", "Family travel specialist"),
    responseRate: "98%",
    responseTime: l("Responde en 7 min", "Replies in 7 min"),
    bio: l(
      "Opera SUVs y minivans listas para parques, cochecitos y equipaje.",
      "Runs SUVs and minivans ready for park days, strollers and luggage.",
    ),
    isSuperhost: true,
  },
];

const categoryImages = {
  suv: [
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
  ],
  convertible: [
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1400&q=80",
  ],
  luxury: [
    "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1400&q=80",
  ],
  economy: [
    "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=80",
  ],
  van: [
    "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80",
  ],
  business: [
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",
  ],
};

function makeVehicle(vehicle: Omit<Vehicle, "policies">): Vehicle {
  return {
    ...vehicle,
    policies,
  };
}

export const vehicles: Vehicle[] = [
  makeVehicle({
    slug: "toyota-highlander-sunrise",
    city: "orlando",
    make: "Toyota",
    model: "Highlander Hybrid",
    year: 2024,
    category: "suv",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Hybrid",
    pricePerDay: 86,
    rating: 4.98,
    tripsCount: 148,
    deliveryOptions: [
      deliveryOptions.mco,
      deliveryOptions.disney,
      deliveryOptions.universal,
    ],
    airportPickup: true,
    instantBook: true,
    images: categoryImages.suv,
    host: hosts[2],
    badges: [
      l("Ideal para Disney", "Great for Disney"),
      l("Espacio para 6 maletas", "Fits 6 suitcases"),
    ],
    features: [
      "Apple CarPlay",
      "Adaptive cruise",
      "Third-row seating",
      "2 large suitcases + stroller",
    ],
    highlights: [
      l(
        "SUV silenciosa para familias que aterrizan en MCO y van directo a los parques.",
        "Quiet family SUV for guests landing at MCO and heading straight to the parks.",
      ),
      l(
        "Pickup sin counter y entrega sencilla en hoteles de Lake Buena Vista.",
        "Counter-free pickup with smooth handoff at Lake Buena Vista hotels.",
      ),
    ],
    intro: l(
      "La opción familiar más equilibrada para Orlando.",
      "The balanced family pick for Orlando.",
    ),
    reviews: [
      {
        id: "r1",
        author: "Laura M.",
        date: "2026-02-08",
        rating: 5,
        comment: l(
          "La entrega en el hotel fue impecable y el espacio para equipaje nos salvó.",
          "Hotel delivery was flawless and the luggage space made the whole trip easier.",
        ),
      },
      {
        id: "r2",
        author: "Javier S.",
        date: "2026-01-17",
        rating: 5,
        comment: l(
          "Host muy clara con el pickup en MCO. Todo rápido y sin estrés.",
          "The host made the MCO pickup extremely clear. Fast and stress-free.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "kia-carnival-grandtour",
    city: "orlando",
    make: "Kia",
    model: "Carnival LX",
    year: 2024,
    category: "van",
    seats: 8,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerDay: 102,
    rating: 4.96,
    tripsCount: 94,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.disney],
    airportPickup: true,
    instantBook: true,
    images: categoryImages.van,
    host: hosts[2],
    badges: [
      l("Favorita para grupos", "Best for groups"),
      l("8 pasajeros reales", "True 8-passenger seating"),
    ],
    features: [
      "Tri-zone climate",
      "Sliding doors",
      "USB in all rows",
      "Ample cargo space",
    ],
    highlights: [
      l(
        "Minivan pensada para familias grandes y grupos con itinerarios intensos.",
        "Minivan built for larger families and packed itineraries.",
      ),
      l(
        "Perfecta para cochecitos, maletas grandes y días largos de parques.",
        "Perfect for strollers, large luggage and long theme-park days.",
      ),
    ],
    intro: l(
      "La minivan que evita compromisos en equipaje y comodidad.",
      "The minivan that removes compromise on luggage and comfort.",
    ),
    reviews: [
      {
        id: "r3",
        author: "Andrea P.",
        date: "2026-02-18",
        rating: 5,
        comment: l(
          "Éramos siete y aún así todo quedó cómodo. Excelente para Disney.",
          "We were seven and still had space to spare. Excellent for Disney.",
        ),
      },
      {
        id: "r4",
        author: "Carlos G.",
        date: "2026-01-21",
        rating: 5,
        comment: l(
          "La mejor opción para grupo. La entrega fue puntual y muy profesional.",
          "Best option for a group. Delivery was punctual and highly professional.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "ford-mustang-ocean-drive",
    city: "miami",
    make: "Ford",
    model: "Mustang Convertible",
    year: 2024,
    category: "convertible",
    seats: 4,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerDay: 139,
    rating: 4.94,
    tripsCount: 83,
    deliveryOptions: [
      deliveryOptions.mco,
      deliveryOptions.universal,
      deliveryOptions.brickell,
    ],
    airportPickup: true,
    instantBook: false,
    images: categoryImages.convertible,
    host: hosts[0],
    badges: [
      l("Escapada premium", "Weekend premium pick"),
      l("Ideal para pareja", "Great for couples"),
    ],
    features: ["Soft top", "Premium audio", "Sport mode", "Wireless CarPlay"],
    highlights: [
      l(
        "Diseñado para fines de semana, cenas y trayectos soleados por Orlando o Miami.",
        "Designed for weekends, dinner plans and sunny drives across Orlando or Miami.",
      ),
      l(
        "El balance correcto entre presencia, precio y facilidad de uso.",
        "The right balance between presence, price and everyday usability.",
      ),
    ],
    intro: l(
      "Convertible premium con look aspiracional y operación simple.",
      "Premium convertible with aspirational feel and simple logistics.",
    ),
    reviews: [
      {
        id: "r5",
        author: "Natalia R.",
        date: "2026-02-03",
        rating: 5,
        comment: l(
          "Se sintió especial desde el primer minuto. Muy buena comunicación del host.",
          "It felt special from the first minute. Host communication was excellent.",
        ),
      },
      {
        id: "r6",
        author: "Marco A.",
        date: "2026-01-05",
        rating: 4.8,
        comment: l(
          "Buen auto para un fin de semana distinto. Entrega impecable.",
          "Great car for a memorable weekend. Delivery was spotless.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "jeep-wrangler-palm-trail",
    city: "orlando",
    make: "Jeep",
    model: "Wrangler Sahara",
    year: 2023,
    category: "convertible",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerDay: 128,
    rating: 4.92,
    tripsCount: 61,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    images: categoryImages.convertible,
    host: hosts[0],
    badges: [
      l("Look aventurero", "Adventure-ready"),
      l("Top off ready", "Open-air ready"),
    ],
    features: [
      "Removable roof panels",
      "All-terrain drive",
      "Large cargo opening",
      "Rear camera",
    ],
    highlights: [
      l(
        "Para quienes quieren una llegada con más personalidad que un sedán estándar.",
        "For travelers who want more personality than a standard sedan.",
      ),
      l(
        "Se siente igual de bien en hotel boutique, outlet o resort.",
        "Feels right at home at a boutique hotel, outlet or resort.",
      ),
    ],
    intro: l(
      "Una forma más expresiva de moverse entre parques y ciudad.",
      "A more expressive way to move between parks and city stops.",
    ),
    reviews: [
      {
        id: "r7",
        author: "Felipe T.",
        date: "2026-02-10",
        rating: 5,
        comment: l(
          "Muy divertido y con entrega súper organizada.",
          "Very fun to drive and the handoff was extremely organized.",
        ),
      },
      {
        id: "r8",
        author: "Sara E.",
        date: "2026-01-09",
        rating: 4.9,
        comment: l(
          "Excelente para un trip corto. Buen estado y host puntual.",
          "Excellent for a short trip. Great condition and punctual host.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "tesla-model-y-lake-nona",
    city: "orlando",
    make: "Tesla",
    model: "Model Y",
    year: 2024,
    category: "luxury",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Electric",
    pricePerDay: 146,
    rating: 4.99,
    tripsCount: 132,
    deliveryOptions: [
      deliveryOptions.mco,
      deliveryOptions.disney,
      deliveryOptions.universal,
    ],
    airportPickup: true,
    instantBook: true,
    images: categoryImages.luxury,
    host: hosts[1],
    badges: [
      l("Tecnología premium", "Tech premium pick"),
      l("Acceso sin llave", "Keyless experience"),
    ],
    features: [
      "Glass roof",
      "Autopilot",
      "Supercharger access",
      "Minimal cabin",
    ],
    highlights: [
      l(
        "Perfecto para viajes ejecutivos o parejas que quieren una experiencia más limpia y silenciosa.",
        "Perfect for business trips or couples wanting a cleaner, quieter experience.",
      ),
      l(
        "Entrega frecuente en hoteles premium y reuniones en Lake Nona o Winter Park.",
        "Commonly delivered to premium hotels and meetings in Lake Nona or Winter Park.",
      ),
    ],
    intro: l(
      "El favorito para combinar diseño, silencio y presencia.",
      "The favorite for travelers blending design, quiet and presence.",
    ),
    reviews: [
      {
        id: "r9",
        author: "Diego V.",
        date: "2026-02-12",
        rating: 5,
        comment: l(
          "Se sintió como una experiencia premium completa, no solo un alquiler.",
          "It felt like a premium experience, not just a rental.",
        ),
      },
      {
        id: "r10",
        author: "Paola C.",
        date: "2026-01-28",
        rating: 5,
        comment: l(
          "Muy fácil de recibir y devolver. Ideal para viaje de negocios.",
          "Very easy to receive and return. Ideal for a business trip.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "bmw-5-series-sand-lane",
    city: "miami",
    make: "BMW",
    model: "530i",
    year: 2024,
    category: "business",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerDay: 154,
    rating: 4.95,
    tripsCount: 77,
    deliveryOptions: [
      deliveryOptions.mco,
      deliveryOptions.universal,
      deliveryOptions.brickell,
    ],
    airportPickup: true,
    instantBook: false,
    images: categoryImages.business,
    host: hosts[1],
    badges: [
      l("Ejecutivo premium", "Executive premium"),
      l("Ideal para reuniones", "Meeting-ready"),
    ],
    features: [
      "Leather interior",
      "Navigation",
      "Quiet cabin",
      "Business-class comfort",
    ],
    highlights: [
      l(
        "Sedán premium para ejecutivos y viajes donde la primera impresión importa.",
        "Premium sedan for executives and trips where first impressions matter.",
      ),
      l(
        "Muy solicitado por viajeros que combinan Orlando y Miami en un mismo itinerario.",
        "Frequently booked by travelers combining Orlando and Miami in one itinerary.",
      ),
    ],
    intro: l(
      "Sedán ejecutivo con presencia calmada y entrega precisa.",
      "Executive sedan with calm presence and precise delivery.",
    ),
    reviews: [
      {
        id: "r11",
        author: "Lucía D.",
        date: "2026-02-14",
        rating: 5,
        comment: l(
          "Muy sobrio y cómodo. La entrega en hotel fue impecable.",
          "Very refined and comfortable. Hotel delivery was impeccable.",
        ),
      },
      {
        id: "r12",
        author: "Henry F.",
        date: "2026-01-16",
        rating: 4.9,
        comment: l(
          "Exactamente lo que necesitaba para una visita corporativa.",
          "Exactly what I needed for a corporate visit.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "cadillac-escalade-jet-black",
    city: "miami",
    make: "Cadillac",
    model: "Escalade",
    year: 2024,
    category: "luxury",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerDay: 238,
    rating: 4.97,
    tripsCount: 58,
    deliveryOptions: [
      deliveryOptions.mco,
      deliveryOptions.disney,
      deliveryOptions.brickell,
    ],
    airportPickup: true,
    instantBook: false,
    images: categoryImages.luxury,
    host: hosts[1],
    badges: [
      l("Full-size luxury", "Full-size luxury"),
      l("Para llegadas importantes", "For major arrivals"),
    ],
    features: [
      "Captain seats",
      "Premium surround audio",
      "Massive luggage room",
      "360 camera",
    ],
    highlights: [
      l(
        "Para familias premium, grupos VIP o fines de semana donde el arrival moment importa.",
        "For premium families, VIP groups or weekends where the arrival moment matters.",
      ),
      l(
        "Entrega con protocolo más cuidado en aeropuerto, hotel o eventos.",
        "Handled with a more polished protocol at airports, hotels or events.",
      ),
    ],
    intro: l(
      "Lujo full-size con una narrativa claramente premium.",
      "Full-size luxury with a clearly premium story.",
    ),
    reviews: [
      {
        id: "r13",
        author: "Roberto A.",
        date: "2026-02-11",
        rating: 5,
        comment: l(
          "Impacta desde que llega. Muy buena experiencia para grupo ejecutivo.",
          "It makes an impression the second it arrives. Great for executive groups.",
        ),
      },
      {
        id: "r14",
        author: "Melissa H.",
        date: "2026-01-12",
        rating: 4.9,
        comment: l(
          "Muy cómodo y con logística súper profesional.",
          "Extremely comfortable with highly professional logistics.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "chevrolet-tahoe-theme-run",
    city: "orlando",
    make: "Chevrolet",
    model: "Tahoe LT",
    year: 2024,
    category: "suv",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerDay: 126,
    rating: 4.93,
    tripsCount: 88,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.disney],
    airportPickup: true,
    instantBook: true,
    images: categoryImages.suv,
    host: hosts[2],
    badges: [
      l("SUV grande", "Large SUV"),
      l("Ideal para grupos", "Great for groups"),
    ],
    features: [
      "Full-size cabin",
      "Large rear cargo area",
      "Wireless charging",
      "Three-row comfort",
    ],
    highlights: [
      l(
        "SUV full-size para familias o grupos que no quieren sacrificar espacio.",
        "Full-size SUV for families or groups that do not want to compromise on space.",
      ),
      l(
        "Funciona muy bien para parques, compras y traslados largos.",
        "Works especially well for park days, shopping and longer transfers.",
      ),
    ],
    intro: l(
      "El SUV grande para quienes prefieren margen de sobra.",
      "The big SUV for travelers who want extra margin everywhere.",
    ),
    reviews: [
      {
        id: "r15",
        author: "María G.",
        date: "2026-02-07",
        rating: 4.9,
        comment: l(
          "Nos dio mucho espacio para equipaje y compras. Muy recomendado.",
          "It gave us loads of room for luggage and shopping. Highly recommended.",
        ),
      },
      {
        id: "r16",
        author: "Tomas W.",
        date: "2026-01-25",
        rating: 5,
        comment: l(
          "Se siente robusto y muy cómodo para trayectos largos.",
          "Feels robust and very comfortable on longer drives.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "nissan-sentra-city-easy",
    city: "orlando",
    make: "Nissan",
    model: "Sentra SV",
    year: 2024,
    category: "economy",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerDay: 58,
    rating: 4.88,
    tripsCount: 201,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    images: categoryImages.economy,
    host: hosts[0],
    badges: [
      l("Mejor precio", "Best value"),
      l("Muy eficiente", "Fuel efficient"),
    ],
    features: [
      "Rear camera",
      "Apple CarPlay",
      "Great fuel economy",
      "Easy parking",
    ],
    highlights: [
      l(
        "Una opción simple y bien cuidada para viajeros que optimizan presupuesto.",
        "A clean, well-kept choice for travelers optimizing budget.",
      ),
      l(
        "Ideal para parejas o viajes cortos con poco equipaje.",
        "Ideal for couples or shorter trips with lighter luggage.",
      ),
    ],
    intro: l(
      "El entry point claro para una reserva ágil y sin fricción.",
      "The clean entry point for a fast, low-friction rental.",
    ),
    reviews: [
      {
        id: "r17",
        author: "Rosa N.",
        date: "2026-02-15",
        rating: 4.8,
        comment: l(
          "Muy práctico y fácil. Justo lo que necesitábamos.",
          "Very practical and easy. Exactly what we needed.",
        ),
      },
      {
        id: "r18",
        author: "Eduardo M.",
        date: "2026-01-30",
        rating: 4.9,
        comment: l(
          "Gran relación precio/experiencia.",
          "Great balance between price and overall experience.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "hyundai-elantra-lake-view",
    city: "orlando",
    make: "Hyundai",
    model: "Elantra Limited",
    year: 2024,
    category: "economy",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerDay: 64,
    rating: 4.9,
    tripsCount: 173,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    images: categoryImages.economy,
    host: hosts[0],
    badges: [
      l("Fácil para first-timers", "Easy for first-timers"),
      l("UI intuitiva", "Simple trip choice"),
    ],
    features: [
      "Wireless charging",
      "Lane assist",
      "Digital cluster",
      "Comfortable rear seat",
    ],
    highlights: [
      l(
        "Sedán bien resuelto para viajeros que quieren algo mejor que “lo básico”.",
        "A refined sedan for travelers who want more than just the basics.",
      ),
      l(
        "Muy fuerte para estadías en International Drive y reuniones ligeras.",
        "Especially strong for International Drive stays and light business use.",
      ),
    ],
    intro: l(
      "Un sedán económico que no se siente básico.",
      "An economy sedan that does not feel bare.",
    ),
    reviews: [
      {
        id: "r19",
        author: "Pilar B.",
        date: "2026-02-01",
        rating: 5,
        comment: l(
          "Muy cómodo para una semana completa. Excelente host.",
          "Very comfortable for a full week. Excellent host.",
        ),
      },
      {
        id: "r20",
        author: "Kevin J.",
        date: "2026-01-11",
        rating: 4.8,
        comment: l(
          "Smooth ride and very easy pickup.",
          "Smooth ride and very easy pickup.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "mercedes-eclass-bayline",
    city: "miami",
    make: "Mercedes-Benz",
    model: "E 350",
    year: 2024,
    category: "business",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerDay: 176,
    rating: 4.97,
    tripsCount: 69,
    deliveryOptions: [
      deliveryOptions.mco,
      deliveryOptions.universal,
      deliveryOptions.brickell,
    ],
    airportPickup: true,
    instantBook: false,
    images: categoryImages.business,
    host: hosts[1],
    badges: [
      l("Business class", "Business class"),
      l("Quiet arrival", "Quiet arrival"),
    ],
    features: [
      "Ambient lighting",
      "Premium seat package",
      "Navigation",
      "Driver assistance",
    ],
    highlights: [
      l(
        "La opción más discreta y elegante para reuniones, cenas o presentaciones.",
        "The quiet, elegant option for meetings, dinners or presentations.",
      ),
      l(
        "Muy fuerte para perfiles que quieren premium sin llamar demasiado la atención.",
        "Strong choice for travelers who want premium without flash.",
      ),
    ],
    intro: l(
      "Sobriedad premium para ejecutivos y estadías cuidadas.",
      "Premium restraint for executives and polished stays.",
    ),
    reviews: [
      {
        id: "r21",
        author: "Ana F.",
        date: "2026-02-17",
        rating: 5,
        comment: l(
          "Exacto para un viaje de negocios. Todo serio y profesional.",
          "Exactly right for a business trip. Everything felt serious and professional.",
        ),
      },
      {
        id: "r22",
        author: "Oscar K.",
        date: "2026-01-23",
        rating: 5,
        comment: l(
          "Beautiful car, calm experience, great host.",
          "Beautiful car, calm experience, great host.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "chrysler-pacifica-resort-loop",
    city: "orlando",
    make: "Chrysler",
    model: "Pacifica Touring L",
    year: 2024,
    category: "van",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Hybrid",
    pricePerDay: 109,
    rating: 4.95,
    tripsCount: 80,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.disney],
    airportPickup: true,
    instantBook: true,
    images: categoryImages.van,
    host: hosts[2],
    badges: [
      l("Viaje familiar premium", "Premium family trip"),
      l("Híbrida", "Hybrid efficiency"),
    ],
    features: [
      "Stow n Go seating",
      "Hybrid economy",
      "Rear entertainment",
      "Large trunk",
    ],
    highlights: [
      l(
        "Una minivan más refinada para familias que quieren un upgrade real.",
        "A more refined minivan for families wanting a true upgrade.",
      ),
      l(
        "Excelente para itinerarios de varios días entre parques y outlets.",
        "Excellent for multi-day itineraries between parks and outlets.",
      ),
    ],
    intro: l(
      "La minivan familiar cuando el confort sí importa.",
      "The family minivan when comfort genuinely matters.",
    ),
    reviews: [
      {
        id: "r23",
        author: "Valentina Q.",
        date: "2026-02-09",
        rating: 5,
        comment: l(
          "Todo fluyó muy bien y la van estaba impecable.",
          "Everything went smoothly and the van was immaculate.",
        ),
      },
      {
        id: "r24",
        author: "Miguel I.",
        date: "2026-01-19",
        rating: 4.9,
        comment: l(
          "Muy buena para niños y equipaje. Repetiríamos.",
          "Great for kids and luggage. We would book again.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "porsche-macan-golden-hour",
    city: "miami",
    make: "Porsche",
    model: "Macan",
    year: 2023,
    category: "luxury",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerDay: 189,
    rating: 4.96,
    tripsCount: 42,
    deliveryOptions: [
      deliveryOptions.mco,
      deliveryOptions.universal,
      deliveryOptions.brickell,
    ],
    airportPickup: true,
    instantBook: false,
    images: categoryImages.luxury,
    host: hosts[1],
    badges: [
      l("Sport luxury", "Sport luxury"),
      l("Fin de semana premium", "Premium weekend"),
    ],
    features: [
      "Sport chrono",
      "Premium leather",
      "Bose audio",
      "Performance handling",
    ],
    highlights: [
      l(
        "Para escapadas premium con una sensación más deportiva y aspiracional.",
        "For premium getaways with a sportier, more aspirational feel.",
      ),
      l(
        "Convierte traslados ordinarios en parte del plan.",
        "Turns ordinary transfers into part of the trip itself.",
      ),
    ],
    intro: l(
      "SUV premium para una experiencia más emocional.",
      "Premium SUV for a more emotional driving experience.",
    ),
    reviews: [
      {
        id: "r25",
        author: "Helena T.",
        date: "2026-02-06",
        rating: 5,
        comment: l(
          "Uno de los mejores rentals que he hecho en Florida.",
          "One of the best rentals I have done in Florida.",
        ),
      },
      {
        id: "r26",
        author: "Gustavo P.",
        date: "2026-01-14",
        rating: 4.9,
        comment: l(
          "Muy buena experiencia y auto espectacular.",
          "Great experience and a spectacular car.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "toyota-camry-executive-stay",
    city: "orlando",
    make: "Toyota",
    model: "Camry XSE",
    year: 2024,
    category: "business",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Hybrid",
    pricePerDay: 92,
    rating: 4.91,
    tripsCount: 126,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    images: categoryImages.business,
    host: hosts[1],
    badges: [
      l("Eficiente y serio", "Efficient and polished"),
      l("Upgrade inteligente", "Smart upgrade"),
    ],
    features: ["Hybrid economy", "Leather trim", "Quiet cabin", "Large trunk"],
    highlights: [
      l(
        "Para quien quiere una experiencia ejecutiva eficiente sin subir demasiado el presupuesto.",
        "For travelers wanting an efficient executive feel without stretching the budget.",
      ),
      l(
        "Muy fuerte para stays de trabajo y visitas de varios días.",
        "Very strong for work stays and multi-day visits.",
      ),
    ],
    intro: l(
      "Un sedán de negocio pragmático, elegante y fácil.",
      "A pragmatic, elegant and easy business sedan.",
    ),
    reviews: [
      {
        id: "r27",
        author: "Renata C.",
        date: "2026-02-13",
        rating: 4.9,
        comment: l(
          "Buena decisión si quieres algo confiable y serio.",
          "A strong decision if you want something reliable and polished.",
        ),
      },
      {
        id: "r28",
        author: "Chris L.",
        date: "2026-01-27",
        rating: 4.9,
        comment: l(
          "Simple, efficient, professional. Exactly what I needed.",
          "Simple, efficient, professional. Exactly what I needed.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "mazda-cx90-orchid-route",
    city: "orlando",
    make: "Mazda",
    model: "CX-90",
    year: 2024,
    category: "suv",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Plug-in Hybrid",
    pricePerDay: 114,
    rating: 4.94,
    tripsCount: 65,
    deliveryOptions: [
      deliveryOptions.mco,
      deliveryOptions.disney,
      deliveryOptions.universal,
    ],
    airportPickup: true,
    instantBook: true,
    images: categoryImages.suv,
    host: hosts[2],
    badges: [
      l("Diseño sobrio", "Refined design"),
      l("SUV premium mediana", "Premium mid-size SUV"),
    ],
    features: [
      "Captain seats",
      "Panoramic roof",
      "Hybrid efficiency",
      "Premium interior",
    ],
    highlights: [
      l(
        "SUV familiar con una sensación más premium que lo habitual en su rango.",
        "Family SUV with a more premium feel than the usual options in its class.",
      ),
      l(
        "Excelente para familias que valoran diseño interior y confort.",
        "Excellent for families that care about interior design and comfort.",
      ),
    ],
    intro: l(
      "SUV familiar con sensibilidad más premium.",
      "Family SUV with a more premium sensibility.",
    ),
    reviews: [
      {
        id: "r29",
        author: "Sofía H.",
        date: "2026-02-16",
        rating: 5,
        comment: l(
          "Interior precioso y mucho confort para niños.",
          "Beautiful interior and plenty of comfort for children.",
        ),
      },
      {
        id: "r30",
        author: "Liam M.",
        date: "2026-01-18",
        rating: 4.8,
        comment: l(
          "A very elegant SUV for a family holiday.",
          "A very elegant SUV for a family holiday.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "mini-convertible-sunset-key",
    city: "orlando",
    make: "Mini",
    model: "Cooper Convertible",
    year: 2024,
    category: "convertible",
    seats: 4,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerDay: 118,
    rating: 4.9,
    tripsCount: 52,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.universal],
    airportPickup: true,
    instantBook: true,
    images: categoryImages.convertible,
    host: hosts[0],
    badges: [
      l("Compacto premium", "Compact premium"),
      l("Perfecto para pareja", "Perfect for couples"),
    ],
    features: [
      "Convertible roof",
      "Compact footprint",
      "Premium audio",
      "Sport mode",
    ],
    highlights: [
      l(
        "Una forma distinta, ligera y memorable de recorrer la ciudad.",
        "A light, memorable way to move through the city.",
      ),
      l(
        "Fácil de estacionar, visualmente fuerte y muy apropiado para pareja.",
        "Easy to park, visually strong and highly appropriate for couples.",
      ),
    ],
    intro: l(
      "Pequeño, premium y claramente distinto.",
      "Small, premium and clearly distinct.",
    ),
    reviews: [
      {
        id: "r31",
        author: "Elena S.",
        date: "2026-02-04",
        rating: 4.9,
        comment: l(
          "Muy divertido y con mucho estilo.",
          "Very fun and full of style.",
        ),
      },
      {
        id: "r32",
        author: "Patrick D.",
        date: "2026-01-07",
        rating: 4.9,
        comment: l(
          "A great city/weekend choice with smooth pickup.",
          "A great city/weekend choice with smooth pickup.",
        ),
      },
    ],
  }),
  makeVehicle({
    slug: "nissan-rogue-family-lane",
    city: "orlando",
    make: "Nissan",
    model: "Rogue SL",
    year: 2024,
    category: "suv",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    pricePerDay: 79,
    rating: 4.9,
    tripsCount: 111,
    deliveryOptions: [deliveryOptions.mco, deliveryOptions.disney],
    airportPickup: true,
    instantBook: true,
    images: categoryImages.suv,
    host: hosts[2],
    badges: [
      l("SUV funcional", "Functional SUV"),
      l("Favorita para familias pequeñas", "Great for smaller families"),
    ],
    features: [
      "Safety shield",
      "Panoramic roof",
      "Easy cargo access",
      "Smooth ride",
    ],
    highlights: [
      l(
        "Un punto medio muy fuerte entre precio, espacio y facilidad de manejo.",
        "A very strong middle ground across price, space and ease of driving.",
      ),
      l(
        "Funciona perfecto para una familia de cuatro con equipaje moderado.",
        "Works perfectly for a family of four with moderate luggage.",
      ),
    ],
    intro: l(
      "SUV práctica para vacaciones bien resueltas.",
      "Practical SUV for well-organized holidays.",
    ),
    reviews: [
      {
        id: "r33",
        author: "Gloria V.",
        date: "2026-02-05",
        rating: 4.9,
        comment: l(
          "Cómoda, limpia y muy fácil de llevar a todos lados.",
          "Comfortable, clean and easy to take anywhere.",
        ),
      },
      {
        id: "r34",
        author: "Noah Y.",
        date: "2026-01-22",
        rating: 4.9,
        comment: l(
          "Really practical for our resort stay.",
          "Really practical for our resort stay.",
        ),
      },
    ],
  }),
];

export const pickupOptions = [
  { value: "mco", label: l("MCO Airport", "MCO Airport") },
  { value: "disney", label: l("Disney resorts", "Disney resorts") },
  {
    value: "universal",
    label: l("International Drive", "International Drive"),
  },
  { value: "downtown", label: l("Downtown Orlando", "Downtown Orlando") },
];

export const vehicleCategories = [
  { value: "suv", label: l("SUVs familiares", "Family SUVs") },
  { value: "convertible", label: l("Convertibles", "Convertibles") },
  { value: "luxury", label: l("Luxury", "Luxury") },
  { value: "economy", label: l("Economy", "Economy") },
  { value: "van", label: l("Minivans", "Minivans") },
  { value: "business", label: l("Sedanes ejecutivos", "Executive sedans") },
];

export const checkoutAddons: CheckoutAddon[] = [
  {
    id: "child-seat",
    title: l("Silla infantil", "Child seat"),
    detail: l("Instalada antes del pickup.", "Installed before pickup."),
    price: 18,
  },
  {
    id: "express-delivery",
    title: l("Entrega express", "Express delivery"),
    detail: l(
      "Ventana reducida y handoff prioritario.",
      "Reduced window and priority handoff.",
    ),
    price: 24,
  },
  {
    id: "cooler-kit",
    title: l("Travel comfort kit", "Travel comfort kit"),
    detail: l(
      "Nevera pequeña, agua y kit de limpieza rápida.",
      "Small cooler, water and quick-clean kit.",
    ),
    price: 16,
  },
];

export const trips: Trip[] = [
  {
    id: "trip-upcoming-1",
    vehicleSlug: "toyota-highlander-sunrise",
    status: "upcoming",
    pickupLabel: l(
      "MCO Terminal B · viernes 18 abril",
      "MCO Terminal B · Friday Apr 18",
    ),
    startDate: "2026-04-18",
    endDate: "2026-04-22",
    total: 472,
  },
  {
    id: "trip-upcoming-2",
    vehicleSlug: "bmw-5-series-sand-lane",
    status: "upcoming",
    pickupLabel: l(
      "Four Seasons Orlando · martes 12 mayo",
      "Four Seasons Orlando · Tuesday May 12",
    ),
    startDate: "2026-05-12",
    endDate: "2026-05-15",
    total: 608,
  },
  {
    id: "trip-completed-1",
    vehicleSlug: "nissan-sentra-city-easy",
    status: "completed",
    pickupLabel: l(
      "Universal Endless Summer · enero 2026",
      "Universal Endless Summer · January 2026",
    ),
    startDate: "2026-01-11",
    endDate: "2026-01-15",
    total: 286,
  },
];

export const messageThreads: MessageThread[] = [
  {
    id: "thread-1",
    vehicleSlug: "toyota-highlander-sunrise",
    hostName: hosts[2].name,
    hostAvatar: hosts[2].avatar,
    subject: l("Pickup en MCO confirmado", "MCO pickup confirmed"),
    preview: l(
      "Te espero en garage C, fila 4. Te envío foto del punto exacto 20 min antes.",
      "I will meet you at garage C, row 4. I will send the exact handoff photo 20 minutes before arrival.",
    ),
    lastMessageAt: "2026-04-17T18:30:00.000Z",
    unread: 1,
  },
  {
    id: "thread-2",
    vehicleSlug: "bmw-5-series-sand-lane",
    hostName: hosts[1].name,
    hostAvatar: hosts[1].avatar,
    subject: l("Entrega en hotel", "Hotel delivery"),
    preview: l(
      "Podemos dejar el auto con valet si prefieres una llegada más rápida.",
      "We can leave the car with valet if you prefer a faster arrival.",
    ),
    lastMessageAt: "2026-05-10T14:00:00.000Z",
    unread: 0,
  },
];

export const wishlistedSlugs = [
  "ford-mustang-ocean-drive",
  "tesla-model-y-lake-nona",
  "mazda-cx90-orchid-route",
];

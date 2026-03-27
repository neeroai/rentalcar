export type Locale = "es" | "en";

export type LocalizedText = Record<Locale, string>;

export type VehicleCategory =
  | "economy"
  | "compact-suv"
  | "minivan"
  | "three-row-suv"
  | "premium";

export type AssetSourceType = "stock" | "ai" | "official";

export interface AssetImage {
  src: string;
  alt: LocalizedText;
  sourceType: AssetSourceType;
  sourceName: string;
  sourceUrl: string;
}

export type Transmission = "Automática" | "Automatic" | "Manual";

export interface DeliveryOption {
  label: LocalizedText;
  detail: LocalizedText;
  fee: number;
}

export interface Host {
  name: string;
  avatar: string;
  badge: LocalizedText;
  responseRate: string;
  responseTime: LocalizedText;
  bio: LocalizedText;
  isSuperhost: boolean;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  comment: LocalizedText;
}

export interface Policy {
  title: LocalizedText;
  detail: LocalizedText;
}

export interface Vehicle {
  slug: string;
  make: string;
  model: string;
  year: number;
  category: VehicleCategory;
  seats: number;
  transmission: Transmission;
  fuelType: string;
  pricePerDay: number;
  rating: number;
  tripsCount: number;
  deliveryOptions: DeliveryOption[];
  airportPickup: boolean;
  instantBook: boolean;
  images: AssetImage[];
  host: Host;
  badges: LocalizedText[];
  features: string[];
  highlights: LocalizedText[];
  intro: LocalizedText;
  policies: Policy[];
  reviews: Review[];
  city?: "orlando" | "miami";
}

export interface Trip {
  id: string;
  vehicleSlug: string;
  status: "upcoming" | "completed";
  pickupLabel: LocalizedText;
  startDate: string;
  endDate: string;
  total: number;
}

export interface MessageThread {
  id: string;
  vehicleSlug: string;
  hostName: string;
  hostAvatar: string;
  subject: LocalizedText;
  preview: LocalizedText;
  lastMessageAt: string;
  unread: number;
}

export interface CheckoutAddon {
  id: string;
  title: LocalizedText;
  detail: LocalizedText;
  price: number;
}

export interface SearchFilters {
  pickup: string;
  start: string;
  end: string;
  time: string;
  category: string;
  maxPrice: number;
  seats: number;
  transmission: string;
  delivery: boolean;
  airportPickup: boolean;
  instantBook: boolean;
  rating: number;
  sort: string;
  city?: "orlando" | "miami";
}

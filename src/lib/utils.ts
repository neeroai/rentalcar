import type { Locale, LocalizedText, SearchFilters, Vehicle } from '@/lib/types';

export function getLocalizedText(locale: Locale, value: LocalizedText) {
  return value[locale];
}

export function formatCurrency(amount: number, locale: Locale) {
  return new Intl.NumberFormat(locale === 'es' ? 'es-419' : 'en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatShortDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-419' : 'en-US', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
}

export function formatLongDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-419' : 'en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function formatDateRange(start: string, end: string, locale: Locale) {
  return `${formatShortDate(start, locale)} - ${formatShortDate(end, locale)}`;
}

export function normalizeBoolean(value: string | string[] | undefined) {
  return value === 'true' || value === 'on' || value === '1';
}

export function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? (value[0] ?? '') : (value ?? '');
}

export function getSearchFilters(
  params: Record<string, string | string[] | undefined>
): SearchFilters {
  return {
    pickup: firstParam(params.pickup) || 'mco',
    start: firstParam(params.start) || '2026-04-18',
    end: firstParam(params.end) || '2026-04-22',
    time: firstParam(params.time) || '10:00',
    category: firstParam(params.category) || '',
    maxPrice: Number(firstParam(params.maxPrice) || 200),
    seats: Number(firstParam(params.seats) || 0),
    transmission: firstParam(params.transmission) || '',
    delivery: normalizeBoolean(params.delivery),
    airportPickup: normalizeBoolean(params.airportPickup),
    instantBook: normalizeBoolean(params.instantBook),
    rating: Number(firstParam(params.rating) || 0),
    sort: firstParam(params.sort) || 'recommended',
  };
}

export function filterVehicles(vehicles: Vehicle[], filters: SearchFilters) {
  return sortVehicles(
    vehicles.filter((vehicle) => matchesVehicleFilters(vehicle, filters)),
    filters.sort
  );
}

export function getVehicleBySlug(vehicles: Vehicle[], slug: string) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export function getRelatedVehicles(vehicles: Vehicle[], current: Vehicle) {
  return vehicles
    .filter((vehicle) => vehicle.slug !== current.slug)
    .filter((vehicle) => vehicle.category === current.category || vehicle.seats === current.seats)
    .slice(0, 3);
}

export function createQueryString(params: Record<string, string | number | boolean | undefined>) {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === '' || value === false) {
      continue;
    }

    searchParams.set(key, String(value));
  }

  return searchParams.toString();
}

function matchesVehicleFilters(vehicle: Vehicle, filters: SearchFilters) {
  const checks = [
    !filters.category || vehicle.category === filters.category,
    vehicle.pricePerDay <= filters.maxPrice,
    filters.seats === 0 || vehicle.seats >= filters.seats,
    !filters.transmission || vehicle.transmission === filters.transmission,
    !filters.delivery || vehicle.deliveryOptions.length > 0,
    !filters.airportPickup || vehicle.airportPickup,
    !filters.instantBook || vehicle.instantBook,
    filters.rating === 0 || vehicle.rating >= filters.rating,
  ];

  return checks.every(Boolean);
}

function sortVehicles(vehicles: Vehicle[], sort: string) {
  switch (sort) {
    case 'price-low':
      return vehicles.sort((left, right) => left.pricePerDay - right.pricePerDay);
    case 'price-high':
      return vehicles.sort((left, right) => right.pricePerDay - left.pricePerDay);
    case 'rating':
      return vehicles.sort((left, right) => right.rating - left.rating);
    default:
      return vehicles.sort(
        (left, right) => getRecommendationScore(right) - getRecommendationScore(left)
      );
  }
}

function getRecommendationScore(vehicle: Vehicle) {
  return vehicle.rating * 10 + vehicle.tripsCount + (vehicle.instantBook ? 20 : 0);
}

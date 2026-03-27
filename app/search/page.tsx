/**
 * @file page.tsx
 * @description Search results page with Orlando service context instead of a fake map rail.
 * @module app/search/page
 * @exports SearchPage
 */

import { Car, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MobileFilterDrawer } from '@/components/mobile-filter-drawer';
import { VehicleCard } from '@/components/motion-ui';
import { editorialImages } from '@/data/assets';
import { pickupOptions, vehicles } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';
import { createQueryString, filterVehicles, getLocalizedText, getSearchFilters } from '@/lib/utils';

interface SearchPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const categoryPills = [
  { value: '', labelEs: 'Todo Orlando', labelEn: 'All Orlando' },
  { value: 'compact-suv', labelEs: 'SUV compacta', labelEn: 'Compact SUV' },
  { value: 'minivan', labelEs: 'Minivan', labelEn: 'Minivan' },
  { value: 'economy', labelEs: 'Eficiente', labelEn: 'Efficient' },
  { value: 'three-row-suv', labelEs: 'SUV 3 filas', labelEn: '3-row SUV' },
  { value: 'premium', labelEs: 'Premium', labelEn: 'Premium' },
] as const;

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const params = await searchParams;
  const filters = getSearchFilters(params);
  const filteredVehicles = filterVehicles([...vehicles], filters);

  const pickupLabel =
    pickupOptions.find((option) => option.value === filters.pickup)?.label ??
    pickupOptions[0].label;

  const hiddenFields = {
    pickup: filters.pickup,
    start: filters.start,
    end: filters.end,
    time: filters.time,
  };

  const baseQuery = createQueryString({
    pickup: filters.pickup,
    start: filters.start,
    end: filters.end,
    time: filters.time,
    sort: filters.sort !== 'recommended' ? filters.sort : undefined,
  });

  const serviceZones =
    locale === 'es'
      ? [
          'MCO y llegadas sin counter.',
          'Hoteles en International Drive.',
          'Disney / Lake Buena Vista.',
          'Epic, Universal y semanas de parques.',
        ]
      : [
          'MCO arrivals without counters.',
          'Hotels across International Drive.',
          'Disney / Lake Buena Vista stays.',
          'Epic, Universal, and park-week stays.',
        ];

  return (
    <>
      <section className="page-grid pt-8 md:pt-10">
        <div className="surface-panel overflow-hidden rounded-[2rem]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 md:p-8">
              <p className="eyebrow">{dictionary.search.title}</p>
              <h1 className="heading-balance mt-4 text-fluid-h2 font-black text-[var(--foreground)]">
                {locale === 'es'
                  ? 'Resultados pensados para moverte por Orlando con menos fricción.'
                  : 'Results built to move around Orlando with less friction.'}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
                {dictionary.search.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-[var(--surface-alt)] px-3 py-1 text-sm font-medium text-[var(--text-soft)]">
                  {getLocalizedText(locale, pickupLabel)}
                </span>
                <span className="rounded-full bg-[var(--surface-alt)] px-3 py-1 text-sm font-medium text-[var(--text-soft)]">
                  {filters.start} → {filters.end}
                </span>
                <span className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-sm font-semibold text-[var(--primary)]">
                  {filteredVehicles.length} {dictionary.search.resultsLabel}
                </span>
              </div>
            </div>
            <div className="relative min-h-[18rem]">
              <Image
                alt={editorialImages.searchHero.alt[locale]}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                src={editorialImages.searchHero.src}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,25,23,0.12)_0%,rgba(20,25,23,0.78)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                  {locale === 'es' ? 'Cobertura principal' : 'Primary coverage'}
                </p>
                <p className="mt-2 text-2xl font-black">
                  {locale === 'es'
                    ? 'MCO, resorts y hotel pickup'
                    : 'MCO, resorts and hotel pickup'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-grid mt-6">
        <div className="overflow-x-auto no-scrollbar pb-2">
          <div className="flex min-w-max items-center gap-2">
            {categoryPills.map((pill) => {
              const isActive = filters.category === pill.value;
              const href =
                pill.value === ''
                  ? `/search?${baseQuery}`
                  : `/search?${createQueryString({
                      pickup: filters.pickup,
                      start: filters.start,
                      end: filters.end,
                      time: filters.time,
                      category: pill.value,
                      sort: filters.sort !== 'recommended' ? filters.sort : undefined,
                    })}`;

              return (
                <Link
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-[var(--primary)] bg-[var(--primary-soft)] text-[var(--primary)]'
                      : 'border-[rgba(198,184,163,0.64)] bg-white text-[var(--text-soft)] hover:border-[var(--primary)] hover:text-[var(--foreground)]'
                  }`}
                  href={href}
                  key={pill.value || 'all'}
                >
                  {locale === 'es' ? pill.labelEs : pill.labelEn}
                </Link>
              );
            })}

            {Object.entries(dictionary.search.sorts).map(([sortValue, sortLabel]) => {
              const isActive = filters.sort === sortValue;

              return (
                <Link
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-[var(--accent-deep)] bg-[var(--surface-alt)] text-[var(--accent-deep)]'
                      : 'border-[rgba(198,184,163,0.64)] bg-white text-[var(--text-soft)] hover:border-[var(--primary)]'
                  }`}
                  href={`/search?${createQueryString({
                    pickup: filters.pickup,
                    start: filters.start,
                    end: filters.end,
                    time: filters.time,
                    category: filters.category || undefined,
                    sort: sortValue,
                  })}`}
                  key={sortValue}
                >
                  {sortLabel}
                </Link>
              );
            })}

            <div className="lg:hidden">
              <MobileFilterDrawer
                action="/search"
                fields={filters}
                hiddenFields={hiddenFields}
                labels={{
                  button: dictionary.actions.filters,
                  category: dictionary.search.filters.category,
                  maxPrice: dictionary.search.filters.maxPrice,
                  seats: dictionary.search.filters.seats,
                  transmission: dictionary.search.filters.transmission,
                  delivery: dictionary.search.filters.delivery,
                  airportPickup: dictionary.search.filters.airportPickup,
                  instantBook: dictionary.search.filters.instantBook,
                  rating: dictionary.search.filters.rating,
                  apply: dictionary.search.filters.apply,
                }}
              />
            </div>
          </div>
        </div>

        <form
          action="/search"
          className="mt-4 hidden flex-wrap items-center gap-3 lg:flex"
          method="get"
        >
          {Object.entries(hiddenFields).map(([key, value]) => (
            <input key={key} name={key} type="hidden" value={value} />
          ))}
          {filters.category ? (
            <input name="category" type="hidden" value={filters.category} />
          ) : null}

          <label className="rounded-full border border-[rgba(198,184,163,0.64)] bg-white px-4 py-2 text-sm text-[var(--text-soft)]">
            <span className="mr-2">{dictionary.search.filters.maxPrice}</span>
            <input
              className="w-16 bg-transparent font-semibold text-[var(--foreground)] outline-none"
              defaultValue={String(filters.maxPrice)}
              min="50"
              name="maxPrice"
              type="number"
            />
          </label>

          <label className="rounded-full border border-[rgba(198,184,163,0.64)] bg-white px-4 py-2 text-sm text-[var(--text-soft)]">
            <span className="mr-2">{dictionary.search.filters.seats}</span>
            <select
              className="bg-transparent font-semibold text-[var(--foreground)] outline-none"
              defaultValue={String(filters.seats)}
              name="seats"
            >
              <option value="0">{locale === 'es' ? 'Cualquiera' : 'Any'}</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
              <option value="7">7+</option>
            </select>
          </label>

          <label
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filters.instantBook
                ? 'border-[var(--primary)] bg-[var(--primary-soft)] text-[var(--primary)]'
                : 'border-[rgba(198,184,163,0.64)] bg-white text-[var(--text-soft)]'
            }`}
          >
            <input
              className="sr-only"
              defaultChecked={filters.instantBook}
              name="instantBook"
              type="checkbox"
              value="true"
            />
            {dictionary.search.filters.instantBook}
          </label>

          <label className="rounded-full border border-[rgba(198,184,163,0.64)] bg-white px-4 py-2 text-sm text-[var(--text-soft)]">
            <span className="mr-2">{dictionary.search.filters.rating}</span>
            <select
              className="bg-transparent font-semibold text-[var(--foreground)] outline-none"
              defaultValue={String(filters.rating)}
              name="rating"
            >
              <option value="0">{locale === 'es' ? 'Cualquiera' : 'Any'}</option>
              <option value="4.7">4.7+</option>
              <option value="4.9">4.9+</option>
            </select>
          </label>

          <button className="btn-primary text-sm" type="submit">
            {dictionary.search.filters.apply}
          </button>

          {filters.category || filters.instantBook || filters.rating > 0 || filters.seats > 0 ? (
            <Link
              className="text-sm font-medium text-[var(--text-soft)] transition-colors hover:text-[var(--primary)]"
              href={`/search?${createQueryString({ pickup: filters.pickup, start: filters.start, end: filters.end, time: filters.time })}`}
            >
              {dictionary.search.filters.clear}
            </Link>
          ) : null}
        </form>
      </div>

      <div className="page-grid page-section">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            {filteredVehicles.length === 0 ? (
              <div className="surface-panel rounded-[2rem] py-20 text-center">
                <Car className="mx-auto h-12 w-12 text-[var(--border-strong)]" />
                <h2 className="mt-5 text-2xl font-black text-[var(--foreground)]">
                  {locale === 'es'
                    ? 'No encontramos autos con este contexto.'
                    : 'No cars matched this context.'}
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
                  {dictionary.search.noResultsSuggestion}
                </p>
                <Link
                  className="btn-primary mt-6"
                  href={`/search?${createQueryString({ pickup: filters.pickup, start: filters.start, end: filters.end, time: filters.time })}`}
                >
                  {locale === 'es' ? 'Ver todos los autos' : 'See all cars'}
                </Link>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard
                    href={`/vehicle/${vehicle.slug}?${createQueryString({
                      pickup: filters.pickup,
                      start: filters.start,
                      end: filters.end,
                      time: filters.time,
                      category: filters.category,
                    })}`}
                    key={vehicle.slug}
                    locale={locale}
                    vehicle={vehicle}
                  />
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-4 xl:sticky xl:top-24 xl:self-start">
            <div className="surface-panel overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/5]">
                <Image
                  alt={editorialImages.searchZone.alt[locale]}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1279px) 100vw, 22rem"
                  src={editorialImages.searchZone.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/64">
                    {locale === 'es' ? 'Soporte visual' : 'Service context'}
                  </p>
                  <p className="mt-2 text-xl font-black">
                    {locale === 'es'
                      ? 'Entrega alineada con tu itinerario'
                      : 'Handoff aligned with your itinerary'}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                  <MapPin className="h-4 w-4" />
                  {locale === 'es' ? 'Dónde funciona mejor este MVP' : 'Where this MVP works best'}
                </div>
                <ul className="mt-4 space-y-3">
                  {serviceZones.map((zone) => (
                    <li
                      className="rounded-[1.1rem] bg-[var(--surface-alt)] px-4 py-3 text-sm leading-6 text-[var(--text-soft)]"
                      key={zone}
                    >
                      {zone}
                    </li>
                  ))}
                </ul>
                <Link className="btn-outline mt-5 w-full" href="/how-it-works">
                  {dictionary.nav.howItWorks}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

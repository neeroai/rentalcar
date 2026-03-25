import Link from 'next/link';

import { MobileFilterDrawer } from '@/components/mobile-filter-drawer';
import { VehicleCard } from '@/components/motion-ui';
import { BookingSummaryStrip, PageIntro } from '@/components/site-chrome';
import { pickupOptions, vehicles } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';
import { createQueryString, filterVehicles, getLocalizedText, getSearchFilters } from '@/lib/utils';

interface SearchPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const params = await searchParams;
  const filters = getSearchFilters(params);
  const results = filterVehicles([...vehicles], filters);
  const pickupLabel =
    pickupOptions.find((option) => option.value === filters.pickup)?.label ??
    pickupOptions[0].label;

  const hiddenFields = {
    pickup: filters.pickup,
    start: filters.start,
    end: filters.end,
    time: filters.time,
  };

  return (
    <>
      <PageIntro
        eyebrow="Search"
        subtitle={dictionary.search.subtitle}
        title={dictionary.search.title}
      />

      <section className="page-grid pb-14 md:pb-20">
        <BookingSummaryStrip
          locale={locale}
          pickup={getLocalizedText(locale, pickupLabel)}
          start={filters.start}
          end={filters.end}
        />

        <div className="mt-6 flex items-center justify-between gap-4 lg:hidden">
          <p className="text-sm font-medium text-[color:var(--muted)]">
            {results.length} {dictionary.search.resultsLabel}
          </p>
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

        <div className="mt-8 grid gap-8 lg:grid-cols-[18rem_1fr]">
          <aside className="hidden lg:block">
            <form
              action="/search"
              className="surface-strong sticky top-28 space-y-5 rounded-[1.75rem] p-5"
              method="get"
            >
              {Object.entries(hiddenFields).map(([key, value]) => (
                <input key={key} name={key} type="hidden" value={value} />
              ))}
              <h2 className="font-display text-3xl">{dictionary.actions.filters}</h2>
              <FilterSelect
                defaultValue={filters.category}
                label={dictionary.search.filters.category}
                name="category"
                options={[
                  { value: '', label: locale === 'es' ? 'Todas' : 'All' },
                  { value: 'suv', label: 'SUV' },
                  { value: 'convertible', label: 'Convertible' },
                  { value: 'luxury', label: 'Luxury' },
                  { value: 'economy', label: 'Economy' },
                  { value: 'van', label: 'Van' },
                  { value: 'business', label: 'Business' },
                ]}
              />
              <FilterInput
                defaultValue={String(filters.maxPrice)}
                label={dictionary.search.filters.maxPrice}
                min="50"
                name="maxPrice"
                type="number"
              />
              <FilterInput
                defaultValue={String(filters.seats)}
                label={dictionary.search.filters.seats}
                min="0"
                name="seats"
                type="number"
              />
              <FilterSelect
                defaultValue={filters.transmission}
                label={dictionary.search.filters.transmission}
                name="transmission"
                options={[
                  { value: '', label: locale === 'es' ? 'Cualquiera' : 'Any' },
                  { value: 'Automatic', label: 'Automatic' },
                  { value: 'Manual', label: 'Manual' },
                ]}
              />
              <FilterSelect
                defaultValue={filters.sort}
                label={dictionary.search.sortLabel}
                name="sort"
                options={Object.entries(dictionary.search.sorts).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />
              <FilterSelect
                defaultValue={String(filters.rating)}
                label={dictionary.search.filters.rating}
                name="rating"
                options={[
                  { value: '0', label: locale === 'es' ? 'Cualquiera' : 'Any' },
                  { value: '4.7', label: '4.7+' },
                  { value: '4.9', label: '4.9+' },
                ]}
              />
              <FilterToggle
                defaultChecked={filters.delivery}
                label={dictionary.search.filters.delivery}
                name="delivery"
              />
              <FilterToggle
                defaultChecked={filters.airportPickup}
                label={dictionary.search.filters.airportPickup}
                name="airportPickup"
              />
              <FilterToggle
                defaultChecked={filters.instantBook}
                label={dictionary.search.filters.instantBook}
                name="instantBook"
              />
              <button
                className="w-full rounded-full bg-[#18130f] px-4 py-3 text-sm font-semibold text-white"
                type="submit"
              >
                {dictionary.search.filters.apply}
              </button>
            </form>
          </aside>

          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-[color:var(--muted)]">
                {results.length} {dictionary.search.resultsLabel}
              </p>
              <p className="hidden text-sm text-[color:var(--muted)] lg:block">
                {getLocalizedText(locale, pickupLabel)} · {filters.start} - {filters.end}
              </p>
            </div>

            {results.length === 0 ? (
              <div className="surface-strong rounded-[2rem] p-8">
                <p className="font-display text-4xl">{dictionary.search.noResults}</p>
                <Link
                  className="mt-5 inline-flex text-sm font-semibold text-[var(--accent)]"
                  href="/search"
                >
                  {dictionary.search.filters.clear}
                </Link>
              </div>
            ) : (
              <div className="grid gap-5 xl:grid-cols-2">
                {results.map((vehicle) => (
                  <VehicleCard
                    ctaLabel={locale === 'es' ? 'Ver detalle' : 'See details'}
                    href={`/vehicle/${vehicle.slug}?${createQueryString({
                      pickup: filters.pickup,
                      start: filters.start,
                      end: filters.end,
                      time: filters.time,
                      category: filters.category,
                    })}`}
                    key={vehicle.slug}
                    locale={locale}
                    metaLabel={dictionary.common.instantBook}
                    vehicle={vehicle}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function FilterInput(props: {
  label: string;
  name: string;
  type: 'number';
  min: string;
  defaultValue: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{props.label}</span>
      <input
        className="w-full rounded-[1.2rem] border border-black/10 bg-[#fcf8f2] px-4 py-3"
        defaultValue={props.defaultValue}
        min={props.min}
        name={props.name}
        type={props.type}
      />
    </label>
  );
}

function FilterSelect({
  label,
  name,
  options,
  defaultValue,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  defaultValue: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      <select
        className="w-full rounded-[1.2rem] border border-black/10 bg-[#fcf8f2] px-4 py-3"
        defaultValue={defaultValue}
        name={name}
      >
        {options.map((option) => (
          <option key={option.value || 'all'} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function FilterToggle({
  label,
  name,
  defaultChecked,
}: {
  label: string;
  name: string;
  defaultChecked: boolean;
}) {
  return (
    <label className="flex items-center justify-between rounded-[1.2rem] border border-black/10 bg-[#fcf8f2] px-4 py-3">
      <span className="text-sm font-medium">{label}</span>
      <input defaultChecked={defaultChecked} name={name} type="checkbox" />
    </label>
  );
}

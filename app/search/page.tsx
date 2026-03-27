/**
 * @file page.tsx
 * @description Search results page — Turo-inspired split layout with filter bar, vehicle grid, and map panel.
 * @module app/search/page
 * @exports SearchPage
 */

import { Car } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { MobileFilterDrawer } from "@/components/mobile-filter-drawer";
import { VehicleCard } from "@/components/motion-ui";
import { pickupOptions, vehicles } from "@/data/mock";
import { getDictionary, getLocale } from "@/lib/i18n";
import {
  createQueryString,
  filterVehicles,
  getLocalizedText,
  getSearchFilters,
} from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SearchPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

// ---------------------------------------------------------------------------
// Category filter pills config
// ---------------------------------------------------------------------------

const categoryPills = [
  { value: "", labelEs: "Todos", labelEn: "All" },
  { value: "suv", labelEs: "SUV", labelEn: "SUV" },
  { value: "convertible", labelEs: "Convertible", labelEn: "Convertible" },
  { value: "luxury", labelEs: "Lujo", labelEn: "Luxury" },
  { value: "economy", labelEs: "Económico", labelEn: "Economy" },
  { value: "van", labelEs: "Minivan", labelEn: "Van" },
  { value: "business", labelEs: "Ejecutivo", labelEn: "Business" },
] as const;

// ---------------------------------------------------------------------------
// SearchPage
// ---------------------------------------------------------------------------

/**
 * Search results page with Turo-style layout: sticky summary bar, horizontal
 * filter pills, vehicle grid (left), and map panel (right, desktop only).
 *
 * @param searchParams - Next.js 15 async search params from URL.
 * @returns Search results layout as a server component.
 *
 * @example
 * // Rendered at /search?pickup=mco&start=2026-04-18&end=2026-04-22&category=suv
 * <SearchPage searchParams={Promise.resolve({ pickup: "mco" })} />
 */
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

  // Build the base query string without category for pills
  const baseQuery = createQueryString({
    pickup: filters.pickup,
    start: filters.start,
    end: filters.end,
    time: filters.time,
    sort: filters.sort !== "recommended" ? filters.sort : undefined,
  });

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* SEARCH SUMMARY BAR — sticky below header                             */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-white border-b border-[#E5E5E5] sticky top-16 z-10 py-3">
        <div className="page-grid flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#6B7280]">
            <span className="font-semibold text-[#231F20]">
              {getLocalizedText(locale, pickupLabel)}
            </span>
            <span className="text-[#E5E5E5]">·</span>
            <span>{filters.start}</span>
            <span className="text-[#E5E5E5]">→</span>
            <span>{filters.end}</span>
            <span className="text-[#E5E5E5]">·</span>
            <span className="font-medium text-[#7C3AED]">
              {filteredVehicles.length} {dictionary.search.resultsLabel}
            </span>
          </div>
          <Link
            href="/"
            className="text-sm font-semibold text-[#7C3AED] hover:text-[#6D28D9] transition-colors cursor-pointer"
          >
            {locale === "es" ? "Modificar búsqueda" : "Modify search"}
          </Link>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* FILTER BAR — horizontal pills                                        */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-white border-b border-[#E5E5E5] py-3">
        <div className="page-grid">
          {/* Mobile: scrollable pills + drawer button */}
          <div className="flex items-center gap-2">
            <div className="flex gap-2 overflow-x-auto no-scrollbar flex-1 pb-1">
              {categoryPills.map((pill) => {
                const isActive = filters.category === pill.value;
                const href =
                  pill.value === ""
                    ? `/search?${baseQuery}`
                    : `/search?${createQueryString({
                        pickup: filters.pickup,
                        start: filters.start,
                        end: filters.end,
                        time: filters.time,
                        category: pill.value,
                        sort:
                          filters.sort !== "recommended"
                            ? filters.sort
                            : undefined,
                      })}`;
                return (
                  <Link
                    key={pill.value || "all"}
                    href={href}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm cursor-pointer transition-colors border ${
                      isActive
                        ? "bg-[#EDE9FE] border-[#7C3AED] text-[#7C3AED] font-medium"
                        : "bg-white border-[#E5E5E5] text-[#231F20] hover:border-[#7C3AED]"
                    }`}
                  >
                    {locale === "es" ? pill.labelEs : pill.labelEn}
                  </Link>
                );
              })}

              {/* Sort pills */}
              {Object.entries(dictionary.search.sorts).map(
                ([sortValue, sortLabel]) => {
                  const isSortActive = filters.sort === sortValue;
                  const sortHref = `/search?${createQueryString({
                    pickup: filters.pickup,
                    start: filters.start,
                    end: filters.end,
                    time: filters.time,
                    category: filters.category || undefined,
                    sort: sortValue,
                  })}`;
                  return (
                    <Link
                      key={sortValue}
                      href={sortHref}
                      className={`shrink-0 rounded-full px-4 py-2 text-sm cursor-pointer transition-colors border ${
                        isSortActive
                          ? "bg-[#EDE9FE] border-[#7C3AED] text-[#7C3AED] font-medium"
                          : "bg-white border-[#E5E5E5] text-[#6B7280] hover:border-[#7C3AED]"
                      }`}
                    >
                      {sortLabel}
                    </Link>
                  );
                },
              )}
            </div>

            {/* Mobile filter drawer button */}
            <div className="lg:hidden shrink-0">
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

          {/* Desktop advanced filters (inline form) */}
          <form
            action="/search"
            method="get"
            className="hidden lg:flex items-center gap-3 mt-3 flex-wrap"
          >
            {Object.entries(hiddenFields).map(([key, value]) => (
              <input key={key} name={key} type="hidden" value={value} />
            ))}
            {filters.category && (
              <input name="category" type="hidden" value={filters.category} />
            )}

            {/* Max price */}
            <label className="flex items-center gap-2 rounded-full border border-[#E5E5E5] px-4 py-2 text-sm cursor-pointer hover:border-[#7C3AED] transition-colors">
              <span className="text-[#6B7280]">
                {locale === "es" ? "Precio máx:" : "Max price:"}
              </span>
              <input
                name="maxPrice"
                type="number"
                defaultValue={String(filters.maxPrice)}
                min="50"
                className="w-16 bg-transparent outline-none font-medium text-[#231F20]"
              />
            </label>

            {/* Min seats */}
            <label className="flex items-center gap-2 rounded-full border border-[#E5E5E5] px-4 py-2 text-sm cursor-pointer hover:border-[#7C3AED] transition-colors">
              <span className="text-[#6B7280]">
                {locale === "es" ? "Asientos:" : "Seats:"}
              </span>
              <select
                name="seats"
                defaultValue={String(filters.seats)}
                className="bg-transparent outline-none font-medium text-[#231F20]"
              >
                <option value="0">
                  {locale === "es" ? "Cualquiera" : "Any"}
                </option>
                <option value="4">4+</option>
                <option value="5">5+</option>
                <option value="7">7+</option>
              </select>
            </label>

            {/* Instant Book toggle */}
            <label
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm cursor-pointer transition-colors ${filters.instantBook ? "bg-[#EDE9FE] border-[#7C3AED] text-[#7C3AED] font-medium" : "border-[#E5E5E5] text-[#231F20] hover:border-[#7C3AED]"}`}
            >
              <input
                name="instantBook"
                type="checkbox"
                defaultChecked={filters.instantBook}
                value="true"
                className="sr-only"
              />
              {dictionary.search.filters.instantBook}
            </label>

            {/* Rating */}
            <label className="flex items-center gap-2 rounded-full border border-[#E5E5E5] px-4 py-2 text-sm cursor-pointer hover:border-[#7C3AED] transition-colors">
              <span className="text-[#6B7280]">
                {locale === "es" ? "Rating:" : "Rating:"}
              </span>
              <select
                name="rating"
                defaultValue={String(filters.rating)}
                className="bg-transparent outline-none font-medium text-[#231F20]"
              >
                <option value="0">
                  {locale === "es" ? "Cualquiera" : "Any"}
                </option>
                <option value="4.7">4.7+</option>
                <option value="4.9">4.9+</option>
              </select>
            </label>

            <button
              type="submit"
              className="rounded-full bg-[#7C3AED] text-white px-5 py-2 text-sm font-semibold hover:bg-[#6D28D9] transition-colors cursor-pointer min-h-[44px]"
            >
              {dictionary.search.filters.apply}
            </button>

            {(filters.category ||
              filters.instantBook ||
              filters.rating > 0 ||
              filters.seats > 0) && (
              <Link
                href={`/search?${createQueryString({ pickup: filters.pickup, start: filters.start, end: filters.end, time: filters.time })}`}
                className="text-sm text-[#6B7280] hover:text-[#7C3AED] transition-colors cursor-pointer"
              >
                {dictionary.search.filters.clear}
              </Link>
            )}
          </form>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* MAIN LAYOUT — vehicle grid + map                                     */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex gap-0">
        {/* LEFT: Vehicle grid */}
        <div className="flex-1 min-w-0">
          <div className="page-grid py-6">
            <p className="text-sm text-[#6B7280] mb-4">
              <span className="font-semibold text-[#231F20]">
                {filteredVehicles.length}
              </span>{" "}
              {dictionary.search.resultsLabel}
            </p>

            {filteredVehicles.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <Car className="w-12 h-12 text-[#E5E5E5] mx-auto mb-4" />
                <h3 className="font-semibold text-[#231F20] mb-2">
                  {locale === "es" ? "No encontramos autos" : "No cars found"}
                </h3>
                <p className="text-[#6B7280] text-sm">
                  {dictionary.search.noResultsSuggestion}
                </p>
                <Link
                  href={`/search?${createQueryString({ pickup: filters.pickup, start: filters.start, end: filters.end, time: filters.time })}`}
                  className="mt-6 inline-flex min-h-[44px] cursor-pointer items-center rounded-lg bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
                >
                  {locale === "es" ? "Ver todos los autos" : "See all cars"}
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard
                    key={vehicle.slug}
                    locale={locale}
                    vehicle={vehicle}
                    href={`/vehicle/${vehicle.slug}?${createQueryString({
                      pickup: filters.pickup,
                      start: filters.start,
                      end: filters.end,
                      time: filters.time,
                      category: filters.category,
                    })}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Map panel (desktop only) */}
        <div className="hidden lg:block w-[40%] sticky top-16 h-[calc(100vh-4rem)] overflow-hidden shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=600&q=80"
            alt={locale === "es" ? "Mapa del área" : "Area map"}
            fill
            className="object-cover"
            sizes="40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg">
            <p className="text-sm font-semibold text-[#231F20]">
              {filteredVehicles.length}{" "}
              {locale === "es" ? "autos en esta área" : "cars in this area"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
